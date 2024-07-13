import React from 'react'
import Sidebar from '../components/custom/Sidebar'
import Navbar from '../components/custom/Navbar'
function Alerts() {
  return (
    <div style={{width:"100%",height:"100%",background:"#17153B"}}>
      <Navbar/>
      <div style={{display:"flex"}}>
      <Sidebar/>
       <p style={{paddingLeft:"2rem",color:"#F5F7F8"}}>Alerts</p>
      </div>
    </div>
  )
}

export default Alerts


