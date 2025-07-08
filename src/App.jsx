import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer'
import Home from './pages/home';
import Header from './components/header/header';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>

     <Footer />
     </div>
  );
 
}

export default App
