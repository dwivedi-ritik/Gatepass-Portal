import { customAlphabet } from 'nanoid'

export function dateParser(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date
}

export function dateParserFromString(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date.toLocaleDateString()
}

export function createToken() {
    const nanoid = customAlphabet('1234567890', 6)
    return nanoid()
}

export function getMonthByStringDate(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date.getMonth()
}
export function getYearByStringDate(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date.getFullYear()
}

export function parseJson(obj) {
    return JSON.parse(JSON.stringify(obj))
}

export function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export function placeholderReplacement(placeholders, body) {
    for (let placeholder in placeholders) {
        let re = new RegExp(`{{${placeholder}}}`, 'g')
        body = body.replace(re, placeholders[placeholder])
    }
    return body
}
