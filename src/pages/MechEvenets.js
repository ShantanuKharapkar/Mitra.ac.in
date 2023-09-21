import React from "react";

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"


import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MechEvenets = () =>{
    return (

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
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <h2 className="faculty-title color-blue">In-plant Training 2020-2022
                    </h2>
                    <table width="669" className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td width="64">Sr. No.
                                </td>
                                <td width="404">Name of Company
                                </td>
                                <td width="99">Address</td>
                                <td width="103"> No. of Students</td>
                            </tr>
                            <tr>
                                <td width="64">1</td>
                                <td width="404">Adani Power Plant</td>
                                <td width="99">Mumbai</td>
                                <td width="103">125</td>
                            </tr>
                            <tr>
                                <td width="64">2</td>
                                <td width="64">Aspa Bandson Workshop</td>
                                <td width="64">Amravati</td>
                                <td width="64">2</td>
                            </tr>
                            <tr>
                                <td width="64">3</td>
                                <td width="64">Sai Wardha Power Station</td>
                                <td width="64">Wardha
                                </td>
                                <td width="64">1</td>
                            </tr>
                            <tr>
                                <td width="64">4</td>
                                <td width="64">Jadhao Gear India Ltd.</td>
                                <td width="64">Amravati</td>
                                <td width="64">60</td>
                            </tr>
                            <tr>
                                <td width="64">5</td>
                                <td width="64">Nexa Services Workshop</td>
                                <td width="64">Amravati</td>
                                <td width="64">10</td>
                            </tr>
                            <tr>
                                <td width="64">6</td>
                                <td width="64">TATA Services Workshop</td>
                                <td width="64">Amravati</td>
                                <td width="64">20</td>
                            </tr>
                            <tr>
                                <td width="64">7</td>
                                <td width="64">Dahanu Thermal Power Plant</td>
                                <td width="64">Mumbai</td>
                                <td width="64">130</td>
                            </tr>
                            <tr>
                                <td width="64">8</td>
                                <td width="64">Adani Power Plant&nbsp;</td>
                                <td width="64">Mumbai</td>
                                <td width="64">40</td>
                            </tr>
                            <tr>
                                <td width="64">9</td>
                                <td width="64">Thermax Private
                                    Ltd.
                                </td>
                                <td width="64">
                                    Pune
                                </td>
                                <td width="64">
                                    3
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    10
                                </td>
                                <td width="64">Jadhao
                                    Icon&nbsp;
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    6
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    11
                                </td>
                                <td width="64">Indo German Tool
                                    Room(IGTR)
                                </td>
                                <td width="64">
                                    &gt;Aurangabad
                                </td>
                                <td width="64">
                                    8
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    12
                                </td>
                                <td width="64">Mahalaxmi Steel
                                    Plant
                                </td>
                                <td width="64">
                                    Wardha
                                    (Deoli)
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    13
                                </td>
                                <td width="64">Nexa Services
                                    Workshop
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    2
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    14
                                </td>
                                <td width="64">Jadhao Gear
                                    Ltd
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    5
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    15
                                </td>
                                <td width="64">Deccan Sugar Pvt
                                    Ltd
                                </td>
                                <td width="64">
                                    Yavatmal
                
                                </td>
                                <td width="64">
                                    1
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    16
                                </td>
                                <td width="64">Nexa (Maruti
                                    Suzuki)
                                    Workshop
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    8
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    17
                                </td>
                                <td width="404">Thermal Power
                                    station
                                </td>
                                <td width="64">
                                    Paras
                                </td>
                                <td width="64">
                                    2
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    18
                                </td>
                                <td width="64">Jadhao Ford
                                    Amravati
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    6
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    19
                                </td>
                                <td width="64">IIT Indore(Two
                                    Week Training
                                    )
                                </td>
                                <td width="64">
                                    Indore
                
                                </td>
                                <td width="64">
                                    2
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    20
                                </td>
                                <td width="64">Aspa Bandson
                                    Workshop
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    6
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    21
                                </td>
                                <td width="64">Raymond Luxury
                                    Cotton Ltd
                
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    3
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    22
                                </td>
                                <td width="64">Aspa Bandson
                                    Workshop
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    23
                                </td>
                                <td width="64">Jadhao
                                    Leyland&nbsp;
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    6
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    24
                                </td>
                                <td width="64">Gadre Autocons
                                    Pvt Ltd
                                </td>
                                <td width="64">
                                    Akola
                                </td>
                                <td width="64">
                                    1
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    25
                                </td>
                                <td width="64">Aspa Bandson
                                    Workshop
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    3
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    26
                                </td>
                                <td width="64">Aspa Bandson
                                    Workshop
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    2
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    27
                                </td>
                                <td width="64">Jadhao Gear
                                    Ltd
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    5
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    28
                                </td>
                                <td width="64">Jadhao
                                    Icon&nbsp;
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    5
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    29
                                </td>
                                <td width="64">Ashok
                                    Leyland&nbsp;
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    30
                                </td>
                                <td width="64">Aspa Bandson
                                    Workshop
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    24
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    31
                                </td>
                                <td width="64">Axletech Pvt
                                    Ltd
                                </td>
                                <td width="64">
                                    Pune
                                </td>
                                <td width="64">
                                    2
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    32
                                </td>
                                <td width="64">BHEL Bhopal
                                    (study of
                                    Transmission Component)
                                </td>
                                <td width="64">
                                    Bhopal
                
                                </td>
                                <td width="64">
                                    2
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    33
                                </td>
                                <td width="64">BRHM Corp
                                    Private Ltd.
                                </td>
                                <td width="64">
                                    Aurangabad
                                </td>
                                <td width="64">
                                    3
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    34
                                </td>
                                <td width="64">Central Workshop
                                    Pune (Hands on
                                    training on engine room)
                                </td>
                                <td width="64">
                                    Pune
                                </td>
                                <td width="64">
                                    3
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    35
                                </td>
                                <td width="64">Cummins India
                                    Ltd.
                                </td>
                                <td width="64">
                                    Phaltan
                
                                </td>
                                <td width="64">
                                    2
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    36
                                </td>
                                <td width="64">Dahanu Thermal
                                    Power
                                    Station
                                </td>
                                <td width="64">
                                    Mumbai
                
                                </td>
                                <td width="64">
                                    99
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    37
                                </td>
                                <td width="64">Expert Hub
                                    (Automobile)
                
                                </td>
                                <td width="64">
                                    Hyderabad
                
                                </td>
                                <td width="64">
                                    15
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    38
                                </td>
                                <td width="64">Greeves Cotton
                                    Ltd.(GCL)
                
                                </td>
                                <td width="64">
                                    Aurangabad
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    39
                                </td>
                                <td width="64">Girnar Auto
                                    Ventures Pvt. Ltd.
                                    (Hands on training on Engine)
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    6
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    40
                                </td>
                                <td width="64">Hindustan
                                    Aeronautics
                                    Ltd.(HAL)
                                </td>
                                <td width="64">
                                    Nashik
                
                                </td>
                                <td width="64">
                                    1
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    41
                                </td>
                                <td width="64">Indo German Tool
                                    Room(IGTR)
                                </td>
                                <td width="64">
                                    Aurangabad
                                </td>
                                <td width="64">
                                    17
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    42
                                </td>
                                <td width="64">Jadhao Ford
                                    (Hands on training on
                                    engine room)
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    10
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    43
                                </td>
                                <td width="64">Jadhao
                                    Gears
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    3
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    44
                                </td>
                                <td width="64">Jadhao
                                    Icon
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    26
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    45
                                </td>
                                <td width="64">Jadhao
                                    Industries Ltd.
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    46
                                </td>
                                <td width="64">Jaika Motors
                                    (Hands on training
                                    on Fuel Pumps)
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    11
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    47
                                </td>
                                <td width="64">Ketan Hyundai
                                    (Study of Gear
                                    Box)
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    12
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    48
                                </td>
                                <td width="64">Koradi Thermal
                                    Power Station
                                    (Study of Boiler)
                                </td>
                                <td width="64">
                                    Koradi
                
                                </td>
                                <td width="64">
                                    3
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    49
                                </td>
                                <td width="64">Mahalaxmi Steel
                                    Plant
                                </td>
                                <td width="64">
                                    Wardha
                
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    50
                                </td>
                                <td width="64">Mahalaxmi Cotton
                                    Plant
                                    Amravati
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    6
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    51
                                </td>
                                <td width="64">MSRTC (Study of
                                    Gear
                                    Boxes)
                                </td>
                                <td width="64">
                                    Amravati
                
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    52
                                </td>
                                <td width="64">MSRTC (Study of
                                    Gear
                                    Boxes)
                                </td>
                                <td width="64">
                                    Bhandara&nbsp;
                                </td>
                                <td width="64">
                                    1
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    53
                                </td>
                                <td width="64">Onkar Furniture
                                    Ltd.(Design
                                    Company)
                                </td>
                                <td width="64">
                                    Nagpur
                
                                </td>
                                <td width="64">
                                    3
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    54
                                </td>
                                <td width="64">SAIL Chandrapur
                                    (Maintenance
                                    &amp; Utility)
                                </td>
                                <td width="64">
                                    Chandrapur
                                </td>
                                <td width="64">
                                    2
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    55
                                </td>
                                <td width="64">SARDA Energy
                                    &amp; Minerals
                                    Ltd.
                                </td>
                                <td width="64">
                                    Siltara,
                                    Raipur
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    56
                                </td>
                                <td width="64">TAL
                                    Manufacturing Solution
                                    Ltd.
                                </td>
                                <td width="64">
                                    Nagpur
                
                                </td>
                                <td width="64">
                                    11
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    57
                                </td>
                                <td width="64">Ultra Tech
                                    Cement Plant
                
                                </td>
                                <td width="64">
                                    Chandrapur
                                </td>
                                <td width="64">
                                    4
                                </td>
                
                            </tr>
                            <tr>
                                <td width="64">
                                    58
                                </td>
                                <td width="64">Western
                                    Coalfields
                                    Limited(WCL)
                                </td>
                                <td width="64">
                                    Chandrapur
                                </td>
                                <td width="64">
                                    1
                                </td>
                
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="faculty-title color-blue mb-2">Competitions Organized</h2>
                    <table className="table table-bordered table-striped" width="100%" xss="removed"><tbody><tr xss="removed">
                        <td width="53" xss="removed">
                        <div><b><span lang="EN-US" xss="removed">Sr
                        No.<o></o></span></b></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><b><span lang="EN-US" xss="removed">Name
                        of the<o></o></span></b></div>
                        <div><b><span lang="EN-US" xss="removed">Competition<o></o></span></b></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><b><span lang="EN-US" xss="removed">Organized
                        By<o></o></span></b></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><b><span lang="EN-US" xss="removed">Level<o></o></span></b></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><b><span lang="EN-US" xss="removed">Date
                        of competition<o></o></span></b></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">1.<o></o></span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">Nirmalya Sankal Mohim Programme (During the Period Of
                        Ganapati Festival)<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">10-09-2022<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">2.<o></o></span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">Quiz Competition<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">13-09-2022<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">3.<o></o></span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">Book-Worm Competition<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">15-09-2022<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">4.<o></o></span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">English Communication Competency Test<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">01-10-2022<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">5.<o></o></span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">Spelling Bee Competition<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">15-10-2022<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">6.<o></o></span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">Treasure Hunt Competition<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">15-10-2022<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">7.<o></o></span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">MECHFEST 2K18<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">14-09-2018<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">8<o></o></span></div>
                        <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">Poster Presentation<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">26-01-2017<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="53" xss="removed">
                        <div><span lang="EN-US" xss="removed">9<o></o></span></div>
                        </td>
                        <td width="305" xss="removed">
                        <div><span lang="EN-US" xss="removed">Quiz Competition<o></o></span></div>
                        </td>
                        <td width="100" xss="removed">
                        <div><span lang="EN-US" xss="removed">MESA<o></o></span></div>
                        </td>
                        <td width="64" xss="removed">
                        <div><span lang="EN-US" xss="removed">UG<o></o></span></div>
                        </td>
                        <td width="117" xss="removed">
                        <div><span lang="EN-US" xss="removed">21-01-2017<o></o></span></div>
                        </td>
                       </tr>
                      </tbody></table>
                      <div>
                        <h2 className="faculty-title">Other Activities</h2>
                        <table width="100%" className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                        <td width="6%">SN</td>
                        <td width="44%">Program</td>
                        <td width="30%">Target</td>
                        <td width="18%">Date</td>
                        </tr>
                        <tr>
                        <td width="6%">1</td>
                        <td width="44%">Technical &amp; Non-Technical Competitions organized by MESA</td>
                        <td width="30%">UG Students</td>
                        <td width="18%">14/09/2018</td>
                        </tr>
                        <tr>
                        <td width="6%">2</td>
                        <td width="44%">Wall Magazine &amp; Poster Presentation</td>
                        <td width="30%">UG Students</td>
                        <td width="18%">10/02/2018</td>
                        </tr>
                        <tr>
                        <td width="6%">3</td>
                        <td width="44%">Technical Events organized by MESA</td>
                        <td width="30%">UG Students</td>
                        <td width="18%">10/02/2018</td>
                        </tr>
                        <tr>
                        <td width="6%">4</td>
                        <td width="44%">Engineers Day celebration</td>
                        <td width="30%">Second Year Section A&amp;B</td>
                        <td width="18%">15/09/2017</td>
                        </tr>
                        <tr>
                        <td width="6%">5</td>
                        <td width="44%">Induction Program for Second Year Students</td>
                        <td width="30%">All Second Year</td>
                        <td width="18%">08/06/2017</td>
                        </tr>
                        <tr>
                        <td colspan="4" width="100%"><strong>Year-Round Activities</strong></td>
                        </tr>
                        <tr>
                        <td width="6%">1</td>
                        <td width="44%">Mechanical Engineering Students Association (MESA)</td>
                        <td colspan="2" width="48%">·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wall Magazine
                        <div>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical Quiz</div>
                        <div>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Group Discussion</div>
                        <div>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aptitude Test</div></td>
                        </tr>
                        <tr>
                        <td width="6%">2</td>
                        <td width="44%">Hobby Club</td>
                        <td colspan="2" width="48%">·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Model Making Competitions</td>
                        </tr>
                        <tr>
                        <td width="6%">3</td>
                        <td width="44%">Talent Incubation Centre</td>
                        <td colspan="2" width="48%">·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SAE Collegiate Club
                        <div>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Conducted Training for Automobile</div></td>
                        </tr>
                        <tr>
                        <td width="6%">4</td>
                        <td width="44%">M-CAD Club</td>
                        <td colspan="2" width="48%">·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Training and awareness programs for CAD Softwares</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <h2 className="faculty-title color-blue mb-2">Guest Lectures</h2>
                    <table className="table table-bordered table-striped" xss="removed">
                        <tbody><tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Sr.
                         No.</span></b><b><span xss="removed"><o></o></span></b></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Name
                         of Resource person</span></b><b><span xss="removed"><o></o></span></b></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Topic</span></b><b><span xss="removed"><o></o></span></b></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Designation
                         &amp; Company Name</span></b><b><span xss="removed"><o></o></span></b></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Target
                         Audience</span></b><b><span xss="removed"><o></o></span></b></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Date
                         of lecture</span></b><b><span xss="removed"><o></o></span></b></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">1<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Ms.
                         Harshali Dehmukh<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Interview
                         Techniques</span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">PG
                         Student of DMS IIT Delhi.</span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Third
                         &amp; Final Year Students </span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">11-09-2021</span><span xss="removed"><o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">2<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Devesh Mohan<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Career
                         Guidance </span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Director
                         (Global Alliance &amp; Channels) Canonical.</span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Second,
                         Third &amp; Final Year Students </span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">18-12-2021</span><span xss="removed"><o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">3<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Swapnil Pitale<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Current
                         trends in IT industry</span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Business
                         Unit Head: Intelligent Automation, WNS Global Services.</span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Second,
                         Third &amp; Final Year Students </span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">01-01-2022</span><span xss="removed"><o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">4<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Dr.B.K.C.
                         Ganesh<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Life
                         skills &amp; Personality Development</span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">CEO,
                         Print 3D Technology, Tirupati.</span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Second,
                         Third &amp; Final Year students </span><span xss="removed"><o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">12-03-2022</span><span xss="removed"><o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">5<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Shrikant Bidwai<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Falcon 9- A Revolution in Commercial
                         Travel.<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">CAD-CAM-GURU Solutions Pvt. Ltd. Pune.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Final Year Students<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">14-03-2019<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">6<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Umesh Agalawe<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">GATE Exam &amp; Opportunities for
                         Mechanical Engineers.<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">Director, GATEFORUM, Amravati.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Second Year Students<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">16-03-2019<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">7<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.Vishal
                         B. Dawangave<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Latest Industrial Trends in
                         CAD/CAM/CAE.<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">Statics Solutions Kothrud, Pune.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Third Year Students<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">06-03-2019<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">8<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Shubham Somani<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Opportunities for Mechanical Engineers
                         through CAD/CAM<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">Director, Indo Vidarbha Tool Room,
                         Akola.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Third Year Students<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">28-09-2018<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">9<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Ashwin Alsi &amp; Ms. Gauri Kale<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Opportunities of Higher Education in
                         Abroad.<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">Co-Director, Proficient Test Prep
                         Amravati.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Third &amp; Final Year Students<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">29-08-2018<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">10<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Ms.
                         Hufriz Shiralkar<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Higher studies in Abroad<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">Co-Director Prospects Services.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Final Year (Sec- A &amp; B)<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">23-02-2018<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">11<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Pavan Banbakode, Mr. Rahul Charpe &amp; Mr. Dattatray Labhade <o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">MPSC Exams &amp; preparation Strategy<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">—<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Final Year (Sec- A, B &amp; C)<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">08-02-2018<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">12<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Amit Kautkar<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Advances in CAD<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">Sr. Manager DCS Systems Amravati.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Third Year (Sec- A &amp; B)<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">19-01-2018<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">13<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Shivam Borole, Mr. Sarangdutta Adhau &amp; Mr. Pratik Pal <o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Applications of Arduino &amp; its
                         applications in Mech. Engg<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">—<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">Third Year (Sec-A, B &amp; C) <o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">18-01-2018<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">14<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Prof.Suraj Bhoyar<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Make in India the Skill Capital of the
                         World<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">T&amp;P and EDC Cell I/c of Sinhagad
                         COE, Pune.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">IV Sem. B.E. Mech (Sec- A,B &amp; C)<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">30-01-2017<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">15<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Chetan&nbsp; R. Wankhade, Mr. Vinay H. Hanamalkar &amp; Mr. Yogesh S.
                         Kothekar <o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Brief Report on Indian Students
                         Parliament<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">Attendee of Indian Students
                         Parliaments-2017held at MIT-Pune.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">IV Sem. B.E. Mech (Sec- A &amp; B)<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">23-01-2017<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="36" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">16<o></o></span></div>
                         </td>
                         <td width="112" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Mr.
                         Nilesh Indira Murumkar<o></o></span></div>
                         </td>
                         <td width="125" valign="top" xss="removed">
                         <div><span xss="removed">Swami Vivekananda: An Inspiration<o></o></span></div>
                         </td>
                         <td width="155" valign="top" xss="removed">
                         <div><span xss="removed">Director (Life shines Institute of
                         Human Excellence) Akola.<o></o></span></div>
                         </td>
                         <td width="121" valign="top" xss="removed">
                         <div><span xss="removed">IV Sem. B.E. Mech (Sec- A &amp; B)<o></o></span></div>
                         </td>
                         <td width="91" valign="top" xss="removed">
                         <div><span xss="removed">12-01-2017<o></o></span></div>
                         </td>
                        </tr>
                       </tbody></table>
                </div>
                <div className="tab-pane fade" id="pills-Workshop" role="tabpanel" aria-labelledby="pills-Workshop-tab">
                   
                    <h2 className="faculty-title color-blue mb-2" >National/ International Conference/ Workshop</h2><table className="table table-bordered table-striped" width="612" xss="removed"><tbody><tr xss="removed">
                        <td width="55" xss="removed">
                        <div><b><span xss="removed">Sr. No.<o></o></span></b></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><b><span xss="removed">Name of
                        Conference /&nbsp;Workshop<o></o></span></b></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><b><span xss="removed">Conference/
                        Workshop<o></o></span></b></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><b><span xss="removed">Date<o></o></span></b></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">1<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Research Methodology
                        : From Problem Formulation to Report Writing<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">STTP<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">25<sup>th</sup>
                        to 30<sup>th</sup> July 2022<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">2<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Solar
                        Energy &amp; its Applications, Economical Implications in Indian Scenario
                        after COVID- 19.</span><span xss="removed"><o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">FDP<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">15<sup>th</sup>
                        to 19<sup>th</sup> June 2020<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">3<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Advances
                        in Green energy for Sustainable Development I<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">STTP<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">10<sup>th</sup>&nbsp; to 16<sup>th</sup>
                        Aug 2020<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">4<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Advances
                        in Green energy for Sustainable Development II<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">STTP<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">21<sup>st</sup> to 26st Dec 2020<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">5<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">International
                        Conference on INDUSTRY 4.0<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">Conference<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">29<sup>th</sup> to 1<sup>st</sup> Dec 2019</span><span xss="removed"><o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">6<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span lang="EN-US" xss="removed">Advances in Internal Combustion Engines &amp; Fuels.</span><span xss="removed"><o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">STTP<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">14<sup>th</sup>
                        to 19<sup>th</sup> Oct 2019<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">7<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Dis-Assembly
                        &amp; assembly of 2-stroke &amp; 4 stroke I. C. Engine &amp; Differential<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">Workshop<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">23<sup>rd</sup> July 2018</span><span xss="removed"><o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">8<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">“ROBOTICS
                        &amp; IOT”<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">Workshop<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">18<sup>th</sup> to 19 th Dec 2018</span><span xss="removed"><o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">9<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Rapid
                        Prototyping for Industrial &amp; medical applications<o></o></span></div>
                        <div><span xss="removed">(AICTE
                        Sponsored)<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">STTP<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">11th&nbsp;to 22nd&nbsp;Dec<o></o></span></div>
                        <div><span xss="removed">2017<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">10<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Latex-High
                        quality typesetting Tool<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">Workshop<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">07<sup>th</sup> Dec 2017<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">11<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Refresher
                        Program on<o></o></span></div>
                        <div><span xss="removed">Artificial
                        Neural Network by using MATLAB<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">Workshop<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">03<sup>rd</sup> May 2017<o></o></span></div>
                        </td>
                       </tr>
                       <tr xss="removed">
                        <td width="55" xss="removed">
                        <div><span xss="removed">12<o></o></span></div>
                        </td>
                        <td width="264" xss="removed">
                        <div><span xss="removed">Refresher
                        Program on<o></o></span></div>
                        <div><span xss="removed">Microsoft
                        Excel<o></o></span></div>
                        </td>
                        <td width="123" xss="removed">
                        <div><span xss="removed">Workshop<o></o></span></div>
                        </td>
                        <td width="208" xss="removed">
                        <div><span xss="removed">02<sup>nd</sup> May 2017<o></o></span></div>
                        </td>
                       </tr>
                      </tbody></table>
                      <div>
                        <h2 className="faculty-title">Industrial/ Field Visit</h2>
                        <table className="table table-bordered table-striped" width="100%" xss="removed"><tbody><tr xss="removed">
                          <td width="40" xss="removed">
                          <div><b><span xss="removed">Sr. No.<o></o></span></b></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><b><span xss="removed">Company name<o></o></span></b></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><b><span xss="removed">Company sector<o></o></span></b></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><b><span xss="removed">Level<o></o></span></b></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><b><span xss="removed">Date from<o></o></span></b></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><b><span xss="removed">Date to<o></o></span></b></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><b><span xss="removed">No of students<o></o></span></b></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">1<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Anand sagar water bottles,MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">2<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Tirumala precast,MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">3<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">EGG industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">4<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Sunpack coruggated boxess, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">5<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Amrutwell plastic industries, MIDC-Amravati. <o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">6<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Jadhao steel alloys, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">7<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">PKV nail industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">8<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Senger industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">9<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Jadho steel alloys, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-10-22<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">01-04-23<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">74<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">10<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Suryalakshmi cotton mills LTD., MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">09-03-19<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">25-09-19<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">11<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shreenath packes, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">09-03-19<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">25-09-19<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">12<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Tirupati industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">09-03-19<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">25-09-19<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">13<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Senger industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">09-03-19<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">25-09-19<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">14<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shreeji pet &amp; polymers, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">09-03-19<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">25-09-19<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">15<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shiv international fruit product, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">09-03-19<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">25-09-19<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">16<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Jadho steel alloys, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">09-03-19<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">25-09-19<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">17<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shreeji pet &amp; polymers, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">10-05-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">22-10-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">18<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Senger industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">10-05-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">22-10-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">19<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Jadhao steel alloys, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">10-05-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">22-10-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">20<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Tirupati industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">11-05-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">22-10-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">21<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shreenath packes, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">12-05-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">22-10-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">22<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shiv international fruit product, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">13-05-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">22-10-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">23<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Jadhao steel alloys, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">14-05-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">22-10-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">40<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">24<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Jadhav Gears Pvt Ltd, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-09-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">29-09-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">210<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">25<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">M/s Tirupati Industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-09-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">29-09-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">200<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">26<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shiv International Food Pvt Ltd, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-09-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">29-09-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">200<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">27<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shreeji pet &amp; polymers, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-09-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">29-09-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">210<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">28<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shreenath Packers, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-09-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">29-09-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">200<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">29<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Sengar Industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-09-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">29-09-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">200<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">30<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Jadhav Gears Pvt Ltd, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">16-02-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">16-02-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">150<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">31<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">IGTR, Aurangabad.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production &amp; Training<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">29-01-18<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">29-01-18<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">60<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">32<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">M/s Tirupati Industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-07-17<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">26-08-17<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">152<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">33<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shiv International Food Pvt Ltd, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-07-17<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">26-08-17<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">155<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">34<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shreeji Pet &amp; Polymers, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-07-17<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">26-08-17<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">148<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">35<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Shreenath Packers, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-07-17<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">26-08-17<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">153<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">36<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Sengar Industries, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-07-17<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">26-08-17<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">151<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">37<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">Jadhao Steel Alloys, MIDC-Amravati.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">22-07-17<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">26-08-17<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">136<o></o></span></div>
                          </td>
                         </tr>
                         <tr xss="removed">
                          <td width="40" xss="removed">
                          <div><span xss="removed">38<o></o></span></div>
                          </td>
                          <td width="318" xss="removed">
                          <div><span xss="removed">IGTR Aurangabad.<o></o></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">Production &amp; Training<o></o></span></div>
                          </td>
                          <td width="78" xss="removed">
                          <div><span xss="removed">2nd year<b><o></o></b></span></div>
                          </td>
                          <td width="84" xss="removed">
                          <div><span xss="removed">15-02-17<o></o></span></div>
                          </td>
                          <td width="72" xss="removed">
                          <div><span xss="removed">16-02-17<o></o></span></div>
                          </td>
                          <td width="65" xss="removed">
                          <div><span xss="removed">130<o></o></span></div>
                          </td>
                         </tr>
                        </tbody></table><br/></div>
                </div>
            </div>
        </div>
    </div>
</div>


<Contact/>
<Footer/>


    </div>

    )
}

export default MechEvenets;