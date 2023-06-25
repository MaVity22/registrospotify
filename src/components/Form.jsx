// Probando carga a GitHub
// HAciendo cambios
import { useState } from 'react';
// Icono de error
import LogoError from '../img/Error.png'
import '../css/Form.css'
// Probando carga a GitHUb
const Form = (props) => {

    const { state, setState } = props;
    const [eEmail, seteEmail] = useState("");
    const [ePasswd, setePasswd] = useState("");
    const [eNick, seteNick] = useState("");
    const [eDay, seteDay] = useState("");
    const [eMonth, seteMonth] = useState("");
    const [eYear, seteYear] = useState("");

    const handlerEmail = (e) => {
        const entrada = e.target.value;
        setState({ ...state, email: entrada });
        if (entrada.trim().length === 0) {
            seteEmail('Es necesario que indiques tu correo electrónico.');
        } else {
            seteEmail("");
        }
    }

    const handlerPasswd = (e) => {
        const entrada = e.target.value;
        setState({ ...state, password: entrada });
        if (entrada.trim().length === 0) {
            setePasswd('Es necesario que indiques una contraseña.');
        }
        else if (entrada.length >= 1 && entrada.length < 7) {

            setePasswd('Tu contraseña es demasiado corta.');
        }
        else {

            setePasswd("");
        }
    }

    const handlerNick = (e) => {
        const entrada = e.target.value;
        setState({ ...state, nickName: entrada });
        if (entrada.trim().length === 0) {

            seteNick('Indica un nombre para tu perfil.');
        } else {
            setePasswd("");
            seteNick("");
        }
    }

    const handlerDay = (e) => {
        const entrada = e.target.value;
        setState({ ...state, day: entrada });
        if (entrada >= '1' || entrada <= '31') {
            setePasswd("");
            seteDay('');
        }
        else {

            seteDay("Indica un día válido del mes.");
        }
    }

    const handlerMonth = (e) => {
        const entrada = e.target.value;
        setState({ ...state, month: entrada });
        if (entrada === "Mes") {

            seteMonth('Selecciona tu mes de nacimiento.');
        }
        else {
            setePasswd("");
            seteMonth("");
        }
    }

    const handlerYear = (e) => {
        const entrada = e.target.value;
        setState({ ...state, year: entrada });
        if (entrada >= 1900) {
            setePasswd("");
            seteYear('');
        }
        else {

            seteYear("Indica un año válido.");
        }
    }

    return (
        <form>
            <div className="input">
                <label htmlFor="email">¿Cuál es tu correo electrónico?</label>
                <input type="text" name="email" size={30} onChange={handlerEmail} onBlur={handlerEmail} placeholder="Pon tu correo electrónico." />
                {eEmail && (
                    <div className='Error-msg'>
                        <img className="icon" src={LogoError} alt='error'></img>
                        <p style={{ color: 'red' }}> {eEmail}</p>
                    </div>
                )
                }
                <p id='telef'><a href='https://accounts.spotify.com/es/login/phone?intent=signup&continue=https%3A%2F%2Fopen.spotify.com%2F%3Fflow_id%3Dd130cce9-a864-4822-8b5d-493c6b6e53a3%253A1687525534&flow_ctx=d130cce9-a864-4822-8b5d-493c6b6e53a3:1687525534&creation_point=https://open.spotify.com/?sp_cid=25b911ee696f7f3c927e4c72f596c113&device=desktop' style={{ color: 'green' }}>
                    Usa un número de teléfono en su lugar.</a></p>
            </div>
            <div className="input">
                <label htmlFor="password">Crea una contraseña</label>
                <input type="password" name="password" size={30} onBlur={handlerPasswd} onChange={handlerPasswd} placeholder="Crea una contraseña." />
                {ePasswd && (
                    <div className='Error-msg'>
                        <img className="icon" src={LogoError} alt='error'></img>
                        <p style={{ color: 'red' }}> {ePasswd}</p>
                    </div>
                )
                }
            </div>
            <div className="input">
                <label htmlFor="nickName">¿Cómo quieres que te llamemos?</label>
                <input type="text" name="nickName" size={30} onBlur={handlerNick} onChange={handlerNick} placeholder="Pon un nombre de perfil." />
                {eNick && (
                    <div className='Error-msg'>
                        <img className="icon" src={LogoError} alt='error'></img>
                        <p style={{ color: 'red' }}> {eNick}</p>
                    </div>
                )
                }
                <p className='subTit'>Esto aparece en tu perfil.</p>
            </div>
            <div className='input'>
                <label htmlFor="fecha">¿Cuál es tu fecha de nacimiento?</label>
                <div className='cont-fecha'>
                    <div className="input-day">
                        <p className='subTit-Fec'>Día</p>
                        <input type="text" name="day" size={5} onChange={handlerDay} placeholder="DD" />
                    </div>
                    <div className="input-month">
                        <p className='subTit-Fec'>Mes</p>
                        <select name="month" value={state.day} onChange={handlerMonth}>
                            <option value='' selected disabled>Mes</option>
                            <option value="01">Enero</option>
                            <option value="02">Febrero</option>
                            <option value="03">Marzo</option>
                            <option value="04">Abril</option>
                            <option value="05">Mayo</option>
                            <option value="06">Junio</option>
                            <option value="07">Julio</option>
                            <option value="08">Agosto</option>
                            <option value="09">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                    </div>
                    <div className="input-year">
                        <p className='subTit-Fec'>Año</p>
                        <input type="text" name="year" size={5} onChange={handlerYear} placeholder="AAAA" />
                    </div>
                </div>

                <div className='errores'>
                    {
                        <p style={{ color: 'red' }}> {eDay}</p>
                    }
                    {
                        <p style={{ color: 'red' }}> {eMonth}</p>
                    }
                    {
                        <p style={{ color: 'red' }}> {eYear}</p>
                    }
                </div>
            </div>
            <div className="input">
                <label htmlFor="genero">¿Cuál es tu género?</label>
                <div className='opciones'>
                    <div className='op-genero'>
                        <input type="radio" id="genero-hombre"  className='radio'/>
                        <label htmlFor="hombre">Hombre</label>
                    </div>
                    <div className='op-genero'>
                        <input type="radio" id="genero-mujer"  className='radio'/>
                        <label htmlFor="mujer">Mujer</label>
                    </div>
                    <div className='op-genero'>
                        <input type="radio" id="genero-nBinario"  className='radio'/>
                        <label htmlFor="nBinario">No Binario</label>
                    </div>
                    <div className='op-genero'>
                        <input type="radio" id="genero-otro"  className='radio'/>
                        <label htmlFor="otro">Otro</label>
                    </div>
                    <div className='op-genero'>
                        <input type="radio" id="genero-no"  className='radio'/>
                        <label htmlFor="no">Prefiero no responder</label>
                    </div>
                </div>
            </div>
            <div className='input'>
                <div className='opcion1'>
                    <input type="checkbox" id="op1" />
                    <label htmlFor="op1">No quiero recibir mensajes de marketing de Spotify</label>
                </div>
                <div className='opcion2'>
                    <input type="checkbox" id="op2" />
                    <label htmlFor="op2">Compartir mis datos de registro con los proveedores de contenidos de Spotify para fines de marketing.</label>
                </div>
            </div>
            <input type="submit" value="Regístrate" />
        </form>
    );
}

export default Form;