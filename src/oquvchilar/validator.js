const Joi = require('@hapi/joi');
module.exports = {
    // auth:{
    //     body:{
    //         username:Joi.string().required(),
    //         password:Joi.string().required()
    //     }
    // },
    addNew:{
        body: {
            ism: Joi.string().required().min(3),
            familiya: Joi.string().required().min(3),
            yili: Joi.string().required().min(4),
            telefon: Joi.required(),
            manzili: Joi.string().required().min(3),
            guruh_id: Joi.required()
        }
    },
    updateOne:{
        params:{
            id:Joi.string().required(),
        },
        body:{
            ism: Joi.string().required().min(3),
            familiya: Joi.string().required().min(3),
            yili: Joi.string().required().min(4),
            telefon: Joi.required(),
            manzili: Joi.string().required().min(3),
            guruh_id: Joi.required()
        }
    },
    deleteOne:{
        params:{
            id:Joi.string().required()
        }
    }
}