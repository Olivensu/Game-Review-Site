import './Dashboard.css'
import React, { useEffect, useState,PureComponent } from 'react';
import { LineChart,Tooltip, Line,Bar,BarChart,PieChart,Pie, XAxis, YAxis,Area,AreaChart, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
      fetch('data.json')
      .then(res=> res.json())
      .then(data=> setData(data))
    },[])
    return (
      
        <div className='rechart row'>
          <h2 className='text-center fw-bold mb-4'>Here is some chart about my statistics of this business..</h2>
            <div className='col-md-6 col'>
              <LineChart
              width={300}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
              </LineChart>
              <p className='text-center m-3 text-info'>Investment, sells and revenue chart by LineChart</p>
          </div>
          <div className='col-md-6 col'>
          <AreaChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
        <p className='text-center m-3  text-info'>Investment, sells and revenue chart by AreaChart</p>
          </div>
          <div className='col-md-6 col'>
          <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="sell" fill="#82ca9d" />
          <Bar dataKey="revenue" fill="red" />
        </BarChart>
        <p className='text-center m-3  text-info'>Investment, sells and revenue chart by BarChart</p>
          </div>
          <div className='col-md-6 col'>
         
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="red" label />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={130} outerRadius={150} fill="#82ca9d" label />
        </PieChart>
      
      <p className='text-center m-3  text-info'>Investment, sells and revenue chart by PieChart</p>
          </div>
        </div>
     
    );
};

export default Dashboard;