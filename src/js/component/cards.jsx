import React from "react";


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
                image="https://via.placeholder.com/500x325"
                title="First Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image="https://via.placeholder.com/500x325"
                title="Second Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image="https://via.placeholder.com/500x325"
                title="Third Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image="https://via.placeholder.com/500x325"
                title="Fourth Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

        </div>
        </>
    )
}

export default Cards;