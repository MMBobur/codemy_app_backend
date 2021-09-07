const Joi = require("@hapi/joi");
module.exports = {

  addNew: {
    body: {
      ism: Joi.string().required().min(3).max(15),
      familiya: Joi.string().required().min(3).max(15),
      telefon: Joi.required(),
      login: Joi.string().required(),
      password: Joi.string().required(),
    },
  },

  updateOne: {
    params: {
      id: Joi.string().required(),
    },
    body: {
      ism: Joi.string().required().min(3).max(15),
      familiya: Joi.string().required().min(3).max(15),
      telefon: Joi.required(),
      login: Joi.string().required(),
      password: Joi.string().required(),
    },
  },

  deleteOne: {
    params: {
      id: Joi.string().required(),
    },
  },
};