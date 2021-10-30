import React from 'react';
import './Nav.css'
import { Link , Redirect }  from 'react-router-dom';



function Nav (){

    return (
            <div className="row landing navigation">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
          
                            <div>
                                <a className="nav-title">Magic Mint</a>
            
                            </div>
                    </div>
                    
                    <div className="col-md-4 col-lg-4 mid-content ">

                    <a className="nav-item-link" target="_blank" href="https://www.rarible.org">
                        Protocol
                    </a>
                    </div>
                    <div className="col-md-4 col-lg-4 right-content">
                        <button className="nav-button">
                            <a  className="nav-item-link" target="_blank" href="https://app.magicmint.xyz/">Launch App</a>
                        </button>
                    </div>
                    </div>
            </div>
    
     );
    
}

export default  Nav;