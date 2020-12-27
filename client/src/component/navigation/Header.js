import React from 'react'
import logo from '../../img/wordmark_E_B.png' // 로고 호출
import '../../scss/header.scss'
const Header = () =>{
    return (
        <div  className="header">
            <img src={logo} alt=""/>
            <div className="search">
            <input type="text"/>
            <button>Search</button>
            </div>
        </div>
    )
}

export default Header