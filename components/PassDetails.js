import React from 'react'
import Pending from "./Pending"
import Rejected from "./Rejected"
import Approved from "./Approved"

import { gatePassStatus } from '../utils/constants'

export default function PassDetails(props) {
    if (props.data.status === gatePassStatus.PENDING) {
        return (
            <Pending />
        )
    }
    if (props.data.status === gatePassStatus.REJECTED) {
        return (
            <Rejected />
        )
    }
    if (props.data.status === gatePassStatus.APPROVED) {
        return (
            <Approved />
        )
    }

}