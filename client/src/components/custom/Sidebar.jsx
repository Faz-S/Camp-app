import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
function Sidebar() {
const navigate=useNavigate();



const Container=styled.div`
padding:0.9rem;
min-width:238px;
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


const Menu=["Dashboard","Data Entry","Supply Management","Alerts"]

  return (
    <Container>
        <MenuContainer >
            {Menu.map((items)=>{
                return(
                    <NavLink className="navlink" to={`/${items}`}> 
                        {items}
                    </NavLink>
                )
            })}
      </MenuContainer>
    </Container>
  )
}

export default Sidebar
