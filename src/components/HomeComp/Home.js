import React from "react";
import "./Home.css";
import About from "./About/About";
import Ingredients from "./Ingredients/Ingredients";
import Paralex from "./Paralex/Paralex";
import Blog from "./Blog/Blog";
import Slider from "./Slider/Slider";
import Header from "./Header/Header";
import Frequently from "./Frequently/Frequently";
import Baked from "./Baked/Baked";
import Form from "./Form/Form";

export default function Home() {
    return (
        <div>
            <Header />
            <section className="numbres">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <p>SAVINGS</p>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <p>PHOTOS</p>
                        </div>
                        <div className="col-md-3">
                            <h2>1440+</h2>
                            <p>ROCKETS</p>
                        </div>
                        <div className="col-md-3">
                            <h2>7110+</h2>
                            <p>GLOBES</p>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Ingredients />
            <Paralex />
            <Blog />
            <Slider />
            <Frequently />
            <Baked />
            <Form />
        </div>
    );
}
