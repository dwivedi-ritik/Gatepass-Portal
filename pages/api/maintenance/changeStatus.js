import dbConnect from "../../../lib/dbConnect";
import Maintenance from "../../../Model/Maintenance"

export default async function handler(req, res) {
    if (req.method !== 'PATCH') {
        return res.status(403).send('Method not allowed')
    }
    const { token, status } = req.body

    if (!token || !status) {
        return res.status(400).send("Bad Request")
    }

    try {
        await dbConnect()

        const updatedMaintenance = await Maintenance.findOneAndUpdate({ token: token },
            { $set: { status: status } },
            { new: true })

        return res.json(updatedMaintenance)
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal server error')
    }
}

export const config = {
    api: {
        bodyParser: true
    }
}