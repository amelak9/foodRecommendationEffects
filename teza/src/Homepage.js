import React from "react";

import "./homepage.css"

const Homepage = () => {
  return (
      <div className="homepage">
        <div className="homepage-container">
            <div className="homepage-container__object">
                Age: <input type="number"/>
            </div>
            <div className="homepage-container__object">
            Sex: Male <input type="checkbox"/> Female <input type="checkbox"/>
            </div>
            <div className="homepage-container__object">
            Ethnicity: <input type="text"/>
            </div>
            <div className="homepage-container__object">
                Healthy food preference:<br/>
                I don't prefer healthy food <input type="checkbox"/><br/>
             I like to eat healthy sometimes <input type="checkbox"/><br/>
             I eat mostly healthy food <input type="checkbox"/>
            </div>
            <button type="submit" className="homepage-container__button">Next</button>
        </div>
      </div>
  );
};

export default Homepage;

