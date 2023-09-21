import React from "react";

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/civilLaboratories.css"


import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const CivilLaboratories=()=>{
    return(

        <div>


        <Header/>
        <Navbar/>
        
        <section className="background1 ">
        <div className="container-fluid">
            <div className="bg-light-color">
                <h1 className="text-center py-2 color-orange">Laboratories</h1>
            </div>
        </div>
    </section>


    <section>
    <main className="main-content">

        <div className="fullwidth-block greet-section">
        <div className="container">
            <h2 className="section-title mt-3">CT &amp; RCC Laboratory</h2>
       
            <div className="row">

<div className="col-md-4">
            <div className="imagebox">
                <img src="http://thinkcode.co.in/demo/mitra/uploads/media/CTRCC1.jpg"/>
            </div>
        </div>

        
        <div className="col-md-4">
            <div className="imagebox">
                <img src="http://thinkcode.co.in/demo/mitra/uploads/media/CTRCC3.jpg"/>
            </div>
        </div>
<div className="col-md-4">
            <div className="imagebox">
                <img src="http://thinkcode.co.in/demo/mitra/uploads/media/CTRCC4.jpg"/>
            </div>
        </div>
      

        <div className="col-md-8">
            
            <div>In this lab practicals related to subject RCC1, RCC2 and demonstrations related to subject Advanced Concrete Technology are conducted. In addition lab is extensively used for testing and consultancy work.</div>
            <div><strong>Equipments</strong></div>
            <div>Compression Testing Machine<br/>
            Concrete mixing tray<br/>
            Beam Mould<br/>
            Cube Moulds<br/>
            Cylindrical mould<br/>
            Test Seives - 150 micron to 63mm<br/>
            Ultrasonic Concrete Tester<br/>
            Concrete Test Hammer (Schmidt type)<br/>
            Le-chatelier Mould<br/>
            Slump Test Appartus<br/>
            Compaction Factor Test Apparatus<br/>
            Ring Apparatus<br/>
            Vibration Table<br/>
            Flow Table Apparatus<br/>
            V-Funnel Apparatus<br/>
            L-Box Apparatus<br/>
            U-Box Test Apparatus<br/>
            Density Basket<br/>
            Accelerated Curing tank<br/>
            Tempo Laboratory Precision Oven High Temperature 400°C<br/>
            Tempo Muffle Furnace</div>

        </div>

        

</div>		  
        </div> 
    </div> 
        <div className="fullwidth-block greet-section" style={{background:'#f9f9f9'}}>
        <div className="container">
            <h2 className="section-title">Geotechnical Engineering Laboratory</h2>
          
            <div className="row">

<div className="col-md-4">
            <div className="imagebox">
                <img src="http://thinkcode.co.in/demo/mitra/uploads/media/Geotech1.jpg"/>
            </div>
        </div>

        <div className="col-md-4">
            <div className="imagebox">
                <img src="http://thinkcode.co.in/demo/mitra/uploads/media/Geotech2.jpg"/>
            </div>
        </div>

       
        
        <div className="col-md-8">
            
            <div>In this lab practicals related to the subject Geotechnical Engineering are conducted. This lab is also extensively used for Testing and Consultancy.</div>
            <div><strong>Equipments</strong></div>
            <div>Triaxial Shear Test<br/>
            Direct Shear Test Appratus<br/>
            Consolidation Test Equipment<br/>
            Permeability Test Equipment<br/>
            Liquid Limit Appratus<br/>
            Plastic Limit Appratus<br/>
            Shrikage Limit Appratus<br/>
            Core Cutter Appratus<br/>
            Proctor Test Appratus<br/>
            Unconfined Compaction Test Appratus<br/>
            Hydrameter Analysis Aappratus<br/>
            Grain Size Analysis Appratus<br/>
            CBR Test Appratus<br/>
            Specific Gavity Test Appratsus<br/>
            Vane Shear Test Appratus<br/>
            Probable Swelling Pressure Appratus<br/>
            Volume change Gauge Appratus<br/>
            Motorised Sieve Shaker<br/>
            Soil Block Machine<br/>
            Electric hot air Oven<br/>
            Plate Load Test Instruments<br/>
            Standard Penetration Test Appratus<br/>
            Core Cutting and Grinding Machine<br/>
            Integral Type Compression Proving Ring<br/>
            Hydraulic Sample Extractor<br/>
            Field CBR Test Appratus</div>

        </div>
          
        </div>


</div>		      
        </div> 
    </main>
</section>

<Contact/>
<Footer/>

        
        </div>


    )
}

export default CivilLaboratories;