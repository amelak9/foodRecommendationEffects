import React from "react";

import "./homepage.css"

const Homepage = () => {
  return (
      <div className="homepage">
        <div className="homepage-container">
            <div className="homepage-container__object">
                <p className="homepage-container__label">Age:</p>
                <input type="number" className="homepage-container__input"/>
            </div>
            <div className="homepage-container__object">
                <p className="homepage-container__label">Sex:</p>
                Male <input type="radio"/> Female <input type="radio"/>
            </div>
            <div className="homepage-container__object">
                <p className="homepage-container__label">Ethnicity:</p>
                <input type="text" className="homepage-container__input"/>
            </div>
            <div className="homepage-container__object">
             <p className="homepage-container__label">Healthy food preference:</p>
                I don't prefer healthy food <input type="radio"/><br/>
             I like to eat healthy sometimes <input type="radio"/><br/>
             I eat mostly healthy food <input type="radio"/>
            </div>
            <button type="button" onClick={handleClick} className="homepage-container__button">Next</button>
        </div>
      </div>
  );

  function handleClick() {
      window.location.href="noEffect"
  }
};

export default Homepage;

