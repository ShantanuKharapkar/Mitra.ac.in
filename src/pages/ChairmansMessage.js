import React from "react";

// import css

import "../css/index.css";
import "../css/bootstap.min.css";
import "../css/responsive.css";
import "../css/chairman.css"

// import components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ChairmansMessage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="page-title" >
  <div className="container">
  </div>
</section>
      <section className=" message-wrap ">
        <div className="container">
          <h2
            id="chairmans-message"
            className="section-title white text-center py-5"
          >
            Chairman's Message
          </h2>
          <div className="row">
            <div className="col-sm-8">
              <div className="faculty-dtl">
                <h2 className="faculty-title white">Dr. Nitin R. Dhande</h2>
                <p className="white">
                  <strong>Chairman</strong>
                </p>
                <p className="white">
                  <strong>Vidarbha Youth Welfare Society, Amravati</strong>
                </p>
                <p className="text text-justify white">
                  Vidarbha Youth Welfare Society was founded by the great
                  visionary of this region Prof Ram Meghe in the year 1965, with
                  a clear vision of making it a world className premier
                  organization for primary, secondary, higher, technical, and
                  professional education. With this vision the members of this
                  society dedicated themselves and continue so to establish and
                  promote high quality technical education and research
                  facilities.&nbsp;
                  <br />
                  Having an experience of managing more than sixty five
                  educational setups- including dental college, engineering
                  college, polytechnic, Pharmacy college and several art &amp;
                  science colleges- the society is committed to provide best of
                  the facilities at every educational premise, and Prof Ram
                  Meghe Institute of Technology &amp; research ( PRMIT &amp; R)
                  is no exception.
                  <br />
                  The college has an excellent academic ambience with a calm and
                  peaceful environment for teaching-learning process. We believe
                  in simplicity with quality. We do not make sky promises. We
                  understand ground realities. And with this understanding we
                  plan our activities.&nbsp;
                  <br />
                  In an educational set up we know and understand the
                  expectations and requirements of various stake holders: be it
                  parents, students, faculty, industry, society and the nation
                  as the ultimate stakeholder. Our endeavor is always to come up
                  to the expectations of all the stakeholders and we keep
                  striving for the same at PRMIT &amp; R as well.
                  <br />
                  As the president of Vidarbha Youth Welfare Society, I invite
                  you to explore this website and join the professional
                  community.
                </p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="imagebox " style={{ marginTop: "11px" }}>
                <img src="images/chairman.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quoteone prxsection">
        <div className="container white">
          <h2>
            "Leadership is the capacity to translate <br />
            vision into reality."
          </h2>
          <h4>- Dr. Nitin R. Dhande -</h4>
        </div>
      </section>

      <section className="">
        <div className="container">
          <h1 className="color-blue py-5 text-center name-1">
            CONTACT <span className="color-orange">US</span>
          </h1>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2 ">
              <p className="color-orange name-1 fs-3">
                {" "}
                Prof Ram Meghe Institute of
                <br /> Technology & Research
              </p>

              <p className="name-1 text-dark fs-4">
                Anjangaon Bari Road, <br />
                Badnera-Amravati <br /> 444 701 (M.S.)
                <br />
                Phone No.: 0721-2681246 Ext. -202 <br />
                Fax: 0721-2681337 <br />
                Email:{" "}
                <a
                  href="mailto:principal@mitra.ac.in"
                  className="text-decoration-none text-dark"
                >
                  principal@mitra.ac.in
                </a>
              </p>
              <button
                type="button"
                className="btn btn-contact mt-5 px-4 py-2 text-light name-1 "
              >
                CONTACT US
              </button>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.4311272891027!2d77.74960037499619!3d20.854666093735744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a54e170995cb%3A0xfed5bd6314ba3973!2sProf.Ram%20Meghe%20Institute%20of%20Technology%20%26%20Research!5e0!3m2!1sen!2sin!4v1690962760299!5m2!1sen!2sin"
                className="maps"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChairmansMessage;
