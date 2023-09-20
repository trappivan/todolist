"use client";
import { useState } from "react";
import Header from "./Header";
import Grid from "./Grid";
import DeleteModal from "./Modal/DeleteModal";
import EditModal from "./Modal/EditModal";
import { rowData } from "./types";
import { Box } from "@mui/material";

export function TodoList() {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<Boolean>(false);
  const [rowData, setRowData] = useState<rowData>({});
  const [task, setTask] = useState<{ id: number; task: string }[]>([
    {
      id: 1,
      task: "Lavar o carro",
    },
    {
      id: 2,
      task: "Lavar a motoca",
    },
    {
      id: 3,
      task: "Lavar o cachorro",
    },
  ]);
  const addTask = (dataInput: string) => {
    setTask([...task, { id: task.length + 1, task: dataInput }]);
  };
  const saveEditData = (inputContent: string, rowId: number) => {
    setOpenEditModal(false);
    const taskCopy = [...task];
    const rowTaskIndex = taskCopy.findIndex((task) => task.id === rowId);
    if (rowTaskIndex !== -1) {
      taskCopy[rowTaskIndex] = { id: rowId, task: inputContent };
      setTask(taskCopy);
    }
  };
  const CountId = () => {
    //Adicionar funcionalidade de saber onde está o ID para evitar erro de mesmo ID
  };
  const openModalDelete = (rowData: rowData) => {
    setRowData(rowData);
    setOpenDeleteModal(true);
    setIsDelete(true);
  };
  const openModalEdit = (rowData: rowData) => {
    setOpenEditModal(true);
    setRowData(rowData);
  };
  const handleDelete = () => {
    setTask(task.filter((e) => e.id !== rowData?.id));
    setOpenDeleteModal(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 8,
        p: 4,
      }}
    >
      Todo List
      <Header addTask={addTask} />
      <Grid
        task={task}
        openModalDelete={openModalDelete}
        openModalEdit={openModalEdit}
      />
      {isDelete ? (
        <DeleteModal
          setIsDelete={setIsDelete}
          handleDelete={handleDelete}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
          rowData={rowData}
        />
      ) : (
        <EditModal
          saveEditData={saveEditData}
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
          rowData={rowData}
        />
      )}
    </Box>
  );
}
