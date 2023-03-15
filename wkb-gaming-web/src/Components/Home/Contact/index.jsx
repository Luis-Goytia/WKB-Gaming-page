import React from 'react';
import { Forms } from './Form';
import Styles from './Contact.module.css'

export const Contact = () => {
    return (
        <div>
            <div className={Styles.subtitle}><h5>Say hello to your future team!</h5></div>
            <div className={Styles.subtitle}><p>Let's create what's next.</p></div>
            <div><Forms/></div>
        </div>
    )
}