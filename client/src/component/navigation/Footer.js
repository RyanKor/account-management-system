import React from 'react'

// React Icon Insert
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {FiInstagram} from  'react-icons/fi'

const Footer = () =>{
    return (
        <div className="Footer">
            <div className="Copyright">This software is an open source, and you can use it for commercial purposes, but I would appreciate it if you could only identify the source of the original author.</div>
            <div className="company-intro">
                Company Name : LIKELION CO., LTD. <br/>
                Address : 38A Nguyễn Thị Diệu, Phường 6, Quận 3, TP HCM <br/>
                Director : Na SEONG YEONG <br/>
                Registration Number : 0316131954 <br/>
                Email : likelion.vn@likelion.net
            </div>
            <div className="copyright">
                Copyright© Ryan All rights reserved
            </div>
            <div className="sns">
                <FaFacebookSquare size="36" color="#4267B2"/>
                <AiFillYoutube size="36"  color="#FF0000"/>
                <FiInstagram size="36"  color="#E1306C"/>
            </div>
        </div>
    )
}

export default Footer