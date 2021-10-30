import React from 'react';
import './Footer.css'

export default function Footer (){

    return(
        <div className="row footer-align">


            <div className="first-section">
                <div>
                    <a href="https://twitter.com/raribledao" className="footer-item">Twitter</a>
                </div>
                <div>
                    <a href="https://discord.gg/" className="footer-item">Discord</a>
                </div>
                <div>
                    <a href="https://gov.rarible.org/" className="footer-item">Forum</a>
                </div>
                <div>
                    <a href="https://rarible.org" className="footer-item">Protocol</a>
                </div>
            </div>


            <div className="third-section">
                <div className="footer-item">MAGICMINT</div>
                <div className="footer-item">2021</div>
            </div>
        </div>
    )



}