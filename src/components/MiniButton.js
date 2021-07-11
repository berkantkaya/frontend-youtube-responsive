import React from 'react'
import './MiniButton.css'

const MiniButton = ({title}) => {
    return (
        <div className="miniB" style={{display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgb(215, 212, 212)',padding:'5px 10px',borderRadius:20,backgroundColor:'whitesmoke',marginRight:15,fontSize:14.5}}>
           <span>{title}</span> 
        </div>
    )
}

export default MiniButton
