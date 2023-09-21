import React from "react";
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"

import { Link } from "react-router-dom";

const Navbar = () =>{
    return(




  <section className="main-color">
        <div className="container">
            <nav className="navbar navbar-expand-lg color-blue ">
                <div className="container-fluid">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav navlist ">
                            <li className="nav-item">
                                <Link className="nav-link active text-light font-500 px-1.2 name-1" aria-current="page"
                                    to="/" >Home</Link>
                            </li>
                            <li className="nav-item dropdown has-megamenu">
                                <Link  className="nav-link px-2 text-light font-500 name-1"  to="#" data-bs-toggle="dropdown">
                                    About Us </Link>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link to="#"
                                                    className=" text-decoration-none color-orange fs-5">About Us</Link></h6>
                                            <p className="mb-1"><Link to="/ourMentor"
                                                    className="text-light text-decoration-none">Our
                                                    Mentors</Link></p>
                                            <p className="mb-1"><Link to="/executivesMember"
                                                    className="text-light text-decoration-none">Executive
                                                    Members</Link></p>
                                            <p className="mb-1"><Link to="/about"
                                                    className="text-light text-decoration-none">About
                                                    Institute</Link></p>
                                            <p className="mb-1"><Link to="/chairmans"
                                                    className="text-light text-decoration-none">Chairman’s Message</Link></p>
                                            <p className="mb-1"><Link to="/principalsMessage"
                                                    className="text-light text-decoration-none">Principal’s Message</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                          className="text-light text-decoration-none">Administrative Structure</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Admissions</Link></h6>
                                            <p className="mb-1"><Link to="/coursesofferd"
                                                    className="text-light text-decoration-none">Courses
                                                    Offered</Link></p>
                                            <p className="mb-1"><Link to="/btech"
                                                    className="text-light text-decoration-none">B.Tech
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link to="/mtech"
                                                    className="text-light text-decoration-none">M.Tech
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link to="/phd"
                                                    className="text-light text-decoration-none">Ph.D
                                                    ADMISSION</Link></p>
                                                    <p className="mb-1"><Link  to="/mca"
                                                    className="text-light text-decoration-none">MCA
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link  to="/mba"
                                                    className="text-light text-decoration-none">MBA
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link to="/contactadmission"
                                                    className="text-light text-decoration-none">Contact
                                                    for Admission</Link></p>
                                            <p className="mb-1"><Link   to="/academicCalendar"
                                                    className="text-light text-decoration-none">Academic
                                                    Calendar</Link></p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Forum</Link></h6>
                                            <p className="mb-1"><Link   to="/forumIeee"
                                                    className="text-light text-decoration-none">IEEE</Link></p>
                                            <p className="mb-1"><Link   to="/csi"
                                                    className="text-light text-decoration-none">CSI</Link></p>
                                            <p className="mb-1"><Link   to="/iete"
                                                    className="text-light text-decoration-none">IETE</Link></p>
                                            <p className="mb-1"><Link   to="/mesa"
                                                    className="text-light text-decoration-none">MESA</Link></p>
                                            <p className="mb-1"><Link   to="/cesa"
                                                    className="text-light text-decoration-none">CESA</Link></p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Gallery</Link></h6>
                                            <p className="mb-1"><Link   to="/virtualGallery"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="virtual ka vedio gallery.html"
                                                    className="text-light text-decoration-none">Video
                                                    Gallery</Link></p>
                                        </div>
                                    </div>
                                    </div>  
                            </li>
                            <li className="nav-item dropdown has-megamenu">
                            <Link  className="nav-link px-2 text-light font-500 name-1"  to="#" data-bs-toggle="dropdown">
                                Admission </Link>
                            <div className="dropdown-menu megamenu" role="menu">
                                <div className="row">
                                    <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                        <h6 className="text-light border-bottom"><Link to="#"
                                                className=" text-decoration-none color-orange fs-5">About Us</Link></h6>
                                        <p className="mb-1"><Link to="/ourMentor"
                                                className="text-light text-decoration-none">Our
                                                Mentors</Link></p>
                                        <p className="mb-1"><Link to="/executivesMember"
                                                className="text-light text-decoration-none">Executive
                                                Members</Link></p>
                                        <p className="mb-1"><Link to="/about"
                                                className="text-light text-decoration-none">About
                                                Institute</Link></p>
                                        <p className="mb-1"><Link to="/chairmans"
                                                className="text-light text-decoration-none">Chairman’s Message</Link></p>
                                        <p className="mb-1"><Link to="/principalsMessage"
                                                className="text-light text-decoration-none">Principal’s Message</Link></p>
                                        <p className="mb-1"><Link   to=""
                                                      className="text-light text-decoration-none">Administrative Structure</Link>
                                        </p>
                                    </div>
                                    <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                        <h6 className="text-light border-bottom"><Link   to=""
                                                className=" text-decoration-none fs-5 color-orange">Admissions</Link></h6>
                                        <p className="mb-1"><Link to="/coursesofferd"
                                                className="text-light text-decoration-none">Courses
                                                Offered</Link></p>
                                        <p className="mb-1"><Link to="/btech"
                                                className="text-light text-decoration-none">B.Tech
                                                ADMISSION</Link></p>
                                        <p className="mb-1"><Link to="/mtech"
                                                className="text-light text-decoration-none">M.Tech
                                                ADMISSION</Link></p>
                                        <p className="mb-1"><Link to="/phd"
                                                className="text-light text-decoration-none">Ph.D
                                                ADMISSION</Link></p>
                                                <p className="mb-1"><Link  to="/mca"
                                                className="text-light text-decoration-none">MCA
                                                ADMISSION</Link></p>
                                        <p className="mb-1"><Link  to="/mba"
                                                className="text-light text-decoration-none">MBA
                                                ADMISSION</Link></p>
                                        <p className="mb-1"><Link to="/contactadmission"
                                                className="text-light text-decoration-none">Contact
                                                for Admission</Link></p>
                                        <p className="mb-1"><Link   to="/academicCalendar"
                                                className="text-light text-decoration-none">Academic
                                                Calendar</Link></p>
                                    </div>
                                    <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                        <h6 className="text-light border-bottom"><Link   to=""
                                                className=" text-decoration-none fs-5 color-orange">Forum</Link></h6>
                                        <p className="mb-1"><Link   to="/forumIeee"
                                                className="text-light text-decoration-none">IEEE</Link></p>
                                        <p className="mb-1"><Link   to="/csi"
                                                className="text-light text-decoration-none">CSI</Link></p>
                                        <p className="mb-1"><Link   to="/iete"
                                                className="text-light text-decoration-none">IETE</Link></p>
                                        <p className="mb-1"><Link   to="/mesa"
                                                className="text-light text-decoration-none">MESA</Link></p>
                                        <p className="mb-1"><Link   to="/cesa"
                                                className="text-light text-decoration-none">CESA</Link></p>
                                    </div>
                                    <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                        <h6 className="text-light border-bottom"><Link   to=""
                                                className=" text-decoration-none fs-5 color-orange">Gallery</Link></h6>
                                        <p className="mb-1"><Link   to="/virtualGallery"
                                                className="text-light text-decoration-none">Photo
                                                Gallery</Link></p>
                                        <p className="mb-1"><Link   to="virtual ka vedio gallery.html"
                                                className="text-light text-decoration-none">Video
                                                Gallery</Link></p>
                                    </div>
                                </div>
                                </div>  
                        </li>

                            <li className="nav-item dropdown has-megamenu">
                                <Link  className="nav-link px-2 text-light font-500 name-1"  to="#" data-bs-toggle="dropdown">
                                    Department </Link>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="/civilMainHome"
                                                    className=" text-decoration-none color-orange fs-5">CIVIL</Link></h6>
                                            <p className="mb-1"><Link   to="/civilacademicexcellence"
                                                    className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="/civilEvents"
                                                    className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to="/civilFaculty"
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to="/civilProgramme"
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to="/civilLaboratories"
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to="/civilConsultancyResearch"
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="/civilPhotoGallery"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="/civilContactUs"
                                                    className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="main-mech.html"
                                                    className=" text-decoration-none fs-5 color-orange">MECHANICAL</Link></h6>
                                            <p className="mb-1"><Link   to="/mechAcadmicExcellence"
                                                    className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="/mechEvents"
                                                    className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to="/mechFaculty"
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to="/mechProgramme"
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to="/mechLaboratories"
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to="/mechConsultancyResearch"
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="/mechPhotoGallery"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="/mechContact"
                                                    className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="main-Computer-Science .html"
                                                    className=" text-decoration-none fs-5 color-orange">Computer Science
                                                    & Engineering</Link></h6>
                                            <p className="mb-1"><Link   to="/cseAcadmicExcellence"
                                                    className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="/cseEvents"
                                                    className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to="/cseFaculty"
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to="/cseProgramme"
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to="/cseLaboratories"
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to="/cseConsultancyResearch"
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="/csePhotoGallery"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="/cseContact"
                                                    className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="main-it.html"
                                                    className=" text-decoration-none fs-5 color-orange">Information
                                                    Technology</Link></h6>
                                            <p className="mb-1"><Link   to="/itAcadmicExcellence"
                                                    className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="it-events.html"
                                                    className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to="it-faculty.html"
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to="it-courses.html"
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to="it-laboratories.html"
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to="it-consultancy-research.html"
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="it-photo-gallery.html"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="it-contact-us.html"
                                                    className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                    </div> 
                                       { /**      <!-- dropdown-mega-menu.// -->                            */}    
                                    
                                    
                                    
                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="main-electronics.html"
                                                    className=" text-decoration-none color-orange fs-5">Electronics &amp;
                                                    Telecom</Link></h6>
                                            <p className="mb-1"><Link   to="electronics-academic-excellence.html"
                                                    className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="electronics-events.html"
                                                    className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to="electronics-faculty.html"
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to="electronics-courses.html"
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to="electronics-laboratories.html"
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to="electronics-consultancy-research.html"
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="electronics-photo-gallery.html"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="electronics-contact-us.html"
                                                    className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">AI &amp; Data
                                                    Science</Link></h6>
                                            <p className="mb-1"><Link   to="" className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="" className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="" className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="" className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Industrial Internet
                                                    of Things</Link></h6>
                                            <p className="mb-1"><Link   to="" className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="" className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="" className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="" className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Master In Computer
                                                    Application</Link></h6>
                                            <p className="mb-1"><Link   to="mca-academic-excellence.html"
                                                    className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="mca-events.html"
                                                    className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to="mca-faculty.html"
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to="mca-courses.html"
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to="mca-laboratories.html"
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to="mca-consultancy-research.html"
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="mca-photo-gallery.html"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="mca-contact-us.html"
                                                    className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="aboutus.html"
                                                    className=" text-decoration-none color-orange fs-5">Master of Business
                                                    Administration</Link></h6>
                                            <p className="mb-1"><Link   to="mba-academic-excellence.html"
                                                    className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="mba-events.html"
                                                    className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to="mba-faculty.html"
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to="mba-courses.html"
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to="mba-laboratories.html"
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to="mba-consultancy-research.html"
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="mba-photo-gallery.html"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="mba-contact-us.html"
                                                    className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">First Year
                                                    Engineering</Link></h6>
                                            <p className="mb-1"><Link   to="finalyear-academic-excellence.html"
                                                    className="text-light text-decoration-none">Academic
                                                    Excellence</Link></p>
                                            <p className="mb-1"><Link   to="finalyear-events.html"
                                                    className="text-light text-decoration-none">Events &
                                                    Activities</Link></p>
                                            <p className="mb-1"><Link   to="finalyear-faculty.html"
                                                    className="text-light text-decoration-none">Faculty</Link></p>
                                            <p className="mb-1"><Link   to="finalyear-courses.html"
                                                    className="text-light text-decoration-none">Programs</Link></p>
                                            <p className="mb-1"><Link   to="finalyear-laboratories.html"
                                                    className="text-light text-decoration-none">Laborataries</Link></p>
                                            <p className="mb-1"><Link   to="finalyear-consultancy-research.html"
                                                    className="text-light text-decoration-none">Consultancy & Research</Link></p>
                                            <p className="mb-1"><Link   to="finalyear-photo-gallery.html"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="finalyear-contact-us.html"
                                                    className="text-light text-decoration-none">Contact
                                                    Us</Link>
                                            </p>
                                        </div>

                                    </div>
                                    </div>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link px-2 text-light font-500 mx-2 name-1"
                                     to="training&placement.html">Training & Placement</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link px-2 text-light font-500 mx-2 name-1"  to="library.html">Library</Link>
                            </li>
                            <li className="nav-item dropdown has-megamenu">
                                <Link  className="nav-link px-2 text-light font-500 name-1"  to="#" data-bs-toggle="dropdown">
                                    Forum </Link>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="aboutus.html"
                                                    className=" text-decoration-none color-orange fs-5">About Us</Link></h6>
                                            <p className="mb-1"><Link   to="mentor.html"
                                                    className="text-light text-decoration-none">Our
                                                    Mentors</Link></p>
                                            <p className="mb-1"><Link   to="executive.html"
                                                    className="text-light text-decoration-none">Executive
                                                    Members</Link></p>
                                            <p className="mb-1"><Link   to="aboutus.html"
                                                    className="text-light text-decoration-none">About
                                                    Institute</Link></p>
                                            <p className="mb-1"><Link   to="chairman.html"
                                                    className="text-light text-decoration-none">Chairman’s Message</Link></p>
                                            <p className="mb-1"><Link   to="principle.html"
                                                    className="text-light text-decoration-none">Principal’s Message</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Administrative Structure</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Admissions</Link></h6>
                                            <p className="mb-1"><Link   to="Courses.html"
                                                    className="text-light text-decoration-none">Courses
                                                    Offered</Link></p>
                                            <p className="mb-1"><Link   to="btech.html"
                                                    className="text-light text-decoration-none">B.Tech
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="mtech.html"
                                                    className="text-light text-decoration-none">M.Tech
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="phd.html"
                                                    className="text-light text-decoration-none">Ph.D
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="mba.html"
                                                    className="text-light text-decoration-none">MBA
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="contact.html"
                                                    className="text-light text-decoration-none">Contact
                                                    for Admission</Link></p>
                                            <p className="mb-1"><Link   to="Academic.html"
                                                    className="text-light text-decoration-none">Academic
                                                    Calendar</Link></p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Forum</Link></h6>
                                            <p className="mb-1"><Link   to="forum-IEEE.html"
                                                    className="text-light text-decoration-none">IEEE</Link></p>
                                            <p className="mb-1"><Link   to="forum-csi.html"
                                                    className="text-light text-decoration-none">CSI</Link></p>
                                            <p className="mb-1"><Link   to="forum-IETE.html"
                                                    className="text-light text-decoration-none">IETE</Link></p>
                                            <p className="mb-1"><Link   to="forum-MESA.html"
                                                    className="text-light text-decoration-none">MESA</Link></p>
                                            <p className="mb-1"><Link   to="forum-CESA.html"
                                                    className="text-light text-decoration-none">CESA</Link></p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Gallery</Link></h6>
                                            <p className="mb-1"><Link   to="virtul ka photo gallery.html"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="virtual ka vedio gallery.html"
                                                    className="text-light text-decoration-none">Video
                                                    Gallery</Link></p>
                                        </div>
                                    </div>
                                    </div>
                                      { /**                         <!-- dropdown-mega-menu.// -->          */}     
                            </li>
                            <li className="nav-item dropdown has-megamenu">
                                <Link  className="nav-link px-2 text-light font-500 name-1"  to="#" data-bs-toggle="dropdown">
                                    Naac </Link>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none color-orange fs-5">AQAR_AY2017-18</Link>
                                            </h6>
                                            <p className="mb-1"><Link   to="AQAR17-18.html"
                                                    className="text-light text-decoration-none">AQAR_AY2017-18</Link></p>

                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">AQAR_AY2018-19</Link>
                                            </h6>
                                            <p className="mb-1"><Link   to="AQAR18-19.html"
                                                    className="text-light text-decoration-none">AQAR_AY2018-19</Link></p>

                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">AQAR_AY2019-20</Link>
                                            </h6>
                                            <p className="mb-1"><Link   to="AQAR19-20.html"
                                                    className="text-light text-decoration-none">AQAR_AY2019-20</Link></p>

                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">AQAR_AY2020-21</Link>
                                            </h6>
                                            <p className="mb-1"><Link   to="AQAR20-21.html"
                                                    className="text-light text-decoration-none">AQAR_AY2020-21</Link></p>

                                        </div>
                                    </div> 
                                    { /**      <!-- dropdown-mega-menu.// -->                             */}   
                                   
                                                                       

                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none color-orange fs-5">AQAR_AY2021-22</Link>
                                            </h6>
                                            <p className="mb-1"><Link   to="AQAR21-22.html"
                                                    className="text-light text-decoration-none">AQAR_AY2021-22</Link></p>

                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Self Study Report
                                                    (Cycle-II)</Link></h6>
                                            <p className="mb-1"><Link   to="SSR.HTML"
                                                    className="text-light text-decoration-none">SSR</Link></p>
                                            <p className="mb-1"><Link   to="DVV_clarification.html"
                                                    className="text-light text-decoration-none">DVV CLARIFICATION</Link></p>
                                            <p className="mb-1"><Link   to="PREQUALIFIED_SSR.html"
                                                    className="text-light text-decoration-none">PREQUALIFIED_SSR</Link></p>

                                        </div>

                                    </div>
                                    </div>
                            </li>
                            <li className="nav-item dropdown has-megamenu">
                                <Link  className="nav-link px-2 text-light font-500 name-1"  to="#" data-bs-toggle="dropdown">
                                    Virtual Gallery </Link>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="aboutus.html"
                                                    className=" text-decoration-none color-orange fs-5">About Us</Link></h6>
                                            <p className="mb-1"><Link   to="mentor.html"
                                                    className="text-light text-decoration-none">Our
                                                    Mentors</Link></p>
                                            <p className="mb-1"><Link   to="executive.html"
                                                    className="text-light text-decoration-none">Executive
                                                    Members</Link></p>
                                            <p className="mb-1"><Link   to="aboutus.html"
                                                    className="text-light text-decoration-none">About
                                                    Institute</Link></p>
                                            <p className="mb-1"><Link   to="chairman.html"
                                                    className="text-light text-decoration-none">Chairman’s Message</Link></p>
                                            <p className="mb-1"><Link   to="principle.html"
                                                    className="text-light text-decoration-none">Principal’s Message</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Administrative Structure</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Admissions</Link></h6>
                                            <p className="mb-1"><Link   to="Courses.html"
                                                    className="text-light text-decoration-none">Courses
                                                    Offered</Link></p>
                                            <p className="mb-1"><Link   to="btech.html"
                                                    className="text-light text-decoration-none">B.Tech
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="mtech.html"
                                                    className="text-light text-decoration-none">M.Tech
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="phd.html"
                                                    className="text-light text-decoration-none">Ph.D
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="mba.html"
                                                    className="text-light text-decoration-none">MBA
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="contact.html"
                                                    className="text-light text-decoration-none">Contact
                                                    for Admission</Link></p>
                                            <p className="mb-1"><Link   to="Academic.html"
                                                    className="text-light text-decoration-none">Academic
                                                    Calendar</Link></p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Forum</Link></h6>
                                            <p className="mb-1"><Link   to="forum-IEEE.html"
                                                    className="text-light text-decoration-none">IEEE</Link></p>
                                            <p className="mb-1"><Link   to="forum-csi.html"
                                                    className="text-light text-decoration-none">CSI</Link></p>
                                            <p className="mb-1"><Link   to="forum-IETE.html"
                                                    className="text-light text-decoration-none">IETE</Link></p>
                                            <p className="mb-1"><Link   to="forum-MESA.html"
                                                    className="text-light text-decoration-none">MESA</Link></p>
                                            <p className="mb-1"><Link   to="forum-CESA.html"
                                                    className="text-light text-decoration-none">CESA</Link></p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Gallery</Link></h6>
                                            <p className="mb-1"><Link   to="virtul ka photo gallery.html"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="virtual ka vedio gallery.html"
                                                    className="text-light text-decoration-none">Video
                                                    Gallery</Link></p>
                                        </div>
                                    </div> 
                                    </div>
                                    
{ /**                                   <!-- dropdown-mega-menu.// -->

 */}                            </li>

                            <li className="nav-item dropdown has-megamenu">
                                <Link  className="nav-link px-2 text-light font-500 name-1"  to="#" data-bs-toggle="dropdown">
                                    Contact Us </Link>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row">
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to="aboutus.html"
                                                    className=" text-decoration-none color-orange fs-5">About Us</Link></h6>
                                            <p className="mb-1"><Link   to="mentor.html"
                                                    className="text-light text-decoration-none">Our
                                                    Mentors</Link></p>
                                            <p className="mb-1"><Link   to="executive.html"
                                                    className="text-light text-decoration-none">Executive
                                                    Members</Link></p>
                                            <p className="mb-1"><Link   to="aboutus.html"
                                                    className="text-light text-decoration-none">About
                                                    Institute</Link></p>
                                            <p className="mb-1"><Link   to="chairman.html"
                                                    className="text-light text-decoration-none">Chairman’s Message</Link></p>
                                            <p className="mb-1"><Link   to="principle.html"
                                                    className="text-light text-decoration-none">Principal’s Message</Link></p>
                                            <p className="mb-1"><Link   to=""
                                                    className="text-light text-decoration-none">Administrative Structure</Link>
                                            </p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Admissions</Link></h6>
                                            <p className="mb-1"><Link   to="Courses.html"
                                                    className="text-light text-decoration-none">Courses
                                                    Offered</Link></p>
                                            <p className="mb-1"><Link   to="btech.html"
                                                    className="text-light text-decoration-none">B.Tech
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="mtech.html"
                                                    className="text-light text-decoration-none">M.Tech
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="phd.html"
                                                    className="text-light text-decoration-none">Ph.D
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="mba.html"
                                                    className="text-light text-decoration-none">MBA
                                                    ADMISSION</Link></p>
                                            <p className="mb-1"><Link   to="contact.html"
                                                    className="text-light text-decoration-none">Contact
                                                    for Admission</Link></p>
                                            <p className="mb-1"><Link   to="Academic.html"
                                                    className="text-light text-decoration-none">Academic
                                                    Calendar</Link></p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Forum</Link></h6>
                                            <p className="mb-1"><Link   to="forum-IEEE.html"
                                                    className="text-light text-decoration-none">IEEE</Link></p>
                                            <p className="mb-1"><Link   to="forum-csi.html"
                                                    className="text-light text-decoration-none">CSI</Link></p>
                                            <p className="mb-1"><Link   to="forum-IETE.html"
                                                    className="text-light text-decoration-none">IETE</Link></p>
                                            <p className="mb-1"><Link   to="forum-MESA.html"
                                                    className="text-light text-decoration-none">MESA</Link></p>
                                            <p className="mb-1"><Link   to="forum-CESA.html"
                                                    className="text-light text-decoration-none">CESA</Link></p>
                                        </div>
                                        <div className="col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12 mb-2">
                                            <h6 className="text-light border-bottom"><Link   to=""
                                                    className=" text-decoration-none fs-5 color-orange">Gallery</Link></h6>
                                            <p className="mb-1"><Link   to="virtul ka photo gallery.html"
                                                    className="text-light text-decoration-none">Photo
                                                    Gallery</Link></p>
                                            <p className="mb-1"><Link   to="virtual ka vedio gallery.html"
                                                    className="text-light text-decoration-none">Video
                                                    Gallery</Link></p>
                                        </div>
                                    </div> 
                                    </div>
                                    
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>




    )
}

export default Navbar