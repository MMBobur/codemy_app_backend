const Joi = require('@hapi/joi');
module.exports = {
    addNew:{
        body: {
            name: Joi.string().required().min(2)
        }
    },
    updateOne:{
        params:{
            id: Joi.required()
        },
        body:{
            name: Joi.string().required().min(2)
        }
    }
}