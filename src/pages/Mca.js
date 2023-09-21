import React from "react";




import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"



// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";




const Mca =() =>{
    return(

        <div>

        <Header/>
        <Navbar/>
        
        <section className="section-1 mt-0">
        <div className="container-fluid">
            <div className="row d-flex justify-content-end align-items-center">
                <div className="col-12">
                    <div className="card p-3" style={{opacity: .6}}>
                        <h1 className="color-blue py-5 text-center">MCA<span className="color-orange"> Admission</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="container my-3">
        <h2 id="chairmans-message" className="section-title color-blue">MCA Admission 2023-24</h2>

        <h2 className="faculty-title color-blue">Course Offered</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Intake</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Master in Computer Application(First Year)</td>
                    <td>60</td>
                </tr>

            </tbody>
        </table>
        <br/>

        <div className="row">

            <div className="col-md-6">
                <h2 className="faculty-title color-blue">Fees For A.Y. 2023-24</h2>
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
                            <td align="center">95,000</td>
                        </tr>
                        <tr>
                            <td>OBC/EBC</td>
                            <td align="center">53,406</td>
                        </tr>

                        <tr>
                            <td>SBC/VJ/NT/DT</td>
                            <td align="center">11,812</td>
                        </tr>
                        <tr>
                            <td>SC/ST</td>
                            <td align="center">0</td>
                        </tr>

                        <tr>
                            <td>TFWS</td>
                            <td align="center">11,812</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-md-6">

                <h2 className="faculty-title color-blue">Contact for Admission</h2>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr xss="removed">
                            <td width="151" valign="top" xss="removed">
                                <div>Contact Person <o></o>
                                </div>
                            </td>
                            <td width="180" valign="top" xss="removed">
                                <div>Contact No.<o></o>
                                </div>
                            </td>
                            <td width="151" valign="top" xss="removed">
                                <div>Email Id<o></o>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="151" valign="top" xss="removed">
                                <div>Prof. A. J.
                                    Pimprikar<o></o>
                                </div>
                            </td>
                            <td width="180" valign="top" xss="removed">
                                <div>9975748876<o></o>
                                </div>
                            </td>
                            <td width="151" valign="top" xss="removed">
                                <div>ajpimprikar@mitra.ac.in<o></o>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="151" valign="top" xss="removed">
                                <div>Prof. N. D. Bobade<o></o>
                                </div>
                            </td>
                            <td width="180" valign="top" xss="removed">
                                <div>7972423390<o></o>
                                </div>
                            </td>
                            <td width="151" valign="top" xss="removed">
                                <div>ndbobade@mitra.ac.in<o></o>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="151" valign="top" xss="removed">
                                <div>Prof. V. A. Sinha<o></o>
                                </div>
                            </td>
                            <td width="180" valign="top" xss="removed">
                                <div>9673528170<o></o>
                                </div>
                            </td>
                            <td width="151" valign="top" xss="removed">
                                <div>vasinha@mitra.ac.in<o></o>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br/>
        <div>




            <h2 className="faculty-title color-blue">Document Required for Admission</h2>
            <table className="table table-bordered table-striped">

                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Type of Candidate</th>
                        <th>Documents</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>For All Candidates</td>
                        <td>
                            <div><strong>
                                    SSC Marksheet<br/>
                                    HSC Marksheet<br/>
                                    CET Score card (non zero-Positive score)<br/>
                                    College leaving certificate / Transfer certificate<br/>
                                    Nationality certificate<br/>
                                    Domicile certificate
                                </strong></div>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>SC/ST</td>
                        <td>
                            <div><strong>
                                    Caste Certificate<br/>
                                    Caste Validity Certificate
                                </strong></div>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>OBC/VJ/DT/NT-A,B,C,D</td>
                        <td>
                            <div><strong>
                                    Caste Certificate<br/>
                                    Caste Validity Certificate<br/>
                                    Non-Creamy Layer Certificate (Valid up to 31/03/2024)
                                </strong></div>
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>EWS Candidate</td>
                        <td>
                            <div><strong>
                                    EWS Certificate&nbsp;</strong><span xss="removed">(If Applicable) (2023-24)</span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>TFWS Candidate</td>
                        <td>
                            <div><strong>
                                    Income Certificate (For TFWS candidates stating less than Rs.8 Lakh annual income)
                                </strong></div>
                        </td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Person with Disabilities</td>
                        <td>
                            <div><strong>
                                    Proforma-F/F1(For the candidate with Disability(P1, P2, P3))
                                </strong></div>
                        </td>
                    </tr>


                    <tr>
                        <td>7</td>
                        <td>Defence Candidate</td>
                        <td>
                            <div><strong>
                                    Proforma-C(For Ex-servicemen with father's/Mother's Domicile Certificate)
                                </strong></div>
                        </td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>For Scholarship / Freeship</td>
                        <td>
                            <div><strong>
                                    Income certificate and Form no. 16 is mandatory
                                </strong></div>
                        </td>
                    </tr>
                </tbody>




            </table>
        </div>

        <h2 className="faculty-title"><br/></h2> 


    </div>



    <Contact/>
    <Footer/>
        
        </div>

    )
}

export default Mca;