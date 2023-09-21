import React from "react";


//import CSS
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/academicCalendar.css"



// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const AcademicCalendar=()=>{
    return(

        <div>
        <Header/>
        <Navbar/>
        <section className="section-1 mt-0">
        <div className="container-fluid">
            <div className="row d-flex justify-content-end align-items-center">
                <div className="col-12">
                    <div className="card p-3" style={{opacity: .6}}>
                        <h1 className="color-blue py-5 text-center">Academic<span className="color-orange"> Calendar</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="container my-3">
    <h2 id="chairmans-message" className="section-title">Academic Session 2023-24</h2>

    <div className="row" xss="removed">

        <div className="col-sm-5">

            <img xss="removed" src="https://mitra.ac.in/uploads/main-media/Academic-Calendar-left-image.jpg"
                className="admissions w-100" />

        </div>
        <div className="col-sm-7">
            <div style={{textAlign: 'left'}}>
                <li><a target="_blank"
                       className="ankar" href="	https://mitra.ac.in/uploads/main-media-pdf/Acad_Calendar_Higher_classNamees(BE-ME-MCA)(Odd_Semester)(AY-2023-24).pdf	"><b><span
                                >Academic Calendar for Session - I 2023 (Odd Semester) B.E.
                                and M.E</span></b></a></li>
            </div>
            <div style={{textAlign: 'left'}}>
                <li><a target="_blank"
                       className="ankar" href="	https://mitra.ac.in/uploads/main-media-pdf/Acad_Calendar_III_Semester(MBA)(Odd_Semester)(AY-2023-24).pdf"><b><span
                                >Academic Calendar for Session - I 2023 (Odd Semester)
                                MBA</span></b></a></li>
            </div>
            <div style={{textAlign: 'left'}}>
                <li><a target="_blank"
                       className="ankar" href="		https://mitra.ac.in/uploads/main-media-pdf/Acad_Calendar_Higher_classNamees(BE-ME-MCA)(Odd_Semester)(AY-2023-24).pdf	"><b><span
                                >Academic Calendar for Session - I 2023 (Odd Semester)
                                MCA</span></b></a></li>
            </div>

        </div>



    </div>

 


</div>

        <Contact/>
        <Footer/>
        
        </div>

    )
}

export default AcademicCalendar;