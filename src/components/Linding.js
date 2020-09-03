import React from 'react' ; 
import { Grid, Cell } from 'react-mdl'; 
import './Linding.css'  ;

function Linding() {
    return (
    <div id="AboutMe" >     
        <div style={{width: '100%', margin: 'auto'}} className="About__Container">
        <Grid className="landing-grid">
          <Cell col={12}> 
            <div className="aboutme_text">A LITTLE ABOUT ME</div>
            <img
              src="images/mypic.png"
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Junior Software Engineer</h1>
           
          <p> Selenium | React | Spring Boot | Design Patterns | DevOps | IoT</p> 
          <p className="about_me">I was born in 1997 , I live in Casablanca Morocco and I’m currently studying at National School of Computer Science and Systems Analysis, one of the biggest Computer Science schools in Morocco , I’m focusing now on Devops technologies ( Azure / AWS ) / Java  , I enjoy collaborating with others to gain different perspectives to refine strategies ,  my main   interests  : Software architecture , Microservices , DevOps  , Java/ Spring Boot , Javascript / React Js  , Learning new programming languages .</p>

        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mohammed-talhi-3b4bb21a4/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* Github */}
          <a href="http://github.com/Talhimohammed" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/talhimohammed1" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a> 
          <a href="//api.whatsapp.com/send?phone=+212659884493" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-whatsapp-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div> 
      </div>
    )
}

export default Linding ; 
