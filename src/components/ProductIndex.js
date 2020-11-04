import React from 'react'
import { Link } from 'react-router-dom'

//importing some of the images from the system
import greymen from "./images/grey.jpg"
import grey from "./images/4.jpg";
import darkblue from "./images/5.jpg";
import pink from "./images/pink shoes.jpeg"


export const ProductIndex = () => {
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
    return (
        <div>
             <ul>
                {Object.entries(shoes).map(([productId, {name, img}]) =>
                    (

                        <li key={productId}>
                            <Link to={productId}>
                                <h2>{name}</h2>
                                <img src={img} alt={name}/>
                             </Link> 
                         </li> 
                    ) 
                )}
            </ul>
        </div>
    )
}
