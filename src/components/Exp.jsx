import React from "react"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";


export default function Exp(){
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // NA ALLAKSW XROMA TIS BILIES
    return <div className="main"> 
      
      <Slider {...settings}>
        <div>
          <h3>Wordpress Administrator (pro bono assignment)</h3>
          <h5>at Hellenic Society of Daseinsanalysis</h5>
          <h6> November 2021 - ongoing</h6>  
          <br/>
          <br/>
          <p>
              1. Updating the website's interface by:
              ▪ restructruring the menu bar, to accomodate more content
              ▪ reshuffling content across different tabs, creating new functionalities on the menu and assigning content to the most appropriate tab, increasing user friendliness
              ▪ re-styling the interface design, optimising it for User Experience
              </p>
              <p>2. Providing consultancy on necessary updates that needed to be run and on how to content manage the website themselves.
          </p>
        </div>
        <div>
          <h3> Fullstack JavaScript Bootcamp Student </h3>
           <h5>at Spiced Academy</h5>
            <h6>September 2019 - December 2019</h6>
            <br/>
            <br/>
            <p> At Spiced Academy I took part in multiple projects where i was able to learn more about JS frameworks and evolve my skills around them.
            These were:<br/> 

            Social Network (React, Node.js, PostgreSQL, Socket.IO) React-based authenticated social network with chat functionality.<br/> 
            Imageboard (Vue.js, Node.js/Express, PostgreSQL) A single-page application built with Vue. Users can post an image, add a title, description and comment on images.<br/> 
            Petition (Handlebars, Node.js/Express, PostgreSQL)Heroku deployed app providing users the opportunity to sign a petition.<br/> 
            Portfolio Page (React ,Node.js, PostgreSQL) React-based project using functional components with admin role who can upload images with tags.
          </p>
            
      </div>
      <div>
      <h3>Content Moderator</h3>
           <h5>at Arvato Bertelsmann</h5>
            <h6>January 2017 - March 2019 
            Community Standards | Content Moderator</h6>
            <br/><br/>
            <p> High level performance with attention to detail, constantly achieving company’s targets.
            Good team player always contributing with positive spirit and high energy. 
          </p>
            
      </div>
    
     
    </Slider>
    </div>;
  }