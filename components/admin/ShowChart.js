import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";



const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function ShowChart(props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className="-ml-12">
                <PieChart width={400} height={400}>
                    <Pie
                        data={props.arr}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={90}
                        label
                    >
                        {props.arr.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Legend height={36} />
                </PieChart>

            </div>
        </ResponsiveContainer>
    );
}
