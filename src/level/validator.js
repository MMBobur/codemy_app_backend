const Joi = require('@hapi/joi');
module.exports = {
    addNew:{
        body: {
            name: Joi.string().required().min(3),
            deadline: Joi.number().required()
        }
    },
    updateOne:{
        body:{
            name: Joi.string().required().min(3),
            deadline: Joi.number().required()
        }
    }
}