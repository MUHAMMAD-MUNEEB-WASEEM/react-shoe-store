  
import React from 'react'

import { Outlet } from 'react-router-dom';

import '../App.css';
import Footer from './Footer/Footer';

import './product.css';

import cx from 'classnames';

export const Products = () => {


    return (
        <>    
                <h1 className={cx("products", "overlay")}>Products</h1>
                <Outlet className={"topbot"}/>
                <Footer />
        </>
    )
}