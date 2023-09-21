import React from "react";


//import css

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/mesa.css"

//import component

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";



const MESA = () =>{
    return(

        <div>


        <Header/>
        <Navbar/>
        
        <section className="background1 ">
        <div className="container-fluid">
            <div className="bg-light-color">
                <h1 className="text-center py-2 color-orange">MESA&nbsp; </h1>
            </div>
        </div>
    </section>

    <section>
        <div className="container">

            <h2 className="section-title color-blue text-center py-5">MESA</h2>

            <div> <br/>
                <h2 xss="removed" className="py-2 fw-bold">MESA Committee</h2>

                <img src="http://mitra.ac.in/uploads/main-media-image/MESA.png" width="100%"/>

                 <br/> <br/>
                <h2 xss="removed" className="py-2 fw-bold">Event and Activities in MESA</h2>

                <img src="http://mitra.ac.in/uploads/main-media-image/Event_and_Activities_in_MESA.png" width="100%"/>

                 <br/> <br/>
            </div> 


        </div>
    </section>


    
    <Contact/>
    <Footer/>

        </div>
    )
}

export default MESA;