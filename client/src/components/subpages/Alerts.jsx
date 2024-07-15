import React from 'react'
import Navbar from '../custom/Navbar'
import Sidebar from '../custom/Sidebar'
import styled from 'styled-components'
function Alerts() {
 
  return (
    <div style={{width:"100%",height:"100%",background:"#17153B"}}>
      <Navbar/>
      <div style={{display:"flex"}}>
      <Sidebar/>
      <p style={{paddingLeft:"2rem",color:"#F5F7F8"}}>No Notifications Yet</p>
      </div>
    </div>
  )
}

export default Alerts


