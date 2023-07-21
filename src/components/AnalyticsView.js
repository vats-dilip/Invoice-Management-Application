import React, { useRef, useState } from "react";
import Highcharts from "highcharts";
import { TextField, Button, Grid } from "@mui/material";

function AnalyticsView(props) {
  const data = props.columns;
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const [selectedDistributionChannel, setSelectedDistributionChannel] =
    useState("");
  const [selectedCustomerNumber, setSelectedCustomerNumber] = useState("");

  const handleViewClick = () => {
    // Filter data based on selected distribution channel and customer number
    let filteredData = data;

    if (selectedDistributionChannel) {
      filteredData = filteredData.filter(
        (item) => item.distributionChannel === selectedDistributionChannel
      );
    }

    if (selectedCustomerNumber) {
      filteredData = filteredData.filter(
        (item) => item.customerNumber === selectedCustomerNumber
      );
    }

    // Generate data for the bar chart
    const barChartData = filteredData.map((item) => ({
      name: item.customerNumber,
      y: item.value,
    }));

    // Generate data for the pie chart
    const pieChartData = filteredData.map((item) => ({
      name: item.distributionChannel,
      y: item.value,
    }));

    // Create the bar chart
    Highcharts.chart(barChartRef.current, {
      chart: {
        type: "bar",
      },
      title: {
        text: "Distribution Channel vs Customer Number",
      },
      xAxis: {
        categories: filteredData.map((item) => item.customerNumber),
      },
      yAxis: {
        title: {
          text: "Value",
        },
      },
      series: [
        {
          name: "Distribution Channel",
          data: barChartData,
        },
      ],
    });

    // Create the pie chart
    Highcharts.chart(pieChartRef.current, {
      chart: {
        type: "pie",
      },
      title: {
        text: "Distribution Channels for Selected Customer",
      },
      series: [
        {
          name: "Value",
          data: pieChartData,
        },
      ],
    });
  };

  return (
    <div className="analytics-container">
      <style>
        {`
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
            background-color: #ffffff;
            color: #666666;
            border-radius:5px;
            border-color:#ffffff; 
          }
          
          .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
            color: #fc7500;
            border-color:#fc7500;
          }
          .css-9ddj71-MuiInputBase-root-MuioutlinedInput-root.Mui-focused {
            border-color: #fc7500;
          }
          .css-1fu7jd5-MuiButtonBase-root-MuiButton-root{
            background-color: #666666;
            border:solid white;
          }
        `}
      </style>
      <Grid container spacing={5}>
        <Grid container spacing={3} item xs={4}>
          <Grid item xs={12}>
            <TextField
              label="Distribution Channel"
              variant="outlined"
              value={selectedDistributionChannel}
              onChange={(e) => setSelectedDistributionChannel(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Customer Number"
              variant="outlined"
              value={selectedCustomerNumber}
              onChange={(e) => setSelectedCustomerNumber(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleViewClick} fullWidth>
              View
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} item xs={8}>
          <Grid item xs={6}>
            <div ref={barChartRef} />
          </Grid>
          <Grid item xs={6}>
            <div ref={pieChartRef} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AnalyticsView;
