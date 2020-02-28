import React from 'react';
import { Chart } from 'react-google-charts';

const PricesOverTimeChart = () => {
  return (
    <Chart
      chartType="Line"
      
      rows={[
        [new Date('2015-02-14T23:38:17.421+00:00'), 8], 
        [new Date('2017-02-14T23:38:17.421+00:00'), 10], 
        [new Date('2020-02-14T23:38:17.421+00:00'), 12]]}
      
      columns={[
        {
          type: 'date',
          label: 'Time'
        },
        {
          type: 'number',
          label: 'Price in $USD'
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
          curveType: 'function'
        }
      }
      width={'100%'}
      height={'100%'}
    />
  );
};
export default PricesOverTimeChart;
