import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                <MenuIcon/>
                </IconButton>
                <img src="https://www.webajans.com/wp-content/uploads/2017/09/YouTube-Yeni-Logo-Degisimi-2017.gif" alt=""/>
            </div>
            <div className="header-middle">
                <div className="input">
                    <input placeholder="Ara" type="text" />
                    <span  className="search"><SearchIcon/></span>
                </div>
                <IconButton>
                   <MicIcon/>
                </IconButton>

           </div>
           <div className="header-right">
           <IconButton>
                   <AppsIcon/>
                </IconButton>
                <IconButton>
                   <MoreVertIcon/>
                </IconButton>
                <button className="btn">
                    <Avatar/> <span>Oturum Aç</span>
                </button>
          </div>
        </div>
    )
}

export default Header
