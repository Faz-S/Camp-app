import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
function Sidebar() {
const navigate=useNavigate();

const isActive=window.location.pathname;

const Container=styled.div`
padding:0.9rem;
width:238px;
height:86vh;
border-style:solid;
border-width:1px;
border-top:none;
border-left:none;
background:#17153B;
color:#F5F7F8;


`
const MenuContainer=styled.div`
display:flex;
flex-direction:column;
gap:2rem;
cursor:pointer;



`
const A=styled.a`
padding:8px 5px;
&:hover{
background:#F5F7F8;
color:#17153B;
transition:0.3s ease;
border-radius:6px;

}









`

const Menu=["Dashboard","Data Entry","Supply Management","Alerts"]

  return (
    <Container>
        <MenuContainer >
            {Menu.map((items)=>{
                return(
                    <A onClick={()=>{
                        navigate(`/${items}`)
                        
                        }}>
                        {items}
                    </A>
                )
            })}
      </MenuContainer>
    </Container>
  )
}

export default Sidebar
