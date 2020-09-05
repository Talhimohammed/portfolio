import React  , { useState } from 'react' ; 
import '../Contact.css' ; 

function Contact() { 

    const [Click,setClick] = useState(false) ;  
     
    const copyEmailToClipboard = () => {  

            const mark = document.createElement('textarea');
            mark.setAttribute('readonly', 'readonly');
            mark.value = 'talhimohammed507@gmail.com' ; 
            mark.style.position =  'fixed' ; 
            mark.style.top = 0 ; 
            mark.style.clip = 'rect(0, 0, 0, 0)'
            document.body.appendChild(mark) ; 
            mark.select() ; 
            document.execCommand('copy') ; 
            document.body.removeChild(mark) ;  
            setClick(true); 
            setTimeout(() => { setClick(false) }, 3000);
    }

    return ( 
      <section id="ContactMe">
        <div className="contact"> 
          
           <h1>Get In Touch ? </h1> 

           <p>Hey , would you like to talk about a project , an Idea , Job or Intership offer !  what are you waitting for ! Email me <i class="far fa-smile-beam"></i> </p> 

          
            <div  className="animated-button" onClick={copyEmailToClipboard}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Click here to copy my Email 
              
            </div>  

            <h4> { Click && "EMAIL COPIED" } </h4> 

            
        </div> 
        </section>
    )
}

export default Contact ; 
