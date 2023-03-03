import React from "react";

const Brand = (props) => {
  return (
    <>
    <a className="navbar-brand"  href="">{props.brand}</a>    
    </>
  )

}

const Navitem = (props) => {
  return (
    <>
      <li className="nav-item">
        <a class="nav-link" href="">
          {props.item}
        </a>
      </li>
    </>
  );

}

const ToggleButton = () =>{
  return(
    <>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </>
  )
}

const Navbar = () => {
    return (
      <>
        <nav id="navbar-container" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <Brand brand="Start Bootstrap" />
          <ToggleButton />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <Navitem item="Home" />
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