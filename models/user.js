const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userID: {
            type: Schema.Types.ObjectId,
            ref: 'login',
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);

   