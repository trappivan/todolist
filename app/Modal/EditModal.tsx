"use client";
import { Modal, Box, Typography, Button, Input, Grid } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { EditModal } from "../types";

type Inputs = {
  input: string;
};

export default function EditModal({
  saveEditData,
  openEditModal,
  setOpenEditModal,
  rowData,
}: EditModal) {
  const handleClose = () => {
    setOpenEditModal(false);
  };
  const { register, handleSubmit, resetField } = useForm<Inputs>();
  const onSubmitEditData: SubmitHandler<Inputs> = (data: { input: string }) => {
    saveEditData(data.input, rowData.id);
    resetField("input");
  };
  return (
    <Modal
      open={openEditModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          borderRadius: "16px",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          width: 400,
          height: 200,
          bgcolor: "primary.contrastText",
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxHeight: 1,
            maxWidth: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: 1,
              maxWidth: 1,
            }}
          >
            <Grid>
              <Typography
                id="modal-modal-title"
                sx={{ color: "grey.900" }}
                variant="h6"
                component="h2"
              >
                Editar
              </Typography>
            </Grid>
            <Box
              component={"form"}
              onSubmit={handleSubmit(onSubmitEditData)}
              sx={{ mt: 4 }}
            >
              <Input placeholder="Edit task" {...register("input")} />
              <Button color={"primary"} variant="contained" type="submit">
                ADD
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: 4,
          }}
        >
          <Button variant="contained" onClick={handleClose}>
            Sair
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
