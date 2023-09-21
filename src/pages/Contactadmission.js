import React from "react";

//import CSS
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/contactadmission.css"



// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Contactadmission = () =>{
    return(

        <div>
        <Header/>
        <Navbar/>
        <section className="section-1 mt-0">
        <div className="container-fluid">
            <div className="row d-flex justify-content-end align-items-center">
                <div className="col-12">
                    <div className="card p-3" style={{opacity: .6}}>
                        <h1 className="color-blue py-5 text-center">Contact for <span className="color-orange"> Admission</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="container my-3">
        <h2 id="chairmans-message" className="section-title color-blue">Contact For Admission</h2>

        <div><span xss="removed"><strong>
                    <h2 className="faculty-title color-blue" xss="removed">For F.Y B.Tech &amp; M.Tech Admission Related Information
                        &amp; Queries Contact:</h2>
                </strong></span></div>
        <div xss="removed">Prof. S. S. Dhok 9921559515<br/></div>
        <div xss="removed">Prof. A. G. Kadu 9975629500&nbsp;</div>
        <div xss="removed">Prof. T. R. Wankhade 9637371336&nbsp;</div>
        <div xss="removed">Prof. A. A. Jiwarkar 9028378505</div>
        <div className="mom_hr mom_hr_square" xss="removed"><span className="mom_inner_hr" xss="removed"><i
                    xss="removed"></i></span></div>
        <div>
            <div xss="removed">&nbsp;</div><span xss="removed">
                <strong>
                    <h2 className="faculty-title color-blue" xss="removed">For M.C.A Admission Related Information &amp; Queries
                        Contact:</h2>
                </strong></span>
        </div>
        <div xss="removed">Prof. (Mrs) R.R. Sherekar:9545400059</div>
        <div xss="removed">Prof. A. J. Pimprikar:&nbsp; 9975748876</div>
        <div className="mom_hr mom_hr_square" xss="removed"><span className="mom_inner_hr" xss="removed"><i
                    xss="removed"></i></span></div>
        <div>
            <div xss="removed"><br/></div><span xss="removed">

                <strong>
                    <h2 className="faculty-title color-blue" xss="removed">For M.B.A&nbsp;Admission&nbsp;Related Information &amp;
                        Queries Contact:</h2>
                </strong></span>
        </div>
        <div xss="removed">Prof. A. V. Deshmukh: 937033431</div>
        <div xss="removed">Prof. Yuvaraj Vaidya: 9371959775</div>
        <div xss="removed">Prof. S. B. Diwan : 9561289240</div>
        <div xss="removed">Prof. G D Pachghare:9096917014</div>
        <div className="mom_hr mom_hr_square" xss="removed"><span className="mom_inner_hr" xss="removed"><i
                    xss="removed"></i></span></div>
        <div xss="removed">
            <div>
                <div xss="removed"><br/></div><span xss="removed">

                    <strong>
                        <h2 className="faculty-title color-blue" xss="removed">College Address:</h2>
                    </strong></span>
            </div>
            <div xss="removed">Prof Ram Meghe Institute of Technology &amp; Research,</div>
            <div xss="removed">Anjangaon Bari Road,</div>
            <div xss="removed">Badnera-Amravati 444 701 (M.S.)</div>
            <div xss="removed">Phone No.: 0721-2681246, 0721-2681818</div>
        </div> 


    </div>

<Contact/>
<Footer/>
        
        </div>
    )
}

export default Contactadmission;