import React from 'react';
import './PricingPlans.css';
import headerImg from '../../Image&Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg';
import plansimg1 from '../../Image&Icon/penguinuhh-8VI6WwEEEHw-unsplash.jpg';
import plansimg2 from '../../Image&Icon/daniel-apodaca-WdoQio6HPVA-unsplash.jpg';
import plansimg3 from '../../Image&Icon/hipcravo-5UbIqV58CW8-unsplash.jpg';




const PricingPlans = () => {
    return (
        <section>
            <div>
                <div className="PricingPlans__headerimg " style={{ backgroundImage:`linear-gradient(34deg, rgba(72,72,72,1) 0%, rgba(0,0,0,0.6615021008403361) 0%),url(${headerImg})`}}>     
                        <h1 className="PricingPlans__heading ">PRICING PLANS</h1>
                </div>
            </div>



            <div className="color">
                <h2><span className="heading__color">CHOOSE THE OFFER </span>THAT SUITS YOU</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorem fuga doloribus recusandae <br/> accusamus earum minus sapiente esse dolore facere.</p>
            </div>


            <div className="plans__section d-flex justify-content-center  row">

                <div className="plan__one plans  col-md-3 " style={{ backgroundImage:`linear-gradient(34deg, rgba(72,72,72,1) 0%, rgba(0,0,0,0.6615021008403361) 0%),url(${plansimg3})`}}>
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

                <div className="plan__two plans col-md-3 " style={{ backgroundImage:`linear-gradient(34deg, rgba(72,72,72,1) 0%, rgba(0,0,0,0.6615021008403361) 0%),url(${plansimg1})`}}>
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

                <div className="plan__three plans col-md-3 " style={{ backgroundImage:`linear-gradient(34deg, rgba(72,72,72,1) 0%, rgba(0,0,0,0.6615021008403361) 0%),url(${plansimg2})`}}>
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