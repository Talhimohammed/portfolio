import React from 'react' ;   
import { Link } from "react-router-dom";


function Certificate(props) {
    return (
        <>
        <li className="certificates__item">
          <a href={props.path} className="certificates__item__link">
            <figure className="certificates__item__pic-wrap" data-category ={props.label}> 
            
              <img src={props.src} alt="Travel" className="certificates__item__img"/>
            
            </figure> 

            <div className="certificates__item__info"> 
            <h5 className="certificates__item__text" >{props.text}</h5>
            </div>
          </a>
        </li>  
     </>
    )
}

export default Certificate ; 
