export function dateParser(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date
}