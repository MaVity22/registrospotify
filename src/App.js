import './App.css';
import Header from './components/Header';

const pagPrincipal = 'https://open.spotify.com/?';

function App() {
  return (
    <div className="Register">
      <Header link={pagPrincipal}></Header>
    </div>
  );
}

export default App;
