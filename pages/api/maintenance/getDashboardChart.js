import dbConnect from "../../../lib/dbConnect";
import Maintenance from "../../../Model/Maintenance";
import { maintenanceStatus } from "../../../utils/constants";
import { getMonthByStringDate, getYearByStringDate } from "../../../utils/helper";


export default async function handler(req, res) {
    if (req.method !== 'GET')
        return res.status(403).send('Method not allowed');
    const chartData = [
        {
            month: "Jan",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "Feb",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "Mar",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "Apr",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "May",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "Jun",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "Jul",
            resolved: 0,
            unresolved: 0
        },
        {
            month: "Aug",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "Sep",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "Oct",
            resolved: 0,
            unresolved: 0,
        },
        {
            month: "Nov",
            resolved: 0,
            unresolved: 0,
        },

        {
            month: "Dec",
            resolved: 0,
            unresolved: 0,
        }
    ];
    await dbConnect()
    const unresolvedDocs = await Maintenance.find().where('status').equals(maintenanceStatus.UNRESOLVED)
    const resolvedDocs = await Maintenance.find().where('status').equals(maintenanceStatus.RESOLVED)
    // const inProgressDocs = await Maintenance.find().where('status').equals(maintenanceStatus.IN_PROGRESS) Implemenation later

    unresolvedDocs.forEach((element) => {
        if (!(new Date().getFullYear() === getYearByStringDate(element.createdAt))) return
        let i = getMonthByStringDate(element.createdAt)
        chartData[i].unresolved++
    })
    resolvedDocs.forEach((element) => {
        if (!(new Date().getFullYear() === getYearByStringDate(element.createdAt))) return
        let i = getMonthByStringDate(element.createdAt)
        chartData[i].resolved++
    })
    return res.json(chartData)
}