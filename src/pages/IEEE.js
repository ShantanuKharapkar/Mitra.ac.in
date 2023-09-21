import React from "react";



//import css

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/ieee.css"

//import component

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const IEEE = () =>{
    return(
<div>

<Header/>
<Navbar/>

<section className="background1 ">
<div className="container-fluid">

</div>
</section>


<main className="main-content">

<div className="fullwidth-block greet-section">
    <div className="container">
        <h2 className="section-title color-blue text-center py-5">IEEE Student Branch (Branch code: STB63151)
            Executive Committee</h2>
        <table className="table table-bordered table-striped " xss="removed">
            <tbody>
                <tr xss="removed">
                    <td xss="removed"><strong>Designation</strong></td>
                    <td xss="removed"><strong>Name</strong></td>
                    <td xss="removed"><strong>Contact Number</strong></td>
                    <td xss="removed"><strong>E-mail Address</strong></td>
                </tr>
                <tr>
                    <td xss="removed">Counselor</td>
                    <td xss="removed">Prof. Maithili Deshmukh</td>
                    <td xss="removed">9673162585</td>
                    <td xss="removed">msdeshmukh@mitra.ac.in</td>
                </tr>
                <tr xss="removed">
                    <td xss="removed">Chair</td>
                    <td xss="removed">Abhishek Deshmukh</td>
                    <td xss="removed">9168074765</td>
                    <td xss="removed">abhishekdeshmukh2@gmail.com</td>
                </tr>
                <tr>
                    <td xss="removed">Vice-Chair</td>
                    <td xss="removed">Onkar Dharange</td>
                    <td xss="removed">9096058754</td>
                    <td xss="removed">onkardharange20@gmail.com</td>
                </tr>
                <tr xss="removed">
                    <td xss="removed">Secretary</td>
                    <td xss="removed">Gaurav Pathare</td>
                    <td xss="removed">9822972433</td>
                    <td xss="removed">gpathare1996@gmail.com</td>
                </tr>
                <tr>
                    <td xss="removed">Treasurer</td>
                    <td xss="removed">Pranita Pansare</td>
                    <td xss="removed">9552922293</td>
                    <td xss="removed">pranitapansarepp@gmail.com</td>
                </tr>
                <tr xss="removed">
                    <td xss="removed">Webmaster</td>
                    <td xss="removed">Vaibhav Gilalkar</td>
                    <td xss="removed">9552559687</td>
                    <td xss="removed">vaibhav.gilalkar@gmail.com</td>
                </tr>
            </tbody>
        </table> 

    </div> 
</div> 



<section>
<div className="fullwidth-block" style={{background:'#fffcfc'}}>
    <div className="container">
        <h2 className="section-title text-center color-blue">Our Recruiters</h2>

        <div className="partners">
            <marquee className="logosize" direction="left" scrolldelay="150" height="200px">
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


</main>



<Contact/>
<Footer/>

</div>

    )
}

export default IEEE;