import React from 'react'
import Sidebar from '../custom/Sidebar'
import Navbar from '../custom/Navbar'
import styled from 'styled-components'
function SupplyManagement() {

  const Container=styled.div`
  width:100%;
  color:#F5F7F8;
  padding:0.1rem 2rem 0 2rem;
  `
  const SubContainer=styled.div`
  display:flex;
  padding:1rem;
  border-style:solid;
  border-width:1px;
  border-color:#fff;
  min-height:72vh;
  flex-direction:row;
  gap:2rem;
  `
  const OneContainer=styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   border-color:#F5F7F8;
   border-width:1px;
   border-style:solid;
   border-left:none;
   border-top:none;
   border-bottom:none;
   padding-left:1rem;
   padding-right:3rem;
  `
  const SecondContainer=styled.div`
  padding-top:1rem;
  `
  const Button=styled.button`
  margin-top:1.3rem;
  width:100%;
  padding:10px 0px;
  border-radius:8px;
  background-color:#F5F7F8;
  color:#17153B;
  font-weight:bolder;
  letter-spacing:1px;
  font-size:13px;
  cursor:pointer;

`

const Table=styled.table`
border-collapse:collapse;
width:100%;

`
const Th=styled.th`
padding:0 3rem 2rem 3rem;


`
const Tr=styled.tr`

text-align:center;

`
const TableContent=[
  {
    SNo:1,
    Camp:"Camp1",
    RequiredSupplies:150,
    Review:<Button>
      Send
    </Button>
  },
  {
    SNo:2,
    Camp:"Camp1",
    RequiredSupplies:150,
    Review:<Button>
      Send
    </Button>
  },
  {
    SNo:3,
    Camp:"Camp1",
    RequiredSupplies:150,
    Review:<Button>
      Send
    </Button>
  },
  {
    SNo:4,
    Camp:"Camp1",
    RequiredSupplies:150,
    Review:<Button>
      Send
    </Button>
  },
  {
    SNo:5,
    Camp:"Camp1",
    RequiredSupplies:150,
    Review:<Button>
      Send
    </Button>
  }
]
  return (
    <div style={{width:"100%",height:"100%",background:"#1A2130"}}>
      <Navbar/>
      <div style={{display:"flex"}}>
      <Sidebar/>
      <Container>
       <h2>Supply Management</h2>
        <SubContainer>
          <OneContainer>
          <p style={{fontSize:"17px"}}>
            Total Number of Supplies
          </p>
          <h1>
          1567
          </h1>
          <Button >
            Request
          </Button>
          <Button>
            send
          </Button>
        </OneContainer>
        <SecondContainer>
          <Table>
            <thead>
              <tr >
                <Th>S.NO</Th>
                <Th>Camp</Th>
                <Th>Required Supplies</Th>
                <Th>Review</Th>
              </tr>
            </thead>
            <tbody>
              {TableContent.map((row)=>{
                return(
                <Tr >
                  <td>{row.SNo}</td>
                  <td>{row.Camp}</td>
                  <td>{row.RequiredSupplies}</td>
                  <td >{row.Review}</td>
                </Tr>)
              })}
              
            </tbody>
          </Table>
        </SecondContainer>
        </SubContainer>
      </Container>
      </div>
      
    </div>
  )
}

export default SupplyManagement