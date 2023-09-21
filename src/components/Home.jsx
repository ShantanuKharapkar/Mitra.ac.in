import React from "react";
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"

import $ from "jquery"


const Home = () =>{
    return(
        <div>

    {/* Section 1 - Video */}

     <section>
     <video autoplay="" muted="" loop="" id="myVideo" width="100%">
        <source src="video/04_x264_001.mp4" type="video/webm" />
    </video> 


   
  
     </section>

         {/* Section - 2 */}

     <section>

        <div className="container rectangle-2">
            <div className="row d-flex justify-content-center">
                <div
                    className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 d-flex justify-content-center py-5 shadow bg-white rounded-20">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 border-right"><img
                                src="images/logo2 - Copy 2.png" alt="" /></div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 border-right"><img
                                src="images/logo2 - Copy 2.png" alt="" /></div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 border-right"><img
                                src="images/logo2 - Copy 2.png" alt="" /></div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"><img src="images/logo2 - Copy 2.png"
                                alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
        </section>

  {/* Section - 3 */}

        <section className="main-color margin-top">
        <div className="container mt-5">
            <div className="row d-flex ">
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12  ">
                    <h1 className="text-light py-5 name-1 mx-5">ABOUT <span className="color-orange"> INSTITUTE</span></h1>
                    <div className="box p-5 text-light">
                        <p>The Vidarbha Youth Welfare Society’s Prof. Ram Meghe Institute of Technology & Research,
                            Badnera-Amravati (Formerly well known as College of Engineering Badnera), is leading
                            technological institute from central India. Established in the year 1983, the institute has
                            a prestigious standing amongst the topmost Technical Institutes of Maharashtra. The
                            Institute is approved by AICTE, New Delhi, Accredited by National Assessment and
                            Accreditation Council (NAAC), Bangalore with Grade ‘A+’ & some of it’s UG Programmes are
                            Accredited thrice by the National Board of Accreditation (NBA), New Delhi. The Institute is
                            recognized by Directorate of Technical Education (DTE Mumbai), Govt. of Maharashtra and
                            affiliated to Sant Gadge Baba Amravati University, Amravati and is offering UG, PG and Ph.D
                            courses in Mechanical Engineering, Computer Science and Engineering, Information Technology,
                            Electronics and Telecommunication Engineering and Civil Engineering along with PG courses
                            like MBA and MCA.</p>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex justify-content-end">
                    <img src="images/aboutinstitute.png" alt="" className="p-0"/>
                      {/* <!-- <div className="box p-5 ">
                        <p>The Vidarbha Youth Welfare Society’s Prof. Ram Meghe Institute of Technology & Research,
                            Badnera-Amravati (Formerly well known as College of Engineering Badnera), is leading
                            technological institute from central India. Established in the year 1983, the institute has
                            a prestigious standing amongst the topmost Technical Institutes of Maharashtra. The
                            Institute is approved by AICTE, New Delhi, Accredited by National Assessment and
                            Accreditation Council (NAAC), Bangalore with Grade ‘A+’ & some of it’s UG Programmes are
                            Accredited thrice by the National Board of Accreditation (NBA), New Delhi. The Institute is
                            recognized by Directorate of Technical Education (DTE Mumbai), Govt. of Maharashtra and
                            affiliated to Sant Gadge Baba Amravati University, Amravati and is offering UG, PG and Ph.D
                            courses in Mechanical Engineering, Computer Science and Engineering, Information Technology,
                            Electronics and Telecommunication Engineering and Civil Engineering along with PG courses
                            like MBA and MCA.</p>
                    </div> --> */}
                </div>
            </div>
        </div>
    </section>

  
  {/* Section - 4 */}


  <section>

    <div className="section-1">
      <div className="container">
          <div className="row d-flex justify-content-start">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mx-auto mb-2">
                  <div className="card card-3 px-5 py-3  ">
                      <h3 className="text-center text-dark name-1">Vision</h3>

                      <p>To become a pace-setting Centre of excellence believing in three Universal values
                          namely
                          Synergy, Trust and Passion, with zeal to serve the Nation in the global
                          scenario.</p>
                  </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mx-auto mb-2">
                  <div className="card card-3 px-5 py-3">
                      <h3 className="text-center text-dark name-1">Mission</h3>

                      <ul className="ps-0">
                          <li>
                              <p>M1 : To achieve the highest standard in technical education through the
                                  state-of-the-art pedagogy and enhanced industry Institute linkages.</p>
                          </li>
                          <li>
                              <p>M2 : To inculcate the culture of research in core and emerging areas.</p>
                          </li>
                          <li>
                              <p>M3 : To strive for overall development of students so as to nurture
                                  ingenious
                                  technocrats as well as responsible citizens.</p>
                          </li>
                      </ul>

                  </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12  mx-auto mb-2">
                  <div className="card card-3 px-5 py-3">
                      <h3 className="text-center text-dark name-1">Objectives</h3>

                      <ul className="ps-0">
                          <li>
                              <p>To strive for global recognition through academic excellence in
                                  Engineering &
                                  Technology</p>
                          </li>
                          <li>
                              <p>To enhance the percentage of placement</p>
                          </li>
                          <li>
                              <p>To promote students for innovation and entrepreneurship</p>
                          </li>
                      </ul>
                    {/* 
                      <!-- <h3 className="text-center text-dark name-1">Vision</h3>
                      
                          <p>To become a pace-setting Centre of excellence believing in three Universal values
                              namely
                              Synergy, Trust and Passion, with zeal to serve the Nation in the global
                              scenario.</p>
                       -->

                       */}
                  </div>
              </div>


          </div>
      </div>
  </div>
  

</section>


  {/* Section - 5 */}

            
  <section>
  <div className="container mt-5">
      <div className="row d-flex justify-content-center">
          <div className="col-10 py-4 shadow rounded-20 main-color">
              <h3 className="text-light text-center name-1">OUR QUALITY POLICY</h3>
              <p className="text-light text-center fs-4">"Striving for Excellence in the Quality Engineering
                  Education"</p>
          </div>
      </div>
  </div>
</section>


    {/* Section - 6 */}

    <section className="box-new">
    <div className="container my-5">
        <div className="row">

            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <h1 className="text-dark text-center name-1 py-5">OUR TOP <span className="color-orange">RECRUITERS</span>
                </h1>
                <div className="box bg-white box-shadow table-responsive mt-3">

                    <table className="w-100">
                        <tr>
                            <td className="flip-box">
                                <div className="flip-box-inner ">
                                    <div className="flip-box-front">
                                        <img src="images/company logo/1.png" className="company-logo" alt=""/>
                                    </div>
                                    <div className="flip-box-back">
                                        <img src="images/company logo/1.png" className="company-logo" alt=""/>
                                    </div>
                                </div>
                            </td>
                            <td className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="images/company logo/2.png" className="company-logo" alt=""/>
                                    </div>
                                    <div className="flip-box-back">
                                        <img src="images/company logo/2.png" className="company-logo" alt=""/>
                                    </div>
                                </div>
                            </td>
                            <td><img src="images/company logo/3.jpg" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/4.jpg" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/5.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/6.png" className="company-logo" alt=""/></td>

                        </tr>

                        <tr>
                            <td><img src="images/company logo/7.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/8.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/9.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/10.jpg" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/11.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/12.jpg" className="company-logo" alt=""/></td>
                        </tr>
                        <tr>
                            <td><img src="images/company logo/7.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/8.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/9.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/10.jpg" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/11.png" className="company-logo" alt=""/></td>
                            <td><img src="images/company logo/12.jpg" className="company-logo" alt=""/></td>
                        </tr>

                    </table>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <h1 className="text-dark text-center name-1 py-5">NOTICE BOARD</h1>
                <div className="card card-4 px-5 mt-3">
                    <marquee behavior="" direction="up">
                        <ul className="p-4 mt-4">
                            <li>
                                <p>ERP Login
                                </p>
                            </li>
                            <li>
                                <p>PhD Open Defence
                                </p>
                            </li>
                            <li>
                                <p>Ph.D Admissions 2022-23
                                </p>
                            </li>
                            <li>
                                <p>Three Programs / Courses (Mechanical, Electronics & Telecom. and Civil
                                    Engineering) of PRMIT&R has been accredited by NBA till 30-June-2022
                                </p>
                            </li>
                            <li>
                                <p>Links and Notice for Admission to Higher classNamees
                                </p>
                            </li>
                            <li>
                                <p>Know & Pay your College Fees & Other Fees Online
                                </p>
                            </li>
                            <li>
                                <p>ARIIA 2021
                                </p>
                            </li>
                            <li>
                                <p>Feedback of Student and Faculty at AICTE
                                </p>
                            </li>
                            <li>
                                <p>PUBLIC NOTICE ON MENACE OF RAGGING
                                </p>
                            </li>
                            <li>
                                <p>NIRF</p>
                            </li>
                            <li>
                                <p>NAAC Self Study Report & IQAC-AQAR
                                </p>
                            </li>
                            <li>
                                <p>Webmail Login
                                </p>
                            </li>
                            <li>
                                <p>Institute Alumni Council
                                </p>
                            </li>
                            <li>
                                <p>Academic Calendar
                                </p>
                            </li>
                            <li>
                                <p>Prevention and Prohibition of Ragging
                                </p>
                            </li>

                        </ul>
                    </marquee>

                </div>
            </div>
        </div>
    </div>
</section>


 {/* Section - 7 */}


 <section>
 <h1 className="color-blue py-5 text-center name-1"><span className="color-orange">PLACEMENT</span>
     STATISTICS 2021-22 BATCH</h1>
 <div className="container ">
     <div className="row main-color new-placement center">
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4 ">
             <h1 className="text-center name-1 text-white">Cognizant
             </h1>
             <h2 className="color-orange  text-center">148</h2>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4 box-shadow">
             <h1 className="text-center name-1 text-white">Wipro</h1>
             <h2 className="color-orange  text-center">97</h2>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4">
             <h1 className="text-center name-1 text-white">TCS
             </h1>
             <h2 className="color-orange  text-center">76</h2>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4 ">
             <h1 className="text-center name-1 text-white">Capgemini
             </h1>
             <h2 className="color-orange  text-center">57</h2>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4 box-shadow">
             <h1 className="text-center name-1 text-white">Infosys</h1>
             <h2 className="color-orange  text-center">53</h2>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4">
             <h1 className="text-center name-1 text-white">Accenture
             </h1>
             <h2 className="color-orange  text-center">35</h2>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4">
             <h1 className="text-center name-1 text-white">IBM
             </h1>
             <h2 className="color-orange  text-center">29</h2>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4">
             <h1 className="text-center name-1 text-white">Dhoot Transmission

             </h1>
             <h2 className="color-orange  text-center">168</h2>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 py-4">
             <h1 className="text-center name-1 text-white fs-2">Career Labs Bangalore

             </h1>
             <h2 className="color-orange  text-center">21</h2>
         </div>
     </div>
 </div>
</section>

 {/* Section - 8 */}

<section className="faculty-phd">
<div className="container">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
            <div className="row">
                <div className="col-xl-3">
                    <div className="box px-3 py-5">
                        <h3 className="text-center color-orange fs-1">213</h3>
                        <p className="text-center text-light fw-bold fs-3">Faculty</p>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="box px-3 py-5">
                        <h3 className="text-center color-orange fs-1">54</h3>
                        <p className="text-center text-light fw-bold fs-3">phD</p>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="box px-3 py-5">
                        <h3 className="text-center color-orange fs-1">514</h3>
                        <p className="text-center text-light fw-bold fs-3">Placement</p>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="box px-3 py-5">
                        <h3 className="text-center color-orange fs-1">3817</h3>
                        <p className="text-center text-light fw-bold fs-3">Students</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>



 {/* Section - 9 */}


 <section>
 <div className="container">
     <h1 className="color-blue py-5 text-center">OUR <span className="color-orange">DEPARTMENTS</span></h1>
     <div className="row mb-3">
         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-2 card-main">
             <div className="padding_botm">
                 <div className="text_head">
                     <h4 className="text-center mt-4 mb-4 px-5 ">Mechanical Engineering</h4>
                 </div>
             </div>
         </div>
         <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12 mb-2 ">
             <div className="row">
                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-2 card-main">
                     <div className="img_two">
                         <div className="text_head">
                             <h4 className="text-center mt-4 mb-4 px-5 ">Mechanical Engineering</h4>
                         </div>
                     </div>
                 </div>
                 <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 mb-2 card-main">
                     <div className="img_two">
                         <div className="text_head">
                             <h4 className="text-center mt-4 mb-4 px-5 ">Mechanical Engineering</h4>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="row mt-3">
                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-2 card-main">
                     <div className="img_three">
                         <div className="text_head">
                             <h4 className="text-center mt-4 mb-4 px-5 ">Computer Science Engineering</h4>
                         </div>
                     </div>
                 </div>

                 <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 mb-2 card-main">
                     <div className="img_four">
                         <div className="text_head">
                             <h4 className="text-center mt-4 mb-4 px-5 ">Information Technology</h4>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div className="row mb-3">

         <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12">
             <div className="row">
                 <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 mb-2 card-main">
                     <div className="img_five">
                         <div className="text_head">
                             <h4 className="text-center mt-4 mb-4 px-5 ">MCA Department</h4>
                         </div>
                     </div>
                 </div>
                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-2 card-main">
                     <div className="img_six">
                         <div className="text_head">
                             <h4 className="text-center mt-4 mb-4 px-5 ">MBA Department</h4>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="row mt-3">
                 <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-2 card-main">
                     <div className="img_seven">
                         <div className="text_head">
                             <h4 className="text-center mt-4 mb-4 px-5 ">First Year Department</h4>
                         </div>
                     </div>
                 </div>

                 <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 mb-2 card-main">
                     <div className="img_four">
                         <div className="text_head">
                             <h4 className="text-center mt-4 mb-4 px-5 ">Information Technology</h4>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 card-main">
             <div className="padding_botm">
                 <div className="text_head">
                     <h4 className="text-center mt-4 mb-4 px-5 ">Mechanical Engineering</h4>
                 </div>
             </div>
         </div>
     </div>


 </div>


</section>


 {/* Section - 10 */}

 <section class="imp-link">
        <div class="container">
            <div class="row py-4">
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4 ">

                    <h4 class="text-center text-light  fs-5">
                        <a href=""><img src=".images/badge.png" class="icon-size py-3" alt=""/></a><br/>Our
                       Achievements 
                    </h4>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                    <h4 class="text-center text-light fs-5">
                        <a href=""><img src="images/commitee.png" class="icon-size py-3" alt=""/></a><br/>Internal
                        Commitee
                    </h4>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                    <h4 class="text-center text-light fs-5">
                        <a href=""><img src="images/photo-gallery.png" class="icon-size py-3" alt=""/></a><br/>Photo
                        Gallery
                    </h4>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                    <h4 class="text-center text-light fs-5">
                        <a href=""><img src="images/photo.png" class="icon-size py-3" alt=""/></a><br/>Video Gallery
                    </h4>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                    <h4 class="text-center text-light fs-5">
                        <a href=""><img src="images/documents.png" class="icon-size py-3" alt=""/></a><br/>IPR Cell
                    </h4>
                </div>
                
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                    <h4 class="text-center text-light fs-5">
                        <a href=""><img src="images/bars.png" class="icon-size py-3" alt=""/></a><br/>RP Cell
                    </h4>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                    <h4 class="text-center text-light fs-5">
                        <a href=""><img src="images/sunrise.png" class="icon-size py-3" alt=""/></a><br/>ED Cell
                    </h4>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                    <h4 class="text-center text-light fs-5">
                        <a href=""><img src="images/technology.png" class="icon-size py-3" alt=""/></a><br/>Incubation Center
                    </h4>
                </div>
            </div>

        </div>
    </section>


    <h1 className="color-blue py-5 text-center name-1">INSTITUTE <span className="color-orange">ALUMINI</span></h1>

    <section className="main-color">
    <div className="container  ">

        <div className="col-12 ">

            <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 mx-auto pb-5">
                <div className="row ">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2">
                        <h1 className="name-1 color-orange-2  py-auto text-center mt-5">INSTITUTE ALUMINI <br/> COUNCIL
                        </h1>
                        <button type="button" className="btn btn-light btn-lg my-4 register-btn name-1">Register
                            Here</button>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2">
                        <h1 className="py-5 text-center color-orange name-1">ALUMINI GALLERY</h1>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0" className="active" aria-current="true"
                                    aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/Rectangle 31.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Rectangle 33.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Rectangle 34.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
</section>


<section className="mt-5">
<div className="container">
    <div className="row responsive" id="">
        <div className="col-10 p-5 mt-4">
            <div className=" row">
                <div className="col-3 ">
                    <div className="pic">
                        <img src="images/testimonial/agrawal.png" width="100%" className="height-img"/>
                    </div>
                </div>
                <div className="col-9 px-5">
                    <h2 className="text-dark">Lorem ipsum dolor</h2>
                    <p className="text-dark">Lorem ipsum dolor.</p>
                    <p className="mt-5 text-dark description">Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Exercitationem velit enim est. Quibusdam ratione error necessitatibus? Sequi
                        facilis necessitatibus officia culpa eius, illum expedita consectetur commodi inventore
                        minima similique tenetur at iure esse accusantium? Laudantium quod cum asperiores libero
                        iusto!</p>
                </div>
            </div>
        </div>
        <div className="col-10 p-5 mt-4">
            <div className=" row">
                <div className="col-3">
                    <img src="images/testimonial/alok-mehta-1.png" width="100%" className="height-img"/>
                </div>
                <div className="col-9 px-5">
                    <h2 className="text-white">Lorem ipsum dolor</h2>
                    <p className="text-white">Lorem ipsum dolor.</p>
                    <p className="mt-5 text-white description">Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Exercitationem velit enim est. Quibusdam ratione error necessitatibus? Sequi
                        facilis necessitatibus officia culpa eius, illum expedita consectetur commodi inventore
                        minima similique tenetur at iure esse accusantium? Laudantium quod cum asperiores libero
                        iusto!</p>
                </div>
            </div>
        </div>
        <div className="col-10 p-5 mt-4">
            <div className=" row">
                <div className="col-3">
                    <img src="images/slider-1.jpg" width="100%" className="height-img"/>
                </div>
                <div className="col-9 px-5">
                    <h2 className="text-white">Lorem ipsum dolor</h2>
                    <p className="text-white">Lorem ipsum dolor.</p>
                    <p className="mt-5 text-white description">Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Exercitationem velit enim est. Quibusdam ratione error necessitatibus? Sequi
                        facilis necessitatibus officia culpa eius, illum expedita consectetur commodi inventore
                        minima similique tenetur at iure esse accusantium? Laudantium quod cum asperiores libero
                        iusto!</p>
                </div>
            </div>
        </div>
        <div className="col-10 p-5 mt-4">
            <div className=" row">
                <div className="col-3">
                    <img src="images/slider-1.jpg" width="100%" className="height-img"/>
                </div>
                <div className="col-9 px-5">
                    <h2 className="text-white">Lorem ipsum dolor</h2>
                    <p className="text-white">Lorem ipsum dolor.</p>
                    <p className="mt-5 text-white description">Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Exercitationem velit enim est. Quibusdam ratione error necessitatibus? Sequi
                        facilis necessitatibus officia culpa eius, illum expedita consectetur commodi inventore
                        minima similique tenetur at iure esse accusantium? Laudantium quod cum asperiores libero
                        iusto!</p>
                </div>
            </div>
        </div>

    </div>
</div>

</section>




    </div>
    )
}

export default Home