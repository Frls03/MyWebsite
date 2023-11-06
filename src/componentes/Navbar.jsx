
import './styles/Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://media-gua1-1.cdn.whatsapp.net/v/t61.24694-24/381267093_336462428837908_2799190385566691783_n.jpg?ccb=11-4&oh=01_AdRltDJ0TAytWmXfDe9jrPGhoe2LRZtcQIkPx0OT1RORsw&oe=655582B0&_nc_sid=e6ed6c&_nc_cat=105" className="navbar-img" alt="" />
          Luis Franco
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Proyectos">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
