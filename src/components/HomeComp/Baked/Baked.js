import React from "react";
import "./../Baked/Baked.css";

export default function Baked() {
    return (
        <section className="baked">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 ">
                        <h2>Baked fresh daily by bakers with passion.</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                        <i>Learn More</i>
                    </div>
                </div>
            </div>
        </section>
    );
}
