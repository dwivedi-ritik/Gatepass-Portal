import styles from "./MaintenanceStatus.module.css"
import React from "react"

import { maintenanceStatus } from "../../utils/constants"
const ProgressBarUnresolved = () => {
    return (
        <div className="h-2 rounded-full bg-indigo-600 transition-width" id={styles.unresolved} >
            <div className="absolute left-0 h-4 w-4 translate-y-[-25%] rounded-full bg-indigo-600">
                <p className="absolute -top-5 text-xs font-semibold text-indigo-800">Unresolved</p>
            </div>
            <div className="absolute left-[50%] h-4 w-4 translate-y-[-25%] rounded-full bg-gray-200">
                <p className="absolute -top-5 -translate-x-[25%] text-xs font-semibold">InProgress</p>
            </div>
            <div className="absolute right-0 h-4 w-4 translate-y-[-25%] rounded-full bg-gray-200">
                <p className="absolute -top-5 right-0 text-xs font-semibold">Resolved</p>
            </div>
        </div>
    )
}

const ProgressBarInprogress = () => {
    return (
        <div className="h-2 rounded-full bg-indigo-600 transition-width" id={styles.inprogress} >
            <div className="absolute left-0 h-4 w-4 translate-y-[-25%] rounded-full bg-indigo-600">
                <p className="absolute -top-5 text-xs font-semibold text-indigo-800">Unresolved</p>
            </div>
            <div className="absolute left-[50%] h-4 w-4 translate-y-[-25%] rounded-full bg-indigo-600" id={styles.animateCircle}>
                <p className="absolute -top-5 -translate-x-[25%] text-xs font-semibold " id={styles.animateTitle}>InProgress</p>
            </div>
            <div className="absolute right-0 h-4 w-4 translate-y-[-25%] rounded-full bg-gray-200">
                <p className="absolute -top-5 right-0 text-xs font-semibold">Resolved</p>
            </div>
        </div>
    )
}

const ProgressBarResolved = () => {
    return (
        <div className="h-2 rounded-full bg-indigo-600 transition-width" id={styles.resolved} >
            <div className="absolute left-0 h-4 w-4 translate-y-[-25%] rounded-full bg-indigo-600">
                <p className="absolute -top-5 text-xs font-semibold text-indigo-800">Unresolved</p>
            </div>
            <div className="absolute left-[50%] h-4 w-4 translate-y-[-25%] rounded-full bg-indigo-600">
                <p className="absolute -top-5 -translate-x-[25%] text-xs font-semibold text-indigo-700">InProgress</p>
            </div>
            <div className="absolute right-0 h-4 w-4 translate-y-[-25%] rounded-full bg-indigo-600" id={styles.animateCircle}>
                <p className="absolute -top-5 right-0 text-xs font-semibold" id={styles.animateTitle}>Resolved</p>
            </div>
        </div>
    )
}


export default function MaintenanceStatus(props) {
    console.log(maintenanceStatus.IN_PROGRESS === props.data.status)
    return (
        <>
            <div className="mx-4 mt-16 flex flex-col items-start sm:items-center sm:justify-between">
                <p className="font-bold text-xl">Maintenance request #{props.data.token}</p>
                <p className="text-xs text-gray-500">requested at <span className="text-gray-600 font-semibold">March 22, 2022</span></p>
            </div>

            <div className="mx-4 sm:mx-auto mt-10 bg-white px-4 pt-4 border-gray-300 border sm:w-[60%]">
                <div className="flex flex-col">
                    <div className="">
                        <p className="font-semibold uppercase">{props.data.title}</p>
                        <p className="text-xs font-semibold my-2">Room no: <span>{props.data.roomNo}</span></p>
                        <p className="text-xs text-gray-500 mb-2 w-[80%]">{props.data.description}</p>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-xs">Information</p>
                        <p className="text-xs text-gray-500 my-2">+91{props.data.mobileNo}, {props.data.maintenanceType}</p>
                        <p className="text-xs text-gray-500 my-2">{props.data.requiredPerson}</p>

                    </div>
                </div>
                <p className="text-xs font-semibold mt-4">Maintenance status</p>
                <div className="my-8">
                    <div className="relative h-2 w-full rounded-full bg-gray-200">
                        {props.data.status === maintenanceStatus.RESOLVED && <ProgressBarResolved />}
                        {props.data.status === maintenanceStatus.UNRESOLVED && <ProgressBarUnresolved />}
                        {props.data.status === maintenanceStatus.IN_PROGRESS && <ProgressBarInprogress />}
                    </div>
                </div>
            </div>

        </>
    )
}