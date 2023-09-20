"use client";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Grid } from "./types";

export default function Grid({ task, openModalDelete, openModalEdit }: Grid) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "task",
      headerName: "Task",
      width: 150,
    },
    {
      field: "Editar",
      headerName: "Editar",
      width: 100,
      renderCell: (rowData) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => openModalEdit(rowData.row)}
        >
          <EditIcon />
        </Button>
      ),
    },
    {
      field: "Deletar",
      headerName: "Deletar",
      width: 100,
      renderCell: (rowData) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => openModalDelete(rowData.row)}
        >
          <DeleteIcon />
        </Button>
      ),
    },
  ];
  return (
    <Box>
      <DataGrid
        rows={task}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
}
