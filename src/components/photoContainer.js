import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./photo";


const PhotoContainer = () => {
    const [pic, setPic] = useState('');
    const date = '2018-03-19';
    useEffect(() =>
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(res => {
                const picInfo = res.data;
                setPic(picInfo);
            }), []);


    return (
        <Photo pic={pic} />
    );
}


// Create css dropdown and make another file that structures and adds it
// add click listeners to each dropdown that set the date in this file's url to equal the dropdown date

export default PhotoContainer;