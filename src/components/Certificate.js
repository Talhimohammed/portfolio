import React from 'react' ;   


function Certificate(props) {
    return (
        <>
        <li className="certificates__item">
          <a href={props.path} className="certificates__item__link">
            <figure className="certificates__item__pic-wrap" data-category ={props.label}> 
            
              <img src={props.src} alt="Travel" className="certificates__item__img"/>
            
            </figure> 

            <div className="certificates__item__info"> 
            <div className="certificates__item__text">{props.text}</div>
            </div>
          </a>
        </li>  
     </>
    )
}

export default Certificate ; 
