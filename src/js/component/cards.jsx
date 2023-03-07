import React from "react";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import bananabread from "../../img/bananabread.jpg";
import image5 from "../../img/image5.jpg";
import image6 from "../../img/image6.jpg";
import boda from "../../img/boda.jpg";



// const Body = (props) => {
//     return (
//         <>
//         <h5 className="card-title">{props.title}</h5>
//             <p className="card-text">
//              {props.text}
//             </p>
//         </>
//     )

// }

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={props.image} alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>                  
                </div>
                <div className="card-footer">
                 <a href="#" className="btn btn-primary">{props.buttonText}</a>
                </div>
            </div>
      </>
    );
}

const Cards = () => {
    return(
        <>
        <div className="card-container">
            <Card
                image={image2}
                title="First Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image={image5}
                title="Second Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image={boda}
                title="Third Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image={image6}
                title="Fourth Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

        </div>
        </>
    )
}

export default Cards;