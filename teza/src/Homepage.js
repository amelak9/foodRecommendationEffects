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
                Healthy food preference: <input type="checkbox"/>
             <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
        </div>
      </div>
  );
};

export default Homepage;

