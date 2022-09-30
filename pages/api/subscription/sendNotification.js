import webpush from "web-push"

import { VAPID_PRIVATE_KEY, VAPID_PUBLIC_KEY } from "../../../utils/constants"
import dbConnect from '../../../lib/dbConnect'
import Notification from '../../../Model/Notification'

export default async function handler(req, res) {
    if (req.method !== 'GET')
        return res.status(403).send('Method Not Allowed')

    const { token, status } = req.query

    await dbConnect()

    const notificationDoc = await Notification.findOne({ token })

    if (notificationDoc === null)
        return res.status(400).send('invalid token id')

    webpush.setVapidDetails('https://gatepass.vercel.app/credit', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)

    const payload = JSON.stringify({
        title: `GatePass Token ${token} has ${status}`,
        data: 'You request for gatepass has been approved checkout status of your gatepass',
        icon: 'https://pics.freeicons.io/uploads/icons/png/18552593841537356147-64.png'
    })

    webpush.sendNotification(notificationDoc.subscription, payload)

    res.status(200).send("Notification has been sent")

}