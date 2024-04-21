import * as Joi from "joi"

export const addCat = Joi.object({
    categoryName: Joi.string().required(),
    type: Joi.string().required(),
    image: Joi.string()
})