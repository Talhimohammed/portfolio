import React from 'react' ; 


function cardItem(props) {
    return (
        <>
        <li className="cards__item">
          <a href={props.path} className="cards__item__link">
            <figure className="cards__item__pic-wrap" data-category ={props.label}> 
            
              <img src={props.src} alt="Travel" className="cards__item__img"/>
            
            </figure> 

            <div className="cards__item__info"> 
    <div className="cards__item__text" >{props.text}</div>
            </div>
          </a>
        </li>  
     </>
    )
}

export default cardItem
