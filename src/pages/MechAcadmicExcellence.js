import React from "react";



import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/mechAcadmicExcellence.css"

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MechAcadmicExcellence = () =>{
    return(

        <div>
        
        
        <Header/>
        <Navbar/>



        <section className="background1 ">
        <div className="container-fluid">
            <div className="bg-light-color">
                <h1 className="text-center py-2 color-orange">Academic Excellence</h1>
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
                        Students Academic Achievements</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link-1" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">

                        Extra-Curricular Activities Achievements</button>
                </li>

            </ul>
        </div>

    </div>

    <div className="row">
        <div className="col-12">
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <h2 className="faculty-title color-blue">Topper List
                    </h2>
                    <h2 className="mt-2">Second Year</h2>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img src="http://mitra.ac.in/uploads/media/Abhishek_Khade.png"/>
                                <h3>Abhishek G. Khade (C)</h3>
                                <h4>SGPA: 8.64</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img src=" http://mitra.ac.in/uploads/media/Pratil_Dukare.png"/>
                                <h3>Pratik R. Dukare (B)</h3>
                                <h4>SGPA: 8.82</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img src="http://mitra.ac.in/uploads/media/Sanskar_Upadhye.png"/>
                                <h3>Sanskar R. Upadhye (A)</h3>
                                <h4>SGPA: 9.09</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Second-Year-Anuj-Warghat-A.jpg"/>
                                <h3>Anuj Warghat (A)</h3>
                                <h4>SGPA: 9.68</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Second-Year-Abhishek-Raut-B.jpg"/>
                                <h3>Abhishek Raut (B)</h3>
                                <h4>SGPA: 9.56</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Second-Year-Harshad-Thanekar-C.jpg"/>
                                <h3>Harshad Thanekar (C)</h3>
                                <h4>SGPA: 9.34</h4>
                            </div>
                        </div>
                        <h2 className="my-2">Third Year</h2>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Third-Year-Vikas-Kapade-A.jpg"/>
                                <h3>Vikas Kapade (A)</h3>
                                <h4>SGPA: 8.96</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Third-Year-Ram-Kakani-B.jpg"/>
                                <h3>Ram Kakani (B)</h3>
                                <h4>SGPA: 9.08</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Third-Year-Shivam-Mishra-C.jpg"/>
                                <h3>Shivam Mishra (C)</h3>
                                <h4>SGPA: 9.04</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img src="http://mitra.ac.in/uploads/media/Deepesh_Sobhani.png"/>
                                <h3>Deepesh R. Sobhani (C)</h3>
                                <h4>SGPA: 8.50</h4>
                            </div>

                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img src="http://mitra.ac.in/uploads/media/Bhavesh_Upadhey.png"/>
                                <h3>Bhavesh N. Upadhey (B)</h3>
                                <h4>SGPA: 8.95</h4>
                            </div>

                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img src="http://mitra.ac.in/uploads/media/Tajas_Bansod.png"/>
                                <h3>Tejas V. Bansod (A)</h3>
                                <h4>SGPA: 9.30</h4>
                            </div>

                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Final-Year-Prathamesh-Bele-A.jpg"/>
                                <h3>Prathamesh Bele (A)</h3>
                                <h4>SGPA: 9.15</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Final-Year-Gaurav-Dhawale-B.jpg"/>
                                <h3>Gaurav Dhawale (B)</h3>
                                <h4>SGPA: 9.15</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                            <div className="imgbox">
                                <img
                                    src="http://thinkcode.co.in/demo/mitra/uploads/media/Final-Year-Dhiraj-Lamjewar-C.jpg"/>
                                <h3>Dhiraj Lamjewar (C)</h3>
                                <h4>SGPA: 9.19</h4>
                                <h4>Class Topper: IV Sem (Lateral)</h4>
                            </div>
                        </div>
                    </div>
                    <h2 className="faculty-title color-blue mb-2">University Merit Ranks</h2>
                    <div className="su-table su-table-alternate">
                        <table className="table table-bordered table-striped">
                            <tbody>
                                <tr xss="removed">
                                    <td width="43" xss="removed">
                                        <div><b><span xss="removed">Sr. No.<o></o></span></b></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><b><span xss="removed">Name of Student<o></o></span></b></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><b><span xss="removed">Exam<o></o></span></b></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><b><span xss="removed">CGPA<o></o></span></b></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><b><span xss="removed">Merit Rank<o></o></span></b></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">1<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Shahid Shafi Tavar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-22</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.71</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>1</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">2<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Vaibhav Mayaram Bisen</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span>S-22</div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.69</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">3</span><br/></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">3<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Prajwal Prakashrao
                                                Pimpate</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span><span
                                                xss="removed">S-22</span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.65</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>4</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">4<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Amey Prafull Gulhane</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span>S-22</div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.63<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>5</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">5<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Abhishek Santosh Raut</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-22</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.60</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">6<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Pranita Vishweshwar
                                                Virulkar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span>S-22</div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.59<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>8</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Spandan Anukul
                                                Sangole</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span><span
                                                xss="removed">S-22</span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.59</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>8</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">8<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Tejas Sunilrao
                                                Tawalare</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span><span
                                                xss="removed">S-22</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.57</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>9</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">9<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Shahu Pradiprao
                                                Mankar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span><span
                                                xss="removed">S-22</span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.56</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">10<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">10<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Kundan Someshwar
                                                Tupate</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span>S-22</div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.56</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">10<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">11<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Vaibhav Dilip
                                                Lokhande</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech.&nbsp;<o></o></span><span
                                                xss="removed">(CAD/CAM) S-22</span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">10<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>1</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">12<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Shivam Rajesh Mishra</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">10</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>1</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">13<o></o></span></div>
                                    </td>
                                    <td width="223" nowrap="" xss="removed">
                                        <div><span xss="removed">Aditya Vijay Kadam</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>10<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>1</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">14<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Hariom Baluji Satpute</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.98<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">2<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">15<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Gaurav Manoj Verma</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.98</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>2</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">16<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Prathmesh Rajendra
                                                Bhuyar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.98<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>2</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">17<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Shubham Govardhan
                                                Gedam</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.98</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>2</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">18<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Parth Hemantrao Pund</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.95<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>4</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">19<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Nishant Ambrish
                                                Bhoyar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.95<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>4</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">20<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Saurabh Anilrao
                                                Malokar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.93<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">5<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">21<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Dnyanesh Surykant
                                                Ghom</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.93</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">5<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">22<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Shubham Ashokrao
                                                Lawate</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.93<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">5<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">23<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Ram Manoj Kakani</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.93</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">5<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">24<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Samrudhi Nityanand
                                                Kolhe</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.93<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>5<br/></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">25<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Prathmesh Sanjeev
                                                Jagtap</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.93</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">5</span><br/></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">26<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Aditya Anil Mohare</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.93<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>5</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">27<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Pranil Madhukar
                                                Raundale</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.93<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>5</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">28<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Sarang Pralhad
                                                Hingaspure</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.91</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">6<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">29<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Tushar Gajanan
                                                Mahulkar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.91<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">6<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">30<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Aditya Yadavrao
                                                Shrikhande</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.91</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">6<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">31<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Dhiraj Shrikantrao
                                                Sable</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.91<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">6<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">32<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Sanchit Rangrao
                                                Punkar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.91</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">6</span><br/></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">33<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Tushar Sunil Gole</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.91<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>6</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">34<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Sakshi Om Pohane</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.91<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>6</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">35<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Giteeka Mohanrao
                                                Charjan</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.89</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">36<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Muskan Sayyed Ajij</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.89<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">37<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Sarthak Vinod Atkare</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.89</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">38<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Riddhi Arunrao Yawale</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.89<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">39<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Siddhi Arunrao Yawale</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.89</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">40<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Anuradha Dilip Yawale</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.89<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">41<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Amit Raju Ughade</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.89</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">7<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">42<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Kundan Rajesh Meshram</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.89<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>7</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">43<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Sushant Dineshrao
                                                Deshmukh</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.89</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>7</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">44<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Shital Ganpat Hissal</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.89<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>7</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">45<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Rutvik Sunil Fale</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.87</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">8<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">46<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Adwait Prakash Patil</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.87<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">8<o></o></span></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">47<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Hrishikesh Gajanan
                                                Doifode</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.87</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>8</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">48<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Sai Kishor
                                                Keshattiwar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.87<br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>8</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">49<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Shreyash Shailesh
                                                Tayade</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.87<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>8</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">50<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Ishwar Sharad Kalmegh</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-21<o></o></span></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.86<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>9</div>
                                    </td>
                                </tr>


                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div><span xss="removed">51<o></o></span></div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Pranav Pramodrao
                                                Badase</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-22</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.86<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>9</div>
                                    </td>
                                </tr>


                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>52</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Vedanti Sanjay Kolhe</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-22</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.85<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>10</div>
                                    </td>
                                </tr>



                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>53</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Ankush Pramodrao
                                                Gavhale</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-22</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.85<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>10</div>
                                    </td>
                                </tr>



                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>54</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Harshal A. Selkar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-20</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.65<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>3</div>
                                    </td>
                                </tr>



                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>55</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Nikhil R. Sharnagat</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-20</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.63<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>4</div>
                                    </td>
                                </tr>


                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>56</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Dhiraj V. Lanjewar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-20</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>9.60</div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>5</div>
                                    </td>
                                </tr>

                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>57</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Ku. Samrudhhi V.
                                                Thakare</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-20</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.56<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>7</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>58</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Prathamesh P. Bele</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-20</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.56<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>7</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>59</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Aman D. Ukhalkar</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-20</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div>&nbsp;8.50</div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>9</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>60</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Gaurav N. Dhawale</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-20</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.50<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>9</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>61</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Ku. Bhavana E. Bokey</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">M.E. (PTM) S-20</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.98<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>1</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>62</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Mahesh Sunil Ulhe</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-19</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.46<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>1</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>63</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Kushbu Kailash Garade</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-19</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.33<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>2</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>64</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Mohd. Saquib Mohd.
                                                Sabir</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-19</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.32<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>3</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>65</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Pankaj Ashok Nichat</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-19</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.26<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>5</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>66</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Prasanna Sadanand
                                                Gaikwad</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">M.E. (Thermal) S-19</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.88<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>1</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>67</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Ayush Satyadeo Sharma</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-18</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.60<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>1</div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>68</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Purushottam Gajanan
                                                Hage</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-18</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.51<o></o></span></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div>2</div>
                                    </td>
                                </tr>

                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>69</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Ku. Rutuja Pandurang
                                                Hage</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-18</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.23</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">8</span><br/></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>70</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Sanket Rameshrao
                                                Deshmukh</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-17</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.11</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">9</span><br/></div>
                                    </td>
                                </tr>
                                <tr xss="removed">
                                    <td width="43" nowrap="" xss="removed">
                                        <div>71</div>
                                    </td>
                                    <td width="223" xss="removed">
                                        <div><span xss="removed">Shubham Padmakar
                                                Jambhe</span><br/></div>
                                    </td>
                                    <td width="161" xss="removed">
                                        <div><span xss="removed">B.E. Mech. S-17</span><br/></div>
                                    </td>
                                    <td width="57" xss="removed">
                                        <div><span xss="removed">9.10</span><br/></div>
                                    </td>
                                    <td width="66" xss="removed">
                                        <div><span xss="removed">10</span><br/></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <h2 className="faculty-title color-blue mb-2">Student Achievement & Awards in Various Competitions</h2>
                    <table className="table table-bordered table-striped">
                        <tbody><tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Sr.No<o></o></span></b></div>
                         <div><b><span lang="EN-US" xss="removed">&nbsp;</span></b></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Name of<span xss="removed"> </span>Student<o></o></span></b></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Name<span xss="removed">
                         </span>of<span xss="removed"> the </span>Event<o></o></span></b></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Name of
                         Organizer<o></o></span></b></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Level<span xss="removed"> </span><o></o></span></b></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Date of<o></o></span></b></div>
                         <div><b><span lang="EN-US" xss="removed">Event<o></o></span></b></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><b><span lang="EN-US" xss="removed">Award/<span xss="removed"> </span>Rank<o></o></span></b></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">1<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Nayan Shirbhate &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National
                         Kart Racing Championship 2017 Main Event<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rpm International Racing Circuit, Bhopal.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">29/9/17 to
                         3/10/17<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp; 1)STIG Award,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp; 2)Overall Best&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp; Performance,<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp; 3)Rs 20,000 with <o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;&nbsp;Trophy.<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">2<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rushikesh Lavhale &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">ROBO-Calypse<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">IIT Guwahati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">30/8/2018 to
                         2/9/2018<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Second Rank<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">3<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Tejas Pampattiwar &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Student Kart Design Challenge Season-2<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Society of Mechanical And Automotive
                         Engineers, Hyderabad.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">17/09/18 to
                         20/09/18<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;
                         1)Best Aesthetic <o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;
                         2)Overall Award<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;
                         3)7th Rank.<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">4<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Suraj Nimkar &amp; Prathamesh Bele<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Poster Presentation<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Internal Quality Assurance Cell, PRMIT&amp;R,
                         Bandera.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">University<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">22/09/2018<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">First Rank<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">5<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Srushti Khewalkar<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Effi-Cycle 2018 <o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Society Of Automotive Engineers Northern
                         Section, Chandigarh.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">9/10/18-
                         13/10/18<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Best Girl Participation<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">6<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rushikesh Lavhale &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Robowars, Techfest 2018<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">IIT Bombay.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">International<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">14/12/18-
                         16/12/18<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 3<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">7<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Atharv Umak &amp;Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Agriculture Multipurpose Sprayer,
                         Avishkar 2018 <o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Sant Gadge Baba Amravati University,
                         Amravati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">University<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         <div><span lang="EN-US" xss="removed">26/12/18 to
                         27/12/18<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1 in Agriculture Category<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">8<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Saurabhsingh Chavan &amp;Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">ROBO-War<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">VIT, Pune.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">28/12/18 to
                         01/01/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">9<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Saurabhsingh Chavan &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">ROBO-War (Arm Of Achelous) <o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">IIT, Kharagpur.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">18/1/19 to
                         20/1/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">10<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Vikram Matre<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">ROBO-War<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rajiv Gandhi College Of Engineering
                         And Research, Nagpur.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">23/2/19 to
                         24/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">11<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Tejas Pampattiwar &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Formula Kart Design Challenge Season 3<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Fraternity Of Mechanical And
                         Automotive Engineers, Delhi.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">9/2/19 to
                         11/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Runner Up Price<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">(Endurance and fuel economy)<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">12<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;&nbsp;&nbsp;
                         Rushikesh Lavhale<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Hot Wheels <o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Esperanza 2019, &nbsp;&nbsp;Prof.
                         Ram Meghe Institute Of Technology And Research, Badnera.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">13<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Pratik Chavan &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Junkyard<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Esperanza 2019, &nbsp;&nbsp;Prof.
                         Ram Meghe Institute Of Technology And Research, Badnera.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">14<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Pranay Shende &amp;Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Junkyard<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Esperanza 2019, &nbsp;&nbsp;Prof.
                         Ram Meghe Institute Of Technology And Research, Badnera.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 2<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">15<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Tushar Patangray<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Cad Mania, Esperanza 2019<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Esperanza 2019, &nbsp;&nbsp;Prof.
                         Ram Meghe Institute Of Technology And Research, Badnera.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">16<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Prathmesh Bele &amp;Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Technical Poster Presentation (Mech),
                         Esperanza 2019<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Esperanza 2019, &nbsp;&nbsp;Prof.
                         Ram Meghe Institute Of Technology And Research, Badnera.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">17<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Tushar Kale<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Paper Presentation, <br/>
                         &lt;!--[if !supportLineBreakNewLine]--&gt;<br/>
                         &lt;!--[endif]--&gt;<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Sipna College Of Engineering And
                         Technology, Amravati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">18<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Tejas Pampattiwa &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Bharat Formula Karting Season-2 <br/>
                         &lt;!--[if !supportLineBreakNewLine]--&gt;<br/>
                         &lt;!--[endif]--&gt;<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Kari Motor Speedway Formula 3 Racing
                         Circuit, Coimbatore.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/2/19 to
                         28/02/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed"><br/>
                         1)Best Driver 2)Award Rank 4<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">19<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;&nbsp;
                         Suraj Nimkar<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Paper Presentation, <br/>
                         &lt;!--[if !supportLineBreakNewLine]--&gt;<br/>
                         &lt;!--[endif]--&gt;<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Shri Shankarprasad Agnihotri College
                         Of Engineering, Wardha.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/2/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">20<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Tushar Patangray<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Catia Modelling, <o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Dr. Rajendra Gode Institute Of
                         Technology And Research, Amravati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">14/3/19-
                         15/3/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 2<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">21<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Suraj Nimkar<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;&nbsp;
                         &nbsp;Paper Presentation <o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Shri Shankarprasad Agnihotri College
                         Of Engineering, Wardha.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">8/3/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed"><br/>
                         Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">22<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;&nbsp;
                         Tushar Kale<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;&nbsp;
                         Paper Presentation <o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Dr. Rajendra Gode Institute Of
                         Technology And Research, Amravati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">14/3/19-
                         15/3/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed"><br/>
                         Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">23<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Atharv Umak &amp;Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">SGBAU Startup Fest 2019<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Sant Gadge Baba Amravati University,
                         Amravati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">University<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/3/19-
                         26/3/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Second Rank (Agriculture domain)<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">24<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Shubham Kadu &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">SGBAU Startup Fest 2019<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Sant Gadge Baba Amravati University,
                         Amravati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">University<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/3/19-
                         26/3/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Second Rank<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">(Civil domain)<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Prathamesh Bele &amp;Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">SGBAU &nbsp;Startup Fest 2019 <o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Sant Gadge Baba Amravati University,
                         Amravati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">University<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">25/3/19-
                         26/3/19<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Third Rank (Mechanical)<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">26<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Abhishek Bhande<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Paper Presentation, Esperanza 2020<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Prof. Ram Meghe Institute Of
                         Technology And Research, Badnera.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">27/1/20<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 2<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">27<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Adarsh Kohale &amp;Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">ROBO-War, AXIS 2020 <o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">VNIT, Nagpur.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">28/2/20-
                         1/3/20<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;&nbsp;&nbsp;
                         Rank 1<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">28<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Adarsh Kohale &amp; Team<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">ROBO-War<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">BITS, Pilani.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">5/3/20 to
                         8/3/20<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">&nbsp;&nbsp;&nbsp;&nbsp;
                         Rank 2<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">&nbsp;</span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">29<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Lakhan Thakare<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">ROBO Race, Vidyotan 2020. <o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Sipna College of Engineering and
                         Technology, Amravati.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">17/2/20<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Rank 1<o></o></span></div>
                         </td>
                        </tr>
                        <tr xss="removed">
                         <td width="48" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">30<o></o></span></div>
                         </td>
                         <td width="161" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Shubham Ikhar &amp; Team Acrux<o></o></span></div>
                         </td>
                         <td width="150" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">Auto India Racing Championship
                         Season-5<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">D. Y. Patil College of Engineering,
                         Pune.<o></o></span></div>
                         </td>
                         <td width="94" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">National<o></o></span></div>
                         </td>
                         <td width="85" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">18/05/22 to
                         21/05/22<o></o></span></div>
                         </td>
                         <td width="151" valign="top" xss="removed">
                         <div><span lang="EN-US" xss="removed">1)Overall First 2)Runner up<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">3)Skid Pad Winner<o></o></span></div>
                         <div><span lang="EN-US" xss="removed">4)Autocross First runner up<o></o></span></div>
                         </td>
                        </tr>
                       </tbody></table>
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

export default MechAcadmicExcellence;