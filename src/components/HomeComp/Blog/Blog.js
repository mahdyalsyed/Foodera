import React from "react";
import "./../Blog/Blog.css";
import "./../../../index.css";
import Data from "../../../Data";

export default function Blog() {
    const blogItem = Data.map((item) => {
        return (
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img} />
                    <h4>{item.title}</h4>
                    <h5>{item.time}</h5>
                    <h6>{item.price}</h6>
                </div>
                <i>Order Now</i>
            </div>
        );
    });
    return (
        <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Explore Our Foods</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus. Far far away,
                            behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                            Separated they live in Bookmarksgrove.
                        </p>
                    </div>
                </div>
                <div className="row">{blogItem}</div>
            </div>
        </section>
    );
}
