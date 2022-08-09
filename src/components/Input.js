import React from 'react'
import TextField from '@mui/material/TextField';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CreateIcon from '@mui/icons-material/Create';
import { Stack } from '@mui/material';
import "./style.css"


function Input({submitHandler, input, inputHandler, updateHandler,isEditting}) {

  return (
    <Stack  direction="row" sx={{padding:"10px", margin:"10px"}} >
        <TextField className="Mui-focused"  value={input} type="text" onChange={inputHandler} />
        { isEditting ? <CreateIcon onClick={()=>updateHandler(input)} sx={{color:"#AC7088",fontSize:"50px"}} />:
        <ControlPointIcon sx={{color:"#AC7088",fontSize:"50px"}} onClick={()=>{submitHandler(input)}} />}           
    </Stack>
    
  )
}

export default Input