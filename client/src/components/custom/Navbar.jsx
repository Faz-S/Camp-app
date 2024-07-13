import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";



function Navbar() {

const Container=styled.div`
display:flex;
border-style:solid;
border-width:1px;
border-color:#F5F7F8;
border-top:none;
border-left:none;
border-right:none;
background:#17153B;
`

const HorizontalContainer = styled.div`
display:flex;
width:20rem;
align-items:center;
padding-left:1rem;
border-style:solid;
border-width:1px;
border-top:none;
border-left:none;
border-bottom:none;
color:#F5F7F8;


`

const SubContainer=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
padding:0 2rem;

`
const Input=styled.input`
padding:0.5rem;
width:20rem;
border-radius:8px;
border-width:1px;
border-style:solid;
`

  return (<>
    <Container>
    <HorizontalContainer>
      <h2>
        FORUS
      </h2>
    </HorizontalContainer>
     <SubContainer>
     <Input placeholder='Search for products'/>
     <button style={{width:"50px",height:"50px",borderRadius:"50%",borderWidth:"1px"}}/>
     </SubContainer>
     </Container>
     </>
  )
}

export default Navbar
