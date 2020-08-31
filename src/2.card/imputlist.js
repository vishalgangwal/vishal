import React from 'react';


function inputList(props){

return(
<div onClick={()=>{
props.onChecked(props.id)
}}>  
<li>{props.myit}</li>

</div> 

);

}
export default inputList;