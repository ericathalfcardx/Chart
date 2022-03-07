import React from 'react';
import {Text, View } from 'react-native';
import {LineChart} from 'react-native-wagmi-charts';


const data = [
  {
    timestamp: 16256445000,
    value: 33575.25
  },
  {
    timestamp: 1625946300000,
    value: 33545.25
  },
  {
    timestamp: 1625947200000,
    value: 33510.25
  },
  {
    timestamp: 1625948100000,
    value: 33215.25
    // You can change the values to 'Open, high, low, & close values'
  },
  {
    timestamp: 1625947200000,
    //value: 33510.25
  },
  {
    timestamp: 1625949100000,
    //value: 33215.25
  },


]

const graph = () => {
  return(
      <LineChart.Provider data={data}>
        <LineChart>
          <LineChart.Path />
          <LineChart.CursorLine />
        </LineChart> 
        <LineChart.PriceText />
        <LineChart.DatetimeText />
      </LineChart.Provider>
  );
}

export default graph;

//Thinsg to look out for:

//To begin with, check out the readMe file included in the project folder for instructions...

//"The DatetimeText component will show the date and time, as 
//you dynamically move the cursor line along the graph"  

//"The PriceText component will also change dynamically as your move along... " 

//"You can switch the position of the PriceText & the DatetimeText components to fit the UI "

// For some reason, the graph isn't rendering on my end, so check the ReadMe for instructions...

//The ReadMe includes a link to a page which contain other external links for plugins

//Other than that, everything I've 
