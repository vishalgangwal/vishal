import React from 'react';
import './card.css';

function card(props){
return( 
<div>    
<h1 className="heading outerpart">Contect</h1>    
<div className="card full_card">
  <div className="top card_top">
    <h3>{props.name}</h3>
    <img className="image" src={props.im} alt="avtar" />

  </div>
  <div className="bottom card_bottom">
    <p className="info">{props.year}</p>
    <p className="info">{props.num}</p>
  </div>
 </div>
</div>    )
}
export default card;