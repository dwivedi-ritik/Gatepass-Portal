export function mailTemplateForNotification(mailBody, receiver) {
    const mailHeader = {
        to: receiver,
        subject: "Gate Pass Notification",
        text: mailBody
    }
    return mailHeader
}

export function mailTemplateForRejection(mailBody, receiver) {
    const mailHeader = {
        to: receiver,
        subject: "Gate Pass Rejected",
        text: mailBody
    }
    return mailHeader
}

export function mailTemplateForApproval(mailBody, receiver) {
    const mailHeader = {
        to: receiver,
        subject: "Gate Pass Approved",
        text: mailBody,
    }
    return mailHeader
}


export function mailTextForApproval(tokenId, statusUrl) {
    return `You requested for the Gate Pass have been approved.\nYour token id was ${tokenId}.\nGet your token id from here ${statusUrl}\nHappy Journey`
}
export function mailTextForRejection(tokenId) {
    return `Your Gate Pass was rejected by admin.\nYour token id was ${tokenId}.`

} export function mailTextForNotification(tokenId) {
    return `You requested for the GatePass.\nYour token id is ${tokenId} Using this token you can anytime track your gatepass status.\n
We will notify you on this mail as soon as Admin approve your pass.`
}