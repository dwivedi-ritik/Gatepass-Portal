import { sendMail } from "../../../lib/mailHandler"

export default async function handler(req, res) { //TODOs Implement validation
    if (req.method !== 'POST') {
        return res.status(403).send("Method not allowed")
    }
    const { to, subject, text } = JSON.parse(req.body)
    try {
        const mailRes = await sendMail({
            to: to,
            subject: subject,
            text: text
        })
        console.log(mailRes)
        return res.json(mailRes)
    } catch (e) {
        res.status(500)
        console.log(e)
    }


}