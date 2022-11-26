import React from "react";
import "./recipe-form.css"

const NoEffect = () => {
    return (
        <div className="recipe-form__Layout">
            <p className="recipe-form__label">Choose one of the recipes in each row: </p>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Fried Mac and Cheese Balls</p>
                    Calories: 543<br></br>
                    Cholesterol: 147mg<br></br>
                    Protein: 20g<br></br>
                    Total Sugars: 7g<br></br>
                    Iron: 3mg
                </div>
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Classic Macaroni Salad</p>
                    Calories: 390<br></br>
                    Cholesterol: 8mg<br></br>
                    Protein: 7g<br></br>
                    Total Sugars: 16g<br></br>
                    Iron: 2mg
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Cheeseburger Quesadilla</p>
                    Calories: 1054<br></br>
                    Cholesterol: 196mg<br></br>
                    Protein: 60g<br></br>
                    Total Sugars: 4g<br></br>
                    Iron: 8mg
                </div>
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Homemade Black Bean Veggie Burgers</p>
                    Calories: 198<br></br>
                    Cholesterol: 47mg<br></br>
                    Protein: 11g<br></br>
                    Total Sugars: 2g<br></br>
                    Iron: 4mg
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Nutella Chocolate Cake</p>
                    Calories: 855<br></br>
                    Cholesterol: 103mg<br></br>
                    Protein: 8g<br></br>
                    Total Sugars: 75g<br></br>
                    Iron: 2mg
                </div>
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Delicious Cinnamon Baked Apples</p>
                    Calories: 147<br></br>
                    Cholesterol: 2mg<br></br>
                    Protein: 1g<br></br>
                    Total Sugars: 27g<br></br>
                    Iron: 0mg
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">French Toast</p>
                    Calories: 240<br></br>
                    Cholesterol: 128mg<br></br>
                    Protein: 11g<br></br>
                    Total Sugars: 6g<br></br>
                    Iron: 3mg
                </div>
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Reduced Fat French Toast</p>
                    Calories: 77<br></br>
                    Cholesterol: 1mg<br></br>
                    Protein: 5g<br></br>
                    Total Sugars: 3g<br></br>
                    Iron: 1mg
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Apple Cinnamon Oatmeal</p>
                    Calories: 217<br></br>
                    Cholesterol: 10mg<br></br>
                    Protein: 8g<br></br>
                    Total Sugars: 17g<br></br>
                    Iron: 2mg
                </div>
                <div className="recipe-form__recipe">
                    <p className="recipe-form__recipe-title">Oatmeal Energy Bars</p>
                    Calories: 116<br></br>
                    Cholesterol: 0mg<br></br>
                    Protein: 2g<br></br>
                    Total Sugars: 6g<br></br>
                    Iron: 1mg
                </div>
            </div>
            <button className="recipe-form__button" type="submit">Done</button>
        </div>
    );
};

export default NoEffect;

