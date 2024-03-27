import * as Joi from "joi"

export const addPartai = Joi.object({
    namePartai: Joi.string().required(),
    logo: Joi.string(),
    leaderID: Joi.string().required()
})