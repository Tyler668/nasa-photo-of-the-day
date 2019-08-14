import React from "react";



const Photo = (props) => {
    console.log(props);
    if (!props.pic) return <h3>Loading...</h3>;
    return (
        
        <div className="photoCont">
            <img className="photo" src={props.pic.hdurl}></img>
            <h2 className="title">{props.pic.title}</h2>
            <p className="caption">{props.pic.explanation}</p>
        </div>
    );
}


export default Photo;