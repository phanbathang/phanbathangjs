import Joi from "joi";

export const borrowValid = Joi.object({
    user_id: Joi.object().required(),// Kiểm tra book_id là một chuỗi ObjectId hợp lệ
    product_id: Joi.object().required(),// Kiểm tra book_id là một chuỗi ObjectId hợp lệ
    title: Joi.string().required().min(3),
    borrow_date: Joi.date().required(),
    return_date: Joi.date().required(),
    status: Joi.string(),
});