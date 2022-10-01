import dbConnect from "../../../lib/dbConnect";
import Maintenance from "../../../Model/Maintenance";
import { maintenanceStatus } from "../../../utils/constants";

export default async function handler(req, res) {
    if (req.method !== 'GET')
        return res.status(403).send('Method not allowed');

    await dbConnect()
    const unresolvedDocs = await Maintenance.where({ status: maintenanceStatus.UNRESOLVED }).countDocuments();
    const resolvedDocs = await Maintenance.where({ status: maintenanceStatus.RESOLVED }).countDocuments();
    const inProgressDocs = await Maintenance.where({ status: maintenanceStatus.IN_PROGRESS }).countDocuments();

    return res.json({
        unresolvedDocs,
        resolvedDocs,
        inProgressDocs
    })

}