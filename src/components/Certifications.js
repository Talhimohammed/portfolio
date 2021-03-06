import React from 'react' ;  
import './Certifications.css' ;  
import "animate.css/animate.min.css";  
import Certificate from './Certificate' ;  
import ScrollAnimation from 'react-animate-on-scroll' ;


function Certifications() {
    return (
        <div className="certificates"> 

        
        <h1 id="certifications">CERTIFICATIONS</h1>  
    

     <div className="certificates__container"> 
     
       <div className="certificates__wrapper"> 
       
          <ul className="certificates__items">  

          <ScrollAnimation animateIn="fadeIn" duration="2">
                <Certificate
                 src="images/deepL.jpg" 
                 text="" 
                 label=""  
                 path='https://www.coursera.org/account/accomplishments/records/VNVWJUNJXTV6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
                />    
            </ScrollAnimation>     
            <ScrollAnimation animateIn="fadeIn" duration="2">
                <Certificate
                 src="images/designP.jpg" 
                 text="" 
                 label=""  
                 path='https://www.coursera.org/account/accomplishments/records/3HQJY66BUV7R'
                />   
            </ScrollAnimation>     
            <ScrollAnimation animateIn="fadeIn" duration="2">
                <Certificate
                 src="images/ObjectD.jpg" 
                 text="" 
                 label=""  
                 path='https://www.coursera.org/account/accomplishments/records/2XNQYYBLTHTK'
                /> 
            </ScrollAnimation>    
            <ScrollAnimation animateIn="fadeIn" duration="2">  
                <Certificate
                 src="images/react.jpg" 
                 text="" 
                 label=""  
                 path="https://www.coursera.org/account/accomplishments/records/5UT4YNKWRFW2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                />     
            </ScrollAnimation>     
            <ScrollAnimation animateIn="fadeIn" duration="2">
                <Certificate
                 src="images/agile.jpg" 
                 text="" 
                 label=""  
                 path='https://www.coursera.org/account/accomplishments/records/26WBZEHDLK3J?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
                />  
            </ScrollAnimation>     

          </ul>
         
       </div>
     
     </div>

   </div> 
    )
}

export default Certifications ; 
