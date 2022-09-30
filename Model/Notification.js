import mongoose from "mongoose";

const notification = mongoose.Schema({
    token: {
        type: String,
    },
    subscription: {
        type: mongoose.SchemaTypes.Mixed
    }
})

module.exports = mongoose.models.Notification || mongoose.model('Notification', notification)