import Notification from "../../../Model/Notification"
import dbConnect from "../../../lib/dbConnect"

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(403).send('Method not allowed')
    }
    try {
        const { token, subscription } = JSON.parse(req.body)
        await dbConnect();
        const newNotificationSubscription = Notification({
            token: token,
            subscription: subscription
        })

        const addedNotification = await newNotificationSubscription.save()
        return res.status(200).send('added')
    }
    catch (e) {
        console.log(e)
        return res.send(500).send("Internal Server Error")
    }
}

export const config = {
    api: {
        bodyParser: true
    },
}