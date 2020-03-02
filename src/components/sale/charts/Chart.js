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
        [new Date(data[2][0]), data[2][1]],
        [new Date(data[3][0]), data[3][1]],
        [new Date(data[4][0]), data[4][1]],
        [new Date(data[5][0]), data[5][1]],
        [new Date(data[6][0]), data[6][1]],
        [new Date(data[7][0]), data[7][1]],
        [new Date(data[8][0]), data[8][1]],
        [new Date(data[9][0]), data[9][1]],
        [new Date(data[10][0]), data[10][1]],
        [new Date(data[11][0]), data[11][1]],
        [new Date(data[12][0]), data[12][1]],
        [new Date(data[13][0]), data[13][1]],
        [new Date(data[14][0]), data[14][1]],
        [new Date(data[15][0]), data[15][1]],
        [new Date(data[16][0]), data[16][1]],
        [new Date(data[17][0]), data[17][1]],
        [new Date(data[18][0]), data[18][1]],
        [new Date(data[19][0]), data[19][1]],
        [new Date(data[20][0]), data[20][1]],
        [new Date(data[21][0]), data[21][1]],
        [new Date(data[22][0]), data[22][1]],
        [new Date(data[23][0]), data[23][1]],
        [new Date(data[24][0]), data[24][1]],
        [new Date(data[25][0]), data[25][1]], 
        [new Date(data[26][0]), data[26][1]],
        [new Date(data[27][0]), data[27][1]],
        [new Date(data[28][0]), data[28][1]],
        [new Date(data[29][0]), data[29][1]],
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
