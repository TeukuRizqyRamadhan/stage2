import * as Joi from 'joi'

export const addTrans = Joi.object({
    amount: Joi.number().required(),
    date: Joi.date().required(),
    category: Joi.string().required(),
    note: Joi.string().required()
})