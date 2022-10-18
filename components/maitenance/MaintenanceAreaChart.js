import React, { useEffect, useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";



export default function MaintenanceAreaChart({ chartData }) {
    return (
        <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={chartData}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#e0f2fe" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f0fdf4" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="1 1" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="unresolved"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
                <Area
                    type="monotone"
                    dataKey="resolved"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                />
            </AreaChart>
        </ResponsiveContainer>

    );
}
