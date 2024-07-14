import React from 'react'
import Sidebar from '../components/custom/Sidebar'
import Navbar from '../components/custom/Navbar'
function DataEntry() {
  return (
    <div style={{width:"100%",height:"100%",background:"#17153B"}}>
      <Navbar/>
      <div style={{display:"flex"}}>
      <Sidebar/>
       <h4 style={{paddingLeft:"2rem",color:"#F5F7F8"}}>DataEntry</h4>
      </div>
    </div>
  )
}

export default DataEntry