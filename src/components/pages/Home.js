import React from 'react' ; 
import '../../App.css'    ; 
import  VideoSection  from '../videoSection' ; 
import   Cards  from '../Cards'  ;  
import Linding from '../Linding' ;  
import Contact from './Contact'  ;  
import Certifications from '../Certifications'; 
import ScrollToTop from '../ScrollToTop';
import ScrollIndicator from '../ScrollIndicator'; 
import '../ScrollTop.css' ; 
function Home() {
    return (
        <>  
             <VideoSection />    
             <ScrollToTop />  
             {/* this is not mandatory for scrolling to the top */}
             <ScrollIndicator /> 
             <Cards />  
             <Certifications />
             <Linding /> 
             <Contact /> 
        </>
    );
}

export default Home ;
