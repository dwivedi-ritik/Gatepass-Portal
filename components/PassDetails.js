import React from 'react'
import Pending from "./Pending"
import Rejected from "./Rejected"
import Approved from "./Approved"
import StudentDetails from './StudentDetails'

import { gatePassStatus } from '../utils/constants'

export default function PassDetails(props) {
    if (props.data.status === gatePassStatus.PENDING) {
        return (
            <>
            <Pending />
            <StudentDetails details={props.data}/>
            </>
        )
    }
    if (props.data.status === gatePassStatus.REJECTED) {
        return (
            <>
            <Rejected />
            <StudentDetails details={props.data}/>
            
            </>
        )
    }
    if (props.data.status === gatePassStatus.APPROVED) {
        return (
            <>
            <Approved />
            <StudentDetails details={props.data}/>
            
            </>
        )
    }

}