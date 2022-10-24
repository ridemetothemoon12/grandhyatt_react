import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
