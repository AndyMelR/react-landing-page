import React from "react";
import hero1 from "../../img/hero1.jpg"
import { AlphaPicker} from 'react-color';


const Jumbotron = () => {
    return(
        <>
            <div className="jumbotron"
            style={{ backgroundImage: `url(${hero1})`,
            zIndex:5,
            backgroundRepeat: "no-repeat",
            height: 600,
            backgroundSize:"cover"
             }}>
                    <h1 className="display-4"><span id="stay-healthy">Stay Healthy.</span> <span><strong id="be-wild">Be Wild !</strong></span> </h1>
                    <p className="lead">Repostería sin límites, saludable y deliciosa - Bocagua</p>
                    <p className="cta">
                        <a className="btn btn-jumbo btn-lg" href="#" role="button">Cuéntame mas!</a>
                    </p>
            </div>
        </>
    )
}

export default Jumbotron;