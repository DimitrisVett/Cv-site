import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhone ,faMapMarked} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'



export default function  Contact(){
    return <div className="main "> 
      <div>
        <h3>Contact me through</h3>
        <ul>
            <li> <span> <FontAwesomeIcon icon={faEnvelopeSquare} /></span> jvtiko@yahoo.gr </li>
            <li> <span><FontAwesomeIcon icon={faPhone} /> </span>015786432991</li>
            <li> <span><FontAwesomeIcon icon={faLinkedin} /> </span> <a href="https://www.linkedin.com/in/dimitris-vettas/"  target="_blank">My LinkedIn</a> </li>
            <li> <span><FontAwesomeIcon icon={faGithub} /></span> <a href="https://www.linkedin.com/in/dimitris-vettas/"  target="_blank">My Github</a></li>
            <li> <span><FontAwesomeIcon icon={faMapMarked} /> </span>Friedelstrasse (JA ! wir sind Nachbarn! )</li>
                         
        </ul>
      </div>
    </div>;
      // make pages here (carousel like)
  }