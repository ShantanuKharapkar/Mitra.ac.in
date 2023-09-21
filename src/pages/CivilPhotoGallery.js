import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";




import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import '../css/civilphotogallery.css'
const CivilPhotoGallery = () =>{
    return(

        <div>
        
        <Header/>
        <Navbar/>


        <section className="background1 ">
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
                <a href="https://mitra.ac.in/civil/view-photo-gallery/1">
                   <div className="gallerybox">
                       <img src="../images/civil-photo-gallery/Tech-Know-Dox-1.jpg"/>	
                        <div className="glcaption">
                            <h4>Tech-Know Dox</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/15">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/SSBT-National-Conf-1.jpg"/>	
                   <div className="glcaption">
                            <h4>SSBT National Conf</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/14">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/Institute-of-Technologists-Japan-Visit-1.jpg"/>	
                        <div className="glcaption">
                            <h4>Institute of Technologists Japan Visit</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/13">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/Parents-Meet-1.jpg"/>	
                        <div className="glcaption">
                            <h4>Parents Meet</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/12">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/EEB-Seminar-1.jpg"/>	
                        <div className="glcaption">
                            <h4>EEB Seminar</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/11">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/JSAA-Workshop-1.jpg"/>	
                        <div className="glcaption">
                            <h4>JSAA Workshop</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/10">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/ACC-Competition-11.jpg"/>	
                        <div className="glcaption">
                            <h4>ACC Competition</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/9">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/E1.jpg"/>	
                        <div className="glcaption">
                            <h4>Techknow Expert</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/7">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/s13.jpg"/>	
                        <div className="glcaption">
                            <h4>Student Days</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/6">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/phoca_thumb_l_sitevst2-1.jpg"/>	
                        <div className="glcaption">
                            <h4>Site Visits</h4>
                        </div>
                    </div> 
                </a>	
            </div>

                                        
            
            <div className="col-sm-3 col-xs-6">
                <a href="https://mitra.ac.in/civil/view-photo-gallery/5">
                   <div className="gallerybox">
                   <img src="../images/civil-photo-gallery/aa13.jpg"/>	
                        <div className="glcaption">
                            <h4>Aashayen</h4>
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

export default CivilPhotoGallery;