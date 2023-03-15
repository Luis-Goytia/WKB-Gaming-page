import React from 'react';
import BusinessProblem from "../../../../../assets/Services/img/EsportServices/EsportConsulting/BusinessProblem.svg";
import Styles from './Workflow.module.css'
export const Workflow = () => {
    return (
        <div >
            <img src={BusinessProblem} alt="BusinessProblem" className={Styles.business} />
        </div>
    )
}