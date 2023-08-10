import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.about}</a>
            </li>
          </ul>
         
         <div className="color-pallete border border-primary p-1 rounded">
          <div className="circle" id="MyId1" onClick={props.HanldeMode1}></div>
          <div className="circle" id="MyId2" onClick={props.HanldeMode2}></div>
          <div className="circle" id="MyId3" onClick={props.HanldeMode3}></div>
          <div className="circle" id="MyId4" onClick={props.HanldeMode4}></div>
         </div>

          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode ==='light'? "Dark mode":"Light mode"}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

