import React from "react";
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"




const Header = () => {
    return(

    <section>
        <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                    <a href="">
                        <img src="../images/logo1 - Copy 1.png" alt=""/>
                    </a>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                    <div className="maintext right-section">
                        <div className="vidarbhatext" style={{textAlign:'center'}}>
                            <p style={{marginBottom: 0}} className="name-1 text-dark pt-3 fw-bold">Vidarbha Youth Welfare
                                Society's</p>
                            <h3 className="name-1 fw-bold">Prof. Ram Meghe Institute of Technology and Research<br/> Badnera
                                -
                                Amravati 444701(MS)
                            </h3>
                            <p style={{marginBottom: 0}} className="name-1 text-dark fw-bold">(Formerly College of
                                Engineering, Badnera) - Estd. 1983</p>
                            <p style={{marginBottom: 0,color:'red'}} className="name-1 fs-4">
                                <strong> An Autonomous Institute</strong>
                            </p>
                            <p className="name-1 text-dark fw-bold">(Affiliated to Sant Gadge Baba Amravati University)</p>
                            { /*
                            <!--<p><span>Accredited by NAAC with 'A' Grade</span>
                            <span>Status of 'A' Grade Institute by Govt. of Maharashtra</span> <span>Accredited by NBA</span></p>-->

                         */}
                        </div>

                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                    <img src="images/logo2 - Copy 2.png" alt=""/>
                </div>
            </div>

        </div>

    </section>
    )
}


export default Header;