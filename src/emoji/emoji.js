import React from 'react';
import './emoji.css';

function emoji(props) {
return(
<div>
<div className="Emo_card"> 
<h3 className="heading">{props.name}</h3>
<p className="image"><span>{props.image}</span></p>
<p className="detail">{props.detail}</p>



</div>


</div>

);    

}


export default emoji;