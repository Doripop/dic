import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

import Change from "./change";

import { db } from "./firebase";
import { deleteDicFB, loadDic, loadDicFB } from "./redux/modules/dicitem";


import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';

const Cards = (props) => {
let history = useHistory();
const dispatch = useDispatch();
const mydic_list = useSelector((state)=>state.dicitem.list);
console.log(mydic_list)









    return(
        <>

        {mydic_list.map((list,i)=>


        <CardBox>
        <div>Word : "{list.word}"</div>
        <div>Mean : "{list.mean}"</div>
        <Excolor>Example : "{list.ex}"</Excolor>
        

        <IconButton aria-label="delete" style={{left:"280px", top:"-15px"}}>
                <EditIcon style={{color:"gray"}} onClick={()=>{history.push(`/Change/${list.id}`)}}/>
            </IconButton>
        

        <IconButton aria-label="delete" style={{left:"280px", top:"-15px"}} onClick={()=> {
            dispatch(deleteDicFB(list.id));}}>
            <DeleteIcon />
         </IconButton>


         

        </CardBox>
         
         
       
        
        )}
        
        </>
    )
}


const CardBox = styled.div`
width:100%;
width: 350px;
height: 100px;
padding: 20px;
border: 4px solid rgb(106 200 135);
border-radius: 10px;
margin:0 auto 30px auto;
font-size: 25px;
`;

const Excolor = styled.div`
color : royalblue;
`;


export default Cards;