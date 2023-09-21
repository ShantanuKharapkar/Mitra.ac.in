import React from "react";



import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/cseEvents.css"

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const CseEvents  = () =>{
    
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
                        <h2 className="faculty-title">Department Extracurricular Activities</h2>
                        <table className="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <td width="175">
                                        <strong>Title</strong>
                                    </td>
                                    <td>
                                        <strong>Delivered/Organized By</strong>
                                    </td>
                                    <td>
                                        <strong>Date</strong>
                                    </td>
                                    <td width="98">
                                        <strong>Activities For</strong>
                                    </td>
                                    <td>
                                        <strong>For Which Students (Second , Third, Final)</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="175">
                                        “ODE to CODE” (Snippet Hunt, Code Strike and Design Mestro Program)
                                        <br/> One Day Technical Event
                                    </td>
                                    <td>CSI Managing Team CSE, Dept, PRMIT&amp;R, Badnera</td>
                                    <td>9th April 2022</td>
                                    <td>Students</td>
                                    <td>All SGBAU Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Girl Child Photo with Slogan Competition</td>
                                    <td>Prof. Ms. R.A.Kale, Prof.Ms.N.S.Dandge</td>
                                    <td>24th Jan 2022</td>
                                    <td>Students, Faculty</td>
                                    <td>Institute Level</td>
                                </tr>
                                <tr>
                                    <td width="175">Quiz Competition On the Occasion of Women’s Day</td>
                                    <td>CSI Managing Team CSE, Dept, PRMIT&amp;R, Badnera</td>
                                    <td>8th March 2022</td>
                                    <td>Institute Level </td>
                                    <td>All CSE Students</td>
                                </tr>
                                <tr>
                                    <td width="175">National Voters Day</td>
                                    <td>
                                        Recourse Person: Adv. Shreyas Sanjay Badiye
                                        <br/> Coordinated By: Prof. S.V.Deshmukh, Prof.Ms.P.P.Deshmukh
                                    </td>
                                    <td>25th Jan 2022</td>
                                    <td>Students</td>
                                    <td>Institute Level </td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>

                        <div className="su-table su-table-alternate">
                            <h2 className="faculty-title">Juvenile 2021 - Cultural Fest</h2>
                            <table className="table table-bordered table-striped" width="534">
                                <tbody>
                                    <tr>
                                        <td width="151">Name of Activities Organized</td>
                                        <td>Title</td>
                                        <td>Coordinators</td>
                                        <td>Date</td>
                                        <td>Nature of Participants</td>
                                        <td>No of Participants</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>
                                            Tree Plantation, C- Programming, Photography, e-foot step, Quiz.
                                        </td>
                                        <td>CSE Department, PRMIT&amp;Rr</td>
                                        <td>5th, 18th, 19th June 2021</td>
                                        <td width="160">ALL Year students</td>
                                        <td>445</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <table className="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <td width="175">
                                        <strong>Title</strong>
                                    </td>
                                    <td>
                                        <strong>Delivered/Organized By</strong>
                                    </td>
                                    <td>
                                        <strong>Date</strong>
                                    </td>
                                    <td width="98">
                                        <strong>Activities For</strong>
                                    </td>
                                    <td>
                                        <strong>For Which Students (Second , Third, Final)</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="175">
                                        Coding Competitions Event (C-kShetra, Blind-Code, Web Storm)
                                    </td>
                                    <td>CSI Managing Team CSE, Dept, PRMIT&amp;R, Badnera</td>
                                    <td>1 day 24th August 2019</td>
                                    <td>Students</td>
                                    <td>All SGBAU Students</td>
                                </tr>
                                <tr>
                                    <td width="175">
                                        Wall Magazine Event ( Theme: Digital Dreams and Transformation)
                                    </td>
                                    <td>Prof. K. H. Deshmukh, Prof. R. S. Badre, Prof. S. G. Tale</td>
                                    <td>21st Sept 2019</td>
                                    <td>Students</td>
                                    <td>All CSE Students</td>
                                </tr>
                                <tr>
                                    <td width="175">ART Club (Theme: International Women’s Day)</td>
                                    <td>Prof. K. R. Hole and Team</td>
                                    <td>7th March 2020</td>
                                    <td>Students</td>
                                    <td>All CSE Students</td>
                                </tr>
                                <tr>
                                    <td width="175">
                                        Online Technical Event (Code battle, Documentary Covid-19 competition)
                                    </td>
                                    <td>CSI Managing Team CSE, Dept, PRMIT&amp;R, Badnera</td>
                                    <td>23rd May 2020</td>
                                    <td>Students</td>
                                    <td></td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                        <table className="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <td width="175"><strong>Title</strong></td>
                                    <td><strong>Delivered/Organized By</strong></td>
                                    <td><strong>Date</strong></td>
                                    <td width="98"><strong>Activities For</strong></td>
                                    <td><strong>For Which Students (Second , Third, Final)</strong></td>
                                </tr>
                                <tr>
                                    <td width="175">Address by Third Year Students<br/>(Discuss with Name of company,
                                        their criteria, selection process etc )</td>
                                    <td>Prof. S.S. Dandge Department of CSE</td>
                                    <td>10th Aug 2020</td>
                                    <td>Students</td>
                                    <td>Third Year Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Induction Program for Second Year Students</td>
                                    <td>Dr. G.R. Bamnote<br/>Department of CSE<br/>P.R.M.I.T. &amp; R. Badnera</td>
                                    <td>1st July 2020</td>
                                    <td>Students</td>
                                    <td>Second Year<br/>students</td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td width="175">e-Known your Department(e-KYD)</td>
                                    <td>Dr. G. R. Bamnote And all faculty members</td>
                                    <td>27th June 2020</td>
                                    <td>Students</td>
                                    <td>All CSE Second year Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Online Technical Event (Code battle, Documentary Covid-19
                                        competition</td>
                                    <td>Conducted by<br/>CSI Managing Team<br/>CSE, Dept, PRMIT&amp;R, Badnera</td>
                                    <td>23rd May 2020</td>
                                    <td>Students</td>
                                    <td>All CSE Students</td>
                                </tr>
                                <tr>
                                    <td width="175">ART Club<br/>(Theme: International Women’s Day)</td>
                                    <td>Coordinator:<br/>Prof. K. R. Hole and Team</td>
                                    <td>7th March 2020</td>
                                    <td>Students</td>
                                    <td>All CSE Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Wall Magazine Event(Theme: Digital Dreams and Transformation)</td>
                                    <td>Conducted by Prof. K.H. Deshmukh, Prof. R. S. Badre, Prof. S. G. Taley</td>
                                    <td>21st Sept 2019</td>
                                    <td>Students</td>
                                    <td>All CSE Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Parents Meet(Odd 2019-20 Session)</td>
                                    <td>Prof. Y. S. Alone and All Class Teacher’s</td>
                                    <td>14th Sep 2019</td>
                                    <td>Students</td>
                                    <td>All CSE Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Coding Competitions Event<br/>(C-kShetra, Blind-Code, Web Storm)</td>
                                    <td>Conducted by CSI Managing Team CSE, Dept, PRMIT&amp;R, Badnera</td>
                                    <td>1 day<br/>24th August 2019</td>
                                    <td>Students</td>
                                    <td>All SGBAU Students</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="su-table su-table-alternate"></div>
                        <hr/>
                        <div className="su-table su-table-alternate"></div>
                        <table className="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <td width="175"><strong>Title</strong></td>
                                    <td><strong>Delivered/Organized By</strong></td>
                                    <td><strong>Date</strong></td>
                                    <td width="98"><strong>Activities For</strong></td>
                                    <td><strong>For Which Students (Second , Third, Final)</strong></td>
                                </tr>
                                <tr>
                                    <td width="175">Known your Department</td>
                                    <td>Coordinated by<br/>Prof.S.S.Dandge</td>
                                    <td>26<sup>th</sup>&nbsp;April 2019</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">“Amantrya” Farewell Program for 2019 Batch</td>
                                    <td>Coordinated by<br/>Third Year
                                        Students<br/>Prof.P.B.Lohiya<br/>Prof.P.P.Kadu<br/>Prof.R.A.Meshram</td>
                                    <td>23<sup>rd</sup>&nbsp;April 2019</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">“Environmental Visit” At Bamboo Garden Amravati</td>
                                    <td>Second Year Students<br/>Coordinated
                                        by<br/>Prof.S.V.Kalbande<br/>Prof.K.R.Hole<br/>Prof.V.S.Sakharkar</td>
                                    <td>16<sup>th</sup>&nbsp;April 2019</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Parents Meet</td>
                                    <td>Coordinated By:<br/>Prof. Y. S. Alone<br/>Prof. N.S.Khachane<br/>&amp; All Class
                                        Teachers</td>
                                    <td>23rd&nbsp; March, 2019</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">6. Peer to Peer Learning Activity Mentor scheme</td>
                                    <td>Final Year Students</td>
                                    <td>15th March 2019</td>
                                    <td>Students</td>
                                    <td>Third Year students</td>
                                </tr>
                                <tr>
                                    <td width="175">ART Club Work Topic : “The Contribution of Women in today’s era”
                                    </td>
                                    <td>Open to all Students<br/>Coordinated
                                        by<br/>Prof.K.R.Hole<br/>Prof.N.A.Deshmukh<br/>Prof.S.G.Pundakar<br/>Prof.P.P.Deshmukh<br/>Prof.S.V.Kalbande
                                    </td>
                                    <td>09<sup>th</sup>&nbsp;March 2019</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">6. Peer to Peer Learning Activity Placed Student Interaction Session
                                    </td>
                                    <td>Final Year Students</td>
                                    <td>8th March 2019</td>
                                    <td>Students</td>
                                    <td>Third Year students</td>
                                </tr>
                                <tr>
                                    <td width="175">6. Peer to Peer Learning Activity C-Shetra</td>
                                    <td>Alumina students</td>
                                    <td>20th October 2018</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Wall Magazine<br/>“ Theme:- Tribuite to Bharat Ratna Atal Bihari
                                        Vajpayee, India’s Former Prime Minister”</td>
                                    <td>Coordinated by<br/>Prof.P.P.Deshmukh</td>
                                    <td>22nd&nbsp; Sep 2018</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">“ENTERPEDIA-2018”<br/>*B-Plan<br/>*Video AD Competition<br/>*Treasure
                                        Hunt<br/>*Logo Design<br/>*Gully Cricket</td>
                                    <td>Coordinated by&nbsp; Prof.S.V.Deshmukh</td>
                                    <td>8th Sep 2018</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Parents Meet</td>
                                    <td>Coordinated By:<br/>Prof. Y. S. Alone<br/>Prof. N.S.Khachane<br/>&amp; All Class
                                        Teachers</td>
                                    <td>25th August, 2018</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">*C-Mania<br/>*Code War<br/>*QrioSity<br/>*Pic-Porticus</td>
                                    <td>Coordinated by<br/>Dr.S.R.Gupta<br/>Prof.P.B.Lohiya</td>
                                    <td>4th Aug 2018</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Introduction to SCADA (&nbsp;supervisory control and data
                                        acquisition)</td>
                                    <td>Mr. P.B.Shrivastva AEE, SCADA Center Amravati</td>
                                    <td>25<sup>th</sup>&nbsp;July 2018</td>
                                    <td width="98">Students</td>
                                    <td>Second Year Students</td>
                                </tr>
                                <tr>
                                    <td width="175">Industry Visit, at&nbsp; SCADA Center Amravati</td>
                                    <td>Mr. P.B.Shrivastva<br/>AEE, SCADA Center Amravati<div>Coordinated by<br/>Prof.
                                            S.V.Deshmukh<br/>Prof.A.R.Deshmukh<br/>Prof.S.P.Ingale</div>
                                    </td>
                                    <td>25<sup>th</sup>&nbsp;July 2018</td>
                                    <td width="98">Students</td>
                                    <td>Second Year</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="su-table su-table-alternate"></div>
                        <hr/>
                        <div className="su-table su-table-alternate"></div>
                        <table className="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <td><strong>Title</strong></td>
                                    <td><strong>Delivered/Organized By</strong></td>
                                    <td><strong>Date</strong></td>
                                    <td><strong>Activities For</strong></td>
                                    <td><strong>For Which Students (Second , Third, Final)</strong></td>
                                </tr>
                                <tr>
                                    <td>CSI Foundation Day</td>
                                    <td>PRMITR, CSI Student Chapter</td>
                                    <td>16th March 2018</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td>National Inventor’s Day</td>
                                    <td>CSI Student Chapter</td>
                                    <td>10th Feb 2018</td>
                                    <td>Students</td>
                                    <td>Students</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;Photography</td>
                                    <td>Mr. Ajinkya Bhonde (Final Yr.)<br/>Mr.Prasad Ikhar (Third Yr.)</td>
                                    <td>25th Sep 2017</td>
                                    <td>Students</td>
                                    <td>Second –Third Year Students</td>
                                </tr>
                                <tr>
                                    <td>Wall Magazine Inauguration</td>
                                    <td>Prof. P. P. Deshmukh,<br/>Prof. K. H.
                                        Deshmukh,<br/>Prof.V.S.Sakharkar,<br/>Prof.G.J.Gajgande</td>
                                    <td>23rd Sep 2017</td>
                                    <td>Students</td>
                                    <td>Second –Third Year Students</td>
                                </tr>
                                <tr>
                                    <td>Celebration of Engineer &amp; Teacher Day</td>
                                    <td>Prof.R.A.Kale<br/>Prof.K.R.Hole</td>
                                    <td>23rd Sep 2017</td>
                                    <td>Students</td>
                                    <td>Second –Third Year Students</td>
                                </tr>
                                <tr>
                                    <td>Parents Meet<br/>
                                        (Odd 2017-18 Session)</td>
                                    <td>Prof. Y. S. Alone<br/>Prof.N.S.Khachane<br/>Prof.M.A.Deshmukh</td>
                                    <td>19<sup>th</sup>&nbsp;Aug 2017</td>
                                    <td>Parents</td>
                                    <td>All Students</td>
                                </tr>
                                <tr>
                                    <td>Wall Magazine</td>
                                    <td><br/></td>
                                    <td>17th Feburary 2017</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                                <tr>
                                    <td>Wall Magazine</td>
                                    <td><br/></td>
                                    <td>16<sup>th</sup>&nbsp;September 2016</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                                <tr>
                                    <td>Teacher’s day</td>
                                    <td><br/></td>
                                    <td>16<sup>th</sup>&nbsp;September 2016</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                                <tr>
                                    <td>A Engineer’s Day</td>
                                    <td><br/></td>
                                    <td>16<sup>th</sup>&nbsp;September 2016</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                                <tr>
                                    <td>Class Decoration Competition</td>
                                    <td><br/></td>
                                    <td>15<sup>th</sup>&nbsp;September 2016</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                                <tr>
                                    <td>Fare well program</td>
                                    <td><br/></td>
                                    <td>8<sup>th</sup>&nbsp;April 2016</td>
                                    <td>Students</td>
                                    <td>Final Year</td>
                                </tr>
                                <tr>
                                    <td>Felicitation of Toppers, Achievers</td>
                                    <td><br/></td>
                                    <td>&nbsp;27<sup>th</sup>&nbsp;Feb 2016</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                                <tr>
                                    <td>Wall magazine</td>
                                    <td><br/></td>
                                    <td>15<sup>th&nbsp;</sup>September 2015</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                                <tr>
                                    <td>Teacher’s day</td>
                                    <td><br/></td>
                                    <td>5<sup>th&nbsp;&nbsp;</sup>September&nbsp; 2015</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                                <tr>
                                    <td>Farewell Program</td>
                                    <td><br/></td>
                                    <td>23<sup>rd</sup>&nbsp;April 2015</td>
                                    <td>Students</td>
                                    <td>&nbsp;Final Year</td>
                                </tr>
                                <tr>
                                    <td>Essay writing competition</td>
                                    <td><br/></td>
                                    <td>10<sup>th</sup>&nbsp;January 2015</td>
                                    <td>Students</td>
                                    <td>Second Year</td>
                                </tr>
                                <tr>
                                    <td>Wall Magazine</td>
                                    <td><br/></td>
                                    <td>2<sup>nd</sup>&nbsp;October 2014</td>
                                    <td>Students</td>
                                    <td>Second, Third and Final Year</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <h2 className="faculty-title">Social Activites</h2>
                            <div className="su-table su-table-alternate">
                                <table className="table table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <td><strong>Sr.No.</strong></td>
                                            <td><strong>Activity</strong></td>
                                            <td><strong>Participated by</strong></td>
                                            <td><strong>Date</strong></td>
                                            <td><strong>No of Participants</strong></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Visit to Orphanage</td>
                                            <td>Second –Third Year Students<br/>
                                                Coordinated by&nbsp;Prof.S.V.Deshmukh</td>
                                            <td>11th August 2019</td>
                                            <td>62</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Visit to Orphanage</td>
                                            <td>Second –Third Year Students<br/>
                                                Coordinated by&nbsp;Prof.S.V.Deshmukh</td>
                                            <td>26th Jan 2020</td>
                                            <td>45</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr/>
                            <div className="su-table su-table-alternate"><br className="Apple-interchange-newline"/>
                                <table className="table table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <td><strong>Title</strong></td>
                                            <td><strong>Delivered / Organized By</strong></td>
                                            <td><strong>Date</strong></td>
                                            <td><strong>Guest Lect / Workshop For</strong></td>
                                            <td><strong>For Which Students (Second , Third, Final)</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Visit to Bahilolpur ashram Shala</td>
                                            <td>Prof.S.V.Deshmukh</td>
                                            <td>15<sup>th</sup>&nbsp;Jan 2018</td>
                                            <td>Students</td>
                                            <td>Second –Third Year Students</td>
                                        </tr>
                                        <tr>
                                            <td>Visit to Old Age Home</td>
                                            <td>Prof.S.V.Deshmukh</td>
                                            <td>14<sup>th</sup>&nbsp;Jan 2018</td>
                                            <td>Students</td>
                                            <td>Students- Third Year Students</td>
                                        </tr>
                                        <tr>
                                            <td>Visit Wadali Garden with Govt. orphan childrens</td>
                                            <td>Prof.S.V.Deshmukh</td>
                                            <td>15<sup>th</sup>&nbsp;Aug 2017</td>
                                            <td>Students</td>
                                            <td>Second –Third Year Students</td>
                                        </tr>
                                        <tr>
                                            <td>Mega Blood Donation Camp</td>
                                            <td><br/></td>
                                            <td>11<sup>th</sup>&nbsp;March 2016</td>
                                            <td>Students</td>
                                            <td>Second, Third and Final Year</td>
                                        </tr>
                                        <tr>
                                            <td>Tree plantation</td>
                                            <td><br/></td>
                                            <td>15<sup>th</sup>&nbsp;August 2015</td>
                                            <td>Students</td>
                                            <td>Second, Third and Final Year</td>
                                        </tr>
                                        <tr>
                                            <td>Personality Enhancement Program</td>
                                            <td>Dr.Sandip S. Bhanose</td>
                                            <td>11-Oct-13</td>
                                            <td>Students</td>
                                            <td>Second year , Third year, Final year</td>
                                        </tr>
                                        <tr>
                                            <td>Developing Communication Skill with Cambridge English.</td>
                                            <td>Resource person from English Language Teaching Institute of Symbiosis.
                                            </td>
                                            <td>24-Aug-12</td>
                                            <td>Students</td>
                                            <td> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="su-table su-table-alternate">
                            <div xss="removed"><img src="http://mitra.ac.in/uploads/media/GuestL.png" width="98%"/></div>
                            <br/>
                            <table className="table table-bordered table-striped" width="534">
                                <tbody>
                                    <tr>
                                        <td width="151">Name of Activities Organized</td>
                                        <td>Title</td>
                                        <td>Coordinators</td>
                                        <td>Date</td>
                                        <td>Nature of Participants</td>
                                        <td>No of Participants</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>Guest lecture on “Web Programming</td>
                                        <td>Prof. Swati Kale, Assistant Professor YCCE, Nagpur</td>
                                        <td>11th December 2020</td>
                                        <td width="160">Second and Third Year Students</td>
                                        <td>170</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>
                                            Webinar on “ Transition to Data Science and its Opportunities in
                                            Industries”
                                        </td>
                                        <td>
                                            Mr. Arpit Yadav, Research Scientist AI/ML, Tensorbrew, Hyderabad
                                        </td>
                                        <td>13th February 2021</td>
                                        <td width="160">Second and Third Year Students</td>
                                        <td>180</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>Webinar on "Take Control On Your Happiness"</td>
                                        <td>Mr. Shyam Ahuja, Senior IT Professional, USA</td>
                                        <td>13th March 2021</td>
                                        <td width="160">CSE Students &amp; Faculty</td>
                                        <td>300</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>Webinar on “Journey to Machine Learning: Technology, Impact and Scope”</td>
                                        <td>Mr. Arpit Yadav, Research Scientist AI/ML, Tensorbrew, Hyderabad</td>
                                        <td>22nd May 2021</td>
                                        <td width="160">Second and Third, Final Year Students</td>
                                        <td>220</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="su-table su-table-alternate">
                            <table className="table table-bordered table-striped" width="534">
                                <tbody>
                                    <tr>
                                        <td width="151">Name of Activities Organized</td>
                                        <td>Title</td>
                                        <td>Coordinators</td>
                                        <td>Date</td>
                                        <td>Nature of Participants</td>
                                        <td>No of Participants</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>Guest lecture on “Abroad Education Awareness and opportunity”</td>
                                        <td>
                                            Mr. Ashwin Alsi and Ms. Gauri Alsi Founder of Proficient Test Prep
                                        </td>
                                        <td>25th July 2019</td>
                                        <td width="160">Third Year Students</td>
                                        <td>128</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>Guest lecture on “Video Game Solution”</td>
                                        <td>Mr. Chetan Ingle Apogiv Solutions Pvt Ltd</td>
                                        <td>6th August 2019</td>
                                        <td width="160">Second and Third Year Students</td>
                                        <td>180</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>Guest lecture on “Current Trends in IT”</td>
                                        <td>Dr. S. S. Narkhede</td>
                                        <td>20th August 2019</td>
                                        <td width="160">Third Year Students</td>
                                        <td>110</td>
                                    </tr>
                                    <tr>
                                        <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
                                        <td>Guest lecture on “Carrier Opportunities and placement”</td>
                                        <td>
                                            Mr. Kalpesh Beldar, Network Security Engineer, Google India, Mumbai
                                        </td>
                                        <td>29th August 2019</td>
                                        <td width="160">Third Year Students</td>
                                        <td>115</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="su-table su-table-alternate" xss="removed">
                            <table className="table table-bordered table-striped" xss="removed" width="1211">
                                <tbody>
                                    <tr xss="removed">
                                        <td xss="removed" width="377"><b>Title</b></td>
                                        <td xss="removed" width="447"><b>Delivered By</b></td>
                                        <td xss="removed" width="120"><b>Date</b></td>
                                        <td xss="removed" width="267"><b>For Which Students (Second , Third, Final)</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">Guest lecture on “Current Trends in IT”</td>
                                        <td xss="removed" width="447">Mr.Tejas Kawalkar Game Developer at Deloitte
                                            Digital Mr. Ravi Waghmare Principal development Engineer at CalSoft Ins</td>
                                        <td xss="removed" width="120">7th Feb 2020</td>
                                        <td xss="removed" width="267">Second and Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="377">Guest lecture on “Carrier Opportunities and
                                            placement”</td>
                                        <td xss="removed" width="447">Conducted by<br/>Mr. Kalpesh Beldar, Network
                                            Security Engineer, Google India, Mumbai</td>
                                        <td xss="removed" width="120">29th August 2019</td>
                                        <td xss="removed" width="267">Third Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">Guest lecture on “Current Trends in IT”</td>
                                        <td xss="removed" width="447">Conducted by Dr. S. S. Narkhede</td>
                                        <td xss="removed" width="120">20th August 2019</td>
                                        <td xss="removed" width="267">Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="377">Guest lecture on “Video Game Solution”</td>
                                        <td xss="removed" width="447">Conducted by Mr. Chetan Ingle Apogiv Solutions Pvt
                                            Ltd</td>
                                        <td xss="removed" width="120">6th August 2019</td>
                                        <td xss="removed" width="267">Second- and Third-Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">Guest lecture on “Abroad Education Awareness and
                                            opportunity”</td>
                                        <td xss="removed" width="447">Conducted by Mr. Ashwin Alsi and Ms. Gauri Alsi
                                            Founder of Proficient Test Prep</td>
                                        <td xss="removed" width="120">25th July 2019</td>
                                        <td xss="removed" width="267">Third Year Students</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr xss="removed"/>
                        <div className="su-table su-table-alternate" xss="removed">
                            <table className="table table-bordered table-striped" xss="removed" width="1211">
                                <tbody>
                                    <tr xss="removed">
                                        <td xss="removed" width="377"><b>Title</b></td>
                                        <td xss="removed" width="447"><b>Delivered By</b></td>
                                        <td xss="removed" width="120"><b>Date</b></td>
                                        <td xss="removed" width="267"><b>For Which Students (Second , Third, Final)</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">Introduction to GATE</td>
                                        <td xss="removed" width="447">Mr.Rahul Agalawe<br/>Director, GateForum, Amravati
                                        </td>
                                        <td xss="removed" width="120">30th Jan 2019</td>
                                        <td xss="removed" width="267">Second Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="377">Cloud Computing and its Future</td>
                                        <td xss="removed" width="447">Mr.Raju Dhole<br/>Sr. Officer<br/>IBM, Bangalore
                                        </td>
                                        <td xss="removed" width="120">28th Dec 2018</td>
                                        <td xss="removed" width="267">Second, Third and Final Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">ImaginXP</td>
                                        <td xss="removed" width="447">Prof. (Col) Shishir Kumar, Director General-
                                            ImaginXP</td>
                                        <td xss="removed" width="120">16<sup xss="removed">th</sup>&nbsp;Oct 2018</td>
                                        <td xss="removed" width="267">Final Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="377">Spoken English &amp; Personality Development</td>
                                        <td xss="removed" width="447">Prof.Ms.R.R.Tuteja<br/>Associate Professor<br/>Dept.
                                            of CSE<br/>PRMIT&amp;R, Badnera</td>
                                        <td xss="removed" width="120">14<sup xss="removed">th</sup>&nbsp;Aug 2018</td>
                                        <td xss="removed" width="267">Second Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">Internet of Things</td>
                                        <td xss="removed" width="447">Dr.S.S.Agrawal<br/>Assistant Professor,<br/>College
                                            of Engineering and Technology,<br/>Akola</td>
                                        <td xss="removed" width="120">3<sup xss="removed">rd</sup>&nbsp;Aug 2018</td>
                                        <td xss="removed" width="267">Final, Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="377">Opportunities for Higher Education in Abroad</td>
                                        <td xss="removed" width="447">Mr. Ashwin Alsi<br/>MS Mechanical University of
                                            Chicago<br/>Control Systems Engineer- Ace Hardware &amp; Integra technologies
                                            <div>Ms. Gauri Kale<br/>MS Management University of Chicago<br/>Business
                                                Analyst – Deloitte and Hewlett-Packard</div>
                                        </td>
                                        <td xss="removed" width="120">30<sup xss="removed">th</sup>&nbsp;July 2018</td>
                                        <td xss="removed" width="267">Final, Third Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">How to Prepare for IIT</td>
                                        <td xss="removed" width="447">Mr.J.K.Reddy<br/>M.Tech (IIT Kharahpur)<br/>IES
                                            Officer at Hyderabad</td>
                                        <td xss="removed" width="120">25<sup xss="removed">th</sup>&nbsp;July2018</td>
                                        <td xss="removed" width="267">Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="377">Big data Management and Machine Learning</td>
                                        <td xss="removed" width="447">Mr. Mangesh Bharti<br/>Ibase Electrosoft
                                            LLP,Amravati</td>
                                        <td xss="removed" width="120">18<sup xss="removed">th</sup>&nbsp;July 2018</td>
                                        <td xss="removed" width="267">Final, Third Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">Introduction to GATE</td>
                                        <td xss="removed" width="447">Mr.Rahul Agalawe<br/>Director, GateForum, Amravati
                                        </td>
                                        <td xss="removed" width="120">17<sup xss="removed">th</sup>&nbsp;July 2018</td>
                                        <td xss="removed" width="267">Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="377">Machine Learning and its Application</td>
                                        <td xss="removed" width="447">Mr.Suyush L. Zawar<br/>Co-Founde &amp;
                                            Director<br/>Visistfresh Enterprises,Amravati</td>
                                        <td xss="removed" width="120">10<sup xss="removed">th</sup>&nbsp;July 2018</td>
                                        <td xss="removed" width="267">Third Year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="377">Cyber Security &amp; Ethical Hacking</td>
                                        <td xss="removed" width="447">Mr. Ajinkya Lohakare<br/>Founder &amp;
                                            CTO,<br/>Social Spectra, Nashik</td>
                                        <td xss="removed" width="120">05th March 2018</td>
                                        <td xss="removed" width="267">Final, Third Year Students</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr xss="removed"/>
                        <div className="su-table su-table-alternate" xss="removed">
                            <table className="table table-bordered table-striped" xss="removed" width="693">
                                <tbody>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>Title</strong></td>
                                        <td xss="removed" width="187"><strong>Delivered/Organized By</strong></td>
                                        <td xss="removed" width="94"><strong>Date</strong></td>
                                        <td xss="removed" width="95"><strong>Guest Lect / Workshop For</strong></td>
                                        <td xss="removed" width="130"><strong>For Which Students (Second , Third,
                                                Final)</strong></td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Machine Learning</td>
                                        <td xss="removed" width="187">Mr. Mayank R. Dundale<br/>System Engineer,<br/>TCS,
                                            Pune</td>
                                        <td xss="removed" width="94"><strong>08th Feb 2018</strong></td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final, Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">How to Prepare GATE Exam</td>
                                        <td xss="removed" width="187">Mr.Nabil Sayed<br/>(Alumini 2015 Batch)<br/>IIT
                                            Guwahati, Placed in Yodlee Bangalore</td>
                                        <td xss="removed" width="94">23rd Jan 2018</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third , Second Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Application of E-Commerce</td>
                                        <td xss="removed" width="187">Mr.Nilesh Deshmukh,<br/>CTO, Udaradhi Technologies
                                            Pvt Ltd., Pune</td>
                                        <td xss="removed" width="94"><strong>29th Sep 2017</strong></td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Digital Marketing
                                            Technology</td>
                                        <td xss="removed" width="187">Mr. Yugandhar Tikhe Director, ThinkCode
                                            Technologies Pvt. Ltd.</td>
                                        <td xss="removed" width="94">08th Sep 2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;Digital Marketing</td>
                                        <td xss="removed" width="187">Mr.Rahul Chute<br/>Director, Dnnovate Design
                                            Innovation</td>
                                        <td xss="removed" width="94">7th Sep 2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Second yr Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Application of Modeling
                                            &amp; Simulation in Aviation Industry</td>
                                        <td xss="removed" width="187">Mr.Siddhart Y. Meshram Team Lead at CAE, Aviation
                                            Montreal Canada</td>
                                        <td xss="removed" width="94">05th Sep 2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;Technical Paper writing</td>
                                        <td xss="removed" width="187">Dr. G.R. Bamnote Professor, Department of CSE
                                            P.R.M.I.T. &amp; R. Badnera</td>
                                        <td xss="removed" width="94">10th &amp; 11th-Aug-2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Things I wish I know my
                                            Engineering</td>
                                        <td xss="removed" width="187">Mr. Ashwin Bansod (Alumini 2011 Batch) Morningstar
                                            – Associate Software Developer, Chicago</td>
                                        <td xss="removed" width="94">9th-Aug-2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp; Film Making in Computer Graphics</td>
                                        <td xss="removed" width="187">Mr.Vishal P.Lokhande<br/>Sr. Fx Artist<br/>Mumbai
                                        </td>
                                        <td xss="removed" width="94">2nd-Aug-2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Industry Based Programming</td>
                                        <td xss="removed" width="187">Mr. Gandhar Patwardhan MD S2p Edutech, Nagpur</td>
                                        <td xss="removed" width="94">28th-July-2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;Recommender System</td>
                                        <td xss="removed" width="187">Dr.S.S.Agrawal Assistant Professor,<br/>College of
                                            Engineering and Technology,<br/>Akola</td>
                                        <td xss="removed" width="94">21st-July-2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;IoT an Emerging Technology</td>
                                        <td xss="removed" width="187">Dr. M. M. Raghuwanshi Professor, Department of
                                            Computer Technology, YCCE, Nagpur</td>
                                        <td xss="removed" width="94">20th-July-2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year Students</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Introduction to GATE</td>
                                        <td xss="removed" width="187">Mr.Rahul Agalawe Director, GateForum, Amravati
                                        </td>
                                        <td xss="removed" width="94">10th-July-2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year Students</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Data Mining Tools&amp; its
                                            Software</td>
                                        <td xss="removed" width="187">Dr.Madhavi Pradhan</td>
                                        <td xss="removed" width="94">10th March 2017</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Second &amp; Third&nbsp; Year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Cloud Computing-An Opportunistic Business Model
                                        </td>
                                        <td xss="removed" width="187">Mr. Abhijit Deshmukh Program Director, IBM India
                                            Pvt. Ltd.</td>
                                        <td xss="removed" width="94">23-Sep-16</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Career Opportunities in Big
                                            Data</td>
                                        <td xss="removed" width="187">Mr. Amit Khedkar Hortonworks at enterprise
                                            Training services of SEED Infotech</td>
                                        <td xss="removed" width="94">10-Sep-16</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Second, Third and Final Year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Co-operate Culture Awareness, Preparation for
                                            Industry ready</td>
                                        <td xss="removed" width="187">Mr. Vikrant Chand Singh</td>
                                        <td xss="removed" width="94">28-Sep-16</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Digital Marketing</td>
                                        <td xss="removed" width="187">Ms. Ritu Malpani Director, Bytron Digitally
                                            Infinite Pvt. Ltd.</td>
                                        <td xss="removed" width="94">5-Oct-16</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Value Education by Ramkrishna Mission</td>
                                        <td xss="removed" width="187">Swami Aryananda, Mr. P. M. Puppal</td>
                                        <td xss="removed" width="94">3,4-March-2016</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third year &amp; Second year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp; Current trends in Corporate sectors</td>
                                        <td xss="removed" width="187">Mr. Girish Kulkarni</td>
                                        <td xss="removed" width="94">28-Dec-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187"><strong>&nbsp;</strong> Aiming and Preparing for
                                            Campus Selection</td>
                                        <td xss="removed" width="187">Mr. Anup Rawka</td>
                                        <td xss="removed" width="94">16-Oct-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">Web Services</td>
                                        <td xss="removed" width="187">Mr.Nakul deshmukh founder and director of ibase
                                            education amravati</td>
                                        <td xss="removed" width="94">16-Sep-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Second year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Digital Marketing &amp; Latest Online Website
                                            Designing Tools</td>
                                        <td xss="removed" width="187">Mr.Subhash Gore &amp; Ms.Mohini
                                            Modak,WebmasterKey,Pune</td>
                                        <td xss="removed" width="94">15-Sep-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Second year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">I-Base Technology</td>
                                        <td xss="removed" width="187">Mr.Nakul Deshmukh</td>
                                        <td xss="removed" width="94">9-Sep-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third year &amp; Second year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Research Methodology</td>
                                        <td xss="removed" width="187">Prof. Bansod</td>
                                        <td xss="removed" width="94">1-Sep-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Second year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Take A Stand For your Self</td>
                                        <td xss="removed" width="187">Mr.Nitin Bhojwani,Cognizant,Pune</td>
                                        <td xss="removed" width="94">27-Aug-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;Enterprise Application Development-Panaramic
                                            Views</td>
                                        <td xss="removed" width="187">Mr.Nitin Madwade,Enterprise Software
                                            Devlopment,Pune</td>
                                        <td xss="removed" width="94">27-Aug-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final year(Second shift)</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>opportunities In Abroad
                                            Studies</td>
                                        <td xss="removed" width="187">Mr.Nilesh Shah</td>
                                        <td xss="removed" width="94">11-Aug-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Problem Statement Formulation From Real world</td>
                                        <td xss="removed" width="187">Prof.Anup Kadam ,Army Institute of Technology,Pune
                                        </td>
                                        <td xss="removed" width="94">3-Aug-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">“Cyber Security Threats &amp; Prevention”</td>
                                        <td xss="removed" width="187">Mr.Mayuresh Barabde,G.H.Raisoni,Amravati</td>
                                        <td xss="removed" width="94">26-Mar-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Data Mining-WEKA Tool</td>
                                        <td xss="removed" width="187">Prof. Madhavi Sule</td>
                                        <td xss="removed" width="94">21-Feb-15</td>
                                        <td xss="removed" width="95">Faculty</td>
                                        <td xss="removed" width="130">CSE Faculties</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Career in IT-Industries</td>
                                        <td xss="removed" width="187">Mr.Ashvin Bansode &amp; Mr.Vyankatesh tarodkar,
                                            TCS Mumbai</td>
                                        <td xss="removed" width="94">12-Feb-15</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third Year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Gate 2016- Awareness</td>
                                        <td xss="removed" width="187">Mr. Ashish Mithole , Concept Academy</td>
                                        <td xss="removed" width="94">17-Sep-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final and Third year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Emerging Trends in IT Inbdustries</td>
                                        <td xss="removed" width="187">Mr.Pramod Gurjar CEO &amp; Founder Tech Rencit
                                            Solution Pvt.Ltd</td>
                                        <td xss="removed" width="94">22-Aug-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Go Getter</td>
                                        <td xss="removed" width="187">Mr. Subodh Deshmukh CEO , Rangshastra Textiles
                                            Hyderabad</td>
                                        <td xss="removed" width="94">9-Aug-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">second year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Higher Studies Abroad</td>
                                        <td xss="removed" width="187">Mrs. Shreya Lubana</td>
                                        <td xss="removed" width="94">7-Aug-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">final year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;Self&nbsp; Defense Awareness Amongst Women
                                        </td>
                                        <td xss="removed" width="187">Mrs.Kiran Mishra&nbsp; Organized by Womens
                                            Grievances committee &amp; Prof.Ms.R.R.Tuteja</td>
                                        <td xss="removed" width="94">1-Aug-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Second, third &amp; final year girls only</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;“Are You Looking for SAP”</td>
                                        <td xss="removed" width="187">Mr. Abhay B. Chaudhary Development
                                            Manager,Pranav&nbsp; Systtech Pvt.Ltd</td>
                                        <td xss="removed" width="94">30-Jul-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;ABC’s of Success</td>
                                        <td xss="removed" width="187">Mr. Will Harries,USA</td>
                                        <td xss="removed" width="94">22-Jul-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Data Mining &amp; its
                                            Applications</td>
                                        <td xss="removed" width="187">Mrs. M. A. Pradhan, A.I.S.S.M.S.C.E., Pune.</td>
                                        <td xss="removed" width="94">4-Jul-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Data Mining- Concepts &amp;
                                            Techniques</td>
                                        <td xss="removed" width="187">Prof. K. P. Wagh<br/>Department of Information
                                            Technology,<br/>Government Engineering College,<br/>Amravati.</td>
                                        <td xss="removed" width="94">20-Feb-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final year and Third year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187"><strong>&nbsp;</strong>Employment Opportunities
                                            through BoAT.</td>
                                        <td xss="removed" width="187">Dr. P. N. Jumle Director, Board of Apprenticeship
                                            and Training, Mumbai.</td>
                                        <td xss="removed" width="94">23-Jan-14</td>
                                        <td xss="removed" width="95">Faculty</td>
                                        <td xss="removed" width="130">All Faculties</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;Road Safety Program</td>
                                        <td xss="removed" width="187">National Highway Police &amp; Maruti Driving
                                            School, Amravati.</td>
                                        <td xss="removed" width="94">23-Jan-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Third year, second year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Cyber Security</td>
                                        <td xss="removed" width="187">Mr. Vineet Jain, (Ethical Hacker, Ovial Education
                                            Pvt. Ltd.)</td>
                                        <td xss="removed" width="94">20-Jan-14</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final Year</td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;Current IT Trends</td>
                                        <td xss="removed" width="187">Mr. Jagdish Laddha,Business Development Officer,
                                            Tata Consultancy Services, North America.</td>
                                        <td xss="removed" width="94">13-Jul-13</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130">Final year</td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Preparation for GRE.</td>
                                        <td xss="removed" width="187">Mr.Mohit Kedia</td>
                                        <td xss="removed" width="94">12-Jan-13</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Small Safety Awareness Program.</td>
                                        <td xss="removed" width="187">Mr.Mohan Ande, Team Lead, Feedback Infrastructure
                                            Services.</td>
                                        <td xss="removed" width="94">7-Jan-13</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">Business Intelligence and Dataware Housing</td>
                                        <td xss="removed" width="187">Mr. Amol Palekar,Principal Consultant-Business
                                            Intelligence at Tek Link International Inc. USA.</td>
                                        <td xss="removed" width="94">4-Sep-12</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;How to appear for an Interview.</td>
                                        <td xss="removed" width="187">Mr. Anand Chatterjee,UCO Bank, Delhi.</td>
                                        <td xss="removed" width="94">18-Jun-12</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">&nbsp;Data Structures and Algorithms.</td>
                                        <td xss="removed" width="187">Ms. Ankita Nanwani, Amazon India Development
                                            Centre, Hyderabad.</td>
                                        <td xss="removed" width="94">15-Feb-12</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">&nbsp;Success and Personality.</td>
                                        <td xss="removed" width="187">Dr. Varsha Deshmukh, Asst. Prof. Dr. P.D Law
                                            College, Amravati.</td>
                                        <td xss="removed" width="94">27-Aug-11</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">Technical Interview Training from TCS perspective.
                                        </td>
                                        <td xss="removed" width="187">Mr. Shrikant Pande, SEED, Pune.</td>
                                        <td xss="removed" width="94">22-Aug-11</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                    <tr>
                                        <td xss="removed" width="187">Resurgence and Awakening among Youth Program.</td>
                                        <td xss="removed" width="187">Ideal School of Resurgence, Mumbai.</td>
                                        <td xss="removed" width="94">14-Jul-11</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                    <tr xss="removed">
                                        <td xss="removed" width="187">Career Opportunities after MBA.</td>
                                        <td xss="removed" width="187">Mr. Anand S. Dammani, Orbit Corporation Ltd,
                                            Mumbai.</td>
                                        <td xss="removed" width="94">8-Mar-11</td>
                                        <td xss="removed" width="95">Students</td>
                                        <td xss="removed" width="130"><br/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                
                    <div className="tab-pane fade" id="pills-Workshop" role="tabpanel" aria-labelledby="pills-Workshop-tab">
                        <div className="su-table su-table-alternate">
<h2 className="faculty-title">2020 - 2021</h2>
<table className="table table-bordered table-striped" width="534">
<tbody>
  <tr>
    <td width="151">Name of Activities Organized</td>
    <td>Title</td>
    <td>Coordinators</td>
    <td>Period of Activities</td>
    <td>Nature of Participants</td>
    <td>No of Participants</td>
  </tr>
  <tr>
    <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
    <td>FDP on Cpp Language</td>
    <td>
      Prof. S. P. Akarte, Prof. N. M. Yawale, Prof. R. R. Karwa, Prof. N. V.
      Pardakhe, Prof. R. A. Meshram, Prof. S. G. Taley
    </td>
    <td>
      4th August 2020 to 14th August 2020
    </td>
    <td width="160">Second Year Students</td>
    <td>120</td>
  </tr>
</tbody>
</table>
</div>

<div className="su-table su-table-alternate">
<h2 className="faculty-title">2019 - 2020</h2>
<table className="table table-bordered table-striped" width="534">
<tbody>
  <tr>
    <td width="151">Name of Activities Organized</td>
    <td>Title</td>
    <td>Coordinators</td>
    <td>Period of Activities</td>
    <td>Nature of Participants</td>
    <td>No of Participants</td>
  </tr>
  <tr>
    <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
    <td>Workshop on IOT</td>
    <td>
      Prof. G. J. Sawale, Prof. R.A. Kale, Prof. Y. S. Alone CSE, Dept,
      PRMIT&amp;R, Badnera
    </td>
    <td>
      2 days
      <br/>
      13-14 Sept 20-21 Sept 2019
    </td>
    <td width="160">Third Year Students</td>
    <td>120</td>
  </tr>
  <tr>
    <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
    <td>Workshop on R-Tool</td>
    <td>
      Prof. S. W. Ahmed, Prof. S. S. Dandge, Prof. R. R. Karwa CSE, Dept,
      PRMIT&amp;R, Badnera
    </td>
    <td>
      2 day - 2 days
      <br/>
      13-14 Sept 20-21 Sept 2019
    </td>
    <td width="160">Third Year Students</td>
    <td>110</td>
  </tr>
  <tr>
    <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
    <td>Workshop on Full Stack Web Development</td>
    <td>Mr. Vaibhav Fuke Final Year Sec C</td>
    <td>
      2 day - 2 days
      <br/>
      20th, 21st, 27th ,28th July, 3rd and 4th August 2019
    </td>
    <td width="160">Second Year Students</td>
    <td>40</td>
  </tr>
  <tr>
    <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
    <td>Programming with Robotics Kits</td>
    <td>
      Prof.P.K.Agrawal, Prof.A.U.Chaudhari CSE, Dept, PRMIT&amp;R, Badnera{" "}
    </td>
    <td>2 days</td>
    <td width="160">Second Year Students</td>
    <td>65</td>
  </tr>
  <tr>
    <td width="151">CSI (Computer Society of India) Student’s Chapter</td>
    <td>Workshop on Arduino</td>
    <td>
      Prof. G. B. Saboo, Prof. A. B. Pahurkar CSE, Dept, PRMIT&amp;R, Badnera
    </td>
    <td>2 days</td>
    <td width="160">Second Year Students</td>
    <td>80</td>
  </tr>
</tbody>
</table>
</div>

<h2 className="faculty-title">Faculty Training &amp; Orientation Programme</h2>
<div className="su-table su-table-alternate"><table className="table table-bordered table-striped" width="534"><tbody><tr><td width="151">Name of Activities Organized</td><td>Title</td><td>Coordinators</td><td>Period of Activities</td><td>Nature of Participants</td><td>No of Participants</td></tr><tr><td width="151">One Day Workshop</td><td>Use of Mobile for Productive Purpose</td><td>Prof. S.P. Akarte</td><td>24th Dec 2020</td><td width="160">Supporting staff of the college Faculty Members</td><td>112</td></tr><tr><td width="151">One Day&nbsp;Workshop</td><td>Restructuring syllabus as per AISTE model curriculum</td><td>Dr. G.R. Bamnote</td><td>14th March 2020</td><td width="160">Faculty Member(Under SGBA University)</td><td>114</td></tr><tr><td width="151">One Week Short-Term Training Program&nbsp;(STTP)</td>
<td>Research and Publication Ethics</td><td>Dr. S.R. Gupta, Prof. S.S. Dandge</td><td>29th June to 03rd July 2020</td><td width="160">Faculty Members</td><td>311</td></tr><tr><td width="151">One Week Short-Term Training Program&nbsp;(STTP)</td>
<td>Tools &amp; Techniques For Efficient And Effective Teaching Learning</td><td>Prof. A.A. Chaudhari, Prof. A.R. Mune</td><td>6th July to 10th July 2020</td><td width="160">Faculty Members</td><td>438</td></tr></tbody></table></div><hr/><div className="su-table su-table-alternate"><table className="table table-bordered table-striped" width="534"><tbody><tr><td width="151"><strong>Title</strong></td>
<td><strong>Delivered By</strong></td>
<td><strong>Date</strong></td>
<td><strong>Participation</strong></td>
</tr><tr><td width="151">One Day Workshop on Moodle</td><td>In Association with IIT Bombay<br/>Dr.M.A.Pund<br/>Coordinator<br/>Dept of CSE<br/>P.R.M.I.T. &amp; R. Badnera</td><td>15<sup>th</sup>&nbsp;March 2019</td><td>Faculty form Engg Colleges</td></tr><tr><td width="151">Guest Lecture on “Mathematics behind Machine Learning”</td><td>Dr.Madhvi Sule AISSMS College Of Engineering,Pune</td><td>15th Feburary 2019</td><td>CSE Faculties</td></tr><tr><td width="151">Guest Lecture on PH.D Admission Guidance</td><td>Dr.G.R.Bamnote<br/>Professor &amp; Head,<br/>Dept of CSE<br/>P.R.M.I.T. &amp; R. Badnera</td><td>12<sup>th</sup>&nbsp;Dec 2018</td><td>CSE Faculties</td></tr><tr><td width="151">Faculty Devolvement Program</td><td>Mr. G.T.Dabhade<br/>Industrial Consultant,<br/>Amravati<br/>Prof.S.V.Deshmukh<br/>Asst.Prof.<br/>Dept of CSE<br/>P.R.M.I.T. &amp; R. Badnera</td><td>4<sup>th</sup>&nbsp;to 7<sup>th</sup>&nbsp;Dec 2018</td><td>CSE Faculties</td></tr><tr><td width="151">STTP on “Machine learning with R”</td><td>ISTE, Department of Computer Science, PRMITR,</td><td>16th April 2018 to 21st April 2018</td><td>Faculty form Engg Colleges</td></tr><tr><td width="151">&nbsp;Financial Investment &amp; Planning</td><td>Meenakshi Rajesh Sikchi (Associate Financial Planner)</td><td>30-Jan-17</td><td>CSE Faculties</td></tr><tr><td width="151">&nbsp;Azure and Cloud Computing</td><td>Mr. Prakash Sikchi, Founder of Inspirock company</td><td>23-Dec-16</td><td>All Faculties</td></tr><tr><td width="151">Two Days Training Program on Windows Azure by Microsoft</td><td>Mr. Hardik Mistry and Mr. Hardik Ranpura, Microsoft</td><td>18/03/2016 &amp; 19/03/2016</td><td>All Faculties</td></tr><tr><td width="151">Orientation Programme for NBA (Part-I)</td><td>Prof.C.N.Deshmukh, Department EXTC, P.R.M.I.T &amp; R, Badnera-Amravati.</td><td>24-Dec-13</td><td>CSE Faculties</td></tr></tbody></table>
</div>



<h2 className="faculty-title">Technical WorkShop for Students</h2>

<div className="su-table su-table-alternate">
<table className="table table-bordered table-striped" width="730">
<tbody>
<tr>
<td><strong>Title</strong></td>
<td><strong>Delivered/Organized By</strong></td>
<td><strong>Date</strong></td>
<td><strong>For Which Students (Second , Third, Final)</strong></td>
</tr>
<tr>
<td>Workshop on IOT</td>
<td>Conducted by Prof. G. J. Sawale, Prof. R.A. Kale, Prof. Y. S. Alone CSE, Dept, PRMIT&amp;R, Badnera</td>
<td>2 days 13-14 Sept 20-21 Sept 2019</td>
<td>Third Year Students</td>
</tr>
<tr>
<td>Workshop on R-Tool</td>
<td>Conducted by Prof. S. W. Ahmed, Prof. S. S. Dandge, Prof. R. R. Karwa CSE, Dept, PRMIT&amp;R, Badnera</td>
<td>2 days 13-14 Sept 20-21 Sept 2019</td>
<td>Third Year Students</td>
</tr>
<tr>
<td>Workshop on Full Stack Web Development</td>
<td>Conducted by Mr. Vaibhav Fuke Final Year Sec C</td>
<td>20th, 21st, 27th ,28th July, 3rd and 4th August 2019</td>
<td>Second Year Students</td>
</tr>
<tr>
<td>Programming with Robotics Kits</td>
<td>Conducted by Prof.P.K.Agrawal, Prof.A.U.Chaudhari CSE, Dept, PRMIT&amp;R, Badnera </td>
<td>2 days Every Fri &amp; Sat From Sept 2019- March 2020</td>
<td>Second Year Students</td>
</tr>
<tr>
<td>Workshop on Arduino </td>
<td>Conducted by Prof. G. B. Saboo, Prof. A. B. Pahurkar CSE, Dept, PRMIT&amp;R, Badnera</td>
<td>2 days Every Fri &amp; Sat From Sept 2019- March 2020</td>
<td>Second Year Students</td>
</tr>
</tbody>
</table>
</div>

<hr/>
<div className="su-table su-table-alternate">
<table className="table table-bordered table-striped" width="730">
<tbody>
<tr>
<td><strong>Title</strong></td>
<td><strong>Delivered/Organised By</strong></td>
<td><strong>Date</strong></td>
<td><strong>Guest Lect / Workshop For</strong></td>
<td><strong>For Which Students (Second , Third, Final)</strong></td>
</tr>
<tr>
<td>Introduction to Deep Learning for Computer Vision Application</td>
<td>Conducted by<br/>
Prof.S.S.Deshmukh<br/>
Prof.Deshpande<br/>
CSE Dept,Prof.Ram Meghe College of Engg &amp; Magt. Badnera</td>
<td>01 Day<br/>
9th March 2019</td>
<td>Students</td>
<td>B.E.<br/>
Third&nbsp; yr<br/>
Students<br/>
(Sec ‘C’)</td>
</tr>
<tr>
<td>Programming with Robotics</td>
<td>Conducted by<br/>
Prof.P.K.Agrawal<br/>
Prof.A.U.Chaudhari<br/>
Prof.G.B.Saboo<br/>
Prof.A.B.Pahurkar<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td>02 Days<br/>
15th &amp;22nd Sep 2018</td>
<td>Students</td>
<td>Second &amp; Third yr<br/>
Students<br/>
(Those who are enrolld)</td>
</tr>
<tr>
<td>Introduction to IOT</td>
<td>Conducted by<br/>
Prof. G.J.Sawale<br/>
Prof. Y.S.Alone<br/>
Prof. R.A.Kale</td>
<td>14<sup>th</sup> -15<sup>th</sup> Sep 2018</td>
<td>Students</td>
<td>Second yr<br/>
Students<br/>
(Sec ‘C’)</td>
</tr>
<tr>
<td>Data Science &amp; Machine Learning using R</td>
<td>Conducted by<br/>
Prof.R.R.Karwa<br/>
Prof.S.W.Ahmed<br/>
Prof.S.S.Dandge<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td>14<sup>th</sup> -15<sup>th</sup> Sep 2018</td>
<td>Students</td>
<td>B.E.<br/>
Third&nbsp; yr<br/>
Students<br/>
(Sec ‘C’)</td>
</tr>
<tr>
<td>Introduction to Arduino</td>
<td>Conducted by<br/>
Prof.G.B.Saboo<br/>
Prof.Ms.A.B.Pahurkar<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td>02 Days<br/>
6th-7th July 2018<br/>
(Three Fri-Sat)</td>
<td>Students</td>
<td>B.E.<br/>
Second yr<br/>
Students<br/>
(Sec ‘A’ &amp; ‘B’)</td>
</tr>
<tr>
<td>Workshop on Multimedia &amp; Graphics</td>
<td>Conducted by<br/>
Prof.S.P.Akarte<br/>
Prof.Ms.R.S.Badre<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td>02 Days<br/>
6th-7th July 2018<br/>
(Three Fri-Sat)</td>
<td>Students</td>
<td>B.E.<br/>
Second yr<br/>
Students<br/>
(Sec ‘A’ &amp; ‘B’)</td>
</tr>
<tr>
<td>Introduction to Robotic kits – Spark V</td>
<td>Conducted by<br/>
Prof.P.K.Agrawal<br/>
Prof.A.U.Chaudhari<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td>02 Days<br/>
6th-7th July 2018<br/>
(Three Fri-Sat)</td>
<td>Students</td>
<td>B.E.<br/>
Second yr<br/>
Students<br/>
(Sec ‘A’ &amp; ‘B’)</td>
</tr>
</tbody>
</table>
</div>
<hr/>
<div className="su-table su-table-alternate">
<table className="table table-bordered table-striped" width="693">
<tbody>
<tr>
<td width="191"><strong>Title</strong></td>
<td width="179"><strong>Delivered/Organized By</strong></td>
<td width="96"><strong>Date</strong></td>
<td width="96"><strong>Guest Lect / Workshop For</strong></td>
<td width="132"><strong>For Which Students (Second , Third, Final)</strong></td>
</tr>
<tr>
<td width="191">One Day Workshop on<br/>
“Soft Skill”</td>
<td width="179">Prof.G.D.Pachghare<br/>
Prof.N.M.Gawande<br/>
Prof.Y.R.Vaidya<br/>
MBA, Dept, PRMIT&amp;R, Badnera</td>
<td width="96">2<sup>nd</sup> Feb 2018</td>
<td width="96">Students</td>
<td width="132">Third Year “B’ Section Students</td>
</tr>
<tr>
<td width="191">Programming with Robotics Kits</td>
<td width="179">Prof.N.M.Tarbani<br/>
Prof.P.K.Agrawal<br/>
Prof.A.U.Chaudhari<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td width="96">20th Jan 2018,<br/>
24th Feb 2018</td>
<td width="96">Students</td>
<td width="132">Second yr<br/>
Students</td>
</tr>
<tr>
<td width="191">Introduction to Aurdino </td>
<td width="179">Prof.G.B.Saboo<br/>
Prof.A.B.Pahurkar<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td width="96">20th Jan 2018,<br/>
24th Feb 2018</td>
<td width="96">Students</td>
<td width="132">Second yr<br/>
Students</td>
</tr>
<tr>
<td width="191">Multimedia &amp; Web Designing</td>
<td width="179">Prof.S.P.Akarte<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td width="96">12th-13th &amp; 16th Jan 2018</td>
<td width="96">Students</td>
<td width="132">Second yr<br/>
Students</td>
</tr>
<tr>
<td width="191">&nbsp;Real Time Web Based Application Development</td>
<td width="179">Mr.Nilesh Deshmukh,<br/>
CTO, Udaradhi Technologies Pvt Ltd., Pune</td>
<td width="96">6<sup>th</sup>-7<sup>th</sup> Oct 2017</td>
<td width="96">Students</td>
<td width="132">Third yr Students</td>
</tr>
<tr>
<td width="191">&nbsp;Multimedia &amp; Web Designing</td>
<td width="179">Prof.S.P.Akarte<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td width="96">21st Sep- 22 Sep 2017</td>
<td width="96">Students</td>
<td width="132">Second yr Students</td>
</tr>
<tr>
<td width="191">&nbsp;Internet of Things (IoT)</td>
<td width="179">Mr.Mangesh Bharti<br/>
Mr.Nakul Deshmukh<br/>
iBase Electrosoft,<br/>
Amravati</td>
<td width="96">28th Aug-31st Aug 2017</td>
<td width="96">Students</td>
<td width="132">Final yr Students</td>
</tr>
<tr>
<td width="191">&nbsp;Entrepedia </td>
<td width="179">Dr. Avinash Saoji<br/>
founder of Prayas Sewankur Amravati</td>
<td width="96">18th July 2017</td>
<td width="96">Students</td>
<td width="132">Third yr<br/>
Students</td>
</tr>
<tr>
<td width="191">&nbsp;About TCS Contest </td>
<td width="179">Mr. Saif Hussain<br/>
Mr. Sankesh Pathak<br/>
Mr.Ketan Fulbandhe<br/>
Mr.Ankush Nanglia<br/>
Mr.Nikhil Lund&nbsp; (Final Yr. Student)</td>
<td width="96">18th July 2017</td>
<td width="96">Students</td>
<td width="132">Second Year Students</td>
</tr>
<tr>
<td width="191">&nbsp;Big Data &amp; Hadoop</td>
<td width="179">Mr. Yogesh Murumkar<br/>
Senior Software Engineer Teradata Pune</td>
<td width="96">11th-13th Aug 2017</td>
<td width="96">Students</td>
<td width="132">Third yr<br/>
Students</td>
</tr>
<tr>
<td width="191">&nbsp;PHP With MySQL</td>
<td width="179">Prof.Ms.P.B.Lohiya<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td width="96">29<sup>th</sup> July 2017</td>
<td width="96">Students</td>
<td width="132">Final Year Students</td>
</tr>
<tr>
<td width="191">&nbsp;Programming with Robotics Kits</td>
<td width="179">Prof.N.M.Tarbani<br/>
Prof.P.K.Agrawal<br/>
Prof.A.U.Chaudhari<br/>
CSE, Dept, PRMIT&amp;R, Badnera</td>
<td width="96">29<sup>th</sup> June to 1<sup>st</sup> July 2017</td>
<td width="96">Students</td>
<td width="132">Third Year Students</td>
</tr>
<tr>
<td width="191">&nbsp;Big Data &amp; Hadoop</td>
<td width="179">Mr.Yogesh Murumkar</td>
<td width="96">&nbsp;18th &amp; 19th March 2017</td>
<td width="96">Students</td>
<td width="132">Third Year</td>
</tr>
<tr>
<td width="191">Two Days&nbsp; Cyber Security</td>
<td width="179">Mr. Mayuresh Barbade</td>
<td width="96">27-Jan-17<br/>
28-Jan-17</td>
<td width="96">Students</td>
<td width="132">Third and Final Year</td>
</tr>
<tr>
<td width="191">Firebird V Training Workshop for Third and Second Year Students</td>
<td width="179">Prof. N. M. Tarbani,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Assistant Professor,<br/>
PRMIT&amp;R, Badnera</td>
<td width="96">18-Jan-2017<br/>
19-Jan-2017<br/>
21-Jan-2017<br/>
23-Jan-2017</td>
<td width="96">Students</td>
<td width="132">Second &amp; Third&nbsp; Year</td>
</tr>
<tr>
<td width="191">Firebird Training Workshop for Students implementing project on Firebird V</td>
<td width="179">Prof. N. M. Tarbani,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Assistant Professor,<br/>
PRMIT&amp;R, Badnera</td>
<td width="96">4-Jan-2017<br/>
9-Jan-2017<br/>
17-Jan-2017</td>
<td width="96">Students</td>
<td width="132">Final Year</td>
</tr>
<tr>
<td width="191">&nbsp;C &amp; C++</td>
<td width="179">Mr. Shrikant Pande,&nbsp; Director of Ctronics Solutions Pvt. Ltd. Amravati</td>
<td width="96">17th-18th September 2016</td>
<td width="96">Students</td>
<td width="132">Second, Third and Final Year</td>
</tr>
<tr>
<td width="191">E-Yantra Workshop for Final year Students</td>
<td width="179">Prof. N. M. Tarbani<br/>
Prof. P. K. Agrawal<br/>
Prof. A. U. Chaudhary<br/>
Prof. S. K. Latad</td>
<td width="96">&nbsp;12-Aug-2016&nbsp; &amp; 13-Aug-2016</td>
<td width="96">Students</td>
<td width="132">Final Year</td>
</tr>
<tr>
<td width="191">Advance Java &amp; Framework</td>
<td width="179"><br/></td>
<td width="96">12<sup>th </sup>March &amp; 19<sup>th</sup> March, 2016</td>
<td width="96">Students</td>
<td width="132">Second, Third and Final Year</td>
</tr>
<tr>
<td width="191">Two Days&nbsp; Android Java &amp; Framework</td>
<td width="179">Mr. Shrikant Pande,&nbsp; Director of Ctronics Solutions Pvt. Ltd. Amravati</td>
<td width="96">12-Mar-16<br/>
13-Mar-16</td>
<td width="96">Students</td>
<td width="132">Second Year</td>
</tr>
<tr>
<td width="191">Two days&nbsp; Android Application development</td>
<td width="179">Mr. Shrikant Pande, Director of Ctronix solution,pvt ltd,Amravti</td>
<td width="96">30, 31-Jan- 2016</td>
<td width="96">Students</td>
<td width="132">Second &amp; Third Year</td>
</tr>
<tr>
<td width="191">Industrial tour</td>
<td width="179"><br/></td>
<td width="96">27th Dec- 2015 to<br/>
4<sup>th</sup> Jan 2016</td>
<td width="96">Students</td>
<td width="132">Second, Third and Final Year</td>
</tr>
<tr>
<td width="191">JOOMLA Workshop</td>
<td width="179">Prof.P.K.Agrawal<br/>
Assistant Professor,<br/>
PRMIT&amp;R, Badnera</td>
<td width="96">19<sup>th</sup> and 20<sup>th</sup> September 2015</td>
<td width="96">Students</td>
<td width="132">Second, Third and Final Year</td>
</tr>
<tr>
<td width="191">PHP with MYSQL</td>
<td width="179">Prof.P.B.Lohiya,<br/>
Assistant Professor,<br/>
PRMIT&amp;R, Badnera</td>
<td width="96">5th and 6th September 2015</td>
<td width="96">Students</td>
<td width="132">Second, Third and Final Year</td>
</tr>
<tr>
<td width="191">&nbsp;Android application development</td>
<td width="179"><br/></td>
<td width="96">17<sup>th</sup> and 18<sup>th</sup> January 2015</td>
<td width="96">Students</td>
<td width="132">Second, Third and Final Year</td>
</tr>
<tr>
<td width="191">Windows Azure</td>
<td width="179">Ms.Kshitija Taywade,Final Year Student, P.R.M.I.T &amp; R, Badnera-Amravati.</td>
<td width="96">14-Mar-13</td>
<td width="96">Students</td>
<td width="132"><br/></td>
</tr>
<tr>
<td width="191">Introduction on various Programming Languages like C, C++, Core JAVA, Advanced JAVA, Dot Net.</td>
<td width="179">Mr. Shrikant Pande,Director, Seed Infotech, Amravati Region, Amravati.</td>
<td width="96">13-Sep-12</td>
<td width="96">Students</td>
<td width="132"><br/></td>
</tr>
<tr>
<td width="191">Mobile Application Development.</td>
<td width="179">Mr. Yugandhar Tikhe, Pune &nbsp;&nbsp;(thinkcode.in)</td>
<td width="96">24-Mar-12</td>
<td width="96">Students</td>
<td width="132"><br/></td>
</tr>
<tr>
<td width="191">Server Side Programming.</td>
<td width="179">Mr. Nitesh M. Tarbani, Lecturer, Department of Computer Science &amp; Engg.</td>
<td width="96">17-Mar-12</td>
<td width="96">Students</td>
<td width="132"><br/></td>
</tr>
<tr>
<td width="191">Rational Rose (IBM Software Engineering Tools).</td>
<td width="179">Mr. Amit Daharwal, Lead Technical Evangelist, Zensoft Service Pvt. Ltd., Pune.</td>
<td width="96">1-Jul-11</td>
<td width="96">Students</td>
<td width="132"><br/></td>
</tr>
</tbody>
</table>
</div>						</div>
                </div>
            </div>
        </div>
    </div>


        <Contact/>
        <Footer/>
        
        
        </div>

    )
}

export default CseEvents;