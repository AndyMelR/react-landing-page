import React from "react";


const Brand = (props) => {
  return (
    <>
    <a className="navbar-brand"  href="">{props.brand}</a>    
    </>
  )

}

const NavitemHome = (props) => {
  return (
    <>
      <li className="nav-item active">
        <a class="nav-link" href="">
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
      <a class="nav-link" href="#">{props.item}<span class="sr-only">(current)</span></a>
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

// const Active = (props) => {
//       <span class="sr-only">{props.active}</span>
// }

const Navbar = () => {
    return (
      <>
        <nav id="navbar-container" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <Brand brand="Start Bootstrap" />
          <ToggleButton />
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
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


//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <a class="navbar-brand" href="#">Navbar</a>

//   <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
//     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav> */