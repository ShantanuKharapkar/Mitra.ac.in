import React from "react";
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/ourmentor.css"

// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Mentor = () => {
    return(
        <div>
        <Header/>
        <Navbar/>


        <section className="section-1 mt-0">
        <div className="container-fluid">
            <div className="row d-flex justify-content-end align-items-center">
                <div className="col-12">
                    <div className="card p-3" style={{opacity: .6}}>
                        <h1 className="color-blue py-5 text-center"> OUR<span className="color-orange"> MENTOR</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="team" className="team_member section-padding mentor-wrap">
    <div className="container">
        <div className=" text-center text-white py-5">
            <h1 className="section-title">Our Mentors</h1>
            <p className="faculty-title white fs-4 fw-bold pt-3">Our deep sence of gratitude to the founders of the
                society</p>
        </div>
        <div className="row text-center d-flex justify-content-center">
            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-1.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title">Late. Prof. Ram K Meghe </h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-2.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title"> Late. Prof. Baburao D. Hiwase</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-3.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title"> Late. Prof. Dinkarrao K. Deshmukh</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-4.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title">Late. Surendra B. Deshmukh</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-5.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title">Late. Dr.
                            Murlidhar R. Deshmukh</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row text-center d-flex justify-content-center">

            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-6.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title"> Late. Shri. Pundalikrao Gohad</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-7.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title">Late. Shri. Vasantrao N. Choudhary</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-8.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title"> Late. Shri. Shashikumar R. Deshmukh</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>
            
            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-9.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title"> Late. Shri. Ramadas Alias Nanasaheb P. Dhande</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="row text-center d-flex justify-content-center">

            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="text-center white">

                        <h3 className=" fs-2 py-5 fst-italic">Our Deep Sense Of Gratitude To The Founders Member Of The
                            Society</h3>
                    </div>

                </div>
            </div>
        </div>
        <div className=" text-white">

            <p className="faculty-title white fs-1 pt-3">Torchbearer of the society</p>
        </div>
        <div className="row text-center">

            <div className="col-md-2 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                data-wow-offset="0">
                <div className="our-team">
                    <div className="team_img">
                        <img src="images/member/member-10.png" alt="team-image"/>

                    </div>
                    <div className="team-content">
                        <h3 className="title"> Shri Shankar Rao D. Kale</h3>
                        <span className="post color-blue">.</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


         <section className="">
        <div className="container">
            <h1 className="color-blue py-5 text-center name-1">CONTACT <span className="color-orange">US</span></h1>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2 ">
                    <p className="color-orange name-1 fs-3"> Prof Ram Meghe Institute of<br/> Technology & Research</p>

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

export default Mentor;
