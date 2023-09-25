import React from "react";
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ItProgramme = () =>{
    return (

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
    <main className="main-content">

        <div className="fullwidth-block greet-section">
        <div className="container">
            <h2 className="section-title mt-3">B.E</h2>
            
            <div><h2 className="faculty-title"><div>Under Graduate:-&nbsp;<strong>Bachelor of Engineering&nbsp; in Information Technology</strong></div></h2></div><div className="clear" xss="removed"></div><table className="table table-bordered table-striped" xss="removed"><tbody><tr xss="removed"><th width="400" xss="removed">Program of Study</th><th width="400" xss="removed">Description</th></tr><tr><td rowspan="3" xss="removed">B.E. (Information Technology)</td><td xss="removed">Started with 60 seats in 2000-2001</td></tr><tr xss="removed"><td xss="removed">Intake increased to 90 in 2008-2009</td></tr><tr><td xss="removed">Intake increased to 120 in 2012-2013</td></tr></tbody></table>		      
        </div> 
    </div> 
        <div className="fullwidth-block greet-section" style={{background:'#f9f9f9'}}>
        <div className="container">
            <h2 className="section-title">M.E</h2>
            
            <div><h2 className="faculty-title"><div><strong>Post Graduate:- Master of Engineering in Information Technology</strong></div><div className="clear" xss="removed"></div></h2><table className="table table-bordered table-striped" xss="removed"><tbody><tr xss="removed"><th width="400" xss="removed">Program of Study</th><th width="400" xss="removed">Description</th></tr><tr><td rowspan="2" xss="removed">M.E. (Information Technology)</td><td xss="removed">Intake:- 9</td></tr><tr xss="removed"></tr></tbody></table></div>		       
        </div> 
    </div> 

</main>
</section>



        <Contact/>
        <Footer/>

        
        </div>

    )
}

export default ItProgramme;