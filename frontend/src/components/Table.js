import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";
import {
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";

const Table = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editData, setEditData] = useState({
    orderCurrency: "",
    companyCode: "",
    distributionChannel: "",
  });

  // Fetching Data from my Backend
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8080/h2h_ms_3/readinvoice")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleRefreshData = () => {
    setData([]);
    fetchData();
  };

  const columns = [
    { field: "id", headerName: "SI No", flex: 1 },
    { field: "customerOrderId", headerName: "Customer Order Id", flex: 1 },
    { field: "salesOrg", headerName: "Sales Org", flex: 1 },
    {
      field: "distributionChannel",
      headerName: "Distribution Channel",
      flex: 1,
    },
    { field: "companyCode", headerName: "Company Code", flex: 1 },
    { field: "orderCreationDate", headerName: "Order Creation Date", flex: 1 },
    { field: "orderCurrency", headerName: "Order Currency", flex: 1 },
    { field: "customerNumber", headerName: "Customer Number", flex: 1 },
    { field: "amountInUSD", headerName: "Amount in USD", flex: 1 },
    { field: "orderAmount", headerName: "Order Amount", flex: 1 },
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [responseTextDelete, setResponseTextDelete] = useState("");
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
  };

  const handleEditClick = () => {
    // Handle edit button click
    setEditDialogOpen(true);
  };

  const handleDeleteClick = () => {
    // Handle delete button click
    setDeleteDialogOpen(true);
  };

  const handleDeleteCancel = () => {
    // Handle delete cancel
    console.log("Delete canceled");
    setDeleteDialogOpen(false);
  };

  const handleEditConfirm = () => {
    // Handle edit confirmation
    console.log("Edit confirmed");
    setEditDialogOpen(false);
    // Perform edit logic here
    const updatedData = data.map((item) => {
      if (selectedRows.includes(item.id)) {
        return {
          ...item,
          orderCurrency: editData.orderCurrency,
          companyCode: editData.companyCode,
          distributionChannel: editData.distributionChannel,
        };
      }
      return item;
    });
    setData(updatedData);
    setSelectedRows([]);
    setEditData({
      orderCurrency: "",
      companyCode: "",
      distributionChannel: "",
    });
  };

  const handleEditCancel = () => {
    // Handle edit cancel
    console.log("Edit canceled");
    setEditDialogOpen(false);
    setSelectedRows([]);
    setEditData({
      orderCurrency: "",
      companyCode: "",
      distributionChannel: "",
    });
  };

  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowSelection = (selection) => {
    setSelectedRows(selection);
    setSelectedRowData(
      selection.map((id) => data.find((row) => row.id === id))
    );
  };
  // const handleChangePage = (params) => {
  //   setPage(params.page);
  // };
  const handleInputChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };
  const handleDelete = () => {
    // Handle the delete logic here
    if (selectedRowData) {
      console.log("Deleting row:", selectedRowData[0]);
      var options = {
        method: "POST",
        url: "http://localhost:8080/h2h_ms_3/deleteinvoice",
        params: {
          Sl_no: selectedRowData[0].id,
        },

        // headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          const h1Text = response.data;
          setResponseTextDelete(h1Text); // Update the state with the h1 text content
          setTimeout(() => {
            setResponseTextDelete("");
          }, 3000);
        })
        .catch(function (error) {
          console.error(error);
        });
      // Implement the delete functionality using the selected row's ID
    }
    setDeleteDialogOpen(false);
  };
  return (
    <>
      <div
        style={{
          height: 530,
          width: "100%",
          backgroundColor: "#666666",
          color: "#ffffff",
        }}
      >
        <style>
          {`
            .MuiCheckbox-colorPrimary.Mui-checked .MuiSvgIcon-root {
              color: #fc7500; 
            }
            .MuiDataGrid-root .MuiDataGrid-columnHeaderTitle {
              overflow: visible;
              color: white;
            }
            .MuiDataGrid-root .MuiDataGrid-window{
              color:white;
            }
            .MuiTypography-colorInherit {
              color: white;
            }
            .MuiIconButton-colorInherit {
              color: white;
            }
            .MuiCheckbox-root {
              color: white;
            }
            .MuiButton-contained{
              background-color:#fc7500;
            }
            .MuiDataGrid-root .MuiDataGrid-window{
              color:white;
            }
            .MuiTablePagination-root{
              color:white;
            }
          `}
        </style>
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={rowsPerPage}
              checkboxSelection
              disableSelectionOnClick
              pagination
              components={{
                Footer: () => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 16px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleRefreshData}
                        style={{ marginRight: 8, color: "#ffffff" }}
                      >
                        Refresh
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleEditClick}
                        style={{ marginRight: 8, color: "#ffffff" }}
                        disabled={selectedRows.length === 0}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleDeleteClick}
                        style={{ marginRight: 8, color: "#ffffff" }}
                        disabled={selectedRows.length === 0}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        style={{ marginRight: 8, color: "#ffffff" }}
                        disabled={selectedRows.length === 0}
                      >
                        Predict
                      </Button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 20, 50, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </div>
                  </div>
                ),
              }}
              onSelectionModelChange={handleRowSelection}
            />
          </>
        )}
      </div>
      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the selected record(s)?
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Button
                variant="filled"
                onClick={handleDeleteCancel}
                sx={{
                  backgroundColor: "#666666",
                  width: "100%",
                  boxShadow: "0px 0px 0px 1px black", // Add boxShadow for border effect
                  outline: "none", // Remove the default outline
                  borderRadius: "2px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                variant="filled"
                onClick={handleDelete}
                sx={{
                  backgroundColor: "#666666",
                  width: "100%",
                  boxShadow: "0px 0px 0px 1px black", // Add boxShadow for border effect
                  outline: "none", // Remove the default outline
                  borderRadius: "2px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
      <Dialog open={editDialogOpen} onClose={handleEditCancel}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Order Currency"
                variant="outlined"
                name="orderCurrency"
                value={editData.orderCurrency}
                onChange={handleInputChange}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Company Code"
                variant="outlined"
                name="companyCode"
                value={editData.companyCode}
                onChange={handleInputChange}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Distribution Channel"
                variant="outlined"
                name="distributionChannel"
                value={editData.distributionChannel}
                onChange={handleInputChange}
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Button
                variant="filled"
                onClick={handleEditConfirm}
                sx={{
                  backgroundColor: "#666666",
                  width: "100%",
                  border: "1px solid black",
                  borderRadius: "2px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Edit
              </Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                variant="filled"
                onClick={handleEditCancel}
                sx={{
                  backgroundColor: "#666666",
                  width: "100%",
                  border: "1px solid black",
                  borderRadius: "2px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
          {responseTextDelete && (
            <Typography variant="h6" sx={{ mt: 2 }}>
              Response: {responseTextDelete}
            </Typography>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Table;
