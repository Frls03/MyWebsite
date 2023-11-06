
import './styles/Inicio.css';

const Inicio = () => {
  return (
    <div>
      <div className="container about-container">
        <div className="row">
          <div className="col-md-5 about">
            <h2 className="text-center">
              Jr. Developer
            </h2>
            <hr />
            <br />
            <p >
              Hola, soy Luis. Actualmente estoy cursando el octavo semestre de Ingeniería Informática y tengo 21 años. Mi pasión por la programación me ha llevado a perseguir constantemente el conocimiento y a adentrarme en diversas investigaciones por mi cuenta. Mi fascinación por la tecnología y el mundo digital me ha impulsado a soñar con convertirme en un experto en seguridad informática.
            </p>
            <button className='btn'><b>Download CV</b></button>
          </div>
          <div className="col-md-6 mx-auto">
            <img src="https://i.pinimg.com/originals/54/5d/c7/545dc70147b6b8a300d33ef5cc51ca5a.jpg" width={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  );

}

export default Inicio;
