import React from 'react';
import { Brands } from './Brands';
import { Header } from './Header';
import Styles from './Home.module.css'

export const Home = () => {
    return (
        <div>
            <Header />
            <Brands/>
        </div>
    )
}