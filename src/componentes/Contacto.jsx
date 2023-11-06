
import React from 'react';
import './styles/Inicio.css';

const Contacto = () => {
  return (
    <div className="container mt-4">
      <h2 className='contact-title text-center'>Contacto</h2>
      <div className="row mt-4">
        <div className="col-md-8 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1"><b>Correo electrónico</b></label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"><b>Mensaje</b></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
