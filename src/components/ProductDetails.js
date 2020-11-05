import React from 'react'
import '../App.css';
//importing some of the images from the system
import greymen from "./images/grey.jpg"
import grey from "./images/4.jpg";
import darkblue from "./images/5.jpg";
import pink from "./images/pink shoes.jpeg"
import black from "./images/1.jpg";
import red from "./images/2.jpg";
import white from "./images/3.jpg";
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {

    const shoes = {
        "grey-simple-men-shoe": {
            name: "Grey Simple Men Shoe",
            img: greymen
        },
        "grey-men-shoe": {
            name: "Grey Men Shoe",
            img: grey
        },
        "dark-blue-leather-sneakers": {
            name: "Dark Blue-Leather Sneakers",
            img: darkblue
        },
        "pink-sneaker": {
            name: "Pink Sneaker",
            img: pink
        },
        "red-sneaker": {
            name: "Red Sneaker",
            img: red
        },
        "white-sneaker": {
            name: "White Sneaker",
            img: white
        },
    };
    const {productId} = useParams();
    const product = shoes[productId];
    const {name, img} = product;
    
    return (
        <div>
            <h4>{name}</h4>
            <img src={img} alt={name}/>
        </div>
    )
}