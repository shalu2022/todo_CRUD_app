import {ListItemText , Divider} from '@mui/material'
import List from '@mui/material/List';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import EditIcon from '@mui/icons-material/Edit';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box } from '@mui/system';


const ListItem1 = ({lists, setLists, setInput, setSelectedId, setIsEditting}) => {
  const [check, setCheck] = useState(false)

 const deleteHandler =(id)=>{
  let newList = lists.filter((listIt)=> listIt.id!== id)
  setLists(newList)
 }

 const editHandler =(li)=>{
  setIsEditting(true)
  setSelectedId(li.id)
  setInput(li.item);
 }
  
 const completeHandler =(li)=>{
  setCheck(!check);

 }

 const CustomBox = styled(List)`
    display: "flex";
    background: "red";
    width: '100%';
    maxWidth: 400;
    alignItems: "center"
    `
 return (
    <CustomBox >
      {lists && lists.map((li,index) => {
        return (
          <Box key={index} sx={{ background: "#AC7088", padding:"5px" ,marginTop:"10px", borderRadius:"10px", color: "#EAE3D2"}}>
            <ListItem  sx={{
              textDecoration: check ? 'line-through' : 'none',
            }}>
                <ListItemText primary={li.item} />
                <DeleteIcon sx={{px:"5px"}}  onClick={()=>{deleteHandler(li.id)}}/>
                <EditIcon  sx={{px:"5px"}}  onClick={()=>{editHandler(li)}}/>
                <VerifiedIcon  sx={{px:"5px"}}  onClick={()=>{completeHandler(li)}}/>
                <Divider />
            </ListItem>
        </Box >
        )
        })}
    </CustomBox>
 )}
export default ListItem1




