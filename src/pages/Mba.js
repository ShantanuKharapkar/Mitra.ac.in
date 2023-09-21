import React from "react";


// import css

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"




import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Mba = () =>{
    return(

        <div>
        

<Header/>

<Navbar/>


        <section className="section-1 mt-0">
        <div className="container-fluid">
            <div className="row d-flex justify-content-end align-items-center">
                <div className="col-12">
                    <div className="card p-3" style={{opacity: .6}}>
                        <h1 className="color-blue py-5 text-center">MBA<span className="color-orange"> Admission</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div className="container my-3">
        <h2 id="chairmans-message" className="section-title">MBA Admissions 2023-24</h2>

        <h2 className="faculty-title color-blue">Course Offered</h2>
        <table className="table table-bordered table-striped" width="75%" xss="removed">
            <tbody>
                <tr xss="removed">
                    <td xss="removed"><strong>Course Name</strong></td>
                    <td xss="removed"><strong>Intake</strong></td>
                </tr>

                <tr>
                    <td xss="removed">Master of Business Administration</td>
                    <td xss="removed">120</td>
                </tr>

            </tbody>
        </table>

        <br/>


        <div className="row">

            <div className="col-md-6">
                <h2 className="faculty-title color-blue" >Fees For A.Y. 2023-24</h2>
                <table className="table table-bordered table-striped table-hover">

                    <thead>
                        <tr>
                            <td>Category</td>
                            <td align="center">College Fees</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Open &amp; Institute Level</td>
                            <td align="center">93,000</td>
                        </tr>
                        <tr>
                            <td>OBC/EBC</td>
                            <td align="center">52,282</td>
                        </tr>

                        <tr>
                            <td>SBC/VJ/NT/DT</td>
                            <td align="center">11,564</td>
                        </tr>
                        <tr>
                            <td>SC/ST</td>
                            <td align="center">0</td>
                        </tr>

                        <tr>
                            <td>TFWS</td>
                            <td align="center">11,564</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-md-6">
                <h2 className="faculty-title color-blue">Contact for Admission</h2>
                <table className="table table-bordered table-striped table-hover">

                    <thead>
                        <tr>
                            <th colspan="2">Contact Person</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr valign="top">
                            <td width="263" height="27">
                                <div><span xss="removed"><span xss="removed"><span xss="removed"><b>Prof. Ashish v.
                                                    Deshmukh </b></span></span></span></div>
                            </td>
                            <td width="320">
                                <div><span xss="removed"><span xss="removed"><span xss="removed"><b>Prof. Gajanan D.
                                                    Pachghare</b></span></span></span></div>
                            </td>
                        </tr>

                        <tr valign="top">
                            <td width="263" height="28">
                                <div><span xss="removed"><span xss="removed"><span
                                                xss="removed"><b>9370334311</b></span></span></span></div>
                            </td>
                            <td width="320">
                                <div><span xss="removed"><span xss="removed"><span
                                                xss="removed"><b>9096917014</b></span></span></span></div>
                            </td>
                        </tr>


                        <tr valign="top">
                            <td width="263" height="27">
                                <div><span xss="removed"><span xss="removed"><span xss="removed"><b>Prof. Yuvraj R.
                                                    Vaidya</b></span></span></span></div>
                            </td>
                            <td width="320">
                                <div><span xss="removed"><span xss="removed"><span
                                                xss="removed">&nbsp;</span></span></span></div>
                            </td>
                        </tr>

                        <tr valign="top">
                            <td width="263" height="27">
                                <div><span xss="removed"><span xss="removed"><span
                                                xss="removed"><b>9371959775</b></span></span></span></div>
                            </td>
                            <td width="320">
                                <div><span xss="removed"><span xss="removed"><span
                                                xss="removed">&nbsp;</span></span></span></div>
                            </td>
                        </tr>

                    </tbody>
                </table>


            </div>
        </div>
        <br/>

        <h2 className="faculty-title color-blue">Document Required for Admission</h2>

        <table className="table table-bordered table-striped">

            <thead>
                <tr>
                    <th>Type of Candidate</th>
                    <th>Document</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>For All Candidates</td>
                    <td>
                        <div><strong>
                                * SSC Marksheet/Certificate<br/>
                                * HSC Marksheet/Certificate<br/>
                                * Degree Marksheet<br/>
                                * TC (at the time of admission)<br/>
                                * Age, Nationality and Domicile Certificate<br/>
                                * Cast Certificate (if Applicable)<br/>
                                * Updated Non-Creamy Layer Certificate (if Applicable)<br/>
                                * Cast Validity (if Applicable)<br/>
                                * Gap Certificate (if Applicable)<br/>
                                * Proformas (if Applicable)
                            </strong></div>
                    </td>
                </tr>



            </tbody>




        </table>
        <div className="row">
            <div className="col-md-12">
                <div>
                </div>

            </div>
        </div> 


    </div>

    <Contact/>
    <Footer/>


        
        </div>
    )
}

export default Mba;