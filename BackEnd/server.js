const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const config = require("config");
const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");
const _ = require("lodash");

const SuperAdminRoutes = require("./app/routes/SuperAdminRoutes");
const AdminResturantRoutes = require("./app/routes/AdminResturantRoutes");
const UserRoutes = require("./app/routes/UserRoutes");
const ExpressErrorMiddleware = require("./app/http/middelwares/ExpressErrorMiddleware");

const app = express();
                                                                                                                                                
//todo: Save ErrorLog To File and MongoDB by Winston : مشخص کردن شیوه لاگ گیری وینستون
winston.add(new winston.transports.File({ filename: "errorLog.log" })); //Specify Logging Method
winston.add(new winston.transports.MongoDB({
    db: "mongodb://localhost:27017/courseApiNodejs",
    level: "error",
    options: { useUnifiedTopology: true },
    //برای اینکه وارنینگ در ترمینال ندهد تنظیمات اتصال به دیتابیس توسط مانگوس را اینجا میاریم
  })
);
//todo: Handle Sync&Async Error Out of Api Routes
process.on("uncaughtException", (err) => {
  console.log(err);
  winston.error(err.message, err);
});
process.on("unhandledRejection", (err) => {
  console.log(err);
  winston.error(err.message, err);
});

//todo: built-in Middelware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//todo: third-Party Middleware
if (app.get("env") === "development") app.use(morgan("tiny"));
app.use(cors());

//todo: internal Middleware
// app.use(logger)

//todo: Current Configuration
console.log(app.get("env"));
//console.log(config.get("databaseAddress"))

//todo: Create Sync&Async Error for Example
/*( new Promise((resolve,reject)=>{
  reject(new Error("Make Async Error Outof Api Routes with new Promise"))
}))()

throw new Error("Throw Sync Error") */

//todo: Connect TO MongoDB
mongoose
  .connect("mongodb://localhost:27017/courseApiNodejs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connected");
    // winston.info("DB Connected")
  })
  .catch((err) => console.error("DB Not Connected", err));

//todo: Api Routes
app.use("/api/resturant", SuperAdminRoutes);
app.use("/api/resturant", AdminResturantRoutes);
app.use("/api/user", UserRoutes);


//todo: Built-in Express Error Middleware for handle Async Api-Routes Error
app.use(ExpressErrorMiddleware);

//todo: Server Listener on Port
const port = process.env.myPort || 3000;
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`server is listening on port ${port}`);
});



