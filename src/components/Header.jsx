import React from 'react'
import logo from '../images/LOGO_MMR.png'

export const Header = () => {
  return (
    <>
    <header style={{color:"white"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <a href=" ">
              <img src={logo} height="100" alt="No Encontrada"/>
          </a>

          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
                <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Inicio</a></h4>
                <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Nosotros</a></h4>
                <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Servicios</a></h4>
                <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Proyectos</a></h4>
                <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Contacto</a></h4>
            </div>
          </div>

      </nav>
    </header>
    </>
  )
}
