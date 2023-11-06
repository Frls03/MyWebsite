
import img1 from './imgs/nasa.jpeg';
import img2 from './imgs/blog.jpeg';
import img3 from './imgs/animal.jpeg';
import './styles/Inicio.css';
import { Link } from 'react-router-dom';


const Proyectos = () => {
  return (
    <div>
      <h2 className="text-center title-card mt-4">Proyectos</h2>
      <div className="container" style={{ marginTop: '4vw', marginBottom: '8vw' }}>
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={img1} height={200} style={{ objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">NASA API</h5>
                <p className="card-text">
                  Este es un proyecto creado para aprender a manejar API'S con react, utlizando la API de la NASA
                </p>
                <Link to="https://github.com/Frls03/api-nasa.git" className='btn btn-primary'>Ver Más</Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">ReactJS, CSS y Tilewind</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={img3} height={200} style={{ objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Red Social</h5>
                <p className="card-text">
                  En este proyecto se realizó una copia de las publicaciones en Facebook utilizando ReactJS
                </p>
                <Link className='btn btn-primary' to="https://github.com/Frls03/animal-planet.git">Ver Más</Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">ReactJS, Bootstrap, Axios</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={img2} alt="Card image cap" height={200} style={{ objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Blog Personal</h5>
                <p className="card-text">
                  Acá aprendimos a realizar un Blog, para presentar informacion de casas.
                </p>
                <Link className='btn btn-primary' to="https://github.com/Frls03/blog.git">Ver Más</Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">Bootstrap, ReactJS y CSS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos;
