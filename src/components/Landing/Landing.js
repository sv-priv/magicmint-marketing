import React, { Component } from 'react';
import './Landing.css';
import { Link , Redirect }  from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';




export default function Landing () {


    return(
        <div>
            <Nav/>
            <div className="landing-align">

                <div className="row landing-animation">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                                Lazy Minting to <em>Specific</em> addresses interface
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>

                <div className="row total-generated">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                            <div>
                                Mint an NFT without paying any gas fee and decide who can Claim it
                            </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>

                <div className="row buttons-landing">
   
                    <div className="col-lg-6 col-md-6 col-sm-12 browse-button">
                        <div className="button-text">
                            <div className="text-link-buttons"> 
                                Lazy-Mint 
                            </div>
                  
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6  col-sm-12 read-documentation-button">
                        <div className="button-text">
                            <div className="text-link-buttons"> 
                                Claim 
                            </div>
                  
                        </div>
                    </div>

                </div>

        
                <div className="row documentation">
                    <div className="title title-documentation">
                            LAZY MINT THE WAY YOU WANT

                    </div>
                    <div className="about">
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                            </div>
                            <div className="col-md-4 col-lg-4">
                            </div>
                            <div className="col-md-4 col-lg-4">
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="shape-svg">
                            <svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="147.398" y="27.897" width="119.206" height="119.796" rx="22" transform="rotate(90 147.398 27.897)" fill="#BAC2FF"/>
                                <rect x="87.7086" y="3" width="119.206" height="119.796" rx="22" transform="rotate(45 87.7086 3)" fill="#BAC2FF"/>
                                <g filter="url(#filter0_f)">
                                <circle cx="87.4866" cy="87.4994" r="55.7526" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_f" x="0.507364" y="0.520182" width="173.958" height="173.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="15.6133" result="effect1_foregroundBlur"/>
                                </filter>
                                </defs>
                            </svg>

                        </div>
                        <div className="subtitle">
                            Lazy Mint
                        </div>
                        <div className="description">
                            Simple and easy way to save up on gas fees
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                    <div className="shape-svg">
                        <svg width="177" height="171" viewBox="0 0 177 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M77.4002 20.801L83.9703 27.3711C85.9229 29.3237 89.0888 29.3237 91.0414 27.3711L97.6115 20.801C106.679 11.733 121.382 11.733 130.45 20.801L155.496 45.8473C164.564 54.9153 164.564 69.6174 155.496 78.6853L153.023 81.1582C151.07 83.1108 151.07 86.2766 153.023 88.2292L155.496 90.7021C164.564 99.7701 164.564 114.472 155.496 123.54L130.735 148.301C121.667 157.369 106.965 157.369 97.8966 148.301L91.3265 141.731C89.3739 139.779 86.2081 139.779 84.2554 141.731L77.6853 148.301C68.6174 157.369 53.9153 157.369 44.8473 148.301L19.801 123.255C10.733 114.187 10.733 99.4849 19.801 90.417L22.2738 87.9441C24.2265 85.9915 24.2265 82.8257 22.2738 80.873L19.801 78.4002C10.733 69.3322 10.733 54.6301 19.801 45.5622L44.5622 20.801C53.6301 11.733 68.3322 11.733 77.4002 20.801Z" fill="#BAC2FF"/>
                            <g filter="url(#filter0_f)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7902 125.957C33.7689 114.936 32.315 97.8297 40.5802 85.2986C32.3861 72.7819 33.7019 55.7722 44.6774 44.7968C56.638 32.8362 75.7647 32.3471 88.4334 43.1358C101.101 32.2515 120.318 32.908 132.32 44.9096C143.341 55.9309 144.795 73.037 136.53 85.568C144.724 98.0847 143.408 115.094 132.432 126.07C120.472 138.03 101.345 138.52 88.6763 127.731C76.0087 138.615 56.7918 137.959 44.7902 125.957Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_f" x="0.253044" y="0.372429" width="176.604" height="170.122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="17.5219" result="effect1_foregroundBlur"/>
                            </filter>
                            </defs>
                        </svg>


                        </div>
                        <div className="subtitle">
                            Pick and Choose 
                        </div>
                        <div className="description">
                        Pick which address can get the Item u lazy-minted

                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                    <div className="shape-svg">
                        <svg width="185" height="185" viewBox="0 0 185 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M92.5 20L143.765 41.2348L165 92.5L143.765 143.765L92.5 165L41.2348 143.765L20 92.5L41.2348 41.2348L92.5 20Z" fill="#BAC2FF"/>
                            <g filter="url(#filter0_f)">
                            <path d="M92.5 35L133.159 51.8414L150 92.5L133.159 133.159L92.5 150L51.8414 133.159L35 92.5L51.8414 51.8414L92.5 35Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_f" x="0" y="0" width="185" height="185" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="17.5" result="effect1_foregroundBlur"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                        <div className="subtitle">
                            Claim
                        </div>
                        <div className="description">
                            Check out the Claims page and see if u are bound to claim an NFT

                        </div>
                    </div>
                </div>
            
                <div className="row sponsors">
                    <div className="title title-sponsors"> BUILT WITH </div>
    
                    <div className="col-md-3 col-lg-3">

                    </div>
                    <div className="col-md-3 col-lg-3 sponsor">
                        <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M111.312 0H25.6875C11.5007 0 0 11.5007 0 25.6875V111.312C0 125.499 11.5007 137 25.6875 137H111.312C125.499 137 137 125.499 137 111.312V25.6875C137 11.5007 125.499 0 111.312 0Z" fill="#FEDA03"/>
                            <path d="M94.5309 67.998C98.846 66.8765 102.686 63.6487 102.686 57.159C102.686 46.3537 93.5115 43.8394 81.755 43.8394H34.9331V92.4962H54.6403V75.9828H78.0175C81.6191 75.9828 83.7257 77.4099 83.7257 80.9437V92.4962H103.433V80.3321C103.433 73.7062 99.6956 69.5269 94.5309 67.998ZM78.3572 62.8672H54.6403V58.1103H78.3572C80.9394 58.1103 82.5025 58.45 82.5025 60.4887C82.5025 62.5274 80.9394 62.8672 78.3572 62.8672Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="col-md-3 col-lg-3 sponsor">
                        <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6875 0C11.5007 0 0 11.5007 0 25.6875V111.312C0 125.499 11.5007 137 25.6875 137H111.312C125.499 137 137 125.499 137 111.312V25.6875C137 11.5007 125.499 0 111.312 0H25.6875ZM102.686 57.159C102.686 63.6487 98.8459 66.8765 94.5309 67.998C99.6955 69.5269 103.433 73.7062 103.433 80.3321V92.4962H83.7256V80.9437C83.7256 77.4099 81.619 75.9828 78.0174 75.9828H54.6403V92.4962H34.9331V43.8394H81.755C93.5115 43.8394 102.686 46.3537 102.686 57.159ZM54.6403 62.8672H78.3572C80.9394 62.8672 82.5025 62.5274 82.5025 60.4887C82.5025 58.45 80.9394 58.1103 78.3572 58.1103H54.6403V62.8672Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="col-md-3 col-lg-3">

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
        
    )

}