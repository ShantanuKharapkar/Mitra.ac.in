import React from "react";



import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));






const CivilAcademicExcellence = () =>{
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
    {/** <!-- <li className="nav-item" role="presentation">
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
            <h2 className="faculty-title" xss="removed"><br/></h2><h2 className="faculty-title" xss="removed">University Toppers</h2><div><br/></div>
<div className="su-table su-table-alternate">


</div><table className="table table-bordered table-striped">
<tbody><tr xss="removed">
<td width="43" xss="removed">
<div><b><span xss="removed">Sr. No.<o></o></span></b></div>
</td>
<td width="223" xss="removed">
<div><b><span xss="removed">Year<o></o></span></b></div>
</td>
<td width="223" xss="removed">
<div><b><span xss="removed">Name of Student<o></o></span></b></div>
</td>

<td width="57" xss="removed">
<div><b><span xss="removed">Pointer<o></o></span></b></div>
</td>
<td width="66" xss="removed">
<div><b><span xss="removed">Merit No.<o></o></span></b></div>
</td>
</tr>

<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">1<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2017 - 2018</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku. Ruchira Bhaskar
Giripunje</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.61</span><br/></div>
</td>
<td width="66" xss="removed">
<div>3<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>2</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2017 - 2018</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku.Shyamli Hiralal Pande</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.52</div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>




<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>3</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2017 - 2018</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Shubham Bhaskarrao
Mahalle</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.52</div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>




<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>4</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2017 - 2018</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >shubham Sukdevarao duble</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.50</div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>5</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2017 - 2018</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Anket Subhash Pateriya</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.47</div>
</td>
<td width="66" xss="removed">
<div>10<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>6</div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >2018-2019</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku.Devashri Nandkishor
Varhade</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.80</div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>7</div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >2018-2019</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Shreyas Sanjay Dahane</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.58</div>
</td>
<td width="66" xss="removed">
<div>3<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>8</div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >2018-2019</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Swapnil Pushparaj Humane&nbsp;</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.49</div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>9</div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >2018-2019</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku Gauri Ramdas Kaware</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.47</div>
</td>
<td width="66" xss="removed">
<div>6<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">10<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2019 - 2020</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Renuka Mukund Bhavik</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.46</div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">11<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2019 - 2020</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ashvini Bhagwat Kadu</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.44</div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">12<o></o></span></div>
</td>
<td width="223" xss="removed">
<div>2019 - 2020<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ankit Vilasrao Lande</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.44</div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">13<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2019 - 2020</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Sakshi Sanjay Suroshe</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.41</div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">14<o></o></span></div>
</td>
<td width="223" xss="removed">
<div>2019 - 2020<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Mayuri Vinod Raut&nbsp;</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.37</div>
</td>
<td width="66" xss="removed">
<div>10<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>15</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2020 - 2021</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku. Bhagyashree
Laxmikabt Deshpande</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.85</div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">16<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2</span>2020 - 2021<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku. Shivani
Rajendrarao&nbsp; Deulkar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.85</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">17<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2020 - 2021</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku. Asmita Dnyaneshwar
Wankhade</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.78</div>
</td>
<td width="66" xss="removed">
<div>2<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">18<o></o></span></div>
</td>
<td width="223" xss="removed">
<div>2020 - 2021<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Dhamale Ajay&nbsp; Sanjay&nbsp;</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.76</span><br/></div>
</td>
<td width="66" xss="removed">
<div>3<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">19<o></o></span></div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2020 - 2021</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku. Pratiksha
Prakash&nbsp; Badhiye</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.7</div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>20</div>
</td>
<td width="223" xss="removed">
<div>2020 - 2021<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku. Pooja Dilip Nawale</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.61</div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>21</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2020 - 2021</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Marodkar Piyush sanjay</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.60</div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>22</div>
</td>
<td width="223" xss="removed">
<div>2020 - 2021<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku. Nidhi Anil Rekhi</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.60</div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>23</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2020 - 2021</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ku. Pranjali Avinashrao
Nikhade&nbsp;</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.56</div>
</td>
<td width="66" xss="removed">
<div>10<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>24</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2020 - 2021</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Suyog&nbsp; Ramrao Dhawade</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.56</div>
</td>
<td width="66" xss="removed">
<div>10<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>25</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ashu Anil Dhoke</span><br/></div>
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
<div>26</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Aditi Ravindra Kharbade</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span>.00<br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>27</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Sakshi Dnyaneshwar
Dhumale</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><span xss="removed">.00</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>28</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Snehal Kulbhushan Wakale</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span>.00<br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>29</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Mohd Shahgul Mohd Isiam</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><span xss="removed">.00</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>30</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Aaditi Anilrao Ronghe</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span>.00<br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">31<o></o></span></div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ashish Suresh Gedam</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10</span><span xss="removed">.00</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>32</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Sanyukta Laxmanrao More</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">10.00</span><br/></div>
</td>
<td width="66" xss="removed">
<div>1<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>33</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Sonal Manojkumar Pasari&nbsp;</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.98</div>
</td>
<td width="66" xss="removed">
<div>2<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>34</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Yukta Shrikrishna Kadu</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.98</span><br/></div>
</td>
<td width="66" xss="removed">
<div>2<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>35</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Om Narendra Sawade</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.98<br/></div>
</td>
<td width="66" xss="removed">
<div>2<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>36</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Siddhant Mahadeo Shende</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.98</span><br/></div>
</td>
<td width="66" xss="removed">
<div>2<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>37</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Pratiksha Deepak Barabde</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.97</div>
</td>
<td width="66" xss="removed">
<div>3<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>38</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Jayesh Anilrao Silaskar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>39</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Samiksha Dilip Wankhade</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>40</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Inshal Ahmad Khan</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">41<o></o></span></div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Nisha Rajesh&nbsp; Gadge</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>42</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Saloni Anil Wadnere</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>43</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Rashmi Vijay
Hainglaspure</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>44</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Vaishnavi Purushottam
Dhepe</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>45</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Sankte Vitthal Raut</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>46</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Nishant Prashant Kamble</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.95</span><br/></div>
</td>
<td width="66" xss="removed">
<div>4<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>47</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Sopan Harishchandra
Thombre</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.93</div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>48</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ujwal Ravindra Chavan</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.93</span><br/></div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>49</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Prathmesh Sunil&nbsp; Satpute</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.93<br/></div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>50</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Akanksha Padmakar
Sakhare</span><br/></div>
</td>
<td width="57" xss="removed"><div><span xss="removed">9.93</span><br/></div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">51<o></o></span></div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Chinmay Prashant Dhole&nbsp;</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.93<br/></div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>52</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Muzammil Rasheed Akil
Rasheed</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.93</span><br/></div>
</td>
<td width="66" xss="removed">
<div>5<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>53</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Namrata Sanjay Deshmukh</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.91</span><br/></div>
</td>
<td width="66" xss="removed">
<div>6<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>54</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Yash Dhanrajraoji Thete</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.91</span><br/></div>
</td>
<td width="66" xss="removed">
<div>6<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>55</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Rutuja Surendra More</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.91</span><br/></div>
</td>
<td width="66" xss="removed">
<div>6<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>56</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Renuka Ghanshyam Patil</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.91</span><br/></div>
</td>
<td width="66" xss="removed">
<div>6<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>57</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Shramika&nbsp;&nbsp; jayendra Sakhare</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.89</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>58</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Ajinkya&nbsp;&nbsp;&nbsp;&nbsp; keshavrao Meshram</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.89</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>59</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Mahati Sunil Giri</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.89</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>60</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Shraddha Raju Chandurkar</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.89</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>61</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Pranal Dashrath Chafale</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.89</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>62</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Sarvesah Prakash Korde</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.89</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>63</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Akshata Damodhar
Lohakare</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.89</span><br/></div>
</td>
<td width="66" xss="removed">
<div>7<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>64</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Mrunal Bhaskar Sonone</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span lang="EN-US" xss="removed" >9.89</span><br/></div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>65</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Hritwik Dinesh Akode</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.87</div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>66</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Sakshi Vijayrao Hande</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.87</span><br/></div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>67</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Vishal Ashokrao Wankhade</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.87<br/></div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>68</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Suraj Ashokrao&nbsp; Shrikhande</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.87</span><br/></div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>69</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Shital Gajanan Bhonde</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.87<br/></div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>70</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Shraddha Bandu Chavhan</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.87</span><br/></div>
</td>
<td width="66" xss="removed">
<div>8<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div><span xss="removed">71<o></o></span></div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Vishakha Ramrao Rathod</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.85</div>
</td>
<td width="66" xss="removed">
<div>9<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>72</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Anushree Prabhkar
Ramteke</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.85</span><br/></div>
</td>
<td width="66" xss="removed">
<div>9<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>73</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Auantika Ramchandra
Bagde</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.84</div>
</td>
<td width="66" xss="removed">
<div>10<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>74</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Rohan Rajkumar Chatur</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.84</span><br/></div>
</td>
<td width="66" xss="removed">
<div>10<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>75</div>
</td>
<td width="223" xss="removed">
<div>2021 - 2022<br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Shivani Ravindra Dudhe</span><br/></div>
</td>
<td width="57" xss="removed">
<div>9.84<br/></div>
</td>
<td width="66" xss="removed">
<div>10<br/><br/></div>
</td>
</tr>


<tr xss="removed">
<td width="43" nowrap="" xss="removed">
<div>76</div>
</td>
<td width="223" xss="removed">
<div><span xss="removed">2021 - 2022</span><br/></div>
</td>
<td width="223" xss="removed">
<div><span lang="EN-US" xss="removed" >Rushikesh Kishor Chavan</span><br/></div>
</td>
<td width="57" xss="removed">
<div><span xss="removed">9.84</span><br/></div>
</td>
<td width="66" xss="removed">
<div>10<br/><br/></div>
</td>
</tr>















</tbody></table>







<h2 className="faculty-title"><span xss="removed"><br/></span></h2><h2 className="faculty-title"><span xss="removed">Result Analysis for Last 6 Years</span><br/></h2><div className="row">

  <div className="col-sm-6">
      
      <img src="http://mitra.ac.in/uploads/media/S-20221.png" xss="removed"/>

  </div>

  <div className="col-sm-6">
 
      <img src="http://mitra.ac.in/uploads/media/W-20211.png" xss="removed"/>

  </div>

  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/S-20211.png" xss="removed"/>

  </div>

  <div className="col-sm-6">
  
      <img src="http://mitra.ac.in/uploads/media/W-20201.png" xss="removed"/>

  </div>

  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/S-20201.png" xss="removed"/>

  </div>

  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/W-20191.png" xss="removed"/>

  </div>

  <div className="col-sm-12">
      <hr/>
  </div>

  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/s-2019.png" xss="removed"/>

  </div>

  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/w-2018.png" xss="removed"/>

  </div>

  <div className="col-sm-12">
      <hr/>
  </div>

  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/s2018.png"/>

  </div>


  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/W-2017.png"/>

  </div>

  <div className="col-sm-12">
      <hr/>
  </div>


  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/s_2017.png"/>


  </div>

  <div className="col-sm-6">

      <img src="http://mitra.ac.in/uploads/media/W-2016.png"/>

  </div>
  <div className="col-sm-12">
      <hr/>
  </div>
</div>	





<Box xs={12} container spacing={2}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item  xs={12}  sm={6}  lg={3}  >
          <Item>
          
          <img src="http://mitra.ac.in/uploads/media/S-20221.png" xss="removed"/>

          
          </Item>
        </Grid>
        <Grid item  xs={12}  sm={6}  lg={3} >
          <Item>

          
          
          <img src="http://mitra.ac.in/uploads/media/W-20211.png" xss="removed"/>

          
          </Item>
        </Grid>
        <Grid item  xs={12}  sm={6}  lg={3}  >
          <Item>
          
          <img src="http://mitra.ac.in/uploads/media/S-20211.png" xss="removed"/>

          
          </Item>
        </Grid>
        <Grid item  xs={12}  sm={6}  lg={3}  >
          <Item>
          
          <img src="http://mitra.ac.in/uploads/media/W-20201.png" xss="removed"/>

          
          </Item>
        </Grid>

        <Grid item  xs={12}  sm={6}  lg={3}  >
          <Item>
          
          <img src="http://mitra.ac.in/uploads/media/S-20201.png" xss="removed"/>

          
          </Item>
        </Grid>

        <Grid item  xs={12}  sm={6}  lg={3}  >
          <Item>
          <img src="http://mitra.ac.in/uploads/media/W-20191.png" xss="removed"/>

          
          
          </Item>
        </Grid>

        
      </Grid>
    </Box>


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

export default CivilAcademicExcellence;