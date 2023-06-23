import './App.css';
import Header from './components/Header';
import OtrSing from './components/OtrSing';

const pagPrincipal = 'https://open.spotify.com/?';

function App() {
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
      
    </div>
  );
}

export default App;
