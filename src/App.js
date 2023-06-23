import './App.css';
import Header from './components/Header';
import OtrSing from './components/OtrSing';

const pagPrincipal = 'https://open.spotify.com/?';

function App() {
  return (
    <div className="Register">
      <Header link={pagPrincipal}></Header>
      <OtrSing></OtrSing>
      <hr>
      </hr>
    </div>
  );
}

export default App;
