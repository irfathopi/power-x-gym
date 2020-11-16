import React from 'react';
import headerImg from '../../Image&Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg';
import emailjs from "emailjs-com";
import './GymMembership.css';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3o67tmd', 'template_itid9on', e.target, 'user_OJHI8vBp2KVvnVurushzC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
}
const GymMembership = () => {
    
    return (
      
        <section>
            <div>
                <div className="PricingPlans__headerimg " style={{ backgroundImage: `linear-gradient(34deg, rgba(72,72,72,1) 0%, rgba(0,0,0,0.6615021008403361) 0%),url(${headerImg})` }}>
                    <h1 className="PricingPlans__heading ">YOUR GYM MEMBERSHIP</h1>
                </div>
            </div>

            <div className="color">
                <h2><span className="heading__color">CHOOSE THE OFFER </span>THAT SUITS YOU</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorem fuga doloribus recusandae <br /> accusamus earum minus sapiente esse dolore facere.</p>
            </div>


            <div className="plans__section d-flex justify-content-center  row">

                <form onSubmit={sendEmail} className="form">
                    <div className="row pt-5 mx-auto" >
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control form__field" placeholder="First Name" name="firstname" required />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Last Name " name="lastname" required />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="email" required />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="number" className="form-control" required placeholder="Number" name="number" />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <label htmlFor="">Date of Birth</label>
                            <input type="date" className="form-control" required placeholder="Date of Birth" name="dateofbirth" />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" required placeholder="Gender" name="gender" />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" required placeholder="Addess line 1:" name="address" />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" required placeholder="Country/Region:" name="country" />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" required placeholder="City" name="city" />
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" required placeholder="Post Code" name="postcode" />
                        </div>

                        <div className="col-8 pt-3 mx-auto">
                            <input onClick={()=>{ alert('Press ok to submit form'); }}  type="submit" className="submitbtn" value="send Massage"></input>
                        </div>
                    </div>
                </form>

            </div>



        </section>
    );
};

export default GymMembership;