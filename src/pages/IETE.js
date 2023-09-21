import React from "react";
// import css

import "../css/index.css";
import "../css/bootstap.min.css";
import "../css/responsive.css";
import "../css/iete.css"


// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
const IETE = () =>{
    return(
        <div>
        
        <Header/>
        <Navbar/>

        <section class="background1 ">
        <div class="container-fluid">

        </div>
    </section>


    <section>
        <section>
            <div class="container">
                <h2 class="section-title color-blue py-5 text-center">IETE 61st Annual IETE Convention (AIC) -2018</h2>
                <div class="row">

                    <div class="col-md-1">
                    </div>

                    <div class="col-md-10">
                        <center>
                            <img src="https://mitra.ac.in/wp-content/uploads/2018/12/Inauguration-of-IETE-61st-Annual-IETE-Convention-AIC-2018.-300x200.jpg"
                                class="admissions"/>
                            <p><strong>Inauguration of IETE 61st Annual IETE Convention (AIC) -2018.</strong></p>
                        </center>
                    </div>

                    <div class="col-md-1">
                    </div>


                    <div class="col-md-12">
                        <hr/>
                    </div>


                    <div class="col-md-1">
                    </div>

                    <div class="col-md-10">
                        <center>
                            <img src="https://mitra.ac.in/wp-content/uploads/2018/12/Felicitation-of-Shri-Hansraj-Ahir-Union-Minister-of-State-for-Home-Affairs-by-Dr.-Nitin-Dhande-Sir-in-IETE-61st-AIC-300x200.jpg"
                                class="admissions"/>
                            <p><strong>Felicitation of Shri Hansraj Ahir, Union Minister of State for Home Affairs by
                                    Dr.
                                    Nitin Dhande Sir in IETE 61st AIC.</strong></p>
                        </center>
                    </div>

                    <div class="col-md-1">
                    </div>

                    <div class="col-md-12">
                        <hr/>
                        <center class="py-5"><a href="https://mitra.ac.in/wp-content/uploads/2018/12/Report-of-AIC-2018.pdf" class="text-decoration-none"
                                target="_blank" rel="noopener"><strong><span xss="removed" class="color-orange">Report of AIC
                                        2018</span></strong></a></center>
                    </div>

                </div>


            </div>
        </section>
    </section>


    <section>
    <div class="fullwidth-block" style="background:#fffcfc;">
        <div class="container">
            <h2 class="section-title text-center color-blue">Our Recruiters</h2>

            <div class="partners">
                <marquee class="logosize" direction="left" scrolldelay="150" height="200px">
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/ais.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/amazon.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/bitwise.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/bosch.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/bynry.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/capg.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/cogn.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/epic.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/excellon.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/hcl.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/indus.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/jd.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/karvi.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/kpit.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/localbook.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/lt.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/mahi.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site//logo/mphasis.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/syntel-1.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/tal.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/TCS_Logo1.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/tek.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/tri.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/vitusa.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/vw.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/yardi.png" alt=""/></a>
                    <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/logo/zen.png" alt=""/></a>
                </marquee>
            </div> 
        </div> 
    </div> 
</section>


        <Contact/>
        <Footer/>

        
        </div>
    )
}

export default IETE;