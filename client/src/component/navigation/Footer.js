import React from 'react'

// React Icon Insert
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {FiInstagram} from  'react-icons/fi'

// Footer scss

import '../../scss/footer.scss'

const Footer = () =>{
    return (
        <div className="Footer">
            <div className="company-intro">
                Company Name : LIKELION CO., LTD. <br/>
                Address : 38A Nguyễn Thị Diệu, Phường 6, Quận 3, TP HCM <br/>
                Director : Na SEONG YEONG <br/>
                Registration Number : 0316131954 <br/>
                Email : likelion.vn@likelion.net
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