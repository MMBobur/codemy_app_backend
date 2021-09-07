const Joi = require('@hapi/joi');
module.exports = {
    addNew:{
        body: {
           pupil_id: Joi.number().required(),
           payment: Joi.number().required(),
           date: Joi.string().required()
        }
    },
    updateOne:{
        body:{
            pupil_id: Joi.number().required(),
            payment: Joi.number().required(),
            date: Joi.string().required()
        }
    }
}