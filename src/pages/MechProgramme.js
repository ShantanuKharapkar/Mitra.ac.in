import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MechProgramme = () =>{
    return(


        <div>
        
        <Header/>
        <Navbar/>


        <section className="background1 ">
        <div className="container-fluid">
            <div className="bg-light-color">
                <h1 className="text-center py-2 color-orange">Our Courses</h1>
            </div>
        </div>
    </section>

    <section>
    <div className="container mt-4">
        <div className="container">
            <h2 className="section-title color-blue text-center">Under Graduate</h2>
            <h2 className="text-center faculty-title" xss="removed"><b>Under Graduate</b> – B. E. (Mechanical
                Engineering)</h2>
            <table className="table table-striped table-bordered" xss="removed">
                <tbody>
                    <tr>
                        <td xss="removed">U. G. Courses</td>
                        <td xss="removed" align="center">Sanctioned Intake</td>
                    </tr>
                    <tr>
                        <td xss="removed">B.E. Mechanical (Regular shift)</td>
                        <td xss="removed" align="center">120</td>
                    </tr>
                </tbody>
            </table>
            <h3 className="text-center" xss="removed"><br/></h3> 
        </div>
        <div className="fullwidth-block greet-section" style={{background:'#f9f9f9'}}>
            <div className="container">
                <h2 className="section-title color-blue text-center">Post Graduate</h2>
                
                <div>
                    <div className="course-box" xss="removed"> 
                        <h2 className="text-center faculty-title  color-blue text-center  my-2" xss="removed">CAD/CAM</h2>
                        <div>This course is conducted by the Department of Mechanical Engineering. The department
                            has its own computer lab with 100 PCs and high end graphics and analysis packages like,
                            CATIA, MasterCAM, Solid Works, AutoCAD and Ansys. The department has CNC turning and
                            milling trainers and Robot as the part of its Digital Fabrication Laboratory.</div>
                        <div></div>
                        <div>Computer Aided Engineering (CAE) with its two important components-CAD and CAM has
                            become the indispensable tools of the manufacturing industries. Extensive job
                            opportunities are available in this area. This course contains the advanced subjects
                            like CAD, CAM, Mechatronics, Finite Element Analysis and Robotics.</div>
                        <h4 xss="removed">Annual Intake</h4>
                        <div>Total annual intake for this full-time M. E. course in CAD / CAM as per the approval of
                            AICTE is 18.</div>
                    </div>
                    <div className="course-box" xss="removed">
                        <h2 className="text-center faculty-title  color-blue text-center my-2" xss="removed">Production Technology &amp; Management
                        </h2>
                        <div>This course is conducted by the Department of Mechanical Engineering. The department
                            has its own computerlab with 100 PCs and high end graphics and analysis packages like,
                            CATIA, MasterCAM, Solid Works, AutoCADand Ansys. The department has CNC turning and
                            milling trainers and Robot as the part of its Digital Fabrication Laboratory.</div>
                        <h4 xss="removed">Annual Intake</h4>
                        <div>Total annual intake for this Part-time M. E. course in Production Technology &amp;
                            Management as per the approval of AICTE is 18.</div>
                    </div>
                    <div className="course-box" xss="removed">
                        <h2 className="text-center faculty-title  color-blue text-center  my-2" xss="removed">Thermal Engineering</h2>
                        <div>This course is conducted by the Department of Mechanical Engineering. The department
                            has its own computer lab with 100 PCs and high end graphics and analysis packages like,
                            CATIA, MasterCAM, Solid Works, AutoCAD and Ansys. The department has CNC turning and
                            milling trainers and Robot as the part of its Digital Fabrication Laboratory.</div>
                        <h4 xss="removed">Annual Intake</h4>
                        <div>Total annual intake for this full-time M. E. course in Thermal Engineering as per the
                            approval of AICTE is 24.</div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</section>



        <Contact/>
        <Footer/>
        
        </div>

    )
}

export default MechProgramme