import React, { Component } from 'react'
import {FaPhoneAlt, FaFax, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaGoogle} from 'react-icons/fa'
import 'bootstrap-social-gh-pages/bootstrap-social.css'

export class Footer extends Component {
    render() {
        return (
            <div>
               <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
               
                <div className="col-7 col-sm-5 footer-font">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <FaPhoneAlt/>: +852 1234 5678<br />
		              <FaFax/>: +852 8765 4321<br />
		              <FaEnvelope/>: <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                    </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                         
                        
                        <a href="http://www.facebook.com/profile.php?id="><FaFacebook color="Blue" size="3rem"/></a>
                        <a  href="http://www.instagram.com/in/"><FaInstagram color="#e75480" size="3rem"/></a>
                        
            
                         <a  href="mailto:"><FaEnvelope color="red" size="3rem"/></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Kavaach Networks </p>
                </div>
            </div>
        </div>
    </div> 
            </div>
        )
    }
}

export default Footer
