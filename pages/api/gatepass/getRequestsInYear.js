import GatePass from "../../../Model/GatePass"
import { getMonthByStringDate } from "../../../utils/helper"
import { gatePassStatus } from "../../../utils/constants"


export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(403).send("Method not Allowed")
    }
    try {
        let rejectedMonthArr = new Array(12).fill(0)
        let approvedMonthArr = new Array(12).fill(0)
        let pendingMonthArr = new Array(12).fill(0)

        const allDocs = await GatePass.find()
        allDocs.forEach(doc => {
            let i = getMonthByStringDate(doc.createdAt)
            if (doc.status === gatePassStatus.APPROVED) {
                approvedMonthArr[i]++
            }
            else if (doc.status === gatePassStatus.REJECTED) {
                rejectedMonthArr[i]++
            } else {
                pendingMonthArr[i]++
            }
        })

        const resObj = {
            rejecteds: rejectedMonthArr,
            appoveds: approvedMonthArr,
            pendings: pendingMonthArr
        }

        return res.json(resObj)
    } catch (e) {
        console.log(e)
        res.send(500)
    }





}