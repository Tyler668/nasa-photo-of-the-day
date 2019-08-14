import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./photo";


const PhotoContainer = () => {
    const [pic, setPic] = useState([]);
    const date = '2018-03-19';
    //&date=${date}
    useEffect(() =>
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(res => {
                const picInfo = res.data;
                setPic(picInfo);
            }), []);


    return (
        <Photo pic={pic} />
    );
}



export default PhotoContainer;