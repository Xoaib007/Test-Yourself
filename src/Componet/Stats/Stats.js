import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Stats.css'

const Stats = () => {
    const stats = useLoaderData();
    console.log(stats)
    return (
        <div className='stats'>
             <div>
                <h1>Quiz Analytics</h1>
            </div>
            <div className='chart'>
                <LineChart
                    width={600}
                    height={300}
                    data={stats.data}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                    <Line type="monotone" dataKey="total" stroke="#8884d8" domain={[0, 24]} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Stats;