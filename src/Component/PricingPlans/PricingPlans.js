import React from 'react';
import './PricingPlans.css';





const PricingPlans = () => {
    return (
        <section>
            <div>
                <div className="PricingPlans__headerimg " >     
                        <h1 className="PricingPlans__heading ">PRICING PLANS</h1>
                </div>
            </div>



            <div className="color">
                <h2><span className="heading__color">CHOOSE THE OFFER </span>THAT SUITS YOU</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorem fuga doloribus recusandae <br/> accusamus earum minus sapiente esse dolore facere.</p>
            </div>


            <div className="plans__section d-flex justify-content-center  row">

                <div className="plan__one plans  col-md-3 ">
                    <div className="details">
                        <h4>BUILD MOTHLY</h4>
                        <h2>ADVANCED PLAN</h2>
                        <h1>$140</h1>
                        <li>Mobile coustomized</li>
                        <li>Best Hosting</li>
                        <li>Free Coustom</li>
                        <li>Happy coustomers</li>
                       <a href="/gymmembership" class="myButton">PURCHAES</a>

                    </div>
                </div>

                <div className="plan__two plans col-md-3 " >
                <div className="details">
                        <h4>BUILD MOTHLY</h4>
                        <h2>BASIC PLAN</h2>
                        <h1>$120</h1>
                        <li>Mobile coustomized</li>
                        <li>Best Hosting</li>
                        <li>Free Coustom</li>
                        <li>Happy coustomers</li>
                        <a href="/gymmembership" class="myButton">PURCHAES</a>
                    </div>
                </div>

                <div className="plan__three plans col-md-3 ">
                <div className="details">
                        <h4>BUILD MOTHLY</h4>
                        <h2>BEGINERS</h2>
                        <h1>$90</h1>
                        <li>Mobile coustomized</li>
                        <li>Best Hosting</li>
                        <li>Free Coustom</li>
                        <li>Happy coustomers</li>
                        <a href="/gymmembership" class="myButton">PURCHAES</a>

                    </div>
                </div>

            </div>



        </section>
    );
};

export default PricingPlans;