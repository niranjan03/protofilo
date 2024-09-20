import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Error from './pages/error';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Project from './pages/Project'


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Work" element={<Work />} />
      <Route path='/Prject' element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
