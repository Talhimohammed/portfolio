import React , { useState , useEffect } from 'react' ; 
import './videoSection.css' ;   
import  { Button } from './Button' ;   
import  AnimationText  from './AnimationText' ;  
import ScrollAnimation from 'react-animate-on-scroll' ;

function  VideoSection() { 
 
             const [click,setClick]  =   useState(false);    

             const ButtonClick = ()  =>  setClick(!click) ; 

    return (  
      <> 
        <div className="image-container">   
              
              
              <h1><ScrollAnimation animateIn="fadeIn" duration="2">
              Hi , I'm mohammed   
             </ScrollAnimation></h1> 
               <AnimationText />
              <div className="hero-btns">  
                <Button  
                       className='btns'  
                       buttonStyle='btn--outline' 
                       buttonSize='btn--large'  
                       onClick={ButtonClick}
                       > 
                       Download Resume <i class="fas fa-download"></i>
                       
                </Button>   

              </div> 

              {/* Modal content  */}
      
             <div id="myModal" className={click ? "Active__modal" : "Inactive__modal"}>
             <div className="modal-content">
                  <div className="modal-header">
                    <span className="close" onClick={ButtonClick}>&times;</span>
                     <div className="title">CHOOSE LANGUAGE</div>
                  </div>
                <div className="modal-body">
                         <a href="resumes/TALHI_RESUME_ENGLISH.pdf" onClick={ButtonClick} download>English</a>
                         <a href="resumes/TALHI_RESUME_FRENCH.pdf" onClick={ButtonClick} download>French</a>
                </div>
                <div className="modal-footer">

    ,           </div>
                  </div>
               </div>
            </div> 
      </>
       
    )
}

export default VideoSection ;  
