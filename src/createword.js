import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { addDicFB } from "./redux/modules/dicitem";
import { useHistory, useParams } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Createword = (state) => {
    const history = useHistory();
    const wordtext = React.useRef(null);
    const meantext = React.useRef(null);
    const extext = React.useRef(null);

    // console.log(wordtext);
    // console.log(meantext);
    // console.log(extext);

    const dispatch = useDispatch();
    

    
    // window.setTimeout(()=>{
    //     console.log(wordtext.current.value);
    //     console.log(meantext.current.value);
    //     console.log(extext.current.value);
    // }, 5000);

    const addDicList = () => {
        dispatch(addDicFB({word: wordtext.current.value, 
                        mean:meantext.current.value, 
                        ex:extext.current.value,
                        completed: true}))
                        }

    return (
        <>
        
        
        
        <PPP>
        <div>
            단어<br/>
            <Bar type={"text"} ref={wordtext} placeholder="단어를 입력해주세요"></Bar>
        </div>

        <div>
            의미<br/>
            <Bar type={"text"} ref={meantext} placeholder="단어의 뜻을 입력해주세요"></Bar>
        </div>

        <div>
            예시<br/>
            <Bar type={"text"} ref={extext} placeholder="예시를 입력해주세요 "></Bar>
        </div>


        {/* <button style={{color:"red", marginTop:"30px", }}
        onClick={() => {addDicList()  (history.goBack())}}>
        추가하기
        </button> */}

        <Button variant="contained" onClick={() => {addDicList()  (history.goBack())}}>
            추가하기
        </Button>

        </PPP>
        
        </>
        
            
    
    )
}

const PPP = styled.div`
width:400px;
height:400px;
align-items: center;
text-align: center;
margin:auto;
border: 2px solid red;
border-radius: 20px;
font-size: 30px;
font-weight: bold;
`;

const Bar = styled.input`
border:none;
background-color:transparent;
outline:none;
border-bottom: 2px solid rgb(219, 232, 216);
width:200px;
font-size:20px;
margin-bottom:30px;
`;




export default Createword;