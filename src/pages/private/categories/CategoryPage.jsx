import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { axiosInstance } from "../../../network/axiosInstance";
import { DataGrid } from "@mui/x-data-grid";
import { Delete as DeleteIcon,Info } from "@mui/icons-material";

import DetailModal from "./DetailModal";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { confirmAlert } from "react-confirm-alert";

function CategoryPage() {
  const [open, setOpen] = useState(false);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [deleteParams, setDeleteParams] = useState(null);

  const { data, error, isLoading, isSuccess, refetch } = useQuery(
    "categoryData",
    () => {
      return axiosInstance.get("categories");
    }
  );

  //data -> number, object, array
  const mutation = useMutation({
    mutationFn: async (data) => {
      let result = await axiosInstance.delete(`categories/${data}`);
      return result;
    },
    onSuccess: (data) => {
      refetch();
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  const deleteCategory = (params) => {
    mutation.mutate(params.id);
    setConfirmDialogOpen(false);
    console.log("Deleted category id: ", params.id);
  };

  const handleDialogClose = () => {
    setConfirmDialogOpen(false);
  };

  const handleDeleteClick = (params) => {
    setDeleteParams(params);
    setConfirmDialogOpen(true);
  };

  const showDetail = (params) => {
    setOpen(true);
    setname(params.row.name);
    setdescription(params.row.description);
  };

  const confirm = (params) => {
    console.log("Confirmation started");

    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteCategory(params),
        },
        {
          label: "No",
          onClick: () => console.log("Delete operation is canceled"),
        },
      ],
    });
  };

  const columns = [
    { field: "id", headerName: "Id", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "description", headerName: "Description", width: 150 },

    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => (
        <Button
          onClick={() => handleDeleteClick(params)}
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          color="error"
        >
          <DeleteIcon />
        </Button>
      ),
    },

    {
      field: "detail",
      headerName: "Details",
      width: 250,
      renderCell: (params) => (
        <Button
          onClick={() => showDetail(params)}
          variant="outlined"
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Info />
        </Button>
      ),
    },
  ];

 
  return (
    <>
      <DetailModal
        open={open}
        setOpen={setOpen}
        name={name}
        description={description}
      />
      {isLoading && <CircularProgress />}
      {mutation.isLoading && <CircularProgress />}
      {isSuccess && (
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid rows={data?.data} columns={columns} />
        </div>
      )}
      <Dialog open={confirmDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this category?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={() => deleteCategory(deleteParams)} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CategoryPage;
