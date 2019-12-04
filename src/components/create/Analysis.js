import React from "react";
import Navi from "../login/Nav";
// import * as d3module from 'd3';
// import d3tip from 'd3-tip';
import "./Analysis.scss";
// import * as CanvasJSReact from '../src/canvasjs.react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell, ResponsiveContainer} from "recharts";
// const d3 = {
//   ...d3module,
//   tip: d3tip
// } 

function Analysis(props) {
  // var CanvasJS = CanvasJSReact.CanvasJS;
  // var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
  // console.log("This is getTotalQuestionsByGuestId", window.history.state.state.getTotalQuestionsByGuestId)
  let totalQuestionsByGuestId = window.history.state.state.getTotalQuestionsByGuestId;
  let totalQuestionsCount = window.history.state.state.getTotalQuestionsCount;
  let barChartData = Object.keys(totalQuestionsByGuestId).map((questions) => {
    return { Count: totalQuestionsByGuestId[questions], label: "User ID: "+ questions };
  })
  console.log(barChartData);
  console.log(totalQuestionsCount);

  let getIndividualTagsCount = window.history.state.state.getIndividualTagsCount;
  console.log("This is the astor chart data", getIndividualTagsCount);
  let pieChartData = Object.keys(getIndividualTagsCount).map((tags) => {
    return {name: tags, Count: getIndividualTagsCount[tags]};
  })
  console.log(pieChartData);
  // const data = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 },
  // ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  return (
    
    <div>
      <Navi/>
      <div className="chartcontainer">
          <BarChart className="barchart" width={600} height={400} data={barChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="label"/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="Count" fill="#8884d8" />
          </BarChart>

            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx={200}
                cy={200}
                labelLine={true}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="Count"
              >
                {
                  pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
            <Tooltip />
          </PieChart>

      </div>
    </div>
  )

}

export default Analysis;