import mongoose from "mongoose"

const { Schema } = mongoose

const mailConfiguration = Schema({
    code: {
        type: String,
    },
    body: {
        type: String
    }
})


module.exports = mongoose.models.Mailconf || mongoose.model('MailConf', mailConfiguration)