import React from "react";

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/MechHome.css"


import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const MechHome = () =>{
    return(

        <div>
        
        <Header/>
        <Navbar/>





        <section>
        <div className="video-banner">
          <video autoplay="" muted="" loop="" id="myVideo">
            <source src="https://mitra.ac.in/uploads/about-dept/mechanical.mp4" type="video/mp4"/>
          </video>
          <div className="content video-overlay">
            <h1>Mechanical Engineering</h1>
    
          </div>
        </div>
      </section>



      <div className="container mt-4">
      <h2 className="faculty-title mt-3 text-center">About Mechanical Engineering</h2>
  
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://mitra.ac.in/assets/site/dummy/sl1.jpg" className="d-block w-100 height-400" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="	https://mitra.ac.in/assets/site/dummy/sl2.jpg" className="d-block w-100 height-400" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://mitra.ac.in/assets/site/dummy/sl3.jpg" className="d-block w-100 height-400" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <p className="text-align">Mechanical Engineering Department was established in 1986. Department offers B.E. course
            in Mechanical Engineering and M.E. courses in CAD/CAM, Thermal Engineering &amp; Production Technology &amp;
            Management. A team of 40 highly qualified and experienced faculty members with 17 doctorates is the main
            backbone of the department. Almost more than 30 research scholars are pursuing their doctoral research under
            the supervision of faculty members of the department. The faculty members have authored more than 600 research
            papers in journals and conferences. As the outcome of ongoing research in the department, 2 patents have been
            granted &amp; 15 registered so far. Department have well equipped 11 laboratories with computing facility. The
            CAD/CAM centre is equipped with recent design and analysis software and Robots. The department has shown
            consistently good results in university and GATE examinations. Student centric activities are regularly
            conducted to explore the hidden talents and inculcate qualities required for employability of the students.
            The students’ placement record is remarkable every year.</p>
        </div>
      </div>
    </div>


    <section>
    <div className="container">
      <div className="row" style={{marginTop:"50px"}}>
        <div className="col-4">
          <div className="boxed-feature cv-vision">
            <img src="https://mitra.ac.in/assets/site/dummy/mcvision.jpg" className="w-100"/>
            <h3 className="feature-title  p-3">Vision</h3>
            <p style={{textAlign: "justify"}} className=" p-3">To become a pace-setting Centre of excellence believing in
              three Universal values namely Synergy, Trust and Passion, with zeal to serve the Nation in the global
              scenario.</p>
          </div>
        </div>
        <div className="col-4">
          <div className="boxed-feature cv-vision">
            <img src="https://mitra.ac.in/assets/site/dummy/mcmission.jpg" className="w-100"/>
            <h3 className="feature-title p-3">Mission</h3>
            <p style={{textAlign: "justify"}} className="px-3"></p>
            <ul style={{paddingLeft: "32px",paddingRight: "32px"}}>
              <li><b>M1 :</b> To achieve the highest standard in technical education through the state-of-the-art
                pedagogy and enhanced industry Institute linkages.</li>
            </ul>
            <ul style={{paddingLeft: "32px",paddingRight: "32px"}}>
              <li><b>
                  M2 :</b> To inculcate the culture of research in core and emerging areas.</li>
            </ul>
            <ul style={{paddingLeft: "32px",paddingRight: "32px"}}>
              <li><b>M3 :</b> To strive for overall development of students so as to nurture ingenious technocrats as
                well as responsible citizens.</li>
            </ul>
            <p></p>
          </div>
        </div>
        <div className="col-4">
          <div className="boxed-feature cv-vision">
            <img src="https://mitra.ac.in/assets/site/dummy/mcquality.jpg" className="w-100"/>
            <h3 className="feature-title p-3">Our Quality Policy</h3>
            <p style={{textAlign: "justify"}} className="px-3">"Striving for Excellence in the Quality Engineering Education"
            </p>
          </div>
        </div>


      </div>
    </div>
  </section>


  <div className="fullwidth-block plsection" data-bg-color="#230000" style={{backgroundColor: "rgb(35, 0, 0)"}}>
  <div className="container">

    <div className="row">
      <div className="col-md-6">
        <div className="boxed-feature mission">
          <h3 className="feature-title">Important Links</h3>
          <div className="textwidget">
            <marquee className="ntboard" direction="up" scrolldelay="150" height="450px" onmouseover="this.stop();"
              onmouseout="this.start();">
              <ul>

                <li><a style={{color:'#230000'}} href="http://prmitr.mastersofterp.in/" target="_blank">
                    <p className="text text-justify">ERP Login</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}}
                    href="https://mitra.ac.in/uploads/main-media-pdf/Admission_to_Master.PDF" target="_blank">
                    <p className="text text-justify">Admission to Master of Engineering</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}} href="http://mitra.ac.in/admissions/phd" target="">
                    <p className="text text-justify">Ph.D Admissions 2022-23</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}} href="http://mitra.ac.in/uploads/main-media-pdf/7.pdf" target="_blank">
                    <p className="text text-justify">Three Programs / Courses (Mechanical, Electronics &amp; Telecom. and
                      Civil Engineering) of PRMIT&amp;R has been accredited by NBA till 30-June-2022</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}}
                    href="http://mitra.ac.in/site/view-page/higher-className-admission-2022-2023_26" target="">
                    <p className="text text-justify">Links and Notice for Admission to Higher Classes</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}} href="https://www.onlinesbi.com/sbicollect/icollecthome.htm"
                    target="_blank">
                    <p className="text text-justify">Know &amp; Pay your College Fees &amp; Other Fees Online</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}}
                    href="https://mitra.ac.in/uploads/dept-pdf/ARIIA_Report_2021-C-43072.pdf" target="_blank">
                    <p className="text text-justify">ARIIA 2021</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}} href="https://www.aicte-india.org/feedback/index.php" target="_blank">
                    <p className="text text-justify">Feedback of Student and Faculty at AICTE</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}}
                    href="https://mitra.ac.in/old/wp-content/uploads/2017/08/Notice-Crubbing-Ragging.pdf"
                    target="_blank">
                    <p className="text text-justify">PUBLIC NOTICE ON MENACE OF RAGGING</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}}
                    href="http://mitra.ac.in/uploads/main-media-pdf/Full_Report_IR-2023_Prof__Ram_Meghe_Institute_of_Technology___Research.pdf"
                    target="_blank">
                    <p className="text text-justify">NIRF</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}} href="https://mitra.ac.in/naac-self-study-report/" target="_blank">
                    <p className="text text-justify">NAAC Self Study Report &amp; IQAC-AQAR</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}}
                    href="https://accounts.google.com/AddSession?hd=mitra.ac.in&amp;sacu=1#identifier"
                    target="_blank">
                    <p className="text text-justify">Webmail Login</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}} href="https://mitra.ac.in/site/alumni" target="">
                    <p className="text text-justify">Institute Alumni Council</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}} href="https://mitra.ac.in/admissions/academic" target="">
                    <p className="text text-justify">Academic Calendar</p>
                  </a></li><br/>
                <li><a style={{color:'#230000'}}
                    href="https://mitra.ac.in/old/wp-content/uploads/2020/05/Anti_Ragging_Committee_2020.pdf"
                    target="_blank">
                    <p className="text text-justify">Prevention and Prohibition of Ragging</p>
                  </a></li><br/>

              </ul>
            </marquee>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="boxed-feature mission" style={{height: "547px",overflow: "scroll"}}>
          <h3 className="feature-title">Departmental Notice Board</h3>
          <div className="textwidget">
            <ul>
              <li><a style={{color:'#230000'}}
                  href="http://mitra.ac.in/uploads/dept-pdf/Mech_Dept_Boucher(AY-2022-2023).pdf" target="_blank">
                  <p className="text text-justify">Department of Mechanical Engineering Brochure.</p>
                </a></li> <br/>
              <li><a style={{color:'#230000'}} href="http://mitra.ac.in/uploads/media/Student_Placement_Statastics.jpeg"
                  target="_blank">
                  <p className="text text-justify">Student Placement Statistics of the Last Three Years.</p>
                </a></li> <br/>
              <li><a style={{color:'#230000'}} href="#" target="">
                  <p className="text text-justify">Three Programs / Courses (Mechanical, Electronics &amp; Telecom. and
                    Civil Engineering) of PRMIT&amp;R has been accredited by NBA till 30-June-2020</p>
                </a></li> <br/>
              <li><a style={{color:'#230000'}} href="" target="">
                  <p className="text text-justify">ARIIA 2020</p>
                </a></li> <br/>
              <li><a style={{color:'#230000'}} href="#" target="">
                  <p className="text text-justify">Feedback of Student and Faculty at AICTE</p>
                </a></li> <br/>
              <li><a style={{color:'#230000'}} href="#" target="">
                  <p className="text text-justify">PUBLIC NOTICE ON MENACE OF RAGGING</p>
                </a></li> <br/>
              <li><a style={{color:'#230000'}} href="#" target="">
                  <p className="text text-justify">'A' Grade awarded by NAAC for 5 years w.e.f May 2017</p>
                </a></li> <br/>
              <li><a style={{color:'#230000'}} href="#" target="">
                  <p className="text text-justify">NIRF</p>
                </a></li> <br/>



            </ul>
          </div>
        </div>
      </div>


    </div>

  </div> 
</div>


<div className="container mt-4">
<div className="row">
  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-start">
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1 active" id="pills-home-tab" data-bs-toggle="pill"
          data-bs-target="#pills-About" type="button" role="tab" aria-controls="pills-About" aria-selected="true">
          About</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1" id="pills-PEO-tab" data-bs-toggle="pill" data-bs-target="#pills-PEO"
          type="button" role="tab" aria-controls="pills-PEO" aria-selected="false">
          PEO's, PO's & CO's</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1" id="pills-Curriculum-tab" data-bs-toggle="pill"
          data-bs-target="#pills-Curriculum" type="button" role="tab" aria-controls="pills-Curriculum"
          aria-selected="false">
          Curriculum</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1" id="pills-Project-tab" data-bs-toggle="pill"
          data-bs-target="#pills-Project" type="button" role="tab" aria-controls="pills-Project"
          aria-selected="false">Project</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1" id="pills-MOU-tab" data-bs-toggle="pill"
          data-bs-target="#pills-MOU" type="button" role="tab" aria-controls="pills-MOU"
          aria-selected="false">MOU</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1" id="pills-News-tab" data-bs-toggle="pill"
          data-bs-target="#pills-News" type="button" role="tab" aria-controls="pills-News"
          aria-selected="false">
          News Letter</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1" id="pills-Job-tab" data-bs-toggle="pill"
          data-bs-target="#pills-Job" type="button" role="tab" aria-controls="pills-Job"
          aria-selected="false">
         Job Avenues</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1" id="pills-Placement-tab" data-bs-toggle="pill"
          data-bs-target="#pills-Placement" type="button" role="tab" aria-controls="pills-Placement"
          aria-selected="false">
          Placement</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link nav-link-1" id="pills-Internship-tab" data-bs-toggle="pill"
          data-bs-target="#pills-Internship" type="button" role="tab" aria-controls="pills-Internship"
          aria-selected="false">
                            Internship & Higher Studies</button>
      </li>


    </ul>
  </div>

</div>

<div className="row">
  <div className="col-12">
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-About" role="tabpanel" aria-labelledby="pills-About-tab">
        <div align="justify" xss="removed"><strong>NBA Accreditation to UG Engineering Program, Mechanical
            Engineering w.e.f 1 July 2014 to 30 June 2022 &amp; ‘A’ Grade awarded by NAAC with CGPA 3.12 for 5
            years w.e.f May 2017</strong><br/></div>
        <div align="justify" xss="removed">
          <hr xss="removed"/>
        </div>
        <div align="justify" xss="removed"><b><i>VISION:&nbsp; "</i></b><i>To Become a Lead Center in the Field of
            Mechanical Engineering to Minimize Human Efforts with an Eye on
            Environment."<br/></i><b><i>MISSION:&nbsp;</i></b></div>
        <div align="justify" xss="removed"><b><span lang="EN-US" xss="removed"></span></b>
          <li><b>M1:</b><span lang="EN-US" xss="removed">
              To educate, motivate and prepare the students to understand the fundamental and
              technical skills in Mechanical Engineering through effective teaching learning
              Methodologies.</span></li>
          <div><b><span lang="EN-US" xss="removed"></span></b>
            <li><b>M2:</b><span lang="EN-US" xss="removed">
                To impart entrepreneurship and employability skills to the students through mentoring
                and healthy interaction with industry to meet global challenges. <o></o></span></li>
          </div>

          <div><b><span lang="EN-US" xss="removed"></span></b>
            <li><b>M3</b><span lang="EN-US" xss="removed">:
                To encourage students to undertake R&amp;D activities so as to become solution
                provider for societal needs.<o></o></span></li>
          </div>

          <b><span lang="EN-US" xss="removed"></span></b>
          <li><b>M4:</b><span lang="EN-US" xss="removed"> To imbibe
              professional and ethical standards in the minds of the young engineers through
              continuous learning and professional activities.</span></li><br/>
          <div>Mechanical Engineering Department was established in 1986. Department offers B.E. course in
            Mechanical Engineering and M.E. courses in CAD/CAM, Thermal Engineering &amp; Production Technology
            &amp; Management. A team of 47 highly qualified and experienced faculty members with 19 doctorates is
            the main backbone of the department. Almost more than 30 research scholars are pursuing their doctoral
            research under the supervision of faculty members of the department. The faculty members have authored
            more than 600 research papers in journals and conferences. As the outcome of ongoing research in the
            department, 2 patents have been granted &amp; 15 registered so far. Department have well equipped 11
            laboratories with computing facility. The CAD/CAM centre is equipped with recent design and analysis
            software and Robots. The department has shown consistently good results in university and GATE
            examinations. Student centric activities are regularly conducted to explore the hidden talents and
            inculcate qualities required for employability of the students. The students’ placement record is
            remarkable every year.</div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-PEO" role="tabpanel" aria-labelledby="pills-PEO-tab">
        <h2 className="faculty-title mb-2">Programme Educational Objectives (PEO)</h2>
        <div>
          <div className="text text-justify"><b><span lang="EN-US" xss="removed">1. Preparation:</span></b><span
              lang="EN-US" xss="removed">&nbsp; To strive for overall personality development
              of students so as to nurture not only quintessential technocrats but also
              responsible citizens and to steer the organization towards becoming a pace
              setting centre of excellence. <br/>
              <b>2.Core Competence:</b>&nbsp; To educate
              students with the fundamentals of engineering sciences, basic Mechanical
              engineering, mechanical design and analysis to improve their overall
              engineering skills so that graduates will able to design mechanical systems
              containing functionality, aesthetics, safety, cost effectiveness and
              sustainability.&nbsp;<br/>
              &nbsp;<b>3.</b><b> Professionalism:</b>&nbsp; To
              inculcate the value systems &amp; ethics, leadership and team work skills,
              bring holistic development of personality and to promote entrepreneurial
              thinking among students.&nbsp; <br/>
              &nbsp;<b>4.</b><b> Employment avenues:</b> As
              per the fast changing global trend and demand, to make the students aware and
              assist for offering employment in various sectors.<o></o></span></div><br/>
          <h2 className="faculty-title">Program Outcomes</h2>
        </div>
        <div><strong>Engineering Graduates will be able to:</strong></div>
        <div>
          <div><b><span lang="EN-US">PO1. Engineering knowledge:</span></b><span lang="EN-US"> Apply the knowledge
              of mathematics, science, engineering
              fundamentals, and an engineering specialization to the solution of complex
              engineering problems.<o></o></span></div>

          <div><b><span lang="EN-US">PO2. Problem analysis:</span></b><span lang="EN-US"> Identify, formulate,
              research literature, and analyze complex
              engineering problems reaching substantiated conclusions using first principles
              of mathematics, natural sciences, and engineering sciences.<o></o></span></div>

          <div><b><span lang="EN-US">PO3. Design/development of solutions:</span></b><span lang="EN-US"> Design
              solutions for complex engineering problems and design system
              components or processes that meet the specified needs with appropriate
              consideration for the public health and safety, and the cultural, societal, and
              environmental considerations.<o></o></span></div>

          <div><b><span lang="EN-US">PO4. Conduct investigations of complex
                problems:</span></b><span lang="EN-US"> Use research-based knowledge and research
              methods including design of experiments, analysis and interpretation of data,
              and synthesis of the information to provide valid conclusions.<o></o></span></div>

          <div><b><span lang="EN-US">PO5. Modern tool usage: </span></b><span lang="EN-US">Create, select, and
              apply appropriate techniques, resources, and
              modern engineering and IT tools including prediction and modeling to complex
              engineering activities with an understanding of the limitations.<o></o></span></div>

          <div><b><span lang="EN-US">PO6. The engineer and society:</span></b><span lang="EN-US"> Apply reasoning
              informed by the contextual knowledge to assess
              societal, health, safety, legal and cultural issues and the consequent
              responsibilities relevant to the professional engineering practice.<o></o></span></div>

          <div><b><span lang="EN-US">PO7. Environment and sustainability:</span></b><span lang="EN-US"> Understand
              the impact of the professional engineering solutions in
              societal and environmental contexts, and demonstrate the knowledge of, and need
              for sustainable development.<o></o></span></div>

          <div><b><span lang="EN-US">PO8. Ethics:</span></b><span lang="EN-US">
              Apply ethical principles and commit to professional ethics and responsibilities
              and norms of the engineering practice.<o></o></span></div>

          <div><b><span lang="EN-US">PO9. Individual and team work:</span></b><span lang="EN-US"> Function
              effectively as an individual, and as a member or leader in
              diverse teams, and in multidisciplinary settings.<o></o></span></div>

          <div><b><span lang="EN-US">PO10. Communication:</span></b><span lang="EN-US"> Communicate effectively on
              complex engineering activities with the
              engineering community and with society at large, such as, being able to
              comprehend and write effective reports and design documentation, make effective
              presentations, and give and receive clear instructions.<o></o></span></div>

          <div><b><span lang="EN-US">PO11. Project management and finance:</span></b><span lang="EN-US">
              Demonstrate knowledge and understanding of the engineering and
              management principles and apply these to one’s own work, as a member and leader
              in a team, to manage projects and in multidisciplinary environments.<o></o></span></div>

          <div><b><span lang="EN-US">PO12. Life-long learning:</span></b><span lang="EN-US"> Recognize the need
              for, and have the preparation and ability to
              engage in independent and life-long learning in the broadest context of
              technological change.<o></o></span></div>
        </div>
        <div>
          <h2 className="faculty-title">Program Specific Program Outcomes</h2>
        </div>
        <div><strong>Engineering Graduates will be able to:</strong></div>
        <div className="text text-justify">
          <div><b><span lang="EN-US">PO13. </span></b><span lang="EN-US">Design
              and develop mechatronics systems.<o></o></span></div>

          <div><span lang="EN-US">&nbsp;<b>PO14. </b>Utilize probability and
              statistics; transform methods, engineering mathematics in support of mechanical
              engineering systems.<o></o></span></div>
        </div>
        <hr/>
        <a className="href-title"
          href="https://mitra.ac.in/uploads/dept-pdf/COs-Department-of-Civil-Engineering-converted.pdf"
          target="_blank" rel="noopener" xss="removed">Course Outcomes</a>
      </div>
      <div className="tab-pane fade" id="pills-Curriculum" role="tabpanel" aria-labelledby="pills-Curriculum-tab">
        <table className="table table-bordered table-striped" border="1" cellspacing="0" cellpadding="0" xss="removed">
          <tbody>
            <tr xss="removed">
              <td width="601" colspan="3" xss="removed">
                <div>
                  <h2 className="faculty-title">Syllabus
                    for B.E Mechanical Engineering </h2>
                </div>
                <div><span lang="EN-IN" xss="removed">(Semester
                    Pattern)</span><span lang="EN-IN" xss="removed">
                    <o></o>
                  </span></div>
              </td>
            </tr>
            <tr xss="removed">
              <td width="150" xss="removed">
                <div><span lang="EN-IN" xss="removed">Year<o></o></span></div>
              </td>
              <td width="167" xss="removed">
                <div><span lang="EN-IN" xss="removed">Semester<o></o></span></div>
              </td>
              <td width="283" xss="removed">
                <div><span lang="EN-IN" xss="removed">Link /
                    Syllabus Document<o></o></span></div>
              </td>
            </tr>
            <tr xss="removed">
              <td width="150" xss="removed">
                <div><span lang="EN-IN" xss="removed">Second Year<o></o></span></div>
              </td>
              <td width="167" xss="removed">
                <div><span lang="EN-IN" xss="removed">Third and Fourth<o></o></span></div>
              </td>
              <td width="283" xss="removed">
                <a href=" http://mitra.ac.in/uploads/dept-pdf/BE_3-4th_Sem_Syllabus.pdf" target="_blank">Click
                  here to download</a>
                <div><span lang="EN-IN" xss="removed">
                    <o></o>
                  </span></div>
              </td>
            </tr>
            <tr xss="removed">
              <td width="150" xss="removed">
                <div><span lang="EN-IN" xss="removed">Third Year<o></o></span></div>
              </td>
              <td width="167" xss="removed">
                <div><span lang="EN-IN" xss="removed">Fifth and Sixth<o></o></span></div>
              </td>
              <td width="283" xss="removed">
                <a href="http://mitra.ac.in/uploads/dept-pdf/BE_5-6th_Sem_Syllabus.pdf" target="_blank">Click here
                  to download</a>
                <div><span lang="EN-IN" xss="removed">
                    <o></o>
                  </span></div>
              </td>
            </tr>
            <tr xss="removed">
              <td width="150" xss="removed">
                <div><span lang="EN-IN" xss="removed">Final Year<o></o></span></div>
              </td>
              <td width="167" xss="removed">
                <div><span lang="EN-IN" xss="removed">Seventh and Eighth<o></o></span></div>
              </td>
              <td width="283" xss="removed">
                <a href="http://mitra.ac.in/uploads/dept-pdf/BE_7-8_th_Sem_Syllabus.pdf" target="_blank">Click
                  here to download</a>
                <div><span lang="EN-IN" xss="removed">
                    <o></o>
                  </span></div>
              </td>
            </tr>
            <tr xss="removed">
              <td width="601" colspan="3" xss="removed">
                <div><span lang="EN-IN" xss="removed">&nbsp;</span></div>
              </td>
            </tr>
          </tbody>
        </table>

        <div><span lang="EN-IN" xss="removed">&nbsp;</span></div>


        <br/>
        <table className="table table-bordered table-striped" border="1" cellspacing="0" cellpadding="0" width="654"
          xss="removed">
          <tbody>
            <tr xss="removed">
              <td width="654" colspan="3" xss="removed">
                <div>
                  <h2 className="faculty-title">Syllabus
                    for M.E Mechanical Engineering</h2>
                </div>
                <div><span lang="EN-IN" xss="removed">(Semester
                    Pattern)</span><span lang="EN-IN" xss="removed">
                    <o></o>
                  </span></div>
              </td>
            </tr>
            <tr xss="removed">
              <td width="186" xss="removed">
                <div><span lang="EN-IN" xss="removed">Year<o></o></span></div>
              </td>
              <td width="252" xss="removed">
                <div><span lang="EN-IN" xss="removed">Semester<o></o></span></div>
              </td>
              <td width="216" xss="removed">
                <div><span lang="EN-IN" xss="removed">Link /
                    Syllabus Document<o></o></span></div>
              </td>
            </tr>
            <tr xss="removed">
              <td width="186" xss="removed">
                <div><span lang="EN-IN" xss="removed">First and Second Year<o></o></span></div>
              </td>
              <td width="252" xss="removed">
                <div><span lang="EN-IN" xss="removed">First, Second, Third and Fourth</span></div>
              </td>
              <td width="654" colspan="3" xss="removed">
                <div> <a href="http://mitra.ac.in/uploads/dept-pdf/M_E_Full_Time(Thermal+CAD-CAM).pdf"
                    target="_blank">Click here to download</a>
                  <div><span lang="EN-IN" xss="removed"></span></div>
                </div>
              </td>
            </tr>




          </tbody>
        </table>
      </div>
      <div className="tab-pane fade" id="pills-Project" role="tabpanel" aria-labelledby="pills-Project-tab">
        <div>
          <h2 className="faculty-title"> B.E. Projects 2021-22</h2>
        </div>
        <div>
          <div align="center">

            <div className="su-table su-table-alternate" xss="removed">
              <table className="table table-bordered table-striped" xss="removed">
                <tbody>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><b><span lang="EN-US" xss="removed">Sr.No<o></o></span></b></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><b><span lang="EN-US" xss="removed">Batch<o></o></span></b></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><b><span lang="EN-US" xss="removed">Project Title<o></o></span></b></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><b><span lang="EN-US" xss="removed">Guide<o></o></span></b></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><b><span lang="EN-US" xss="removed">Student Group leader<o></o></span></b></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">1<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A1<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Performance of different reflective
                          materials for parabolic solar cooker<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. H D. Patil<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Vedant R. Mahajan<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">2<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A2<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Solar Panel cleaning Mechanism<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. A.D. Shirbhate<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Monali V. Wankhade<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">3<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A3<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Design &amp; Development of Multipurpose
                          chair<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. A.U. Awate<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Ajinkya S. Chendke<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">4<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A4<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Gesture controlled industrial robotic arm
                          prototype making using Arduino and MPU6050<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. S.G. Bahaley<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Sameer N. Deshmukh<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">5<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A5<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Regenerative braking System<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. S. P. Patil<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Vaibhav M. Bisen<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">6<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A6<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Design &amp; Fabrication of AGV<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. R.A. Kubade<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Kunal K. Yede<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">7<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A7<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Compressed-Air Engine<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. M. P. Nawathe<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Chinmay G. Girhepuje<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">8<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A8<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">To Design &amp; Develop roof shelter to
                          protect the yield from unfavorable weather conditions.<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. P.B. Jawanjal<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Yadnesh S. Fasate<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">9<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A9<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Vertical Axis Wind turbine<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. R. R. Kolhekar<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Ameya M. Ambhore<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">10<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A10<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Fabrication of solar water heating system
                          with thermal energy storage using PCM<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. T. K. Gawande<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Shahid S. Tavar<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">11<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A11<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Design and Development of Agro- Carrier
                          Robot<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. C. R. Bundele<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Tejas S. Tawalare<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">12<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A12<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Hybrid solar Dryer system<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. S. S. Bhange<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dushant P. Chavhan<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">13<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">A13<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Solar powered self- sustain className room<o></o></span>
                      </div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. P. V. Gedam<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Himanshu S. Dupare<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">14<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B1<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Critical study of small scale industry
                          supported by MSKVIB to solar khadi cluster<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. N. W. Kale<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Pranita Virulkar<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">15<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B2<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Obstacle sensing and path rerouting
                          robotic vehicle.<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. S. S. Deshmukh<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Abhishek N. Banarase<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">16<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B3<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Modelling &amp; Analysis of tooth used in
                          Dental implant using 3D printing<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. C. R. Patil<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Amol D. Mawale<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">17<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B4<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Multiple Non-Conventional Energy
                          Generating Units for EV charging Station.<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. H. M. Deshmukh<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Hitesh V. Nagose<o></o></span></div>
                    </td>
                  </tr>
                  <tr xss="removed">
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">18<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B5<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Performance analysis of YASKAWA
                          MOTOMAN-AR1440<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. M. V. Gudadhe<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Ram K. Dhole<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">19<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B6<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Design &amp; Fabrication of Robowar Robot<o></o></span>
                      </div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. V. V. Kale<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Abhijeet R. Thengane<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">20<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B7<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Built in Atmospheric Water generator in Refrigerator<o>
                          </o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. A. V. Deshmukh<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Meet M. Dandhale<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">21<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US">B8</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US">Quality Assesment tool through image processing</span><span
                          lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US">Dr. N. S. Pohokar</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US">NayanY. Turale</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">22<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">B9<o></o></span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Material sorting using conveyer belt<o></o></span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. S. A. Gedam<o></o></span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Shantanu P. Sargive<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">23<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B10<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Machine for transforming waste plastic
                          bottles into raw material.<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. S. S. Kongre<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Satyam Badhai<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">24<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US">B11</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Power Generation using Road Traffic.<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. A. S. Deshmukh<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Jay A. Belsare<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">25<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B12<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Manually operated multiple material
                          dropping and spraying machine.<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. P. R. Mamankar<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Akash Bhagat<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">26<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">B13<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Pneumatic Powered Drone Catcher Gun<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. R. S. Sakharkar<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prajwal P.Pimpalte<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">27<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US">C1</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US">Design &amp; analysis of Heat exchanger using Fresnel Lens
                          Concentrated Solar energy</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US">Prof. K. M. Watt</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US">Mukul R. Waykul</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">28<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">C2<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Self charging backup system in Electric
                          Vehicle<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. A. K. Pitale<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Tanaya N. Ghodeswar<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">29<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">C3<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Line following Robot<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. S. B. Thakre<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Piyush S. Bopche<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">30<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">C4<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Fabrication of water cooler cum Air
                          cooler<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. S. V. Dahake<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Vaibhav R. Panjabi<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">31<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US">C5</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US">Study of Flex-Fuel Vehicle</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US">Dr. P. M. Ingole</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US">Harshal M. Garad</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">32<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US">C6</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US">Electromagnetic Braking System</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US">Dr. S. J. Deshmukh</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US">Akhilesh Dhanaskar</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">33<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">C7<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span xss="removed">Solidwork based lugs
                          Pickling machine unit for oxidation.</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Dr. N. A. Wankhade<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Arvind N. Dharmale<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">34<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US">C8</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US">Automatic Stamping, Punching &amp; Stapling Machine</span><span
                          lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US">Prof. A. V. Kadu</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US">Nikhil A. Rajas</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">35<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">C9<o></o></span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Modern Technology in Indian Railways<o></o></span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. S. M. Paropate<o></o></span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Abhishek S. Gawande<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">36<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">C10<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Manually Operated Seed Sowing Machine<o></o></span>
                      </div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. A. S. Deshmukh<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Ganesh J. Misar<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">37<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US">C-11</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US">Solar Powered self- sustain className room</span><span lang="EN-US"
                          xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US">Prof. A. S. Sakhare</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US">Neeraj V. Sawai</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">38<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US">C12</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US">360 degree Air Cooler</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US">Prof. V. D. Tonge</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US">Shubham R. Bhagat</span><span lang="EN-US" xss="removed">
                          <o></o>
                        </span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">39<o></o></span></div>
                    </td>
                    <td width="57" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">C13<o></o></span></div>
                    </td>
                    <td width="310" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Thermal performance analysis of
                          NISIL-R134a Heat Pipe using CFD Modeling<o></o></span></div>
                    </td>
                    <td width="151" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. A. S. Patil<o></o></span></div>
                    </td>
                    <td width="153" valign="top" xss="removed">
                      <div><span lang="EN-US" xss="removed">Shubham V. Ikhar<o></o></span></div>
                    </td>
                  </tr>
                  <tr>
                    <td width="36" xss="removed">
                      <div><span lang="EN-US" xss="removed">40<o></o></span></div>
                    </td>
                    <td width="57" xss="removed">
                      <div><span lang="EN-US" xss="removed">C14<o></o></span></div>
                    </td>
                    <td width="310" xss="removed">
                      <div><span lang="EN-US" xss="removed">Crops trimming Machine &amp; Pesticide
                          Sprayer<o></o></span></div>
                    </td>
                    <td width="151" xss="removed">
                      <div><span lang="EN-US" xss="removed">Prof. A. P. Thakare<o></o></span></div>
                    </td>
                    <td width="153" xss="removed">
                      <div><span lang="EN-US" xss="removed">Gourao S. Warhade<o></o></span></div>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-MOU" role="tabpanel" aria-labelledby="pills-MOU-tab">
        <div>
<div className="su-table su-table-alternate" xss="removed">
<table className="table table-bordered table-striped" xss="removed">
<tbody><tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div><b>Sr No<o></o></b></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div><b>Name of Institution/Industry<o></o></b></div>
</td>
<td width="132" nowrap="" xss="removed">
<div><b>Details of MOU's/Collaboration Arrangements<o></o></b></div>
</td>
<td width="85" nowrap="" xss="removed">
<div><b>Date from<o></o></b></div>
</td>
<td width="76" nowrap="" xss="removed">
<div><b>Date To<o></o></b></div>
</td>
<td width="“90”" nowrap="" xss="removed">
<div><b>Contribution in the development of Institute<o></o></b></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>1<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Barton Breeze Pvt Ltd Gurgaon Haryana<o></o></div>
</td>
<td width="132" xss="removed">
<div>Technological exchange through counsultancy projects,
Trainings,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>14-Feb-23<o></o></div>
</td>
<td width="76" nowrap="" xss="removed">
<div>13-02-2026<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>2<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>PHN Technology Pvt Ltd Pune<o></o></div>
</td>
<td width="132" xss="removed">
<div>Technological exchange through counsultancy projects,
Trainings,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>14-Feb-23<o></o></div>
</td>
<td width="76" xss="removed">
<div>Subjected to renewal with necessary modification, revision
or Adition<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>3<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Rajas Engineering Pvt Ltd, Pune<o></o></div>
</td>
<td width="132" xss="removed">
<div>Technological exchange through counsultancy projects,
Trainings,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>22-Oct-21<o></o></div>
</td>
<td width="76" nowrap="" xss="removed">
<div>22-Oct-26<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>4<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Virinchi Werks, Pune<o></o></div>
</td>
<td width="132" xss="removed">
<div>Technological exchange through counsultancy projects,
Trainings,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>22-Oct-21<o></o></div>
</td>
<td width="76" nowrap="" xss="removed">
<div>22-Oct-26<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>5<o></o></div>
</td>
<td width="“50”" xss="removed">
<div>Adani Electricity Mumbai Limited, ADTPS, Dahanu, Mumbai<o></o></div>
</td>
<td width="132" xss="removed">
<div>Technological exchange through counsultancy projects,
Trainings,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>27-Sep-21<o></o></div>
</td>
<td width="76" nowrap="" xss="removed">
<div>27-Sep-24<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>6<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>S K Edutech &amp; Agro Industry, Akola<o></o></div>
</td>
<td width="132" nowrap="" xss="removed">
<div>Technological exchange projects,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>01-Jul-17<o></o></div>
</td>
<td width="76" xss="removed">
<div>Subjected to renewal with necessary modification, revision
or Adition<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>7<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Sengar Industries, Amravati<o></o></div>
</td>
<td width="132" nowrap="" xss="removed">
<div>Technological exchange projects,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>01-Jul-17<o></o></div>
</td>
<td width="76" xss="removed">
<div>Subjected to renewal with necessary modification, revision
or Adition<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>8<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>MGIRI, Wardha<o></o></div>
</td>
<td width="132" nowrap="" xss="removed">
<div>Collaborative Projrcts<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>02-Jan-17<o></o></div>
</td>
<td width="76" xss="removed">
<div>Principally accepeted further subjected to ministry MGIRI<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To provide oppourtunity work on field projects<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>9<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Dysmech Consultancy Services, Pune<o></o></div>
</td>
<td width="132" nowrap="" xss="removed">
<div>Technological exchange projects,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>Jan-17<o></o></div>
</td>
<td width="76" nowrap="" xss="removed">
<div>31-Dec-20<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide state of art training to faculty and students<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>10<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Jadhao Steel Alloys, Amravati<o></o></div>
</td>
<td width="132" nowrap="" xss="removed">
<div>Technological exchange projects,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>01-Aug-16<o></o></div>
</td>
<td width="76" xss="removed">
<div>Subjected to renewal with necessary modification, revision
or Adition<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>11<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Tirupati Industries, Amravati<o></o></div>
</td>
<td width="132" nowrap="" xss="removed">
<div>Technological exchange projects,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>15-Jun-16<o></o></div>
</td>
<td width="76" xss="removed">
<div>Subjected to renewal with necessary modification, revision
or Adition<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>12<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Indo- German Tool Room, Aurangabad<o></o></div>
</td>
<td width="132" nowrap="" xss="removed">
<div>CAD,CAM,CFD,R.P. Trainig<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>05-Oct-15<o></o></div>
</td>
<td width="76" nowrap="" xss="removed">
<div>05-Oct-17<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To provide In-house and In-plant Training to students and
faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>13<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>Jadhao IKON, Amravati<o></o></div>
</td>
<td width="132" xss="removed">
<div>Technological exchange through counsultancy projects,
Trainings,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>01-Jul-14<o></o></div>
</td>
<td width="76" xss="removed">
<div>Subjected to renewal with necessary modification, revision
or Adition<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
<tr xss="removed">
<td width="32" nowrap="" xss="removed">
<div>14<o></o></div>
</td>
<td width="“50”" nowrap="" xss="removed">
<div>ASPA Bandson , Amravati<o></o></div>
</td>
<td width="132" xss="removed">
<div>Technological exchange through counsultancy projects,
Trainings,etc<o></o></div>
</td>
<td width="85" nowrap="" xss="removed">
<div>01-Jul-14<o></o></div>
</td>
<td width="76" xss="removed">
<div>Subjected to renewal with necessary modification, revision
or Adition<o></o></div>
</td>
<td width="“90”" xss="removed">
<div>To Provide Industrial Exposure to Students and Faculty<o></o></div>
</td>
</tr>
</tbody></table></div></div>
      </div>
      <div className="tab-pane fade" id="pills-News" role="tabpanel" aria-labelledby="pills-News-tab">
        <div><li><a href=" http://mitra.ac.in/uploads/dept-pdf/Mech_Dept_Boucher(AY-2022-2023)_(2).pdf" target="_self">Departmental Broucher&nbsp;</a></li></div>						
      </div>
      <div className="tab-pane fade" id="pills-Job" role="tabpanel" aria-labelledby="pills-Job-tab">
        <h2 className="faculty-title">List Of Job Avenues</h2>
<table className="table table-bordered table-striped">
<tbody><tr>
<td>1</td>
<td><a href="https://www.google.co.in/search?q=job+opportunities+for+fresh+Mechanical+engineers+in+indian+government+jobs" target="_blank" rel="noopener" xss="removed">Indian Government Jobs</a></td>
</tr>

<tr>
<td>2</td>
<td><a href="https://www.google.co.in/search?q=job+opportunities+for+fresh+Mechanical+engineers+in+maharashtra+government+jobs" target="_blank" rel="noopener" xss="removed">Maharashtra Government Jobs</a></td>
</tr>

<tr>
<td>3</td>
<td><a href="https://www.google.co.in/search?q=job+opportunities+for+fresh+Mechanical+engineers+in+indian+defence+sector+jobs" target="_blank" rel="noopener" xss="removed">Defence Sector Jobs</a></td>
</tr>

<tr>
<td>4</td>
<td><a href="https://www.google.co.in/search?q=job+opportunities+for+fresh+Mechanical+engineers+in+indian+railway+jobs" target="_blank" rel="noopener" xss="removed">Indian Railways Jobs</a></td>
</tr>

<tr>
<td>5</td>
<td><a href="https://www.google.co.in/search?q=Mechanical+engineering+jobs+for+freshers+in+private+companies" target="_blank" rel="noopener" xss="removed">Private Sector Jobs</a></td>
</tr>

</tbody></table>
      </div>
      <div  className="tab-pane fade" id="pills-Placement" role="tabpanel" aria-labelledby="pills-Placement-tab">
        <div><span xss="removed" lang="EN-IN">&nbsp;</span></div>
      <div className="row">
      <h2 className="faculty-title">List of Students Placed in 2021-22</h2><div><br/></div>

      <div className="su-table su-table-alternate" xss="removed"><table className="table table-bordered table-striped" xss="removed">

      <tbody><tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><b><span xss="removed">Sr. No.<o></o></span></b></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><b><span xss="removed">Company<o></o></span></b></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><b><span xss="removed">Name Of Student Placed<o></o></span></b></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" xss="removed">
      <div><span xss="removed">1<o></o></span></div>
      </td>
      <td width="151" xss="removed">
      <div><span xss="removed">Accenture<o></o></span></div>
      </td>
      <td width="435" xss="removed">
      <div><span xss="removed">Vedant Mahajan (Secured Highest Package in the Institute)<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">2<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Accenture<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Meet Dandhale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">3<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Abhay Dahat <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">4<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Akash Meshram <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">5<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Amey Gulhane <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">6<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Chaitanya Kapse <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">7<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sumedh Wagh<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">8<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Harshal Richariya<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">9<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Mihir Holey<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">10<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Piyush Bopche<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">11<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Piyush Kale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">12<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Pranav Ajmire<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">13<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Ram Dhole <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">14<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shantanu Jagtap<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">15<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shubham Shegokar <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">16<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sidhhant Bhoyar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">17<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Tanmay Kalbande<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">18<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Capgemini<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Aniket Wadaskar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">19<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Abhishek Banarase<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">20<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Abhishek Sontakke<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">21<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Akhilesh Dhanaskar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">22<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Arpit Bahadure<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">23<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Chaitanya Ingle<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">24<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Meet Dandhale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">25<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Monali Wankhade<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">26<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Nayan Turale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">27<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Nikhil Rajas<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">28<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prajwal Nichat<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">29<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Pranita Virulkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">30<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Rishikesh Anjankar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">31<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Samruddharaj Hendwe<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">32<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shahid Tavar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">33<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shahu Mankar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">34<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sumit Deshmukh<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">35<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Tanaya Ghodeswar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">36<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Cognizant<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vedant Mahajan<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">37<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Collabera<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Aditi Dhole<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">38<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Collabera<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Anup Konde<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">39<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Collabera<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prajwal Pimpalte<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">40<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Ajinkya Hutke<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">41<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Piyush Kale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">42<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prajwal Lonkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">43<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prajwal Bhumbar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">44<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Aditya Bijwe<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">45<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sidhhant Deshmukh<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">46<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sushmita Arjunkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">47<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Kamesh Bandupant Chopade<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">48<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Aniket Gole<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">49<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Infosys<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Abhishek Bhande<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">50<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">LTI<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Rushikesh Gulhane<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">51<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Abhishek Sontakke <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">52<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Chaitanya Ingle<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">53<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Kundan Nagpure <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">54<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Mukul Waykul <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">55<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Nayan Yadaorao Turale.<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">56<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sahil Agrawal <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">57<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shahu Mankar <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">58<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shrikant Khanke<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">59<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shubham Shegokar <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">60<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vaibhav Rajabhau Panjabi<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">61<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vatsalya Totre<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">62<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vedant Deshmukh<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">63<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vivek Jiskar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">64<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Meet Madhao Dandhale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">65<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Rupesh Ganvir<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">66<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Nikhil Rajas<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">67<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">TCS<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Yash Dhadkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">68<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Abhishek Raut<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">69<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Pratham Likhe <o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">70<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Rupesh Ganvir<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">71<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Swaraj Babare<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">72<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Tejas Tawalare<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">73<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vaishnavi Gupta<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">74<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vatsalya Totare<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">75<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vivek Jichkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">76<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Mihir Holey<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">77<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Aditya Bijwe<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">78<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Rishikesh Bhatkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">79<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Om Khairkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">80<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Neha Dakre<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">81<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prajwal Kale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">82<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Saurabh Mahore<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">83<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Monil Rameshrao Hedaoo<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">84<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Ajinkya Hutke<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">85<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Pratik Deepak Dahekar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">86<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Arpita Kalamkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">87<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Spandan Sangole<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">88<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Himalay Khawase<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">89<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Mohit Thakur<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">90<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Wipro<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Anup Konde<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">91<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Anuja Manojrao Etankar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">92<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Falgun Anil Dhawale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">93<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Martand Ramkrushna Mangulkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">94<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Akash Balu Bhagat<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">95<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sameer Nitin Deshmukh<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">96<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Kamesh Bandupant Chopade<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">97<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Bhushan Ashok Gond<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">98<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Mayur Sunil Kohale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">99<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Abhijeet Ravindra Thengane<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">100<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Amol Dilip Mawale<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">101<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Achal Rajkumar Meshram<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">102<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Siddhant Deshmukh<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">103<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vaishnavi Sanjayrao Kokane<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">104<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Ishwar Ghatre<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">105<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Chinmay Gopalkrishna Girhepuje<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">106<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Lakhan Satish Thakare<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">107<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Abhijit Sudhakar Mamidwar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">108<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Arpita Surendra Kalamkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">109<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prajwal Sureshrao Lonkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">110<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sarthak Anil Sarode<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">111<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Samarpan Dhoke<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">112<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shubham Manohar Durgade<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">113<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Pratik Deepak Dahekar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">114<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sahil Bagde<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">115<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Harshal Maroti Garad<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">116<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Harsh Sunilrao Thakare<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">117<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Rutvik Tekade<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">118<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Nikhil Waman Bure<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">119<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Aditya Ashok Dhamane<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">120<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Neha Satishrao Dakre<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">121<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prajwal Prakashrao Pimpalte<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">122<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prajwal Dipak Khaire<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">123<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Aditya Bijwe<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">124<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Vaibhav Mayaram Bisen<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">125<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Dhiraj Rajendra Digrase<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">126<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sushant Ashokrao Thakare<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">127<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Gourao Sukhdeo Warhade<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">128<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Spandan Anukul Sangole<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">129<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Arjun Chhatrapati Waghmare<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">130<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Akash Gajanan Pawar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">131<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Aditya Suresh Mandwe<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">132<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Kuldip Devrao Uike<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">133<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Prashant Gajanan Ingle<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">134<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Himanshu Sanjay Dupare<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">135<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Shubham Vilasrao Ikhar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">136<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Sayyam Sanjay Bharde<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">137<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Yash Kishor Ajalkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">138<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Rushikesh Vinod Bhatkar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">139<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Dhoot Transmission<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Ayur A. Gajbhiye<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">140<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">JSW Steel<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Amey Gulhane<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">141<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Careerlabs<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Nikhil Rajendra Panekar<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">142<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Careerlabs<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Mayur Radhesham Rathod<o></o></span></div>
      </td>
      </tr>
      <tr xss="removed">
      <td width="58" nowrap="" xss="removed">
      <div><span xss="removed">143<o></o></span></div>
      </td>
      <td width="151" nowrap="" xss="removed">
      <div><span xss="removed">Careerlabs<o></o></span></div>
      </td>
      <td width="435" nowrap="" xss="removed">
      <div><span xss="removed">Mohit Subhash Ingle<o></o></span></div>
      </td>
      </tr>
      </tbody></table></div></div>					
        </div>
      <div className="tab-pane fade" id="pills-Internship" role="tabpanel" aria-labelledby="pills-Internship-tab">
        <div className="su-table su-table-responsive su-table-alternate">
<h2 className="faculty-title">Internship 2020-2022</h2>
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
</div>
      </div>
    </div>
  </div>
</div>
</div>


<div className="fullwidth-block">
<div className="container">
  <h2 className="section-title">Our partners</h2>

  <div className="partners">
              <marquee className="logosize" direction="left" scrolldelay="150" height="200px">
      <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/1.png" alt="" className="placement-logo"/></a>
                 <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/2.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/3.jpg" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/4.jpg" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/5.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/6.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/7.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/8.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/9.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/10.jpg" alt="" className="placement-logo"/></a>
                
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/11.png" alt="" className="placement-logo"/></a>
                 <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/12.jpg" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/13.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/14.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/15.jpg" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/16.jpg" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/17.jpg" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/18.jpg" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/19.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/20.png" alt="" className="placement-logo"/></a>
                <a href="#"><img src="https://mitra.ac.in/assets/site/dummy/campus/21.png" alt="" className="placement-logo"/></a>
                  </marquee>
  </div> 
</div> 
</div>



        <Contact/>
        <Footer/>

        
        </div>

    )
}


export default MechHome;