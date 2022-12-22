import React from "react";
import "./recipe-form.css"
import "./recipes.css"

const ExplanationPositionEffect = () => {
    return (
        <div className="recipe-form__Layout">
            <p className="recipe-form__label">Choose one of the recipes in each row: </p>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Classic Macaroni Salad</p>
                    <div className="recipe-form__recipe">
                        <div className="classic-macaroni-salad"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 8mg of cholesterol and 390 calories.
                    </label>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Fried Mac and Cheese Balls</p>
                    <div className="recipe-form__recipe">
                        <div className="fried-mac-cheese-balls"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 147mg of cholesterol and 543 calories.
                    </label>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Homemade Black Bean Veggie Burgers</p>
                    <div className="recipe-form__recipe">
                        <div className="veggie-burgers"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 47mg of cholesterol and 198 calories.
                    </label>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Cheeseburger Quesadilla</p>
                    <div className="recipe-form__recipe">
                        <div className="cheeseburger-quesadilla"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 196mg of cholesterol and 1054 calories.
                    </label>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">No-Mayo Chicken Salad</p>
                    <div className="recipe-form__recipe">
                        <div className="chicken-salad"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 7mg of cholesterol and 38 calories.
                    </label>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Baked Buffalo Chicken Mac and Cheese</p>
                    <div className="recipe-form__recipe">
                        <div className="baked-buffalo"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 180mg of cholesterol and 917 calories.
                    </label>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Delicious Cinnamon Baked Apples</p>
                    <div className="recipe-form__recipe">
                        <div className="cinnamon-apples"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 2mg of cholesterol and 147 calories.
                    </label>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Baked Apple Cider Donuts</p>
                    <div className="recipe-form__recipe">
                        <div className="apple-donuts"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 32mg of cholesterol and 295 calories.
                    </label>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Air Fryer French Toast Sticks</p>
                    <div className="recipe-form__recipe">
                        <div className="air-fryer-sticks"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 34mg of cholesterol and 48 calories.
                    </label>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Baked French Toast</p>
                    <div className="recipe-form__recipe">
                        <div className="baked-french-toast"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 169mg of cholesterol and 395 calories.
                    </label>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Clean Banana Oat Cookies</p>
                    <div className="recipe-form__recipe">
                        <div className="banana-cookie"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 3g of sugars and 55 calories.
                    </label>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Chocolate Mint Cookies</p>
                    <div className="recipe-form__recipe">
                        <div className="chocolate-cookie"></div>
                    </div>
                    <label className="recipe-form__recipe-explanation">
                        This recipe contains 39g of sugars and 364 calories.
                    </label>
                </div>
            </div>
            <button className="recipe-form__button" type="submit">Done</button>
        </div>
    );
};

export default ExplanationPositionEffect;

