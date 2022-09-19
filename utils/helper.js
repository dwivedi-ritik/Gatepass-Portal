import { nanoid } from "nanoid"

export function dateParser(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date
}

export function createToken() {
    return nanoid(6)
}

export function getMonthByStringDate(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date.getMonth()
}

