import nodemailer from 'nodemailer'

import { mailCredentials } from '../utils/mailCreds'

/*
* Send mail 
* @param {Object} mail body with receiver
* @returns None if mail transfer succesfully else log error
*/
export function sendMail(mailBody) {
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

        return new Promise((resolve, reject) => {
            // send mail
            transport.sendMail(mailBody, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

    }
    catch (e) {
        console.error(e)
    }

}