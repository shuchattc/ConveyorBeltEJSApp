const BaseJoi = require('joi');
const UserSchema = require('models/user');
const OrderSchema = require('models/orders');
const FoodItemSchema = require('models/foodItems');
const CartSchema = require('models/cart');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension)

module.exports.CartSchema = Joi.object({
    cart: Joi.object({
        user: Joi.string().required().escapeHTML(),
        order: Joi.isRef(OrderSchema).required().escapeHTML(),
        createdAt: Joi.date.timestamp().required().escapeHTML(),
    }).required()
});

module.exports.FoodItemSchema = Joi.object({
    foodItems: Joi.object({
        title: Joi.string().required().escapeHTML(),
        image: Joi.string().required().escapeHTML(),
        price: Joi.number().required(),
        description: Joi.string().required().escapeHTML(),
        category: Joi.string().required().escapeHTML(),
    }).required()
});

module.exports.OrderSchema = Joi.object({
        orderItem: Joi.object({
            user: Joi.isRef(UserSchema).required().escapeHTML(),
            items: Joi.isRef(FoodItemSchema).required().escapeHTML(),
            totalPrice: Joi.number().required(),
            status: Joi.string().required().escapeHTML(),
            createdAt: Joi.date.timestamp().required().escapeHTML(),
        }).required()
});

module.exports.UserSchema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        admin: Joi.boolean().truthy('yes').falsy('no').sensitive()
});