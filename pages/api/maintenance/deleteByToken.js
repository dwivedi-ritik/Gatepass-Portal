import dbConnect from "../../../lib/dbConnect";
import Maintenance from "../../../Model/Maintenance";

export default async function (req, res) {
    if (req.method !== 'POST') {
        return res.status(403).send('Method not allowed')
    }
    try {
        const { token } = req.body
        if (!token) {
            return res.status(400).send('Bad Request')
        }
        const queryRes = await Maintenance.deleteOne({ token: token })
        return res.json(queryRes)
    } catch (e) {
        console.log(e)
        return res.status(500).send('Internal server error')
    }

}

export const config = {
    api: {
        bodyParser: true
    }
}