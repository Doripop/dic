import React from "react";
import styled from "styled-components";
import { useHistory,useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { changeDicFB } from "./redux/modules/dicitem";


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Change = (props) => {
    const wordtext = React.useRef(null);
    const meantext = React.useRef(null);
    const extext = React.useRef(null);
    const history = useHistory();
    const parm = useParams();
    console.log(parm);


    const mydic_list = useSelector((state)=>state.dicitem.list);

    console.log(mydic_list)

    const dispatch = useDispatch();

    // window.setTimeout(()=>{
    //     console.log(wordtext.current.value);
    //     console.log(meantext.current.value);
    //     console.log(extext.current.value);
    // }, 5000);


    const changeDicList = () => {
        dispatch(changeDicFB({word: wordtext.current.value, 
                        mean:meantext.current.value, 
                        ex:extext.current.value,
                        completed: true,
                        id:parm}))

                        console.log("눌러써")
                        }



    return (
        <>

        <PPP>
        <div>
            단어<br/>
            <Bar type={"text"} ref={wordtext} placeholder="바꿀 단어를 입력하세요"></Bar>
        </div>

        <div>
            의미<br/>
            <Bar type={"text"} ref={meantext} placeholder="단어의 의미는?"></Bar>
        </div>

        <div>
            예시<br/>
            <Bar type={"text"} ref={extext} placeholder="예시를 만들어 주세요!"></Bar>
        </div>


        {/* <button style={{color:"red", marginTop:"30px"}}
        onClick={() => {changeDicList(); history.goBack()}}>
        수정하기
        </button> */}

        <Button variant="contained" onClick={() => {changeDicList(); history.goBack()}}>
            수정하기
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


export default Change;