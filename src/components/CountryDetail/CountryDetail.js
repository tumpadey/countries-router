import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import "./CountryDetail.css";

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            setCountry(data[0])
        })
        
    }, [])

  
    return (
        <div className ="detailStyle">
             <img src={country.flag}alt=""/>
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
             <p>Population: {country.population}</p>
            
           
        </div>

    );
};

export default CountryDetail;