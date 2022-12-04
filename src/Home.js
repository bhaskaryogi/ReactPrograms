import React from "react";
import web from "../src/Images/im2.svg";
import "./maching.css";
const Home=()=>{
    return(
        <>
        <section className=" sec">
        <div id="header" className="container-fluid nav-bg">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
        <h1>Grow your Business With <strong>Bhaskar yogi</strong> </h1>
        <h2 className="my-3">
        we are the team of making talented developer
        </h2>
        <div className="mt-3">
        <button className="btn btn-primary">Get Started</button>
        </div>
        </div>
        <div className="col-lg-6 order-lg-2 header-img">
        <img src={web} alt="home img" width="600"/>
        </div>
        </div>
        


        </div>
        </div>
        </div>
        </section>
        </>
    );

}
export default Home 