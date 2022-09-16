import mongoose from "mongoose";

const { Schema } = mongoose

const gatePass = Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String
    },
    mobileNo: {
        type: Number
    },
    parentsNo: {
        type: Number
    },
    reason: {
        type: String,
    },
    roomNo: {
        type: Number
    },
    year: {
        type: Number
    },
    status: {
        type: String
    },
    branch: {
        type: String
    },
    departure: {
        type: Date,
    },
    arrival: {
        type: Date
    },
    token: {
        type: String
    }
})

module.exports = mongoose.model('GetPass', gatePass);


