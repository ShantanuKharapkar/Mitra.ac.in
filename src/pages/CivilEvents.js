import React from "react";


import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/civilevents.css"



import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

const CivilEvents = () =>{
    return(

        <div>


        <Header/>
        <Navbar/>
        
        <section className="background1 ">
        <div className="container-fluid">
            <div className="bg-light-color">
                <h1 className="text-center py-2 color-orange">Event & Activities</h1>
            </div>
        </div>
    </section>

    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-start">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-link-1 active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">

                            Departmental Events & Activities</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-link-1" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">


                            Guest Lectures</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link nav-link-1" id="pills-Workshop-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Workshop" type="button" role="tab" aria-controls="pills-Workshop"
                            aria-selected="false">

                            Workshop & STTPs</button>
                    </li>

                </ul>
            </div>

        </div>

        <div className="row">
            <div className="col-12">
                <div className="tab-content" id="pills-tabContent">


                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div>
<h2 className="faculty-title">Industrial / Field Visit</h2>
<div className="su-table su-table-alternate" xss="removed"><table className="table table-bordered table-striped" xss="removed">
<tbody><tr xss="removed">
<td width="48" xss="removed">
<div><b><span xss="removed">Sr.No<o></o></span></b></div>
</td>
<td width="265" xss="removed">
<div><b><span xss="removed">Company name<o></o></span></b></div>
</td>
<td width="129" xss="removed">
<div><b><span xss="removed">Company
Sector<o></o></span></b></div>
</td>
<td width="115" xss="removed">
<div><b><span xss="removed">level<o></o></span></b></div>
</td>
<td width="101" xss="removed">
<div><b><span xss="removed">Date
from<o></o></span></b></div>
</td>
<td width="88" xss="removed">
<div><b><span xss="removed">Date To<o></o></span></b></div>
</td>
<td width="85" xss="removed">
<div><b><span xss="removed">No of
Students<o></o></span></b></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">1<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">PRMIT&amp;R College<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">20-09-2017<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">20-09-2017<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">65<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">2<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Hospital Building<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">22-09-2017<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">22-09-2017<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">68<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Water Treatment Plant<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Govt.<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">13-10-2017<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">13-10-2017<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">58<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Sewage Treatment plant (Butti
bori ) Nagpur<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Govt.<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">30-01-2018<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">01-02-2018<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">79<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">5<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Residential building (Pote
Township,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">4th
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">01-02-2018<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">01-02-2018<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">72<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">6<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Navegaon Khairy dam (Pench)<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Govt.<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">01-02-2018<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">01-02-2018<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">79<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">7<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Govt Girls Hostel , Badnera<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Govt.<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">06-03-2018<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">06-03-2018<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">71<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Anmol RMC Plant<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16-03-2018<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16-03-2018<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">138<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Simbora Dam , morshi<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Govt.<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">18-03-2018<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">18-03-2018<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">64<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Indian Railway steel Bridge<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Govt.<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">29-03-2018<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">29-03-2018<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">80<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">11<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Residential building (Pote
Township,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">3rd
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">02-04-2018<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">02-04-2018<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">67<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">12<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Residential building (Pote
Township,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">4th
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">02-04-2018<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">02-04-2018<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">64<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">13<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Residential building (Kathora
naka,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">4th
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">16-04-2018<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">16-04-2018<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">71<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">14<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Govinda Sky , High Rise
Building,Amravati , Badnera<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16-04-2018<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16-04-2018<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">69<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">15<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Hospital Building
(Dr.Hantodkar,Rathi nagar,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">3rd
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">20-11-2018<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">20-11-2018<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">64<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Commisionar Office Hydrology
Department<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Govt<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">3rd
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">18-01-2019<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">18-01-2019<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">73<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">17<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Badnera Railway
station,Badnera.<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Govt<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">4th
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">01-02-2019<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">03-02-2019<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">130<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">18<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">RMC Plant (Anmol RMC
Plant,Wadgaon Mahore,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">3rd
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">10-02-2019<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">10-02-2019<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">124<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">19<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Marriage Building (Khandelawal
Building,gopal nagar,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">2nd
&amp; 3rd Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">15-02-2019<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">15-02-2019<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">65<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">20<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Marriage Building (Infront of
rajeshwari school,Badenera)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">4th
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">15-02-2019<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">15-02-2019<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">7<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">21<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Minor Project<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">4th
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">05-04-2019<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">09-04-2019<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">215<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">22<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">RMC Plant (Anmol RMC
Plant,Wadgaon Mahore,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">2nd
&amp; 3rd Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">11-04-2019<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">12-04-2019<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">110<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">23<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Apartment building (Sai
nagar,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">3rd
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">19-10-2019<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">19-10-2019<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">62<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">24<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Residential building
(Badnera,Amravati)<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">3rd
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">11-02-2020<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">11-02-2020<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">52<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">25<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Residential building&nbsp; (Amravati)<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16-08-2020<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16-08-2020<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">20<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">26<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Residential building
(Mul,Chandrapur)<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">01-09-2020<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">01-09-2020<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">20<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">27<o></o></span></div>
</td>
<td width="265" xss="removed">
<div><span xss="removed">Amravati Railway
station,Badnera.<o></o></span></div>
</td>
<td width="129" xss="removed">
<div><span xss="removed">Govt<o></o></span></div>
</td>
<td width="115" xss="removed">
<div><span xss="removed">4th
Year<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">18-09-2020<o></o></span></div>
</td>
<td width="88" xss="removed">
<div><span xss="removed">18-09-2020<o></o></span></div>
</td>
<td width="85" xss="removed">
<div><span xss="removed">71<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">28<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Residential building (Sai Nagar
Akoli ,Amravati)<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">21-09-2020<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">21-09-2020<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">20<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">29<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Apartment building (Govinda
Crown, Amravati )<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">18-10-2020<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">18-10-2020<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">30<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Residential building&nbsp; (Professor Colony , Amravati)<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">18-10-2020<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">18-10-2020<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">12<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">31<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Residential building&nbsp; (Kathora Naka , Amravati)<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">19-10-2020<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">19-10-2020<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">13<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">32<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Amravati Railway station,Badnera.<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Central goverment<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10-05-2022<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10-05-2022<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">71<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">33<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">RMC Plant (Anmol RMC Plant,Wadgaon
Mahore,Amravati)<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">11-03-2022<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">11-03-2022<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">120<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">34<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Mahatma Fulle Bank, Rahatgaon Road , Amravati<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Private<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">11-03-2022<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">11-03-2022<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">70<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="48" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">35<o></o></span></div>
</td>
<td width="265" valign="bottom" xss="removed">
<div><span xss="removed">Water Treatment Plant<o></o></span></div>
</td>
<td width="129" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Govt.<o></o></span></div>
</td>
<td width="115" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Degree<o></o></span></div>
</td>
<td width="101" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">11-05-2022<o></o></span></div>
</td>
<td width="88" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">11-05-2022<o></o></span></div>
</td>
<td width="85" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">68<o></o></span></div>
</td>
</tr>
</tbody></table></div>

</div>						</div>

                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div>
<h2 className="faculty-title">Guest Lectures</h2>
<div className="su-table su-table-alternate" xss="removed"><table className="table table-bordered table-striped" xss="removed">
<tbody><tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">Sr. No.<o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><b><span xss="removed">Name of Resource Person<o></o></span></b></div>
</td>
<td width="248" xss="removed">
<div><b><span xss="removed">Topic<o></o></span></b></div>
</td>
<td width="247" xss="removed">
<div><b><span xss="removed">Designation &amp; Company Name<o></o></span></b></div>
</td>
<td width="101" xss="removed">
<div><b><span xss="removed">Target Audience<o></o></span></b></div>
</td>
<td width="99" xss="removed">
<div><b><span xss="removed">Date of Lecture<o></o></span></b></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">1</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. M.L.Gulhane</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Restriction of Noise Pollution</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Associate Professor Dept. of Civil Engineering, GCOE Amravati</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">06-08-2018</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">2</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. Avinash Shrikhande</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Design of Sewer Network</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, Dept. of Civil Engineering, KITS Ramtek</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">10-08-2018</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">3</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. Kshitija Kadam</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Finite Element Analysis of Structures</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Dean (R&amp;D) and Head Dept. of Applied Mechanics, GCOE Nagpur</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">24-08-2018</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">4</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. S. M. Mahajan</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Comparison of Transmission Tower &amp; Monopole</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, Dept. of Civil Engineering, BNCOE Pusad</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">05-09-2018</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">5</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Prof. S.D.Charkha</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Basics of Structural Analysis</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, Dept. of Civil Engineering, BNCOE Pusad</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">18-09-2018</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">6</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. A.M. Pande</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Improving Paper Writing Skill through Asssignments</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor &amp; Director(R&amp;D), Dept. of Civil Engineering, YCC
Nagpur</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">01-10-2018</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">7</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. A.V.Patil</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Design of Pile and Raft Foundation</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, Dept. of Civil Engineering, YCC Nagpur</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">01-10-2018</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">8</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. N.A.Hedaoo</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Composite Structure</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">College of Engineering, Pune</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculty</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">21-11-2018</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">9</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. R.M.Damgir</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Structural Analysis</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, Government College of Engineerng, Auranagabad</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">02-02-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">10</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Mr. abhishek Dhamankar</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Carrier Guidance</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Carrier Guidance</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">18-03-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">11</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Mr. Kuldeep Ramteke</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Merit, Mediatation and Creative Intelligence</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Rtd. SE,Water Resource Department, Govt. of Maharashtra</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">22-03-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">12</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Prof. R.R.Gadpal</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Comparative Study of Different Codes on Steel Building</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Lecturer, Government Polytrchnic Amravati</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">30-04-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">13</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. A.V.Patil</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Utilization of Silico Manganse Slag in Plain Reinforced Cement
Concrete</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, Dept. of Civil Engineering, YCC Nagpur</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">17-07-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">14</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Prof. Uday Waghe</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Recent Trends in Structural Engineering</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, Dept. of Civil Engineering, YCC Nagpur</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">17-07-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">15</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. Prashant Pawade</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Influence of Metakaolin in Concrete Mixture</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor&amp; Head Dept. of Civil Engineering, G.H. Raisoni COE
Nagpur.</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">19-08-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">16</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Mr. Dattatray M. Nagdive</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Career Oppurtunities for Civil Engineers</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Customer Service In-Charge, ACC Cement, Amravati</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">23-09-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">17</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. S.M.Mahure</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Design of Self Compacting Concrete</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor BNCOE Pusad, Maharashtra</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">12-10-2019</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">18</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. P.Y.Pawade</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Use of Hybrid Fibres as a Smart Material in Concrete</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, Dept. of Civil Engineering, G.H. Raisoni COE, Nagpur.</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">14-01-2020</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">19</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr.M.R.Vyawahare</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Advances in Special Concrete</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, BNCOE Pusad, Maharahtra</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">16-01-2020</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">20</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. Kshitija Kadam</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Finite Element Methods in Engineering Science</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, GCOE Nagpur</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">07-02-2020</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">21</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. M.R. Vyawahare</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Role of Admisxtures in Advanced Concrete</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor BNCOE Pusad, Maharashtra</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">11-02-2020</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">22</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. P.Y.Pawade</span><span xss="removed"><o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Analysis &amp; Design of Structure</span><span xss="removed"><o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Head, Dept. Of Civil Engineering, G.H Raisoni Institute of Engineering
&amp; Technology</span><span xss="removed"><o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp;Students</span><span xss="removed"><o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">27-02-2020</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">23</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Prof. P S Lande<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Non-Destructive Testing<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Associate Professor, GCOE,
Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">09-01-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">24</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. Y S Khandekar<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Assessment and Prediction of
Air Pollution in City<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Assistant Professor, Sipna COE,
Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">09-02-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">25</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Mr. Shishir Persai<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Career Guidance <o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Senior Faculty Member, Made
Easy Pvt. Ltd.<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Students<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">05-06-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">26</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. M N Hedaoo<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Green Building<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Associate Professor, GCOE,
Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">09-06-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">27</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. M R Vyawahare<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Admixtures in Special Concrete<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, DRGITR, Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">09-06-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">28</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. Mohammad Zuhair<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Effect of temperature on
self-compacting concrete<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Vice-Principal &amp; Associate
Professor, P.R. Pote COE Amravati.<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">09-06-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">29</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Prof. A Jakate<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Base Isolation Technique<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Lecturer, GP Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">09-06-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">30</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Prof M N Joshi<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Reinforce Cement Concrete- A
Practical Approach<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Assistant Professor, PLCOE,
Buldana<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">09-08-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">31</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. A M Mokadam<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Analysis and assessment of
Nosie Pollution<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, GCOE, Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">09-10-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">32</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Mr. Shyam Dhote<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Leap of Civil Engineering
Survey in Today’s world<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Director, Shri Guru Consulties<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp; Students<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">18-08-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">33</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. P O Modani<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Water Scarcity: Why India
should Worry<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor, PLCOE, Buldana<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">19-09-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">34</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. A R Gupta<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Sustainability in Construction
Engineering<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Assistant Professor, COET,
Akola<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">22-09-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">35</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. A V Tiwari<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Performance of Bio Toilet in
Indian Railway<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Associate Professor, Sipna
College of Engineering, Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">22-09-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">36</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. M N Hedaoo<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Solid Waste Management<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Associate Professor, GCOE,
Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">24-09-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">37</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Amit S Sutawne<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Job Oriented Training<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Assistant Project Manager, HMM
Infra Project Ltd.<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Students<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">25-01-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">38</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. S P Burghate<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">BioGas Generation using Dia
Phsic Dejection Process<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">HOD,Dept. of Civil Engg. GP,
Arvi<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">26-09-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">39</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Prof. P M Raut<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Water Shed Management<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Assistant Professor, COET,
Akola<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">29-08-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">40</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. R M Dhoble<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Prediction of Air and Noise
Pollution<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Professor &amp; Dean
Priyadarshani COE, Nagpur<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">30-08-2022<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="41" xss="removed">
<div><b><span xss="removed">41</span></b><b><span xss="removed"><o></o></span></b></div>
</td>
<td width="175" xss="removed">
<div><span xss="removed">Dr. Bbushan Shinde<o></o></span></div>
</td>
<td width="248" xss="removed">
<div><span xss="removed">Aspect of Geopolymer Concrete
in Civil Engineering<o></o></span></div>
</td>
<td width="247" xss="removed">
<div><span xss="removed">Associate Professor, G.H.
Raisoni University Amravati<o></o></span></div>
</td>
<td width="101" xss="removed">
<div><span xss="removed">Faculties &amp; Students<o></o></span></div>
</td>
<td width="99" xss="removed">
<div><span xss="removed">30-09-2022<o></o></span></div>
</td>
</tr>
</tbody></table></div>
</div>						</div>

<div className="tab-pane fade" id="pills-Workshop" role="tabpanel" aria-labelledby="pills-Workshop-tab">
    <div>
<h2 className="faculty-title">National/ International Conference/ Workshop</h2>
<table className="table table-bordered table-striped">
<tbody><tr>
<td width="9%" valign="top" xss="removed">
<div><span xss="removed">SN<o></o></span></div>
</td>
<td width="45%" valign="top" xss="removed">
<div><span xss="removed">Conference /&nbsp; Workshop<o></o></span></div>
</td>
<td width="20%" valign="top" xss="removed">
<div><span xss="removed">Resource Person / Keynote Speaker<o></o></span></div>
</td>
<td width="25%" valign="top" xss="removed">
<div><span xss="removed">Date<o></o></span></div>
</td>
</tr>
<tr>
<td width="9%" valign="top" xss="removed">
<div><span xss="removed">1<o></o></span></div>
</td>
<td width="45%" valign="top" xss="removed">
<div><span xss="removed">Two weeks AICTE Sponsored FDP on “Moral Values and Ethics for
Engineering Teachers” at Art of
Living International center , Bangalore (Karnataka) </span><span xss="removed"><o></o></span></div>
</td>
<td width="20%" valign="top" xss="removed">
<div><span xss="removed">Dr. Vimal Patel<o></o></span></div>
<div><span xss="removed">Ms. Upasana Saijpal<o></o></span></div>
<div><span xss="removed">Mr. Binay Kumar<o></o></span></div>
</td>
<td width="25%" valign="top" xss="removed">
<div><span xss="removed">from 11<sup>th</sup> November to 20<sup>th</sup>
November&nbsp; 2019.</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr>
<td width="9%" valign="top" xss="removed">
<div><span xss="removed">2<o></o></span></div>
</td>
<td width="45%" valign="top" xss="removed">
<div><span xss="removed">Two days FDP on “ Mapping of Program Outcomes to Course Outcomes” </span><span xss="removed"><o></o></span></div>
</td>
<td width="20%" valign="top" xss="removed">
<div><span xss="removed">Prof. S. G. Adhau<o></o></span></div>
</td>
<td width="25%" valign="top" xss="removed">
<div><span xss="removed">8-9 August 2019.</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr>
<td width="9%" valign="top" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
<td width="45%" valign="top" xss="removed">
<div><span xss="removed">One Week AICTE Sponsored Short Term
Training Program phase I on “WIND AND EARTHQUAKE RESISTANT DESIGN”<o></o></span></div>
</td>
<td width="20%" valign="top" xss="removed">
<div><span xss="removed">Dr C V R Murty (IIT Madras), Dr
Yogendra Singh (IITRoorkee), Dr O R Jaiswal (VNIT,Nagpur), Dr Ratnesh Kumar
(VNIT,Nagpur)&nbsp; Dr. Sachin Bakre
(VNIT,Nagpur),&nbsp;&nbsp;&nbsp; Dr Vijay Khose (Associate,
Thornton Tomasetti, Mumbai). And Dr Nitin Kataria (PRMIT &amp; R)<o></o></span></div>
</td>
<td width="25%" valign="top" xss="removed">
<div><span xss="removed">20 July to 25 July 2020</span><span xss="removed"><o></o></span></div>
</td>
</tr>
<tr>
<td width="9%" valign="top" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
<td width="45%" valign="top" xss="removed">
<div><span xss="removed">One Week AICTE Sponsored Short Term
Training Program phase II on “WIND AND EARTHQUAKE RESISTANT DESIGN”</span><span xss="removed"><o></o></span></div>
</td>
<td width="20%" valign="top" xss="removed">
<div><span xss="removed">Dr C V R Murty (IIT Madras), Dr
Yogendra Singh (IITRoorkee), Dr O R Jaiswal (VNIT,Nagpur), Dr Ratnesh Kumar
(VNIT,Nagpur)&nbsp; Dr. Saurabh Shiradhonkar
(IITRoorkee) and&nbsp; Dr Vijay Khose
(Associate, Thornton Tomasetti, Mumbai).<o></o></span></div>
<div><span xss="removed">&nbsp;</span></div>
</td>
<td width="25%" valign="top" xss="removed">
<div><span xss="removed">23rd November to 28th November 2020 <o></o></span></div>
<div><span xss="removed">&nbsp;</span></div>
</td>
</tr>
<tr>
<td width="9%" valign="top" xss="removed">
<div><span xss="removed">5<o></o></span></div>
</td>
<td width="45%" valign="top" xss="removed">
<div><span xss="removed">One Week AICTE Sponsored Short Term
Training Program phase III on “WIND AND EARTHQUAKE RESISTANT DESIGN”<o></o></span></div>
</td>
<td width="20%" valign="top" xss="removed">
<div><span xss="removed">Dr
C V R Murty (IIT Madras), Dr Yogendra Singh (IITRoorkee), Dr O R Jaiswal
(VNIT,Nagpur), Dr Ratnesh Kumar (VNIT,Nagpur), Dr L. N. Gupta
(VNIT,Nagpur),&nbsp;&nbsp; Dr. Putul Haldar
(IITRopar) and&nbsp; Dr Vijay Khose
(Associate, Thornton Tomasetti, Mumbai).<o></o></span></div>
<div><span xss="removed">&nbsp;</span></div>
</td>
<td width="25%" valign="top" xss="removed">
<div><span xss="removed">19th December to 24th December 2020 <o></o></span></div>
<div><span xss="removed">&nbsp;</span></div>
</td>
</tr>
</tbody></table></div>						</div>


                   
                </div>
            </div>
        </div>
    </div>
    
    
    <Contact/>
    <Footer/>

        </div>


    )
}

export default CivilEvents;