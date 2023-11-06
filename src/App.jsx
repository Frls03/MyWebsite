import { Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer';
import Proyectos from './componentes/Proyectos';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exec element={<Inicio />} />
        <Route path='/Proyectos' element={<Proyectos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
