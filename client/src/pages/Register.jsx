import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1A2130;
`;

const Wrapper = styled.div`
  border-width: 1px;
  border-style: solid;
  padding: 0rem 2rem 2rem 1rem;
  background-color: #F5F7F8;
  border-radius: 8px;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  margin-top: -10px;
`;

const Button = styled.button`
  margin-top: 1.3rem;
  width: 102.5%;
  padding: 10px 0px;
  border-radius: 8px;
  background-color: #17153B;
  color: #F5F7F8;
  font-weight: bold;
  letter-spacing: 1.8px;
  font-size: 15px;
  cursor: pointer;
`;

const A = styled.a`
  cursor: pointer;
  color: #17153B;
  font-weight: bolder;
`;

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8001/register', { username, password })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <h1>Register</h1>
        <p style={{ marginTop: "-10px" }}>
          Enter your username and password below to register your account
        </p>
       
          <h4>Username</h4>
          <Input value={username} type="text" onChange={handleUsername} />
          <h4>Password</h4>
          <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" onClick={()=>{
            navigate('/dashboard')
          }}>Sign Up</Button>
       
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <p style={{ color: "#17153B" }}>Already have an account?</p>
          <A onClick={() => navigate('/')}>Login</A>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Register;
