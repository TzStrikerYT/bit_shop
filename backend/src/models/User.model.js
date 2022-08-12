const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        isActive: {type: Boolean, default: true},
        role: {type: String, default: "client"}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('User', userSchema)