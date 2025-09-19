import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [VisitedFlag,setVisitedFlag]=useState([])


  const handelVisitedCountry=(country)=>{
    // console.log('hhgfghdrfg',country);
    const newVisitedCountries =[...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
  };
  const handelVisitedFlag=(flag)=>{
    console.log('flag visited added',flag);
    const newVisitedFlag=[...VisitedFlag, flag]
    setVisitedFlag(newVisitedFlag)
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  // console.log(countries);
  return (
    <div>
      <h1>you,Me and baby visited countries: {countries.length}</h1>
          <h2>Total country visited {visitedCountries.length}</h2>
          <h3>Total Visited Flags: {VisitedFlag.length}</h3>
      <ol>
        {
          visitedCountries.map(country=> <li
          key={country.cca3.cca3}
          >{country.name.common}</li>)
        }
      </ol>
      <div className="visited-flags-containar">
        {
          VisitedFlag.map((flag, index)=> <img key={index} src={flag}></img>)
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}
           handelVisitedCountry={handelVisitedCountry} 
            handelVisitedFlag={ handelVisitedFlag}
           >
            
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
