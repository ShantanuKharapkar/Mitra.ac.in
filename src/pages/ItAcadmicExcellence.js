import React from "react";

//css
import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/itAcademicExecellence.css"

//components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const ItAcadmicExcellence = () =>{
    return(
        <div>
        
        <Header/>
        <Navbar/>

        <section className="background1 ">
    <div className="container-fluid">
      <div className="bg-light-color">
        <h1 className="text-center py-2 color-orange">Academic Excellence</h1>
      </div>
    </div>
  </section>

  <div className="container mt-4">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-start">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link nav-link-1 active" id="pills-home-tab" data-bs-toggle="pill"
              data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              Students Academic Achievements</button>
          </li>
          {/**
          <!-- <li className="nav-item" role="presentation">
            <button className="nav-link nav-link-1" id="pills-profile-tab" data-bs-toggle="pill"
              data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
              aria-selected="false">

              Extra-Curricular Activities Achievements</button>
          </li> -->

           */}

        </ul>
      </div>

    </div>

    <div className="row">
      <div className="col-12">
        <div className="tab-content" id="pills-tabContent">
      

<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <div><h2 className="faculty-title">University Toppers List of Information Technology Department</h2><div className="su-table su-table-alternate" xss="removed"><table className="table table-bordered table-striped" xss="removed">
<tbody><tr xss="removed">
<td width="63" xss="removed">
<div><b><span xss="removed">Sr.No.<o></o></span></b></div>
</td>
<td width="116" xss="removed">
<div><b><span xss="removed">Year<o></o></span></b></div>
</td>
<td width="217" xss="removed">
<div><b><span xss="removed">Name of student<o></o></span></b></div>
</td>
<td width="123" xss="removed">
<div><b><span xss="removed">CGPA / Marks Obtained<o></o></span></b></div>
</td>
<td width="103" xss="removed">
<div><b><span xss="removed">Rank<o></o></span></b></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">1<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Aboli D. Lande<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.97<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">2<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">2<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Anuradha V.
Wankhade<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.97<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">2<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Aditi M. Murhekar<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.95<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Saloni L. Kariya<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.95<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">5<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Himanshu B. Karma<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.95<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">6<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Mansi S. Tikhile<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.95<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">7<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Aniket A. Gedam <o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.93<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Megha R. Bhagtani<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.93<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Anjali V. Kawalkar<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.93<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Mohd. Moin Toply<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.93<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">11<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Vaishnavi V. Lande<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.91<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">5<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">12<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Sanjog D.Banthiya<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.89<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">6<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">13<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2021<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Parineeta R. Uke<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.85<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">14<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2020<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Mitali R. Jaiswal<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.41<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">5<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">15<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2020<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Pranita G. Tade<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.26<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">16<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2020<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Rahul P. Keswani<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.19<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">17<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2019<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Gauri D.Ingole<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.43<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">18<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2018<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Shraddha Vivek
Mahadik<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.71<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">19<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2018<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Mr. Wrushabh Satish
Jogi<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.69<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">20<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2018<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Neha Subhash
Samudre<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.59<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">5<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">21<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2018<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Beena Raju
Nandanwar<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.45<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">6<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">22<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2018<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Mr. Roshan Vinod
Pawar<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.35<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">7<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">23<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2018<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Bhavana
Sambhashiv Junghari<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.34<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">24<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2018<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Sakshi Swapana
Patankar<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.24<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">25<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2018<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Gauri Ingole<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.5<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">26<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2017<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Komal Ramesh
Bhalgat<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.8<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="63" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">27<o></o></span></div>
</td>
<td width="116" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer - 2017<o></o></span></div>
</td>
<td width="217" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ku. Shraddha Ashok
Waraikar<o></o></span></div>
</td>
<td width="123" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.63<o></o></span></div>
</td>
<td width="103" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9<o></o></span></div>
</td>
</tr>
</tbody></table><table className="table table-bordered table-striped" xss="removed">
</table></div></div>  


<h2 className="faculty-title">Result Analysis</h2>   
<div className="row">

<div className="col-sm-6">
<h2 className="faculty-title">Winter-2022</h2>
<div className="imagebox">
<figure><img src="http://mitra.ac.in/uploads/media/winter2022.jpg"/></figure>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-6">
<h2 className="faculty-title">Winter-2021</h2>
<div className="imagebox">
<figure><img src="http://mitra.ac.in/uploads/media/winter-2021.jpg"/></figure>
</div>
</div>


<div className="col-sm-6">
<h2 className="faculty-title">Summer-2022</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/s-2022.jpg"/></figure>
</div>
</div>
</div>

<div className="row">
<div className="col-sm-6">
<h2 className="faculty-title">Winter 2020</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/winter-2020.jpg"/></figure>
</div>
</div>


<div className="col-sm-6">
<h2 className="faculty-title">Summer-2021</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/summer-2021.jpg"/></figure>
</div>
</div>

</div>

<div className="row">
<div className="col-sm-6">
<h2 className="faculty-title">Winter 2019</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/winter-2019.jpg"/></figure>
</div>
</div>


<div className="col-sm-6">
<h2 className="faculty-title">Summer 2020</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/summer-2020.jpg"/></figure>
</div>
</div>

</div>

<div className="row">
<div className="col-sm-6">
<h2 className="faculty-title">Winter 2018</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/winter-2018.jpg"/></figure>
</div>
</div>


<div className="col-sm-6">
<h2 className="faculty-title">Summer 2019</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/summer-2019.jpg "/></figure>
</div>
</div>
</div>

<div className="row">
<div className="col-sm-6">
<h2 className="faculty-title">Winter 2017</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/Winter-2017.jpg"/></figure>
</div>
</div>



<div className="col-sm-6">
<h2 className="faculty-title">Summer 2018</h2>
<div className="imagebox">
<figure> <img src="http://mitra.ac.in/uploads/media/summer-2018.jpg "/></figure>
</div>
</div>
</div>

</div>


          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

          </div>


        </div>
      </div>
    </div>
  </div>

        <Contact/>
        <Footer/>
        
        </div>
    )
}

export default ItAcadmicExcellence;