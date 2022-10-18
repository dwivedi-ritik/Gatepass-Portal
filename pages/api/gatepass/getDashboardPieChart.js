import dbConnect from "../../../lib/dbConnect"
import GatePass from "../../../Model/GatePass"
import { gatePassStatus } from "../../../utils/constants"

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).send("Method not allowed")
    }
    try {
        await dbConnect()
        let approveCount = await GatePass.countDocuments({ status: gatePassStatus.APPROVED })
        let pendingCount = await GatePass.countDocuments({ status: gatePassStatus.PENDING })
        let rejectCount = await GatePass.countDocuments({ status: gatePassStatus.REJECTED })

        return res.json([{ name: 'approved', value: approveCount },
        { name: 'pendings', value: pendingCount },
        { name: 'reject', value: rejectCount }])

    } catch (err) {
        console.log(err)
    }



}