import React from "react";

// import css
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const ElectroPhotoGallery = () =>{
    return(


        <div>
        
        <Header/>
        <Navbar/>


        <section className="background1">
        <div className="container-fluid">
          <div className="bg-light-color">
            <h1 className="text-center py-2 color-orange">Photo Gallery</h1>
          </div>
        </div>
      </section>

      <section className="our-executive py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/187"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/118.jpeg" />
                <div className="glcaption">
                  <h4>Guest Lecture on Innovation, Incubation Ecosystem.</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/177"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/11.jpg" />
                <div className="glcaption">
                  <h4>Industrial Tour 2022-23</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/176"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/112.jpeg" />
                <div className="glcaption">
                  <h4>Industry Visit for Entrepreneurship Awareness</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/175"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/19.jpeg" />
                <div className="glcaption">
                  <h4>Entrepreneurship Awareness Camp</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/174"
            >
              <div className="gallerybox">
                <img
                  src="https://mitra.ac.in/uploads/photo-gallery/IMG-20221011-WA0004.jpg"
                />
                <div className="glcaption">
                  <h4>Importance of ethical values in engineering</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/173"
            >
              <div className="gallerybox">
                <img
                  src="https://mitra.ac.in/uploads/photo-gallery/DSC00639.JPG"
                />
                <div className="glcaption">
                  <h4>Alumni Scholarship Awards</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/169"
            >
              <div className="gallerybox">
                <img
                  src="https://mitra.ac.in/uploads/photo-gallery/KPIT_placed_students.jpg"
                />
                <div className="glcaption">
                  <h4>Placements</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/48"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/P110.jpg" />
                <div className="glcaption">
                  <h4>STTP 2019</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/47"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/O115.jpg" />
                <div className="glcaption">
                  <h4>SGBAU Project Award-2019</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/46"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/N1.jpg" />
                <div className="glcaption">
                  <h4>Wall Magazine 2019</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/45"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/M16.jpg" />
                <div className="glcaption">
                  <h4>Guest Lecture by Mr. Millind Sohani</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/44"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/L1.jpg" />
                <div className="glcaption">
                  <h4>Android App Dev. Workshop Dec-17</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/43"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/K1.jpg" />
                <div className="glcaption">
                  <h4>Workshop on Python-Oct 2017</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/42"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/J17.jpg" />
                <div className="glcaption">
                  <h4>PCB Design Workshop 2018</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/41"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/I1.jpg" />
                <div className="glcaption">
                  <h4>Workshop 2016-17</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/40"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/H1.jpg" />
                <div className="glcaption">
                  <h4>STTP on DIP</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/39"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/G15.jpg" />
                <div className="glcaption">
                  <h4>Wall Magazine 2016-17</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/38"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/F1.jpg" />
                <div className="glcaption">
                  <h4>Wall Magazine</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/37"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/E17.jpg" />
                <div className="glcaption">
                  <h4>Alumni Meet 1990 Batch</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/36"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/D1.jpg" />
                <div className="glcaption">
                  <h4>Best ISF Award</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/35"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/C1.jpg" />
                <div className="glcaption">
                  <h4>Guest lectures/ Programmes Organized by Department</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/34"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/B1.jpg" />
                <div className="glcaption">
                  <h4>UTLP Wipro</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a
              href="https://mitra.ac.in/electronics-Telecomm/view-photo-gallery/33"
            >
              <div className="gallerybox">
                <img src="https://mitra.ac.in/uploads/photo-gallery/A1.jpg" />
                <div className="glcaption">
                  <h4>INDUSTRIAL TOUR</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>



        <Contact/>
        <Footer/>
        
        </div>


    )
}

export default ElectroPhotoGallery;