import { Link } from 'react-router-dom';

import './product.css';

//importing some of the images from the system
import greymen from "./images/grey.jpg"
import grey from "./images/4.jpg";
import darkblue from "./images/5.jpg";
import pink from "./images/pink shoes.jpeg";
import black from "./images/1.jpg";
import red from "./images/2.jpg";
import white from "./images/3.jpg";

//importing material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import cx from 'classnames';

//importing

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export const ProductIndex = () => {

    const classes = useStyles();

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
            name: "Blue-Leather Sneakers",
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
    return (
        <div id='product'>
                {Object.entries(shoes).map(([productId, {name, img}]) =>
                    (
                                <Card key={productId} className={cx(classes.root, "card")}>
                                    
                                    <CardActionArea>
                                    
                                            <CardMedia
                                            className={classes.media}
                                            image={img}
                                            title={name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    <Link className="Typography" to={productId}>{name}</Link> 
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <button className="cards-button">
                                        Share
                                        </button>
                                        <button className="cards-button">
                                        Learn More
                                        </button>
                                    </CardActions>
                                    </Card>
                         
                    ) 
                )}
        </div>
    )
}
