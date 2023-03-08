import React from 'react';
import { Brands } from './Brands';
import { Carousel } from './Carousel';
import { Contact } from './Contact';
import { Header } from './Header';
import Styles from './Home.module.css'
import { Why } from './Why';

export const Home = () => {
    return (
        <div>
            <Header />
            <Brands />
            <Carousel />
            <Why />
            <Contact/>
        </div>
    )
}