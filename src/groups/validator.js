const Joi = require('@hapi/joi');
module.exports = {
    addNew:{
        body: {
            name: Joi.string().required().min(3),
            time: Joi.string().required().min(6),
            days: Joi.string().required().min(3),
            date: Joi.string().required()
        }
    },
    updateOne:{
        body:{
            name: Joi.string().required().min(3),
            time: Joi.string().required().min(6),
            days: Joi.string().required().min(3),
            date: Joi.string().required()
        }
    }
}