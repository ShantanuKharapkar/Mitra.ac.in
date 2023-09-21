import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage' 
import AboutPage from './pages/AboutPage'
import Mentor from './pages/Mentor'
import ExecutivesMember from './pages/ExecutivesMember'
import ChairmansMessage from './pages/ChairmansMessage'
import Principals from './pages/Principals';
import CoursesOffered from './pages/CoursesOffered'
import Btech from './pages/Btech'
import Mtech from './pages/Mtech'
import Phd from './pages/Phd'
import Mca from './pages/Mca';
import Mba from './pages/Mba'
import Contactadmission from './pages/Contactadmission'
import AcademicCalendar from './pages/AcademicCalendar'
import IEEE from './pages/IEEE';
import CSI from './pages/CSI';
import IETE from './pages/IETE';
import MESA from './pages/MESA';
import CESA from './pages/CESA';
import VirtualGallery from './pages/VirtualGallery';
import CivilAcademicExcellence from './pages/CivilAcademicExcellence';
import CivilEvents from './pages/CivilEvents';
import CivilFaculty from './pages/CivilFaculty';
import CivilProgramme from './pages/CivilProgramme';
import CivilLaboratories from './pages/CivilLaboratories';
import CivilConsultancyResearch from './pages/CivilConsultancyResearch';
import CivilPhotoGallery from './pages/CivilPhotoGallery';
import CivilContactUs from './pages/CivilContactUs';
import MechAcadmicExcellence from './pages/MechAcadmicExcellence';
import MechEvenets from './pages/MechEvenets';
import MechFaculty from './pages/MechFaculty';
import MechProgramme from './pages/MechProgramme';
import MechanicalLaboratories from './pages/MechanicalLaboratories';
import MechConsultancyResearch from './pages/MechConsultancyResearch';
import MechanicalPhotoGallery from './pages/MechanicalPhotoGallery';
import MechContact from './pages/MechContact';
import CivilMainHome from './pages/CivilMainHome';
import CseAcadmicExcellence from './pages/CseAcadmicExcellence';
import CseEvents from './pages/CseEvents';
import CseFaculty from './pages/CseFaculty';
import CseProgramme from './pages/CseProgramme';
import CseLaboratories from './pages/CseLaboratories';
import CsePhotoGallery from './pages/CsePhotoGallery';
import CseContact from './pages/CseContact';
import CseConsultancyResearch from './pages/CseConsultancyResearch';
import ItAcadmicExcellence from './pages/ItAcadmicExcellence';




function App() {
  return (
    <Routes className="App">
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/ourMentor' element={<Mentor/>}/>
    <Route path='/executivesMember' element={<ExecutivesMember/>}/>
    <Route path='/chairmans' element={<ChairmansMessage/>}/>
    <Route path='/principalsMessage' element={<Principals/>}/>
    <Route path='/coursesofferd' element={<CoursesOffered/>}/>
    <Route path='/btech' element={<Btech/>}/>
    <Route path='/mtech' element={<Mtech/>}/>
    <Route path='/phd' element={<Phd/>}/>
    <Route path='/mca' element={<Mca/>}/>
    <Route path='/mba' element={<Mba/>}/>
    <Route path='/contactadmission' element={<Contactadmission/>}/>
    <Route path='/academicCalendar' element={<AcademicCalendar/>}/>
    <Route path='/forumIeee' element={<IEEE/>}/>
    <Route path='/csi' element={<CSI/>}/>
    <Route path='/iete' element={<IETE/>}/>
    <Route path='/mesa' element={<MESA/>}/>
    <Route path='/cesa' element={<CESA/>}/>
    <Route path='/virtualGallery' element={<VirtualGallery/>}/>
    {/**
    Civil Deapartment
     */}
    <Route path='/civilacademicexcellence' element={<CivilAcademicExcellence/>}/>
    <Route path='/civilEvents' element={<CivilEvents/>}/>
    <Route path='/civilFaculty' element={<CivilFaculty/>}/>
    <Route path='/civilProgramme' element={<CivilProgramme/>}/>
    <Route path='/civilLaboratories' element={<CivilLaboratories/>}/>
    <Route path='/civilConsultancyResearch' element={<CivilConsultancyResearch/>}/>
    <Route path='/civilPhotoGallery' element={<CivilPhotoGallery/>}/>
    <Route path='/civilContactUs' element={<CivilContactUs/>}/>
    <Route path='/civilMainHome' element={<CivilMainHome/>}/>
 {/**
    Mechanical Deapartment
     */}

     <Route path='/mechAcadmicExcellence' element={<MechAcadmicExcellence/>}/>
     <Route path='/mechEvents' element={<MechEvenets/>}/>
     <Route path='/mechFaculty' element={<MechFaculty/>}/>
     <Route path='/mechProgramme' element={<MechProgramme/>}/>
     <Route path='/mechLaboratories' element={<MechanicalLaboratories/>}/>
     <Route path='/mechConsultancyResearch' element={<MechConsultancyResearch/>}/>
     <Route path='/mechPhotoGallery' element={<MechanicalPhotoGallery/>}/>
     <Route path='/mechContact' element={<MechContact/>}/>


 {/**
    Computer Science 
     */}

     <Route path='/cseAcadmicExcellence' element={<CseAcadmicExcellence/>}/>
     <Route path='/cseEvents' element={<CseEvents/>}/>
     <Route path='/cseFaculty' element={<CseFaculty/>}/>
     <Route path='/cseProgramme' element={<CseProgramme/>}/>
     <Route path='/cseLaboratories' element={<CseLaboratories/>}/>
     <Route path='/csePhotoGallery' element={<CsePhotoGallery/>}/>
     <Route path='/cseContact' element={<CseContact/>}/>
     <Route path='/cseConsultancyResearch' element={<CseConsultancyResearch/>}/>

 {/**
   Information Technology
     */}
     <Route path='/itAcadmicExcellence' element={<ItAcadmicExcellence/>}/>



    </Routes>
  );
}

export default App;
