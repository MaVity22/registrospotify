import React from 'react';
import imgLogo from '../img/logoSpotify.png'
import '../css/Header.css';
 
const Header = ({ link}) => {
    
    return (
        <div className='contenedor'>
            <a className='header' href={link}>
                <div className='logo'>
                    <img id="logo" src={imgLogo} alt="logo_Spotify" />
                    <h1 id="nombre-logo">Spotify
                    <span id='marcaRegis'>&reg;</span>
                    </h1>
                </div>
            </a>
        </div>
        
        
        );
}
export default Header;