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

};

export default Countries;
