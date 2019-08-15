import React from "react";
import styled from 'styled-components';


const WrapperDiv = styled.div`
display: flex;
justify-content: center;
align-content: center;
background: black;
border: 5px solid black;
flex-flow: column;
color: whitesmoke;
height: 100vh;
`;

const Image = styled.img`
display: flex;
justify-content: center;
align-content: center;
margin: auto;
height: 70%;
`;

const TitleH2 = styled.h2`
font-size: 4rem;
color: #b8b0a4;
font-family: 'Lexend Zetta', sans-serif;
padding-bottom: none;
`;

const Caption = styled.p`
padding: 20px;
font-size: 1.6rem;
font-family: 'Roboto Condensed', sans-serif;
`;



const Photo = (props) => {
    if (!props.pic) return <h3>Loading...</h3>;


    return (

        // <WrapperDiv>
        //     <Card>
        //         <Card.Content>
        //             <img className="photo" src={props.pic.hdurl}></img>
        //             <Card.Header className="title">{props.pic.title}</Card.Header>
        //             <Card.Description className="caption">{props.pic.explanation}</Card.Description>
        //         </Card.Content>
        //     </Card>
        // <WrapperDiv>


        <WrapperDiv>
            <Image src={props.pic.hdurl}/>
            <TitleH2>{props.pic.title}</TitleH2>
            <Caption>{props.pic.explanation}</Caption>
        </WrapperDiv>
    );
}


export default Photo;