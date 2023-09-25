import React from "react";

// import css
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"


import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



const ElectroConsultancyResearch = () =>{
    return (

        <div>
        
        <Header/>
        <Navbar/>


        <section className="background1">
        <div className="container-fluid">
          <div className="bg-light-color">
            <h1 className="text-center py-2 color-orange">Consultancy Research</h1>
          </div>
        </div>
      </section>

      <main className="main-content">
      <div className="fullwidth-block greet-section" style={{background: "#f9f9f9"}}>
        <div className="container">
          <h2 className="section-title mt-3">Ph. D Cell</h2>
          <div>
            <div>
              <strong
                >The laboratories are recognized by SGB Amravati University for
                Ph.D. Research in Electronics &amp; Telecommunication
                Engineering disciplines.</strong
              >
            </div>
            <div className="mom_hr mom_hr_square" xss="removed">
              <span className="mom_inner_hr" xss="removed"
                ><i xss="removed"></i
              ></span>
            </div>
            <table className="table table-bordered table-striped" xss="removed">
              <tbody>
                <tr xss="removed">
                  <td width="467" xss="removed">
                    <strong
                      >Discipline &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;</strong
                    >
                  </td>
                  <td width="210" xss="removed">
                    <strong>Capacity of Research Lab</strong>
                  </td>
                </tr>
                <tr>
                  <td xss="removed">
                    <strong
                      >Electronics &amp; Telecommunication Engineering<br
                    /></strong>
                  </td>
                  <td width="210" xss="removed">
                    <strong>40 &nbsp;seats</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <div><strong>&nbsp;</strong></div>
            <div>
              <strong>Recognized Guides in&nbsp;</strong
              ><strong>Electronics &amp; Telecommunication Engineering</strong>
            </div>
            <div className="mom_hr mom_hr_square" xss="removed">
              <span className="mom_inner_hr" xss="removed"
                ><i xss="removed"></i
              ></span>
            </div>
            <div><strong>1. Dr. S. M. Deshmukh</strong></div>
            <div><strong>2. Dr. S. W. Mohod</strong></div>
            <div><strong>3. Dr. C. N. Deshmukh</strong></div>
            <hr xss="removed" />
            <div>
              <span xss="removed"><h2 className="faculty-title">Patents</h2></span>
            </div>
            <div className="clear" xss="removed"></div>
            <div className="su-table su-table-alternate" xss="removed">
              <table className="table table-bordered table-striped" xss="removed">
                <tbody>
                  <tr xss="removed">
                    <td width="38" xss="removed">Sr. No.</td>
                    <td width="149" xss="removed">Name Of Faculty</td>
                    <td width="294" xss="removed">Name Of Topic</td>
                    <td width="157" xss="removed">Patent/registration no.</td>
                  </tr>
                  <tr>
                    <td width="38" xss="removed">1.</td>
                    <td width="149" xss="removed">Dr. S. M. Deshmukh</td>
                    <td width="294" xss="removed">
                      A device for automation in Braille teaching
                    </td>
                    <td width="157" xss="removed">201621041885</td>
                  </tr>
                  <tr xss="removed">
                    <td width="38" xss="removed">2.</td>
                    <td width="149" xss="removed">Dr. D. T. Ingole</td>
                    <td width="294" xss="removed">
                      Zigbee based color transformation for blind in wireless
                      network.
                    </td>
                    <td width="157" xss="removed">201621017238</td>
                  </tr>
                  <tr>
                    <td width="38" xss="removed">3.</td>
                    <td width="149" xss="removed">Mrs. M. D. Ingole</td>
                    <td width="294" xss="removed">
                      Zigbee based color transformation for blind in wireless
                      network.
                    </td>
                    <td width="157" xss="removed">201621017238</td>
                  </tr>
                  <tr xss="removed">
                    <td width="38" xss="removed">4.</td>
                    <td width="149" xss="removed">Dr. C. N. Deshmukh</td>
                    <td width="294" xss="removed">
                      Smart Energy Metering System
                    </td>
                    <td width="157" xss="removed">201721029525</td>
                  </tr>
                  <tr>
                    <td width="38" xss="removed">5.</td>
                    <td width="149" xss="removed">Prof. L. A. Hundikar</td>
                    <td width="294" xss="removed">
                      Winged Bullet with locking mechanism
                    </td>
                    <td width="157" xss="removed">201621019862</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
    </main>


        <Contact/>
        <Footer/>

        
        </div>


    )
}

export default ElectroConsultancyResearch;