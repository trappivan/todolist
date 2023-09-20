'use client'
import * as React from 'react';
import { Box, Input, TextField, Button } from '@mui/material'
import { SubmitHandler, useForm } from "react-hook-form"

interface Header {
  addTask: Function
}
type Inputs = {
  input: string
}

export default function Header({addTask} : Header){
  const {
      register,
      handleSubmit,
      resetField,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data: {input:string})=> {
      addTask(data.input);
      resetField("input");
    }  
    return (
        <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        >
          <Input placeholder='Add task' {...register("input")}/>
          <Button color={'primary'} variant='contained' type='submit'>ADD</Button>
        </Box>
    )
}