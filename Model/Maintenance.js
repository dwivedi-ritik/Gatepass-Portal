import mongoose from "mongoose";

export const maintenance = mongoose.Schema({
    title: {
        type: String,
    },
    token: {
        type: String
    },
    roomNo: {
        type: Number,
    },
    description: {
        type: String,
    },
    maintenanceType: {
        type: String,
    },
    requiredPerson: {
        type: String
    },
    mobileNo: {
        type: Number,
    },
    status: {
        type: String //Resolved or Unresolved or In Progress
    }
}, {
    timestamps: true
})

module.exports = mongoose.models.Maintenance || mongoose.model('Maintenance', maintenance)
