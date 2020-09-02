import React from 'react';
import './App.css'; 
import Navbar from './components/NavBar' ;  
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;  
import Home from './components/pages/Home' ;  
import Footer from  '../src/components/footer' ;   
import '../src/components/ScrollTop.css' ; 
import '../src/components/ScrollIndicator' ;
import '../src/components/ScrollToTop' ;





function App() {
  return (
    <>
      <Router>   
        <div>
        <Navbar/>     
       
        <Switch>  
            <Route exact component={Home}/>   
            
        </Switch>  
        <Footer />
       </div>  
     
     </Router>   
     </> 
    
    
  );
} 

export default App;
