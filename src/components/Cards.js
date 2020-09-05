import React from 'react' ; 
import CardItem from './CardItem' ;  
import './Cards.css' ;  
import "animate.css/animate.min.css";  
import ScrollAnimation from 'react-animate-on-scroll' ;


function Cards() {
    return ( 
        
        <div id="cards"> 
             <h1 id="projects">SOME OF MY PAST PROJECTS</h1>  
          <div className="cards__container"> 
            <div className="cards__wrapper"> 
               <ul className="cards__items"> 
               <ScrollAnimation animateIn="fadeIn" duration="2">
                    <CardItem 
                      src="images/corona_logo.jpg" 
                      text="With this simple android application , you can track the current impact of the coronavirus pandemic and its spread throughout the world ( cases , deaths , recoveries and other statistics ) ." 
                      label="Android Application"  
                      path='https://github.com/Talhimohammed/Corona_Tracker'
                    />   
              </ScrollAnimation>      
               <ScrollAnimation animateIn="fadeIn" duration="2">  
                    <CardItem 
                      src="images/proltech.png" 
                      text="PROLTECH is a desktop application that allows you to manage and monitor your IT projects , by using this app you can create projects , invite consultants , and monitor project's performance ..." 
                      label="Desktop Application"  
                      path='https://github.com/Talhimohammed/IT_Project_Management'
                    />   
              </ScrollAnimation>    
               <ScrollAnimation animateIn="fadeIn" duration="2">  
                    <CardItem 
                      src="images/healthcare2.jpg" 
                      text="This HealthCare application allows Doctors to monitor their patients and manage the patient's medical records and appointments , 
                            and it also provides a GPS system with router planner wich makes it easier to find doctor's office .   
                            " 
                      label="Android Application"  
                      path='https://github.com/Talhimohammed/HealthCare-App-'
                    />   
               </ScrollAnimation>     
               </ul> 
               <div className="more__projects">You wanna see more projects ! check my Github account  <a href="https://github.com/Talhimohammed">CLICK HERE</a></div>
            </div>
          </div>
        </div>  
    )
}

export default Cards ; 
