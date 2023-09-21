import React from "react";




// import css

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/btech.css"

// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";






const Btech = () =>{
    return(

        <div>
        <Header/>
        <Navbar/>
        <section className="section-1 mt-0">
        <div className="container-fluid">
            <div className="row d-flex justify-content-end align-items-center">
                <div className="col-12">
                    <div className="card p-3" style={{opacity: .6}}>
                        <h1 className="color-blue py-5 text-center">B.Tech<span className="color-orange"> Admission</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="container my-3">
    <h2 id="chairmans-message" className="section-title color-blue">B.Tech Admission 2023-24</h2>

    <h2 className="faculty-title color-blue">Course Offered</h2>
    <table className="table table-bordered table-striped" width="75%" xss="removed">
        <tbody>
            <tr xss="removed">
                <td xss="removed"><strong>Choice Code</strong></td>
                <td xss="removed"><strong>Course Name</strong></td>
                <td xss="removed"><strong>Intake</strong></td>
            </tr>

            <tr>
                <td xss="removed">110519110</td>
                <td xss="removed">Civil Engineering</td>
                <td xss="removed">120</td>
            </tr>

            <tr xss="removed">
                <td xss="removed">110524210</td>
                <td xss="removed">Computer Science and Engineering</td>
                <td xss="removed">180</td>
            </tr>

            <tr>
                <td xss="removed">110524610</td>
                <td xss="removed">Information Technology</td>
                <td xss="removed">120</td>


            </tr>
            <tr>
                <td xss="removed">110526310</td>
                <td xss="removed">Artificial Intelligence (AI) and Data Science</td>
                <td xss="removed">60</td>
            </tr>

            <tr>
                <td xss="removed">110526510</td>
                <td xss="removed">Industrial IoT</td>
                <td xss="removed">60</td>
            </tr>


            <tr xss="removed">
                <td xss="removed">110537210</td>
                <td xss="removed">Electronics and Telecommunication Engg</td>
                <td xss="removed">120</td>
            </tr>

            <tr>
                <td xss="removed">110561210</td>
                <td xss="removed">Mechanical Engineering</td>
                <td xss="removed">120</td>
            </tr>

            <tr xss="removed">
                <td xss="removed"><strong>&nbsp;</strong></td>
                <td xss="removed"><strong>Total</strong></td>
                <td xss="removed"><strong>780</strong></td>
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
                        <td align="center">&nbsp;1,31,500</td>
                    </tr>
                    <tr>
                        <td>OBC/EBC</td>
                        <td align="center">&nbsp;73,926</td>
                    </tr>

                    <tr>
                        <td>SBC/VJ/NT/DT</td>
                        <td align="center">16,353</td>
                    </tr>
                    <tr>
                        <td>SC/ST</td>
                        <td align="center">&nbsp;0</td>
                    </tr>

                    <tr>
                        <td>TFWS</td>
                        <td align="center">&nbsp;16,353</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="col-md-6">
            <h2 className="faculty-title color-blue">Contact for Admission</h2>
            <table className="table table-bordered table-striped table-hover" width="641" cellspacing="0"
                cellpadding="0">

                <thead>
                    <tr>
                        <th colspan="2">Contact Person</th>
                    </tr>
                </thead>

                <tbody>

                    <tr valign="top">
                        <td width="263" height="27">
                            <div>Prof. S. S. Dhok<br/></div>
                        </td>
                        <td width="320">
                            <div>Prof. A. G. Kadu<br/></div>
                        </td>
                    </tr>

                    <tr valign="top">
                        <td width="263" height="28">
                            <div><span xss="removed">9921559515</span><br/></div>
                        </td>
                        <td width="320">
                            <div>9975629500<br/></div>
                        </td>
                    </tr>


                    <tr valign="top">
                        <td width="263" height="27">
                            <div><span xss="removed">Prof. T. R. Wankhade</span><br/></div>
                        </td>
                        <td width="320">
                            <div>Prof. A. A. Jiwarkar</div>
                        </td>
                    </tr>

                    <tr valign="top">
                        <td width="263" height="27">
                            <div><span xss="removed">9637371336</span><br/></div>
                        </td>
                        <td width="320">9028378505</td>
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
                            SSC Marketsheet<br/>
                            HSC Marksheet<br/>
                            CET/JEE(Paper-I) Score Card<br/>
                            School/College Leaving Certificate(Transfer Certificate)<br/>
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
                <td align="center">4</td>
                <td>EWS Candidate</td>
                <td>
                    <div><strong>
                            EWS Certificate (If Applicable) (2023-24)</strong></div>
                </td>
            </tr>

            <tr>
                <td align="center">5</td>
                <td>TFWS Candidate</td>
                <td>
                    <div><strong>
                            Income Certificate (For TFWS candidates stating less than Rs.8 Lakh annual income)
                        </strong></div>
                </td>
            </tr>

            <tr>
                <td align="center">6</td>
                <td>Person with Disabilities</td>
                <td>
                    <div><strong>
                            Proforma-F/F1(For the candidate with Disability(P1, P2, P3))
                        </strong></div>
                </td>
            </tr>


            <tr>
                <td align="center">7</td>
                <td>Defence Candidate</td>
                <td>
                    <div><strong>
                            Proforma-C(For Ex servicemen with father's/Mother's Domicile Certificate)
                        </strong></div>
                </td>
            </tr>

            <tr>
                <td align="center">8</td>
                <td>For Scholarship / Freeship</td>
                <td>
                    <div><strong>
                            Income certificate and Form no. 16 is mandatory
                        </strong></div>
                </td>
            </tr>
        </tbody>




    </table>

    <br/>


    <div className="row">

        <div className="col-md-12">
            <div><span xss="removed"><span xss="removed">
                        <span xss="removed"><b>Click here for more details</b></span></span></span>&nbsp;<a
                    target="_blank" href="http://cetcell.mahacet.org/" xss="removed"><span xss="removed"><span
                            xss="removed"><span
                                xss="removed"><u><b>http://cetcell.mahacet.org/</b></u></span></span></span></a>
            </div>
        </div>

    </div> 


</div>
<section className="">
<div className="container">
    <h1 className="color-blue py-5 text-center name-1">CONTACT <span className="color-orange">US</span></h1>
    <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2 ">
            <p className="color-orange name-1 fs-3"> Prof Ram Meghe Institute of<br/> Technology & Research</p>

            <p className="name-1 text-dark fs-4">Anjangaon Bari Road, <br/>Badnera-Amravati <br/> 444 701 (M.S.)
                <br/>Phone
                No.: 0721-2681246
                Ext. -202 <br/>Fax: 0721-2681337 <br/>Email: <a href="mailto:principal@mitra.ac.in"
                    className="text-decoration-none text-dark">principal@mitra.ac.in</a>
            </p>
            <button type="button" className="btn btn-contact mt-5 px-4 py-2 text-light name-1 ">CONTACT US</button>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.4311272891027!2d77.74960037499619!3d20.854666093735744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a54e170995cb%3A0xfed5bd6314ba3973!2sProf.Ram%20Meghe%20Institute%20of%20Technology%20%26%20Research!5e0!3m2!1sen!2sin!4v1690962760299!5m2!1sen!2sin"
                className="maps" style={{border:0}} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</div>
</section>
<Footer/>
        </div>
    )
}

export default Btech;