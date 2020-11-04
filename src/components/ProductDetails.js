import React from 'react'

//importing some of the images from the system
import greymen from "./images/grey.jpg"
import grey from "./images/4.jpg";
import darkblue from "./images/5.jpg";
import pink from "./images/pink shoes.jpeg"
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {

    const shoes = {
        "grey-simple-men-shoe": {
            name: "Grey Simple Men Shoe",
            img: greymen
        },
        "grey-stylish-men-shoe": {
            name: "Grey Stylish Men Shoe",
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
