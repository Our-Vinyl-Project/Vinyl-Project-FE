import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import getChartData from '../../../services/getChart.js';

const PricesOverTimeChart = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    getChartData(374527)
      .then (res => {
        setData(res);
      });
  }, []);
  if(!data) return null;
  return (
    <Chart
      chartType="Line"
      
      rows={[
        [new Date(data[0][0]), data[0][1]], 
        [new Date(data[1][0]), data[1][1]], 
      ]}
      
      columns={[
        {
          type: 'date',
          label: 'Time'
        },
        {
          type: 'number',
          label: 'Price in $USD',
          legend: { position: 'bottom' },
        }
      ]}
      options={
        {
          title: 'Price Change Over Time',
          hAxis: {
            title: 'Age',
            viewWindow: { min: 0, max: 15 }
          },
          vAxis: { title: 'Weight', viewWindow: { min: 0, max: 15 } },
          legend: 'none',
          curveType: 'function',
          colors: ['gray']
        }
      }
      height={'200px'}
      width={'600px'}
    />
  );
};
export default PricesOverTimeChart;
