import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/layouts/header';
import Navbars from './components/layouts/navbar';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbars />
      <main>
        <Routes></Routes>
      </main>
    </div>
  );
}

export default App;
