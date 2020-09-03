import React , {useState , useEffect } from 'react' ;
import  { Link }  from 'react-router-dom' ; 
import './NavBar.css' ;

function NavBar() { 

     const [click,setClick] = useState(false);  
     const [button,setButton] = useState(true); 

     const handleclick = () => setClick(!click) 
     const closeMobileMenu = () => setClick(false);   
   
     const showButton = () => { 
          if(window.innerWidth <=960 ) { 
              setButton(false);
          }else{ 
              setButton(true);
          }
     }  

     useEffect(() => {
        showButton();
      }, []);
 
     window.addEventListener('resize',showButton) ; 

    return ( 
          
    
             <nav className="navbar"> 
                <div className="navbar-container"> 
                 <Link to='/'  className="navbar-logo" onClick={closeMobileMenu} > 
                 <i class="fab fa-tumblr-square"></i>&nbsp;alhi
                 </Link>   
                 <div className='menu-icon' onClick={handleclick}>  
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                 </div>   
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>  
                     <li  className="nav-item"><a href="#projects" className='nav-links' onClick={closeMobileMenu} >Projects</a></li>  
                     <li className="nav-item"><a href="#AboutMe" className='nav-links' onClick={closeMobileMenu}>About me</a></li>  
                     <li className="nav-item"><a href="#ContactMe" className='nav-links' onClick={closeMobileMenu}>Contact me</a></li>  
                     <li className="nav-item"><a href="#certifications" className='nav-links' onClick={closeMobileMenu}>Certifications</a></li>        
                  </ul>            
             </div> 
             </nav> 
           
         
    )
}

export default NavBar ; 
