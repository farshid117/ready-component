
const Kavenegar = require("kavenegar");
const NodeCache = require("node-cache");
const api = Kavenegar.KavenegarApi({
  apikey: 
  "746669796B634A5578756F425A4F4851596842644C41306D775368497972433078764150544A51414F36773D",
});
const myCache  = new NodeCache();
const myCache2 = new NodeCache();

const registerUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ phone: req.body.phone });
    if (user) return res.status(400).send("این شماره موبایل قبلا ثبت شده ");

    let newUser = new UserModel({
      name: req.body.name,
      phone: req.body.phone,
    });

    let number = Math.floor(Math.random() * 90000 + 10000);
    myCache.set(config.get("MYCACHEKEY1"), number);
    myCache2.set(config.get("MYCACHEKEY2"), newUser);

    api.Send(
      {
        message: `کد فعالسازی شما ${number}میباشد`,
        sender: "10008663", //شرکت بیمه آنلاین
        receptor: "09170431514", //?newUser.phone
      },
      function (response, status) {
        console.log("kavenegar Response:",response);
        console.log("kavenegar Status message:",status);
        res.status(status).send({
          message: "کد فعالسازی برایتان ارسال شد",
          kavenegarResponse: response,
          kavenegarStatusCode : status,
          name: newUser.name,
          userId: newUser._id,
        });
      }
    );
    
  } catch (err) {
    console.log(err.message);
    next(err)
  }
};

module.exports = { registerUser};
