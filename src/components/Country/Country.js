import React from 'react';
import "./Country.css";
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name, capital} = props.country;
    const history = useHistory();
    const handleClick = (countryName) =>{
        history.push(`/country/${countryName}`)
    }
   
    //<Link to ={`/country/${name}`}>Show detail of </Link>
    return (
        <div className ="countryStyle">
            <h2>Name: {name}</h2>
            <p>Capital: {capital}</p>
           
            <button onClick={() => handleClick(name)}>Click me</button>
        </div>
    );
};

export default Country;