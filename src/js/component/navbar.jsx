import React from "react";
import styled from "styled-components";
import logo_completo from "../../img/logo_completo.png"

const Brand = (props) => {

  return (
    <>
     <img src={props.logo} alt="Logo" className="logo" style={{height: 80, width:170}} />
    </>
  )
}

const NavitemHome = (props) => {
  return (
    <>
      <li className="nav-item active">
        <a className="nav-link" href="">
          {props.item}
        </a>
      </li>
    </>
  );
}

const Navitem = (props) => {
  return (
    <>
      <li className="nav-item">
      <a className="nav-link" href="#">{props.item}<span className="sr-only">(current)</span></a>
      </li>
    </>
  );

}


const ToggleButton = () =>{
  return(
    <>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  )
}

// const Active = (props) => {
//       <span class="sr-only">{props.active}</span>
// }

const Navbar = () => {
  
    return (
      <>
        <nav id="navbar-container" className="navbar fixed-top navbar-expand-lg"
         >
          <span style={{marginLeft: 45}}><Brand logo={logo_completo}/></span>
          <ToggleButton />
            <div className="collapse navbar-bs-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <NavitemHome item="Home"/>
                <Navitem item="About" />
                <Navitem item="Services" />
                <Navitem item="Contact" />
              </ul>
            </div>
            
          </nav>
      </>
    );
}



export default Navbar;
