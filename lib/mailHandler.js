import nodemailer from 'nodemailer'

import { mailCredentials } from '../utils/mailCreds'

/*
* Send mail 
* @param {Object} mail body with receiver
* @returns None if mail transfer succesfully else log error
*/
export async function sendMail(mailBody) {
    try {
        let transport = nodemailer.createTransport({
            host: mailCredentials.HOST,
            port: mailCredentials.PORT,
            secure: false,
            auth: {
                user: mailCredentials.USER,
                pass: mailCredentials.PASS,
            },
            tls: {
                ciphers: 'SSLv3'
            }
        })

        let mailRes = await transport.sendMail(mailBody)
    }
    catch (e) {
        console.error(e)
    }

}