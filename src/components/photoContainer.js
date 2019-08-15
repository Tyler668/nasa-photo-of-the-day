import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./photo";


const PhotoContainer = () => {
    const [pic, setPic] = useState([]);
    const date = '2012-03-10';
    //&date=${date}
    useEffect(() =>
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=X4JYcfh7VPW7CneMLFcwSDB6rpdYzPZEj0P9AL32&date=${date}`)
            .then(res => {
                const picInfo = res.data;
                setPic(picInfo);
            }), []);


    return (
        <Photo pic={pic} />
    );
}

// https://api.nasa.gov/planetary/apod?api_key=X4JYcfh7VPW7CneMLFcwSDB6rpdYzPZEj0P9AL32
export default PhotoContainer;