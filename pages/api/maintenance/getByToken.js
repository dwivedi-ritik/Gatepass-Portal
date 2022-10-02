import dbConnect from "../../../lib/dbConnect"
import Maintenance from "../../../Model/Maintenance"

export default async function handler(req, res) {
    try {
        await dbConnect()
        if (req.method == 'GET') {
            const maintenanceDoc = await Maintenance.findOne({ token: req.query.tokenId })
            if (!maintenanceDoc) {
                return res.status(401).send({ msg: "No Collection with this id" })
            }
            res.json(maintenanceDoc)
        } else {
            return
        }
    }
    catch (e) {
        res.status(500).json({ error: "Error occured in API" })
    }
}

export const config = {
    api: {
        bodyParser: true
    },
}
