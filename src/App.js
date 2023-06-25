import './App.css';
import Header from './components/Header';
import OtrSing from './components/OtrSing';
import React from "react";
import Form from './components/Form';

const pagPrincipal = 'https://open.spotify.com/?';

function App() {
  /*Difinición de estado Global*/
  const [state, setState] = React.useState({
    email: "",
    password: "",
    nickName: "",
    day: "",
    month: "",
    year: "",
    male: false,
    female: false,
    nBinari: false,
    other: false,
    nRespo: false,
    check1: false,
    check2: false
  });

  return (
    <div className="Register">
      <Header link={pagPrincipal}></Header>
      <OtrSing></OtrSing>
      <div className='separador'>
        <hr className='divisor'>
        </hr>
        o
        <hr className='divisor'>
        </hr>
      </div>
      <Form state={state} setState={setState}></Form>

    </div>
  );
}

export default App;
