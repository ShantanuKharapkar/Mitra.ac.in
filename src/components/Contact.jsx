import React from "react";


import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"


const Contact = () =>{
    return(
        <div>
        
        <section className="">
        <div className="container">
            <h1 className="color-blue py-5 text-center name-1" id="contactUS">CONTACT <span className="color-orange">US</span></h1>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-2 ">
                    <p className="color-orange name-1 fs-3" id="collegeName" style={{ color: '#f7b400'}}> Prof Ram Meghe Institute of<br/> Technology & Research</p>

                    <p className="name-1 text-dark fs-4">Anjangaon Bari Road, <br/>Badnera-Amravati <br/> 444 701 (M.S.)
                        <br/>Phone
                        No.: 0721-2681246
                        Ext. -202 <br/>Fax: 0721-2681337 <br/>Email: <a href="mailto:principal@mitra.ac.in"
                            className="text-decoration-none text-dark">principal@mitra.ac.in</a>
                    </p>
                    <button type="button" className="btn btn-contact mt-5 px-4 py-2 text-light name-1 " style={{backgroundColor: '#00539F',
                        borderRadius: '10px',
                        fontSize: '19px',
                        fontWeight: '600'}}>CONTACT US</button>
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
        
        </div>
    )
}

export default Contact 