
import React from 'react'

// import css
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/aboutus.css"

// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
    return(

        <div>

        <Header/>
        <Navbar/>

        <section className="section-1 mt-0">
        <div className="container-fluid">
            <div className="row d-flex justify-content-end align-items-center">
                <div className="col-12">
                    <div className="card p-3" style={{opacity: 0.7}}>
                        <h1 className=" py-5 text-center">ABOUT<span className="color-orange"> INSTITUTE</span></h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="box-new mt-5">
    <div className="container ">
        <div className="p-xl-5 p-lg-5 p-md-2 p-sm-2 p-2 main-color">
            <p className="text-align-justify p-xl-5 p-lg-5 p-md-2 p-sm-2 p-2 text-white fw-bold" >
                The Vidarbha Youth Welfare Society’s Prof. Ram Meghe Institute of Technology & Research,
                Badnera-Amravati (Formerly well known as College of Engineering Badnera), is leading technological
                institute from central India. Established in the year 1983, the institute has a prestigious standing
                amongst the topmost Technical Institutes of Maharashtra. The Institute is approved by AICTE, New
                Delhi, Accredited by National Assessment and Accreditation Council (NAAC), Bangalore with Grade ‘A’
                & some of it’s UG Programmes are Accredited thrice by the National Board of Accreditation (NBA), New
                Delhi. The Institute is recognized by Directorate of Technical Education (DTE Mumbai), Govt. of
                Maharashtra and affiliated to Sant Gadge Baba Amravati University, Amravati and is offering UG, PG
                and Ph.D courses in Mechanical Engineering, Computer Science and Engineering, Information
                Technology, Electronics and Telecommunication Engineering and Civil Engineering along with PG
                courses like MBA and MCA.
                “Vidarbha Youth Welfare Society” was conceived to be the fountainhead of education for a rural area
                in the year 1965. The young, dynamics & forward-looking management of PRMIT&R is carrying forward
                the pioneering legacy of the visionary founders, who dare to dream and strived hard to achieve their
                seemingly impossible goals. The management team is comprised of highly qualified people and
                stalwarts from medical, academic, legal and business fraternity. Their varied skills-sets help them
                in coming up with vagaries of the technical education field.
                The team of the highly qualified and experienced academicians strives to achieve this credo under
                the proficient guidance of the Principal of the Institution. The team has an indomitable spirit to
                nurture and educate potential professionals and bring laurels to the institute.
                The Institute is providing an excellent Educational environment, infrastructure, amenities with
                value-oriented teaching; undoubtedly every student is molded well enough to face challenges of the
                modern world with the right attitude. This makes PRMIT& R the most preferred institute of Central
                India.
            </p>
        </div>

    </div>
</section>



<section>
<div className="container">
    <h1 className="color-blue py-5 text-center">ADMINISTRATIVE<span className="color-orange"> STRUCTURE</span></h1>

    <div>
        <img src="images/administrive-structure.png" alt="" className="w-100"/>
    </div>
</div>
</section>


<section className="">
<div className="container">
    <h1 className="color-blue py-5 text-center name-1">CONTACT <span className="color-orange">US</span></h1>
    <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2 ">
           {/*  <!-- <h1 className="name-1">CONTACT</h1> -->*/}
            <p className=" name-1 fs-3"> Prof Ram Meghe Institute of<br/> Technology & Research</p>

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

export default AboutPage;