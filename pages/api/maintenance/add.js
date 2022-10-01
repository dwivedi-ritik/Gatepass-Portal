import Maintenance from "../../../Model/Maintenance"
import dbConnect from "../../../lib/dbConnect"
import { maintenanceStatus } from "../../../utils/constants"
import { createToken } from "../../../utils/helper"


async function createValidToken(token) {
    let isPresent = await Maintenance.exists({ token: token })
    if (!isPresent)
        return token
    let newToken = createToken()
    return createValidToken(newToken)
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(403).send('Method not allowed')
    }
    try {
        const { title, roomNo, description, maintenanceType, requiredPerson, mobileNo } = JSON.parse(req.body)
        await dbConnect()

        let tempToken = createToken()
        let token = await createValidToken(tempToken)

        const newMaintenance = Maintenance({
            title, roomNo, description, maintenanceType, requiredPerson, mobileNo, token,
            status: maintenanceStatus.UNRESOLVED
        })

        const newMaintenanceDoc = await newMaintenance.save()

        return res.json(newMaintenanceDoc)
    }
    catch (e) {
        console.log(e)
        res.status(500).send('Internal Server Error')
    }
}

export const config = {
    api: {
        bodyParser: true
    },
}