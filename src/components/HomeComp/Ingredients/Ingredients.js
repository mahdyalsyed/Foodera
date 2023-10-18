import React from "react";
import "./Ingredients.css";
import "./../../../index.css";
import ingredients from "./../../../images/2 (1).png";

export default function Ingredients() {
    return (
        <section className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            We make everything by hand with the best possible
                            ingredients.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus.Far far away,
                            behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <i>Learn More </i>
                    </div>
                    <div className="col-md-6">
                        <img src={ingredients} title="ingredients-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
