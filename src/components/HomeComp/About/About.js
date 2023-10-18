import React from "react";
import pride from "./../../../images/1.png";
import "./About.css";
import "./../../../index.css";

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={pride} title="pride-img" />
                    </div>
                    <div className="col-md-6">
                        <h2>
                            We pride ourselves on making real food from the best
                            ingredients.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus.
                        </p>
                        <i>Learn More</i>
                    </div>
                </div>
            </div>
        </section>
    );
}
