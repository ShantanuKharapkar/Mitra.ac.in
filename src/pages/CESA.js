import React from "react";
import "../css/index.css";
import "../css/bootstap.min.css";
import "../css/responsive.css";
import "../css/iete.css"


// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
const CESA = () =>{
    return(
<div>

<Header/>
<Navbar/>


        <section class="background1 ">
        <div class="container-fluid">
            <div class="bg-light-color">
                <h1 class="text-center py-2 color-orange">CESA&nbsp; </h1>
            </div>
        </div>
    </section>

    <section>
        <div class="container">

            <h2 class="section-title color-blue py-5 text-center">CESA</h2>

            <div><br/>
                <h2 xss="removed" class="fw-bold py-2"> CESA Committee</h2>

                <img src="http://mitra.ac.in/uploads/main-media-image/CESA.jpg" width="100%" />

                <br/><br/>
                <h2 class="fw-bold py-5">
                    Event and Activities in MESA : <a
                        href="http://mitra.ac.in/uploads/main-media-pdf/Advitiya_Report.pdf" target="_blank"
                        class="color-orange text-decoration-none">Click
                        Here</a></h2>
                <h2 xss="removed"><b><u><a href="http://mitra.ac.in/uploads/main-media-pdf/Advitiya_Report.pdf"
                                target="_blank"></a></u></b></h2>

                <br/><br/>
            </div> 


        </div>
    </section>
    <Contact/>
    <Footer/>    
    
    </div>



    )
}

export default CESA