import React from "react";
import "./../Form/Form.css";

export default function Form() {
    return (
        <section className="form">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>
                            Hurry up! Subscribe our newsletter and get 25% Off
                        </h2>
                        <p>
                            Limited time offer for this month. No credit card
                            required.
                        </p>
                        <form>
                            <div className="row">
                                <div className="col-md-8">
                                    <input
                                        type="email"
                                        placeholder="Email Address here"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <i>Subscribe</i>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
