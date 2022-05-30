import React from 'react';
import styled from 'styled-components';
import Cards from './cards';





const Dicpage = (props) => {
    
    
    return (
        <>
        {/* cards에서 들어갈 내용을 작성 */}
            <WarpBox>
                
                    <Cards/>
                
                
            </WarpBox>
                
           
              
        

        </>
    )
}




const WarpBox = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:flex-start;
align-items:center;

`;

const CardBox = styled.div`
width:100%;
width: 350px;
height: 100px;
padding: 20px;
border: 2px solid rgb(10, 112, 41);
border-radius: 10px;
margin:0 auto 30px auto;
`;






export default Dicpage;