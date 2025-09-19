import React, { useState } from "react";
import './Country.css'
const Country = ({ country,handelVisitedCountry, handelVisitedFlag}) => {
//   console.log(country.area.area)
const [visited, setVisited]=useState(false)

  const handelVisited=()=>{
    //(1 system))
    // console.log('visited')
    // if(visited){
    //     setVisited(false)
    // }else{
    //     setVisited(true)
    // }


    //(2 system)
    // setVisited(visited?false:true)


    //(2 system)
    setVisited(!visited)
    handelVisitedCountry(country)
  }

  return (
    <div className={`country ${visited && 'visited-country'}`}>
    {/* <div className={`country border ${visited?'visited-country':'not-visit'}`}> */} 
    {/* <div className={`country ${visited&&'visited-country'}`}> */}
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>name : {country.name.common}</h3>
      <h3>population : {country.population.population}</h3>
      <p>Area : {country.area.area}   
        <br /> {country.area.area > 30000?"Big country":"small country"}</p>
        <button onClick={handelVisited}>
            {visited?'Visited':"Not Visited"}
        </button>
        <button onClick={()=>{handelVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
    </div>
  );
};
     
export default Country;
