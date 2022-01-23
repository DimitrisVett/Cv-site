import React, { useState, useContext } from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Exp from "./Exp";
import Hobbies from "./Hobbies";
import Menu from "./Menu";
import Stack from "./Stack";
import { UserContext } from "../MyContext";




export default function Home(){
  const [showAbout, setShowAbout]= useState(false);
  const [showContact, setShowContact] = useState(false);
  console.log(showAbout);
  const {about, setAbout}= useContext(UserContext);
  console.log(about,"to about log");

    return <div> 
      <button className="about" onClick={()=>setShowAbout(!showAbout)}> ABOUT BLABLA</button>
      {showAbout? <About/> : null}
     
      <Contact/>
      <Menu/>
      
      
      {/* <BrowserRouter>
                <menu/>
                <Route path="/about" component={about} />
                <Route path="/contact" component={contact} />
                <Route path="/education" component={education} />
                <Route path="/exp" component={exp} />
                <Route path="/hobbies" component={hobbies} />
                
                <Route path="/stack" component={stack} />
            
      </BrowserRouter> */}

    </div>;
  }