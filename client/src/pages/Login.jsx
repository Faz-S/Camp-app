import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


function Login() {
const navigate = useNavigate();
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;
background-color:#17153B;
`
const Wrapper=styled.div
`
border-width:1px;
border-style:solid;
padding:0rem 2rem 2rem 1rem;
background-color:#F5F7F8;
border-radius:8px;

`
const Input=styled.input`
 width:100%;
 padding:10px 5px;
 border-radius:8px;
 border-style:solid;
 border-width:1px;
 margin-top:-10px;
 
 
`
const Button=styled.button`
margin-top:1.3rem;
width:102.5%;
padding:10px 0px;
border-radius:8px;
background-color:#17153B;
color:#F5F7F8;
font-weight:bold;
letter-spacing:1.8px;
font-size:15px;
cursor:pointer;

`
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

  return (
    <Container>
      <Wrapper>
        <h1>
            Login
        </h1>
        <p style={{marginTop:"-10px"}}>
            Enter your username and password below to login your account
        </p>
        <h4 >
            Username
        </h4>
        <Input onChange={(e)=>setUsername(e.target.value)} value={username} />
        <h4>
            Password
        </h4>
        <Input onChange={(e)=>setPassword(e.target.value)} type='password' value={password}/>
        <Button onClick={()=>{
          navigate("/dashboard")
        }
        }
          >
            Sign In</Button>
      </Wrapper>
    </Container>
  )
}

export default Login
