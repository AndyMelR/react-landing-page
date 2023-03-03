import React from "react";


const Body = (props) => {
    return (
        <>
        <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
             {props.text}
            </p>
        </>
    )

}

const Card = (props) => {
    return (
        <>

            <div className="card">
                <img className="card-img-top" src={props.image} alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">{props.buttonText}</a>
                </div>
            </div>
            
      </>
    );
    

}

const Cards = () => {
    return(
        <>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  g-4">
            <Card
                image="https://via.placeholder.com/150"
                title="First Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image="https://via.placeholder.com/150"
                title="Second Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image="https://via.placeholder.com/150"
                title="Third Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

            <Card
                image="https://via.placeholder.com/150"
                title="Fourth Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
                buttonText="Find Out More!"
            />

        </div>
        </>
    )
}

export default Cards;