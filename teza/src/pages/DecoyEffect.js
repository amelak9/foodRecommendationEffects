import React from "react";
import "./recipe-form.css"
import "./recipes.css"

const Explanation = () => {
    return (
        <div className="recipe-form__Layout">
            <p className="recipe-form__label">Choose one of the recipes in each row: </p>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Fried Mac and Cheese Balls</p>
                    <div className="recipe-form__recipe">
                        <div className="fried-mac-cheese-balls"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Hawaiian Macaroni Salad</p>
                    <div className="recipe-form__recipe">
                        <div className="mac-salad-hawaii"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Classic Macaroni Salad</p>
                    <div className="recipe-form__recipe">
                        <div className="classic-macaroni-salad"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Cheeseburger Quesadilla</p>
                    <div className="recipe-form__recipe">
                        <div className="cheeseburger-quesadilla"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Butter Bean Burgers</p>
                    <div className="recipe-form__recipe">
                        <div className="butter-burger"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Homemade Black Bean Veggie Burgers</p>
                    <div className="recipe-form__recipe">
                        <div className="veggie-burgers"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Baked Buffalo Chicken Mac and Cheese</p>
                    <div className="recipe-form__recipe">
                        <div className="baked-buffalo"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Cold Chicken Macaroni Salad</p>
                    <div className="recipe-form__recipe">
                        <div className="cold-salad"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">No-Mayo Chicken Salad</p>
                    <div className="recipe-form__recipe">
                        <div className="chicken-salad"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Baked Apple Cider Donuts</p>
                    <div className="recipe-form__recipe">
                        <div className="apple-donuts"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Baked Apples</p>
                    <div className="recipe-form__recipe">
                        <div className="baked-apples"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Delicious Cinnamon Baked Apples</p>
                    <div className="recipe-form__recipe">
                        <div className="cinnamon-apples"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Baked French Toast</p>
                    <div className="recipe-form__recipe">
                        <div className="baked-french-toast"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Air Fryer French Toast</p>
                    <div className="recipe-form__recipe">
                        <div className="air-fryer-toast"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Air Fryer French Toast Sticks</p>
                    <div className="recipe-form__recipe">
                        <div className="air-fryer-sticks"></div>
                    </div>
                </div>
            </div>
            <div className="recipe-form__container">
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Chocolate Mint Cookies</p>
                    <div className="recipe-form__recipe">
                        <div className="chocolate-cookie"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Crisp Oatmeal Cookies</p>
                    <div className="recipe-form__recipe">
                        <div className="crisp-oatmeal-cookies"></div>
                    </div>
                </div>
                <div className="recipe-form__recipe-container">
                    <p className="recipe-form__recipe-title">Clean Banana Oat Cookies</p>
                    <div className="recipe-form__recipe">
                        <div className="banana-cookie"></div>
                    </div>
                </div>
            </div>
            <button className="recipe-form__button" type="submit">Done</button>
        </div>
    );
};

export default Explanation;

