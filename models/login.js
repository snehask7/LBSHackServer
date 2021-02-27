const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const loginSchema = new mongoose.Schema(
    {
        Email: {
            type: String,
            required: true,
            max: 100,
            unique: true
        },
        Password: {
            type: String,
            max: 100,
            required: true
        },
        DisplayName: { 
            type: String, max: 100
        },
        loggedIn:{
            type: Number
        }
    },
    { timestamps: true }
);

loginSchema.index({ Email: 1 }, { unique: true })

module.exports = mongoose.model('login', loginSchema);

   
