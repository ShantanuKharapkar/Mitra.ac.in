import React from "react";


// import css

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/mtech.css"


// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




const Mtech = () =>{
    return(
        <div>
        
        <Header/>
        <Navbar/>



        <section class="section-1 mt-0">
        <div class="container-fluid">
            <div class="row d-flex justify-content-end align-items-center">
                <div class="col-12">
                    <div class="card p-3" style={{opacity: .6}}>
                        <h1 class="color-blue py-5 text-center">M.Tech<span class="color-orange"> Admission</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container my-3">
        <h2 id="chairmans-message" class="section-title color-blue">M.Tech Admission 2023-24</h2>

        <h2 class="faculty-title color-blue">PG Course</h2>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <td>Choice Code</td>
                    <td>Course</td>
                    <td align="center">Intake</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td align="center">110520110</td>
                    <td>Environmental Engineering</td>
                    <td align="center">18</td>
                </tr>
                <tr>
                    <td align="center">110524210</td>
                    <td>Computer Science &amp; Engineering</td>
                    <td align="center">24</td>
                </tr>

                <tr>
                    <td align="center">110521210</td>
                    <td>Structural Engineering</td>
                    <td align="center">18</td>
                </tr>

                <tr>
                    <td align="center">110524610</td>
                    <td>Information Technology</td>
                    <td align="center">9</td>
                </tr>

                <tr>
                    <td align="center">110537210</td>
                    <td>Electronics and Telecommunication Engg</td>
                    <td align="center">18</td>
                </tr>
                <tr>
                    <td align="center">110560410</td>
                    <td>CAD-CAM</td>
                    <td align="center">9</td>
                </tr>

                <tr>
                    <td align="center">110561010</td>
                    <td>Thermal Engineering</td>
                    <td align="center">18</td>
                </tr>

                <tr>

                    <td colspan="2">Total</td>
                    <td align="center">114</td>
                </tr>

            </tbody>
        </table>
       
        <br/>


        <div class="row">

            <div class="col-md-6">
                <h2 class="faculty-title color-blue">Fees For A.Y. 2023-24</h2>
                <table class="table table-bordered table-striped table-hover">

                    <thead>
                        <tr>
                            <td>Category</td>
                            <td align="center">College Fees</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Open &amp; Institute Level</td>
                            <td align="center">45,000&nbsp;</td>
                        </tr>
                        <tr>
                            <td>OBC/EBC</td>
                            <td align="center">45,000&nbsp;</td>
                        </tr>

                        <tr>
                            <td>SBC/VJ/NT/DT</td>
                            <td align="center">45,000&nbsp;</td>
                        </tr>
                        <tr>
                            <td>SC/ST</td>
                            <td align="center">&nbsp;0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-md-6">
                <h2 class="faculty-title color-blue">Contact for Admission</h2>
                <table class="table table-bordered table-striped table-hover" width="641" cellspacing="0"
                    cellpadding="0">


                    <thead>
                        <tr>
                            <th colspan="2">Contact Person</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr valign="top">
                            <td width="263" height="27">
                                <div><span xss="removed">Dr. S. S. Sonare</span><br/></div>
                            </td>
                            <td width="320">
                                <div><span xss="removed">Prof. S. S. Dhok</span><br/></div>
                            </td>
                        </tr>

                        <tr valign="top">
                            <td width="263" height="28">
                                <div><span xss="removed">9422556801</span><br/></div>
                            </td>
                            <td width="320">
                                <div><span xss="removed">9921559515</span><br/></div>
                            </td>
                        </tr>


                        <tr valign="top">
                            <td width="263" height="27">
                                <div><span xss="removed">Prof. A. G. Kadu</span><br/></div>
                            </td>
                            <td width="320">
                                <div><br/></div>
                            </td>
                        </tr>

                        <tr valign="top">
                            <td width="263" height="27">
                                <div><span xss="removed">9975629500</span><br/></div>
                            </td>
                            <td width="320">
                            </td>
                        </tr>

                    </tbody>
                </table>


            </div>
        </div>
        <br/>

        <h2 class="faculty-title color-blue">Document Required for Admission</h2>

        <table class="table table-bordered table-striped">

            <thead>
                <tr>
                    <th align="center">SN</th>
                    <th>Type of Candidate</th>
                    <th>Document</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td align="center">1</td>
                    <td>For All Candidates</td>
                    <td>
                        <div><strong>
                                S.S.C Marksheet<br/>
                                H.S.C Marksheet<br/>
                                Graduation Marksheet <br/>
                                Gate Score Card<br/>
                                School/College Leaving Certificate (Transfer Certificate)<br/>
                                Nationality Certificate<br/>
                                Domicile Certificate

                            </strong></div>
                    </td>
                </tr>

                <tr>
                    <td align="center">2</td>
                    <td>SC/ST</td>
                    <td>
                        <div><strong>
                                Caste Certificate<br/>
                                Caste Validity Certificate
                            </strong></div>
                    </td>
                </tr>

                <tr>
                    <td align="center">3</td>
                    <td>
                        OBC/VJ/DT/NT-A,B,C,D/SBC</td>
                    <td>
                        <div><strong>
                                Caste Certificate<br/>
                                Caste Validity Certificate<br/>
                                Non-Creamy Layer Certificate (Valid up to 31/03/2024)
                            </strong></div>
                    </td>
                </tr>

                <tr>
                    <td align="center">4</td>
                    <td>EWS Candidate</td>
                    <td>
                        <div><strong>
                                EWS Certificate (If Applicable) (2023-24)</strong></div>
                    </td>
                </tr>



                <tr>
                    <td align="center">5</td>
                    <td>Person with Disabilities</td>
                    <td>
                        <div><strong>
                                Proforma-F/F1(For the candidate with Disability(P1, P2, P3))
                            </strong></div>
                    </td>
                </tr>


                <tr>
                    <td align="center">6</td>
                    <td>Defence Candidate</td>
                    <td>
                        <div><strong>
                                Proforma-C(For Ex-servicemen with father's/Mother's Domicile Certificate)
                            </strong></div>
                    </td>
                </tr>

                <tr>
                    <td align="center">7</td>
                    <td>Sponsored Candidate</td>
                    <td>
                        <div><strong>
                                Minimum 2 Years Experience Certificate on Proforma P and Self Declared Proforma Q
                            </strong></div>
                    </td>
                </tr>

            </tbody>




        </table>

        <br/>


        <div class="row">

            <div class="col-md-12">
                <div><span xss="removed"><span xss="removed">
                            <span xss="removed"><b>Click here for more details</b></span></span></span>&nbsp;<a
                        target="_blank" href="http://cetcell.mahacet.org/" xss="removed"><span xss="removed"><span
                                xss="removed"><span
                                    xss="removed"><u><b>http://cetcell.mahacet.org/</b></u></span></span></span></a>
                </div>
            </div>

        </div> 

    </div>

    <Footer/>


        
        </div>
    )
}

export default Mtech;