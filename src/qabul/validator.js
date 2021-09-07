const Joi = require('@hapi/joi');
module.exports = {
    addNew:{
        body: {
            ism: Joi.string().required().min(3),
            familiya: Joi.string().required().min(3),
            yili: Joi.string().required().min(4),
            telefon: Joi.required(),
            manzili: Joi.string().required().min(3)
        }
    }, 
    updateOne:{
        params: {
            id: Joi.required()
        },
        body:{
            ism: Joi.string().required().min(3),
            familiya: Joi.string().required().min(3),
            yili: Joi.string().required().min(4),
            telefon: Joi.required(),
            manzili: Joi.string().required().min(3)
        }
    }
}