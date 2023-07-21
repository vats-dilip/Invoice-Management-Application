import "../App.css";
import { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
function AddData() {
  const [customerOrderId, setCustomerOrderId] = useState("");
  const [salesOrg, setSalesOrg] = useState("");
  const [distributionChannel, setDistributionChannel] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [orderCurrency, setOrderCurrency] = useState("");
  const [amountInUSD, setAmountInUSD] = useState("");
  const [orderCreationDate, setOrderCreationDate] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleAddData = () => {
    var options = {
      method: "POST",
      url: "http://localhost:8080/h2h_milestone_3/insertinvoice",
      params: {
        customerOrderId: customerOrderId,
        salesOrg: salesOrg,
        distributionChannel: distributionChannel,
        customerNumber: customerNumber,
        companyCode: companyCode,
        orderCurrency: orderCurrency,
        amountInUSD: amountInUSD,
        orderCreationDate: orderCreationDate,
      },
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const h1Text = response.data;
        setResponseText(h1Text); // Update the state with the h1 text content
        handleDeleteData();
        setTimeout(() => {
          setResponseText("");
        }, 3000);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleDeleteData = () => {
    setCustomerOrderId("");
    setSalesOrg("");
    setDistributionChannel("");
    setCustomerNumber("");
    setCompanyCode("");
    setOrderCurrency("");
    setAmountInUSD("");
    setOrderCreationDate("");
  };

  return (
    <div className="add-data-container">
      <style>
        {`
          .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
            background-color: #ffffff;
            color: #666666;
          }
          .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
            color: #fc7500;
          }
          .css-9ddj71-MuiInputBase-root-MuioutlinedInput-root.Mui-focused {
            border-color: #fc7500;
          }
        `}
      </style>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            label="Customer Order Id"
            variant="outlined"
            value={customerOrderId}
            onChange={(e) => setCustomerOrderId(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Sales Org"
            variant="outlined"
            value={salesOrg}
            onChange={(e) => setSalesOrg(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Distribution Channel"
            variant="outlined"
            value={distributionChannel}
            onChange={(e) => setDistributionChannel(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Customer Number"
            variant="outlined"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Company Code"
            variant="outlined"
            value={companyCode}
            onChange={(e) => setCompanyCode(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Order Currency"
            variant="outlined"
            value={orderCurrency}
            onChange={(e) => setOrderCurrency(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Amount in USD"
            variant="outlined"
            value={amountInUSD}
            onChange={(e) => setAmountInUSD(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Order Creation Date"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={orderCreationDate}
            onChange={(e) => setOrderCreationDate(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Button
            variant="contained"
            onClick={handleAddData}
            sx={{ backgroundColor: "#fc7500", width: "100%" }}
          >
            Add Data
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <Button
            variant="contained"
            onClick={handleDeleteData}
            sx={{ backgroundColor: "#db4437", width: "100%" }}
          >
            Clear Data
          </Button>
        </Grid>
        <Grid item xs={12}>
          {responseText && (
            <Typography variant="h6" sx={{ mt: 2 }}>
              Response: {responseText}
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default AddData;
