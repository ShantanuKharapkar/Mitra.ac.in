import React from "react";


// import css

import "../css/index.css"
import "../css/bootstap.min.css"
import "../css/responsive.css"
import "../css/cseAcademicExcellence.css"





import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



const CseAcadmicExcellence = () =>{
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
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        Students Academic Achievements</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link-1" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">

                        Extra-Curricular Activities Achievements</button>
                </li>

            </ul>
        </div>

    </div>

    <div className="row">
        <div className="col-12">
            <div className="tab-content" id="pills-tabContent">
               
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                aria-labelledby="pills-home-tab">
                    <h2 className="faculty-title color-blue text-center my-1"><span xss="removed">University Merit Ranks&nbsp;</span><br/></h2><div><br/></div><div><h2 className="faculty-title color-blue text-center my-1" xss="removed">University Merit List Of Summer 2022</h2></div><div><br/></div>
<div className="su-table su-table-alternate">
<table className="table table-bordered table-striped">
<tbody><tr xss="removed">
<td width="43" xss="removed">
<div><b><span xss="removed">Sr. No.<o></o></span></b></div>
</td>
<td width="223" xss="removed">
<div><b><span xss="removed">Name of Student<o></o></span></b></div>
</td>

<td width="57" xss="removed">
<div><b><span xss="removed">CGPA<o></o></span></b></div>
</td>
<td width="66" xss="removed">
<div><b><span xss="removed">Merit Rank<o></o></span></b></div>
</td>
</tr>
<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">1<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Prachi Prashant Apale</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.87</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1</div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">2<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Dhanashree Gajanan Ujjainkar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.82</span><br/></div>
</td>
<td width="66" xss="removed">
<div>2</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>3</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Archana Lachhuram Jadhawani</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.76</span><br/></div>
</td>
<td width="66" xss="removed">
<div>3</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>4</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Ayush Anilrao Datir</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.71</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>5</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Devendra Babasaheb Talhande</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.69</span><br/></div>
</td>
<td width="66" xss="removed">
<div>5</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>6</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Aush Ganshyam Shadi</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.69</span><br/></div>
</td>
<td width="66" xss="removed">
<div>5</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>7</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Bhavana Sunil Bhonde</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.67</span><br/></div>
</td>
<td width="66" xss="removed">
<div>6</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>8</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Radhika Narendra Gandhi</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.65</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>9</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Shraddha Naresh Pandav</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.61</span><br/></div>
</td>
<td width="66" xss="removed">
<div>8</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Prathmesh Umendra Dhage</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.59</span><br/></div>
</td>
<td width="66" xss="removed">
<div>10</div>
</td>
</tr>




</tbody></table>








<h2 className="faculty-title color-blue text-center my-3" xss="removed"><br/></h2><h2 className="faculty-title color-blue text-center my-3" xss="removed">University Merit List Of Summer 2021</h2><div><br/></div>
<div className="su-table su-table-alternate">
<table className="table table-bordered table-striped">
<tbody><tr xss="removed">
<td width="43" xss="removed">
<div><b><span xss="removed">Sr. No.<o></o></span></b></div>
</td>
<td width="223" xss="removed">
<div><b><span xss="removed">Name of Student<o></o></span></b></div>
</td>

<td width="57" xss="removed">
<div><b><span xss="removed">CGPA<o></o></span></b></div>
</td>
<td width="66" xss="removed">
<div><b><span xss="removed">Merit Rank<o></o></span></b></div>
</td>
</tr>
<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">1<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Dhanashree Santosh Wankhade</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">2<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Walmikee Sanjay Dhopate</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>3</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Sweta Sanjay Khadase</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>4</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Mandar Kishor Dhake</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>5</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Saloni Pravin Raghuvanshi</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>6</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Atharv Vijay Shelorkar</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>7</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Nikita Arun Wazire</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>8</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Umang Piyushkumar Mehta</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>9</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Abhishek Mohan Mohod</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Purva Prashant Apale</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">11<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Bhagyashri Sanjay Shirbhate</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">12<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Rutuja Rajesh Bhoge</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">13<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Majiri Mahendra Nawathe</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">14<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Kirti Arvind Dongarkar</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">15<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Bisama Arif Sheikh</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">16<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Gauri Suresh Rewatkar</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">17<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Anam ifrah Sheikh</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">18<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Rudresh Sharad Deshpande</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>




<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>19</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Neha Manoj Wani</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>20</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Sampada Prashant Ande</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>21</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Shradha VishnuPrasad Nawandhar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>




<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>22</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Sanjana Vasant Borode</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>




<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>23</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Khushi Sudesh Jain</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>24</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Himanshu Padmakar Raut</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>25</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Vivek Shankarlal Shadi</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>26</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Prasad Vikas Deshmukh</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>




<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>27</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Riddhi Vijayrao Deshmukh</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>28</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Sohan Praffull Manekar</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>29</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Vaishnavi Prashant Charjan</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>30</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Prathamesh Pradiprao Chambole</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>31</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Sumit Suresh Ghope</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>32</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Sakshi Rajesh Vighe</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>33</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Karan Pradiprao Kurhade</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>34</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Prachi Sanjayrao Pohokar</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>35</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Sayali Govind Dudhat</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>



<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>36</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Nitesh Omprakash Gandole</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>37</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Nupesh Ashok Borade</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>38</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Minal Satish Kandelwal</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>39</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Prajwal Shivanand Deshmukh</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>40</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Santanu Rajendra Hirde</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10<br/></div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>41</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Mayur Deepak Popatani</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>42</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Dhanashree Purushottam Rasule</span><br/></div>
</td>
<td width="57" xss="removed">
<div>10</div>
</td>
<td width="66" xss="removed">
<div><span xss="removed">1</span><br/></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>43</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Kajal Mahendra Vijaykar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.98</span><br/></div>
</td>
<td width="66" xss="removed">
<div>2</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>44</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Karn Subhash Kukade</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.98</span><br/></div>
</td>
<td width="66" xss="removed">
<div>2</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>45</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Abhishek Chandrashekhar Umratkar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.98</span><br/></div>
</td>
<td width="66" xss="removed">
<div>2</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>46</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Chirag Devinandan Kashikar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.93</span><br/></div>
</td>
<td width="66" xss="removed">
<div>6</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>47</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Pooja Arun Aswar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.93</span><br/></div>
</td>
<td width="66" xss="removed">
<div>6</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>48</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Vaibhavi Satish Taksande</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.93<br/></div>
</td>
<td width="66" xss="removed">
<div>6</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>49</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Sapana Ashok Bhore</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.93</span><br/></div>
</td>
<td width="66" xss="removed">
<div>6</div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>50</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Kedar Vijayrao Muley</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.93<br/></div>
</td>
<td width="66" xss="removed">
<div>6</div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>51</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Nilesh Kishor Hedaoo</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.91</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7</div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>52</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Payal Ishwarsingh Thakur</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.91</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7</div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>53</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">Vishal Nana Narote</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.87</span><br/></div>
</td>
<td width="66" xss="removed">
<div>8</div>
</td>
</tr>





</tbody></table>

<div><h2 className="faculty-title color-blue text-center my-3" xss="removed">University Merit List from 2017 to 2019</h2></div>
<div className="su-table su-table-alternate">
<table className="table table-bordered table-striped">
<tbody><tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><b><span xss="removed">Year<o></o></span></b></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><b><span xss="removed">Name of
Candidates<o></o></span></b></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><b><span xss="removed">CGPA<o></o></span></b></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><b><span xss="removed">Merit
No.<o></o></span></b></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2019<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Samiksha Gautam Kamble<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.39<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">1<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2019<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Purva Gajananrao Tayde<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">8.99<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2018<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Aarti Prakash Falke<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.2<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">1<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2018<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Ketaki Satish Bakshi<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.15<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2018<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Shreya Rahul Tode<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.15<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2018<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Manali Vinod Kohale<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.13<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">4<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2018<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Mamta Mahesh Parwani<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.05<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">6<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2018<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Vaishnavi Arun Khandar<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.06<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">6<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2017<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Samiksha Nandkumar Kale<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.21<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">3<o></o></span></div>
</td>
</tr>
<tr xss="removed">
<td width="105" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Summer-2017<o></o></span></div>
</td>
<td width="191" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">Kiran Ramdas Paigham<o></o></span></div>
</td>
<td width="64" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">9.02<o></o></span></div>
</td>
<td width="80" nowrap="" valign="bottom" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
</tr>
</tbody></table></div><div><br/></div><div><br/></div><div className="su-table su-table-alternate">


</div></div><table className="table table-bordered table-striped">






</table></div>





<h2 className="faculty-title color-blue text-center my-3">Result Analysis</h2><div className="row"><br/><br/><br/>

<h2 className="faculty-title color-blue text-center my-3">2021 - 2022</h2>
<div className="row">
<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/W-2022.png"/>
</div>
</div>
</div>

<br/>
<hr/>

<h2 className="faculty-title color-blue text-center my-3">2020 - 2021</h2><div><br/></div><div><br/></div>
<div className="row">
<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/W-20212.png"/>
</div>
</div>

<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/S-21.png"/>
</div>
</div>
</div>
<br/>
<hr/>
<h2 className="faculty-title color-blue text-center my-3">2019 - 2020</h2><div><br/></div><div><br/></div>
<div className="row">
<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/w-2020.png"/>
</div>
</div>

<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/S-20202.png"/>
</div>
</div>
<div>
<br/>
<hr/>
<h2 className="faculty-title color-blue text-center my-3">2018 - 2019</h2><div><br/></div><div><br/></div>
<div className="row">
<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/W-20192.png"/>
</div>
</div>

<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/s-20191.png"/>
</div>
</div>
<div>
<br/>
<hr/>
<h2 className="faculty-title color-blue text-center my-3">2017 - 2018</h2><div><br/></div><div><br/></div>
<div className="row">
<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/w-20181.png"/>
</div>
</div>

<div className="col-sm-6">
<div className="imagebox">
<img className="w-100" src="http://mitra.ac.in/uploads/media/s-2018.png"/>
</div>
</div>
<div>











</div></div></div></div></div></div></div>						</div>

                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div>
                        <div>
                          <h2 className="faculty-title color-blue">
                            List of awarded students in various Technical Events (State/National
                            level) 2021-22
                          </h2>
                        </div>
                      
                        <div>
                          <o>&nbsp;</o><span xss="removed">&nbsp;</span></div><table className="table table-bordered table-striped" border="0" cellspacing="0" cellpadding="0" xss="removed">
                          <tbody>
                            <tr xss="removed">
                      
                              <td width="386" xss="removed">
                      
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Student Name<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                      
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Student Name<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      State/National/College/<o></o>
                                    </span>
                                  </b>
                                </div>
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Department Level<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="445" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Award name &amp; Details<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Rank<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Date<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1<o></o>
                                  </span>
                                </div>
                              </td>
                      
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Akhilesh Wagare<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Snippet Hunt,Prof. Ram Meghe Institute of Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    First<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    9th April 2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Kuldeep Wakode<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Snippet Hunt,Prof. Ram Meghe Institute of Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div><span xss="removed">First</span><br/></div>
                              </td>
                              <td width="186" xss="removed">
                                <div><span xss="removed">9th April 2021</span><br/></div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    3<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Manthan Kurekar<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Snippet Hunt,Prof. Ram Meghe Institute of Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div><span xss="removed">Second</span><br/></div>
                              </td>
                              <td width="186" xss="removed">
                                <div>9th April 2021<br/></div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    4<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Harshali Gadge<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Snippet Hunt,Prof. Ram Meghe Institute of Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Second<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div><span xss="removed">9th April 2021</span><br/></div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    5<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Harsh Pawar<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Snippet Hunt,Prof. Ram Meghe Institute of Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div><span xss="removed">Third</span><br/></div>
                              </td>
                              <td width="186" xss="removed">
                                <div>9th April 2021<br/></div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    6<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Rushikesh Hatekar<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Snippet Hunt,Prof. Ram Meghe Institute of Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Third<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div><span xss="removed">9th April 2021</span><br/></div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    7<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Prathamesh Dhange<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Design Mestro Program, Prof. Ram Meghe Institute 0f Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    First<o></o></span></div>
                              </td>
                              <td width="186" xss="removed">
                                <div>9th April 2021<br/></div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    8<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Vedant Phuse<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Design Mestro Program, Prof. Ram Meghe Institute 0f Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Second<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div><span xss="removed">9th April 2021</span><br/></div>
                              </td>
                            </tr>
                            <tr xss="removed">
                       <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    9<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Aditya Gulhane<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    University<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>Code Strike,ODE TO CODE, Prof. Ram Meghe Institute of Technology &amp; Research, Badnera, Amravati<br/></div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Second<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>9th April 2021<br/></div>
                              </td>
                            </tr>
                           
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      </tbody></table><h2 className="faculty-title color-blue" xss="removed"><br/></h2><h2 className="faculty-title color-blue" xss="removed">List of awarded students in various Technical Events (State/National level) 2020-21</h2><br/><table className="table table-bordered table-striped" border="0" cellspacing="0" cellpadding="0" xss="removed">
                          <tbody>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Student Name<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      State/National/College/<o></o>
                                    </span>
                                  </b>
                                </div>
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Department Level<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="445" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Award name &amp; Details<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Rank<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <b>
                                    <span xss="removed">
                                      Date<o></o>
                                    </span>
                                  </b>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Neha Budh<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    National<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Impetus and Concepts’ 2020 (Online/Live) -Daksha (Test of business
                                    skills)<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Pune institute of computer technology<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Second<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2020<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Vallabh Balkrushna Padhye<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    CODE-ATHON, Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera, <o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Tejashri Anil Belsare<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    CODE-ATHON, Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Runner up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Vallabh Balkrushna Padhye<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    CODE-ATHON, Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera, <o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Abhilash Deulkar<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Technical Rapid Fire,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Nilesh Datta Rathod<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Technical Rapid Fire,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1st Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Archana Jadhawani<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Technical Rapid Fire,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2nd Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Siddhesh Haware<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Debate Competetion,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Neha Manohar Budh<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Debate Competetion,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1st Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Pranav Deshmukh<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Debate Competetion,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2nd Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Gayatri Mahendrasingh Rathod<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Photography,Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner(Flower)<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Pratik Gawande<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Photography,Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner(Sky)<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Himanshu Surendra Sagane<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Photography,Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Runner Up(Animal)<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Pranjali Wanjari<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Photography,Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Runner Up(Flower)<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Mayuresh Dhage<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Photography,Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner(Animal)<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Amisha Arjun Kedar<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Photography,Prof. Ram Meghe Institute Of Technology and Research,
                                    Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Runner Up(Sky)<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    18th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Pranav Dinesh Saikhede<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Do It At Home Art,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Samruddhi Gajanan Thakare<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Do It At Home Art,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1st Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Vedanti Rajeshrao Nistane<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Do It At Home Art,Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2nd Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Kirti Arvind Dongarkar<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    E - Footstep Competetion, Prof. Ram Meghe Institute Of Technology
                                    and Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Purva Kishor Talegaonkar<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    E - Footstep Competetion, Prof. Ram Meghe Institute Of Technology
                                    and Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1st Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Ishwari Pradeep Deshmukh<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    E - Footstep Competetion, Prof. Ram Meghe Institute Of Technology
                                    and Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2nd Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Pranav Dinesh Saikhede<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Reels/Video making, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Pritam S Makeshwar<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Reels/Video making, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1st Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Tanaya Rajesh Bansod<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Reels/Video making, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2nd Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Shivani Dudhe<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Wall Magazine, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Ankita Bhakare<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Wall Magazine, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1st Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Saloni Raghuwanshi<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Wall Magazine, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2nd Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    20th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Vicky Wankhade<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Live Concert, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Rutuja Munde<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Live Concert, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1st Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Tanaya Bansod<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Live Concert, Prof. Ram Meghe Institute Of Technology and
                                    Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2nd Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Atharva Dengre<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Mimicry/Role play/Mismatch, Prof. Ram Meghe Institute Of
                                    Technology and Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Sumit Kakad<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Mimicry/Role play/Mismatch, Prof. Ram Meghe Institute Of
                                    Technology and Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    1st Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Prathamesh Chambole<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Mimicry/Role play/Mismatch, Prof. Ram Meghe Institute Of
                                    Technology and Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    2nd Runner Up<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr xss="removed">
                              <td width="386" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Vedant Londe<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="338" xss="removed">
                                <div>
                                  <span xss="removed">
                                    College<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="445" valign="top" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Mimicry/Role play/Mismatch, Prof. Ram Meghe Institute Of
                                    Technology and Research, Badnera,<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    Amravati<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="131" xss="removed">
                                <div>
                                  <span xss="removed">
                                    Winner(Mismatch)<o></o>
                                  </span>
                                </div>
                              </td>
                              <td width="186" xss="removed">
                                <div>
                                  <span xss="removed">
                                    19th June<o></o>
                                  </span>
                                </div>
                                <div>
                                  <span xss="removed">
                                    2021<o></o>
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2 className="faculty-title color-blue"><span xss="removed">List of Awarded Students in
                    Various Technical Events (State/National level) 2019-20</span></h2>
                    <div className="su-table su-table-alternate" xss="removed"><br/><table className="table table-bordered table-striped" xss="removed">
                     <tbody><tr xss="removed">
                      <td width="386" xss="removed">
                      <div><b><span xss="removed">Student Name<o></o></span></b></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><b><span xss="removed">State/National/College/<o></o></span></b></div>
                      <div><b><span xss="removed">Department Level<o></o></span></b></div>
                      </td>
                      <td width="445" xss="removed">
                      <div><b><span xss="removed">Award name &amp; Details<o></o></span></b></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><b><span xss="removed">Rank<o></o></span></b></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><b><span xss="removed">Date<o></o></span></b></div>
                      </td>
                     </tr>
                     <tr xss="removed">
                      <td width="386" xss="removed">
                      <div><span xss="removed">Madhuri R. Trikoti<o></o></span></div>
                      <div><span xss="removed">(Third Year B)<o></o></span></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><span xss="removed">National<o></o></span></div>
                      </td>
                      <td width="445" valign="top" xss="removed">
                      <div><span xss="removed">TechShetra, Government<o></o></span></div>
                      <div><span xss="removed">College of Engineering<o></o></span></div>
                      <div><span xss="removed">Amravati<o></o></span></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><span xss="removed">First<o></o></span></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><span xss="removed">6th March<o></o></span></div>
                      <div><span xss="removed">2020<o></o></span></div>
                      </td>
                     </tr>
                     <tr xss="removed">
                      <td width="386" xss="removed">
                      <div><span xss="removed">Mayur Deepak Poptani<o></o></span></div>
                      <div><span xss="removed">(Third Year B)<o></o></span></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><span xss="removed">National<o></o></span></div>
                      </td>
                      <td width="445" valign="top" xss="removed">
                      <div><span xss="removed">TechShetra, Government<o></o></span></div>
                      <div><span xss="removed">College of Engineering<o></o></span></div>
                      <div><span xss="removed">Amravati<o></o></span></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><span xss="removed">Second<o></o></span></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><span xss="removed">6th March<o></o></span></div>
                      <div><span xss="removed">2020<o></o></span></div>
                      </td>
                     </tr>
                     <tr xss="removed">
                      <td width="386" xss="removed">
                      <div><span xss="removed">Anirudhha Baba Hirapure<o></o></span></div>
                      <div><span xss="removed">( Final Year B)<o></o></span></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><span xss="removed">National<o></o></span></div>
                      </td>
                      <td width="445" valign="top" xss="removed">
                      <div><span xss="removed">AASHAYEIN 2K20, Prof.<o></o></span></div>
                      <div><span xss="removed">Ram Meghe Institute Of<o></o></span></div>
                      <div><span xss="removed">Technology and Research,<o></o></span></div>
                      <div><span xss="removed">Badnera, Amravati<o></o></span></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><span xss="removed">First<o></o></span></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><span xss="removed">27th Feb<o></o></span></div>
                      <div><span xss="removed">2020<o></o></span></div>
                      </td>
                     </tr>
                     <tr xss="removed">
                      <td width="386" xss="removed">
                      <div><span xss="removed">Vaibhav Shete<o></o></span></div>
                      <div><span xss="removed">(Third Year B)<o></o></span></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><span xss="removed">National<o></o></span></div>
                      </td>
                      <td width="445" valign="top" xss="removed">
                      <div><span xss="removed">AASHAYEIN 2K20, Prof.<o></o></span></div>
                      <div><span xss="removed">Ram Meghe Institute Of<o></o></span></div>
                      <div><span xss="removed">Technology and Research,<o></o></span></div>
                      <div><span xss="removed">Badnera, Amravati<o></o></span></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><span xss="removed">Second<o></o></span></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><span xss="removed">28th Jan<o></o></span></div>
                      <div><span xss="removed">2020<o></o></span></div>
                      </td>
                     </tr>
                     <tr xss="removed">
                      <td width="386" xss="removed">
                      <div><span xss="removed">Radhika Narendra Gandhi<o></o></span></div>
                      <div><span xss="removed">(Second Year C)<o></o></span></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><span xss="removed">National<o></o></span></div>
                      </td>
                      <td width="445" valign="top" xss="removed">
                      <div><span xss="removed">AASHAYEIN 2K20, Prof.<o></o></span></div>
                      <div><span xss="removed">Ram Meghe Institute Of<o></o></span></div>
                      <div><span xss="removed">Technology and Research,<o></o></span></div>
                      <div><span xss="removed">Badnera,
                      Amravati<o></o></span></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><span xss="removed">First<o></o></span></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><span xss="removed">28th Jan<o></o></span></div>
                      <div><span xss="removed">2020<o></o></span></div>
                      </td>
                     </tr>
                     <tr xss="removed">
                      <td width="386" xss="removed">
                      <div><span xss="removed">Umang Mehta<o></o></span></div>
                      <div><span xss="removed">(Third Year B)<o></o></span></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><span xss="removed">National<o></o></span></div>
                      </td>
                      <td width="445" valign="top" xss="removed">
                      <div><span xss="removed">Esperanza 2020, Prof. Ram<o></o></span></div>
                      <div><span xss="removed">Meghe Institute Of<o></o></span></div>
                      <div><span xss="removed">Technology and Research,<o></o></span></div>
                      <div><span xss="removed">Badnera<o></o></span></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><span xss="removed">Second<o></o></span></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><span xss="removed">27th Jan<o></o></span></div>
                      <div><span xss="removed">2020<o></o></span></div>
                      </td>
                     </tr>
                     <tr xss="removed">
                      <td width="386" xss="removed">
                      <div><span xss="removed">Atharva Dahake<o></o></span></div>
                      <div><span xss="removed">(Final Year B)<o></o></span></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><span xss="removed">National<o></o></span></div>
                      </td>
                      <td width="445" valign="top" xss="removed">
                      <div><span xss="removed">Esperanza 2020, Prof. Ram<o></o></span></div>
                      <div><span xss="removed">Meghe Institute Of<o></o></span></div>
                      <div><span xss="removed">Technology and Research,<o></o></span></div>
                      <div><span xss="removed">Badnera<o></o></span></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><span xss="removed">Second<o></o></span></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><span xss="removed">25th Jan<o></o></span></div>
                      <div><span xss="removed">2020<o></o></span></div>
                      </td>
                     </tr>
                     <tr xss="removed">
                      <td width="386" xss="removed">
                      <div><span xss="removed">Riya hemant Nandurkar<o></o></span></div>
                      <div><span xss="removed">(Second Year A)<o></o></span></div>
                      </td>
                      <td width="338" xss="removed">
                      <div><span xss="removed">Departmental<o></o></span></div>
                      </td>
                      <td width="445" valign="top" xss="removed">
                      <div><span xss="removed">Wall magazine event,
                      Prof.<o></o></span></div>
                      <div><span xss="removed">Ram Meghe Institute Of<o></o></span></div>
                      <div><span xss="removed">Technology and Research,<o></o></span></div>
                      <div><span xss="removed">Badnera, Amravati<o></o></span></div>
                      </td>
                      <td width="131" xss="removed">
                      <div><span xss="removed">Second<o></o></span></div>
                      </td>
                      <td width="186" xss="removed">
                      <div><span xss="removed">21st Sep<o></o></span></div>
                      <div><span xss="removed">2019<o></o></span></div>
                      </td>
                     </tr>
                      </tbody></table></div></div>
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

export default CseAcadmicExcellence;