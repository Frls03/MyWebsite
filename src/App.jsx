import { Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import './componentes/styles/main.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exec element={<Inicio />} />
        <Route path='/Proyectos' element={<Proyectos />} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
