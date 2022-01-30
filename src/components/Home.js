import React, { useState, useContext } from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Exp from "./Exp";
import Hobbies from "./Hobbies";
import Menu from "./Menu";
import Stack from "./Stack";
// import { UserContext } from "../UserContext"; 




export default function Home(){
  const [showAbout, setShowAbout]= useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showStack, setShowStack] = useState(false);
  // const {about, setAbout}= useContext(UserContext); will use later (for global state)

    return <div> 
      <Menu/>
      <button className="about" onClick={()=>setShowAbout(!showAbout)}> ABOUT BLABLA</button>
      {showAbout? <About/> : null}
      {/* mesa stin if  
      if showAbout => ftiaxnw <button className="about" onClick={()=>setShowAbout(!showAbout)}> EXIT </button< 
      
      na rotisw vasili ti na kanw  me tin ? : diatiposi 
      js tropos na klinw dld close button
      window.addEventListener('click', function(e){   
      if (document.getElementById('clickbox').contains(e.target)){
       // Clicked in box
      } else{
      // Clicked outside the box
      }
});
      */}



      <button className="contact" onClick={()=>setShowContact(!showContact)}> Contact BLABLA</button>
      {showContact? <Contact/> : null}

      <button className="education" onClick={()=>setShowEducation(!showEducation)}> Education BLABLA</button>
      {showEducation? <Education/> : null}

      <button className="Exp" onClick={()=>setShowExp(!showExp)}> Exp BLABLA</button>
      {showExp? <Exp/> : null}

      <button className="Hobbies" onClick={()=>setShowHobbies(!showHobbies)}> Hobbies BLABLA</button>
      {showHobbies? <Hobbies/> : null}

      <button className="Stack" onClick={()=>setShowStack(!showStack)}> Stack BLABLA</button>
      {showStack? <Stack/> : null}
     
     
      
      
      
   

    </div>;
  }