import React from "react";
import {Route, Switch} from "react-router-dom"
import Dicpage from "./dicpage";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Createword from "./createword";
import Change from "./change";
import {useDispatch} from "react-redux";
import { loadDicFB } from "./redux/modules/dicitem";
import { async } from "@firebase/util";
import "./App.css"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';





function App() {

  const history = useHistory();
  const dispatch = useDispatch();


// console.log("여기가 문제네");
React.useEffect(async()=>{  
    dispatch(loadDicFB());

}, []);


  return (
    <div className="App">

     
      
      <Inner>
        영단어 저장소
        <UnderLine/>
      </Inner>


      {/* 들어갈 카드 -> dicpage------------------------ clear */}
      {/* dicpage에서 카드를 뿌려주기 위해 처리 */}
      {/* cards에서 들어갈 내용을 작성 */}




      {/* <Cycle>
        <Plus onClick={()=>{history.push(`/Createword`)}}></Plus>
      </Cycle> */}


      <div style={{display:"flex",width:"80px", height:"80px", bottom:"30px", position:"fixed", right:"30px"}}>
        <Fab color="secondary" aria-label="add" onClick={()=>{history.push(`/Createword`)}}>
        <AddIcon/>
      </Fab>
      
      </div>
      
     


      <Switch>
        <Route path="/" exact>
          <Dicpage/>
      </Route>

      <Route path="/Createword" exact>
          <Createword/>
      </Route>

      <Route path="/Change/:id">
          <Change/>
      </Route>
      </Switch>
      
    </div>

    
  );
}






const Inner = styled.div`
text-align: center;
font-size: 30px;
font-weight: bold;
color: royalblue;
margin: 20px auto 50px auto;
`;

const UnderLine = styled.div`
border: 1px solid #c064b1;
margin-top: 13px;
`;




export default App;
