  
import React from 'react'

import { Outlet } from 'react-router-dom';

import '../App.css';
import Footer from './Footer/Footer';

import './product.css';

export const Products = () => {


    return (
        <>
            <div id="product">
                <h1 className="title">Products page</h1>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}