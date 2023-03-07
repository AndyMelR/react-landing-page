import React from "react";
import hero2 from "../../img/hero2.jpg"


const Jumbotron = () => {
    return(
        <>
        
            <div className="jumbotron"
            style={{ backgroundImage: `url(${hero2})`,
            // backgroundColor: linear(0,0,0,0.8),
            backgroundRepeat: "no-repeat",
            height: 600,
            backgroundSize:"cover"
             }}>
                    <h1 className="display-4"> A Warm Welcome!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce quis quam quis turpis dictum vulputate. Duis malesuada ipsum at nulla ullamcorper, quis laoreet dolor tempor.</p>
                    <p className="cat">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                    </p>
            </div>
        
        </>
    )
}

export default Jumbotron;