import React from "react";
import "./recipe-form.css"
import "./recipes.css"

const DecoyPositionEffect = () => {
    return (
        <div className="recipe-form__Layout">
            <p className="recipe-form__label">Choose one of the recipes in each row: </p>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Classic Macaroni Salad</p>
                    <div className="recipe-form__recipe">
                        <div className="classic-macaroni-salad"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Creamy Macaroni and Cheese</p>
                    <div className="recipe-form__recipe">
                        <div className="mac-salad-hawaii"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Fried Mac and Cheese Balls</p>
                    <div className="recipe-form__recipe">
                        <div className="fried-mac-cheese-balls"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Homemade Black Bean Veggie Burgers</p>
                    <div className="recipe-form__recipe">
                        <div className="veggie-burgers"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">The Perfect Basic Burger</p>
                    <div className="recipe-form__recipe">
                        <div className="butter-burger"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Cheeseburger Quesadilla</p>
                    <div className="recipe-form__recipe">
                        <div className="cheeseburger-quesadilla"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Delicious Cinnamon Baked Apples</p>
                    <div className="recipe-form__recipe">
                        <div className="cinnamon-apples"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Apple Squares</p>
                    <div className="recipe-form__recipe">
                        <div className="baked-apples"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Baked Apple Cider Donuts</p>
                    <div className="recipe-form__recipe">
                        <div className="apple-donuts"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Reduced Fat French Toast</p>
                    <div className="recipe-form__recipe">
                        <div className="air-fryer-sticks"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Fluffy French Toast</p>
                    <div className="recipe-form__recipe">
                        <div className="air-fryer-toast"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">French Toast</p>
                    <div className="recipe-form__recipe">
                        <div className="baked-french-toast"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Oatmeal Energy Bars</p>
                    <div className="recipe-form__recipe">
                        <div className="banana-cookie"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Crisp Oatmeal Cookies</p>
                    <div className="recipe-form__recipe">
                        <div className="crisp-oatmeal-cookies"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Apple Cinnamon Oatmeal</p>
                    <div className="recipe-form__recipe">
                        <div className="chocolate-cookie"></div>
                    </div>
                </div>
            </div>
            <button className="recipe-form__button" type="submit">Done</button>
        </div>
    );
};

export default DecoyPositionEffect;

