import React from "react";
import "./../Header/Header.css";
import "../../../index.css";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Good food choices are good investments.</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum amet
                            leo.
                        </p>
                        <i>Order Now</i>
                        <i>Learn More</i>
                    </div>
                </div>
            </div>
        </header>
    );
}
