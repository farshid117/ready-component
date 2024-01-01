const joi = require('joi');// Yup is a structured version of joi

const registerValidator = (data) => {
    const registerSchema = joi.object({
        name: joi.string().required(),
        password: joi.string().required(),
        phone: joi.string().required().min(11).max(11),
        role: joi.string().default("user")
    })

    return registerSchema.validate(data)
}

const loginValidator =(data) =>{
    const loginSchema = joi.object({
      password: joi.string().required(),
      phone: joi.string().required().min(11).max(11)
    })

    return loginSchema.validate(data)
}

module.exports = {registerValidator, loginValidator};