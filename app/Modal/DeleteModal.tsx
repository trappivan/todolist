'use client'
import { Modal, Box, Typography, Button, Grid } from '@mui/material'
import { DeleteModal } from '../types'


export default function DeleteModal({ 
    setIsDelete,
    openDeleteModal, 
    setOpenDeleteModal, 
    handleDelete, 
    rowData}: DeleteModal){
    const handleClose = () =>{
        setOpenDeleteModal(false)
        setIsDelete(false)
    }
    return (
        <Modal
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <Box
            sx={{                
                display:'flex',
                borderRadius: '16px',
                flexDirection: 'column',
                alignItems:'center',
                p: 2,
                width:400,
                height:200,
                bgcolor: 'primary.contrastText',
                boxShadow: 3,
            }}
            >
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    maxHeight:1,
                    maxWidth:1,
                }}>
                    <Grid>
                        <Typography id="modal-modal-title" sx={{color: 'error.main'}} variant="h6" component="h2">                    
                            Tem certeza que deseja excluir ?
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Task {rowData?.task}
                        </Typography>
                    </Grid>
                </Box>    
                <Box
                sx={{
                    display:'flex',
                    mt:4
                }}
                >
                    
                    <Button
                    sx={{
                        mr:6,
                    }}
                    variant="contained"
                    onClick={handleDelete}
                    >
                        Excluir
                    </Button>
                    <Button
                    variant="contained"
                    onClick={handleClose}
                    >
                        Sair
                    </Button>
                </Box>
            </Box>
            
            
        </Modal>
    )
}