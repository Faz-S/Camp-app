import * as React from "react"
import Navbar from '../components/custom/Navbar.jsx'
import Sidebar from '../components/custom/Sidebar.jsx'
import styled from 'styled-components'

function Home() {
  const Container = styled.div`
  color:#F5F7F8;
  padding:0.1rem 2rem 0 2rem;
  width:100%;
  `
  const SubContainer = styled.div`
  display:flex;
  padding:1rem;
  border-style:solid;
  border-width:1px;
  border-color:#fff;
  min-height:72vh;
  flex-direction:row;
  `
  const SideContainer = styled.div`
   color:#F5F7F8;
   padding:1rem;
   border-style:solid;
   border-width:0.2px;
   height:100%;
   cursor:pointer;
   `
   const Button=styled.button`
  margin-top:1.3rem;
  min-width:3vw;
  padding:10px 0px;
  border-radius:8px;
  background-color:#1A2130;
  color:#F5F7F8;
  
  
  cursor:pointer;
  border:none;
  
`
  const ContainerHolder = styled.div`
   display:flex;
   flex-direction:row;
   gap:1rem;
   width:75vw;
   justify-content:space-around;
   padding-top:0.5rem;
   `
   const Table=styled.table`
    border-collapse:collapse;
    width:100%;
    
`
const Th=styled.th`
  background:#1A2130;
  padding:0 3rem 2rem 3rem;
  position:sticky;
  top:0rem;
  

`
const Tr=styled.tr`
text-align:center;
border-style:solid;
border-color:#F5F7F8;
border-width:1px;
border-right:none;
border-left:none;
`
const TableHolder=styled.div`
    max-height:330px;
    overflow-y:scroll;
`
   const HomeData = [
    {
      ItemId:1,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
      <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
      <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
      <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:2,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:3,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:4,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:5,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:6,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:7,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:8,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:9,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:10,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:11,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:12,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:13,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
            <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
            <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
            <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    {
      ItemId:14,
      Name:"Bread",
      Type:"Grocery",
      Quantity:10,
      Edit:<>
      <div style={{display:"flex",height:"100%",marginTop:"-4px",justifyContent:"center"}}>
      <Button><h1 style={{margin:"0",padding:"0"}}>+</h1></Button>
      <Button><h1 style={{margin:"0",padding:"0"}}>-</h1></Button>
      </div>
      </>
    },
    
  ]
  const Td=styled.td`
  padding-bottom:8px;
  border-style:solid;
  border-width:1px;
  border-color:#F5F7F8;
  border-right:none;
  border-left:none;
  `
  return (<>
    <div style={{ width: "100%", height: "100%", background: "#1A2130" }}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Container>
          <h1 style={{ color: "#F5F7F8"}}>Home</h1>
          <SubContainer>
            <div>
            <ContainerHolder>
              {/* <SideContainer>  
            <div style={{display:"flex",gap:"3rem"}}>
            <div>
            <h5 style={{marginBottom:"8px"}}>
                Camp Capacity
              </h5>
              <p style={{textAlign:"center",fontSize:"13px",padding:"0",margin:"0"}}>January-June 2024</p>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button style={{width:"100px",height:"100px",borderRadius:"50%",borderWidth:"1px"}}/>
            </div>
            </div>
            </SideContainer>  */}
              <SideContainer style={{ height: "13.7vh", minWidth: "15.5vw" }}>
                <div style={{ display: "flex", gap: "3rem" }}>
                  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <h4 style={{ marginBottom: "8px" }}>
                      Camp Needs
                    </h4>
                  </div>
                </div>
              </SideContainer>
              <SideContainer style={{ height: "13.7vh", minWidth: "15.5vw" }}>
                <div style={{ display: "flex", gap: "3rem" }}>
                  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <h4>
                      Critical Updates
                    </h4>
                  </div>
                </div>
              </SideContainer>
              <SideContainer style={{ height: "13.7vh", minWidth: "15.5vw" }}>
                <div style={{ display: "flex", gap: "3rem" }}>
                  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <h4>
                      Set Up Camp
                    </h4>
                  </div>
                </div>
              </SideContainer>
              </ContainerHolder>
            <TableHolder style={{marginTop:"3rem"}}>
            <Table >
            <thead>
              <tr>
                <Th>ItemId</Th>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Quantity</Th>
                <Th>Edit</Th>
              </tr>
            </thead>
            <tbody>
              {HomeData.map((row)=>{
                return(
                <Tr>
                  <Td>{row.ItemId}</Td>
                  <Td>{row.Name}</Td>
                  <Td>{row.Type}</Td>
                  <Td >{row.Quantity}</Td>
                  <Td >{row.Edit}</Td>
                </Tr>)
              })}
              
            </tbody>
          </Table>
          </TableHolder>
          </div>
          </SubContainer>
          
        </Container>
      </div>

    </div>

  </>
  )
}

export default Home


