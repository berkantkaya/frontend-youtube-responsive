import React from 'react'
import './SidebarB.css'

const SidebarB = ({icon,title}) => {
    return (
        <div className="b" style={{display:'flex',alignItems:'center',border:'1px solid transparent',height:40,fontSize:15}}>
            <span style={{marginRight:25,marginTop:4,marginLeft:30}}>{icon}</span>
            <span style={{fontWeight:'500',marginBottom:4}}>{title}</span>
        </div>
    )
}

export default SidebarB
