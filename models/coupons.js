var mongoose = require('mongoose')
    , Schema = mongoose.Schema

const couponSchema = new mongoose.Schema(
    {
        Name: {
            type: String
        },
        Description: {
            type: String
        },
        Validity: {
            type: String
        },
        NoCoupons: {
            type:Number
        },
        Price:{
            type:Number
        },
        companyID: {
            type: Schema.Types.ObjectId,
            ref: 'Trust',
            required: true
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Coupon', couponSchema);