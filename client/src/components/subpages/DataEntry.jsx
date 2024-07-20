import React, { useState } from 'react'
import Sidebar from '../custom/Sidebar'
import Navbar from '../custom/Navbar'
import styled from 'styled-components'
function DataEntry() {
  const Container=styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  padding:0.1rem 2rem 0 2rem;

  `
  const SubContainer=styled.div`
  display:flex;
  padding:1rem;
  border-style:solid;
  border-width:1px;
  border-color:#fff;
  min-height:72vh;
  flex-direction:column;
  gap:2rem;
  
  `
  const OneConatiner=styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  color:#F5F7F8;
  
  height:10%;
  `
  const SideContainer=styled.div`
   color:#F5F7F8;
   padding-left:1rem;
   
   
  `
  const Input=styled.input`
  width:100%;
  padding:10px 5px;
  border-radius:8px;
  border-style:solid;
  border-width:1px;
  margin-top:-60px;
  font-size:20px;
  font-weight:bold;
  text-align:center;
  background:#1A2130;
  color:#F5F7F8;
`
  const ContainerHolder=styled.div`
    display:flex;
    justify-content:space-around;
    
    
    
  `
  const Button=styled.button`
  margin-top:1.3rem;
  width:50%; 
  padding:10px 0px;
  border-radius:8px;
  background-color:#F5F7F8;
  color:#17153B;
  font-weight:bolder;
  letter-spacing:1px;
  font-size:13px;
  cursor:pointer;

`
const Buttondiv=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  
`
const Line = styled.div`
border-style:solid;
border-color:#F5F7F8;
color:#17153B;
border-bottom:none;
border-top:none;
border-left:none;
border-width:1px;
height:29vh;
`
const [populationValue,setPopulationValue]=useState("")
  return (
    <div style={{width:"100%",height:"100%",background:"#1A2130"}}>
      <Navbar/>
      <div style={{display:"flex"}}>
      <Sidebar/>
      <Container>
       <h2 style={{paddingLeft:"2rem",color:"#F5F7F8"}}>Data Entry</h2>
       <SubContainer>
          <OneConatiner>
              <h1 style={{margin:"5px 0 0 0",padding:"0"}}>
                Camp Conditions
              </h1>
              </OneConatiner>
              <ContainerHolder>
                <SideContainer>
                    <h3 style={{paddingBottom:"1rem",textAlign:"center"}}>
                      Total Number of Population
                    </h3>
                    <Input value={200}/>
                    <Buttondiv>
                    <Button>
                      Change
                    </Button>
                    </Buttondiv>
                </SideContainer>
                <Line>
                    .
                </Line>
                      
                
                <SideContainer>
                    <h3 style={{paddingBottom:"1rem",textAlign:"center"}}>
                      Current Health Status
                    </h3>
                    <Input value={"No Injured"}/>
                    <Buttondiv>
                    <Button>
                      Change
                    </Button>
                    </Buttondiv>
                </SideContainer>
              </ContainerHolder>
              <ContainerHolder style={{marginTop:"-2rem",border:"1px solid #F5F7F8",borderRight:"none",borderLeft:"none",borderBottom:"none"}}>
                <SideContainer style={{marginTop:"1rem"}}>
                    <h3 style={{paddingBottom:"1rem",textAlign:"center"}}>
                      Current Supplies
                    </h3>
                    <Input value={1567}/>
                    <Buttondiv>
                    <Button>
                      Change
                    </Button>
                    </Buttondiv>
                </SideContainer>
                <Line>
                  .
                </Line>
                <SideContainer style={{marginTop:"1rem"}}>
                    <h3 style={{paddingBottom:"1rem",textAlign:"center"}}>
                      Required Supplies
                    </h3>
                    <Input value={150}/>
                    <Buttondiv>
                    <Button>
                      Change
                    </Button>
                    </Buttondiv>
                </SideContainer>
              </ContainerHolder>
              
          
       </SubContainer>
       </Container>
       
      </div>
    </div>
  )
}

export default DataEntry