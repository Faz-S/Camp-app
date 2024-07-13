import React from 'react'
import Navbar from '../components/custom/Navbar'
import Sidebar from '../components/custom/Sidebar'
const Home = () => {
  return (<>
    <div style={{width:"100%",height:"100%",background:"#17153B"}}>
      <Navbar/>
      <div style={{display:"flex"}}>
      <Sidebar/>
      <p style={{marginLeft:"2rem",color:"#F5F7F8"}}>Dashboard</p>
      </div>

    </div>
    
    </>
  )
}

export default Home
