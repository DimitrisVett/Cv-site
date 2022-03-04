import React, { useState, useContext } from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Exp from "./Exp";
import Hobbies from "./Hobbies";
import Stack from "./Stack";
import OutsideClickHandler from 'react-outside-click-handler';
// import { UserContext } from "../UserContext"; 

export default function Home(){
  const [showAbout, setShowAbout]= useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showStack, setShowStack] = useState(false);
  // const {about, setAbout}= useContext(UserContext); could use later (instead of global state-redux)

    return <div > 
      <nav>
        <div  className="btn "  onClick={()=>setShowAbout(!showAbout)}>About</div>
        <div  className="btn " onClick={()=>setShowContact(!showContact)}> Contact</div>
        <div  className="btn " onClick={()=>setShowEducation(!showEducation)}> Education</div>
        <div  className="btn " onClick={()=>setShowExp(!showExp)}> Experience</div>
        <div  className="btn " onClick={()=>setShowHobbies(!showHobbies)}> Hobbies </div>
        <div  className="btn " onClick={()=>setShowStack(!showStack)}> My Stack</div>
      </nav>
      
     
           <div  
          className = {showAbout? "about bgr"
                    : showContact? "contact bgr"
                    : showEducation? "education bgr"
                    : showExp? "exp bgr"
                    : showHobbies? "hobbies bgr"
                    : showStack? "stack bgr": "home bgr"}
        >
            {/* this is  a simple library that hadles clicks outside of the element */}
          <OutsideClickHandler
            onOutsideClick={() => {
            setShowAbout(false);
            setShowContact(false);
            setShowEducation(false);  
            setShowExp(false);  
            setShowHobbies(false);
            setShowStack(false);
        }}
          >
        {showAbout? <About/>: null}
        {showContact? <Contact/> : null}
        {showEducation? <Education/> : null}
        {showExp? <Exp/> : null}
        {showHobbies? <Hobbies/> : null}
        {showStack? <Stack/> : null}

        </OutsideClickHandler>
      </div>
    </div>;
  }

   
     /* this could be a different navigation bar with images  
      <div className="rNav">
       <div className="rBut" onClick={()=>setShowAbout(!showAbout)}><img src={require ("../img/about1.png")} /></div>
        <div className="rBut" onClick={()=>setShowContact(!showContact)}><img src={require ("../img/postit.png")} /></div>
        <div className="rBut" onClick={()=>setShowEducation(!showEducation)}><img src={require ("../img/book1.png")} /></div>
        <div className="rBut" onClick={()=>setShowExp(!showExp)}><img src={require ("../img/pc1.png")} /></div>
        <div className="rBut" onClick={()=>setShowHobbies(!showHobbies)}><img src={require ("../img/hobby1.png")} /></div>
        <div className="rBut" onClick={()=>setShowStack(!showStack)}><img src={require ("../img/toolbox1.png")} /></div>
      </div> */