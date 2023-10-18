import React from "react";
import "./../Slider/Slider.css";
import { Carousel } from "react-bootstrap";
import avatarImg1 from "./../../../images/avatar.jpg";
import avatarImg2 from "./../../../images/avatar2.jpg";
import avatarImg3 from "./../../../images/avatar.jpg";
import "./../../../index.css";

export default function Slider() {
    return (
        <section className="slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Testimonials</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <Carousel>
                            <Carousel.Item>
                                <img src={avatarImg1} />
                                <Carousel.Caption>
                                    <p>
                                        "Far far away, behind the word
                                        mountains, far from the countries
                                        Vokalia and Consonantia, there live the
                                        blind texts. Separated they live."
                                    </p>
                                    <span>Simab Dave - Web Designer</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={avatarImg2} />

                                <Carousel.Caption>
                                    <p>
                                        "Far far away, behind the word
                                        mountains, far from the countries
                                        Vokalia and Consonantia, there live the
                                        blind texts. Separated they live far
                                        from the countries Vokalia."
                                    </p>
                                    <span>Johnthan Doe - UX Designer</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={avatarImg3} />

                                <Carousel.Caption>
                                    <p>
                                        "Far far away, behind the word
                                        mountains, far from the countries
                                        Vokalia and Consonantia, there live the
                                        blind texts. "
                                    </p>
                                    <span>Maccy Doe - Front End</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
