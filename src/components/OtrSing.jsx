import React from 'react';
import logoFB from '../img/logoFacebook.png';
import logoGl from '../img/logoGoogle.png';
import '../css/OtrSing.css';

const linkFB = 'https://es-la.facebook.com/login';
const linkGgle = 'https://accounts.google.com/InteractiveLogin/signinchooser?ifkv=Af_xneGOTbe68kQtosqu5M4oaX4xNS88gKNeGQiadqurXUMGAS55zUHVLMLFFXzeGrLiWd8KXntC_g&flowName=GlifWebSignIn&flowEntry=ServiceLogin';

const OtrSing = () => {

    return (
        <div className='cont-otros'>
            <a className='btn-regis' href={linkFB}>
                <div className='facebook'>
                    <img className="logo" src={logoFB} alt="logo_Facebook" />
                    <h1 className='txt-reg'>Registrarte con Facebook</h1>
                </div>
            </a>
            <a className='btn-regis' href={linkGgle}>
                <div className='google'>
                    <img className="logo" src={logoGl} alt="logo_Google" />
                    <h1 className='txt-reg'>Registrarte con Google</h1>
                </div>
            </a>
        </div>
    );
}
export default OtrSing;