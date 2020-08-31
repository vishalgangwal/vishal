import React from 'react';
import './App.css';
import TodoList from './2.card/todo-list.jsx';

//import Contacts from './Contacts';
//import Card from './card.jsx';
// card by map function
// function createCard(Contacts){
//   return( <Card key={Contacts.id} name={Contacts.name} im={Contacts.img} year={Contacts.year} num={Contacts.num} /> );
// }


// import Emoji from './emoji/emoji.js';
// import Emoji_arr from './emoji/emoji_arr.js';

// function createEmoji(Emoji_arr){
// return(
//   <Emoji key={Emoji_arr.id} name={Emoji_arr.name} image={Emoji_arr.image} detail={Emoji_arr.description} />
// );  
// }

//import './conditional_render/login.css';
//import Loginpage from './conditional_render/loginpage.jsx';

//var time=new Date().toLocaleTimeString();



function App() {
// setInterval(updateTime,1000);
// const [time, setTime]=useState(now);
// function updateTime(){
//   const againnow=new Date().toLocaleTimeString();  
//   setTime(againnow);

// }

//const [ismouse,mouseMove]= useState(false);

// function handleMoveOut() {
//    mouseMove(false);
// }

// const [fullname, changedFullName]=useState({
//   fname:"",
//   lname:"",
//   email:""
// })

// function handleChange(event){
//   const {value,name} =  event.target; 
//  changedFullName(preValue =>{
//   if(name==='fname'){
//     return{fname:value,
//     lname:preValue.lname,
//     email:preValue.email
//   }
//   }
//   else if(name==='lname'){
//     return{
//       fname:preValue.fname,
//       lname:value,
//       email:preValue.email
//     }
//   }
//   else if(name==='email'){
//     return{
//       fname:preValue.fname,
//       lname:preValue.email,
//       email:value
//     }
//   }

//  } )

// }

return (
    <div className="App">
      <div>
      {/* <Card 
       name={Contacts[0].name}
       im={Contacts[0].img}
       year={Contacts[0].year}
       num={Contacts[0].num}
       />
      <Card 
      name={Contacts[1].name}
      im={Contacts[1].img}
      year={Contacts[1].year}
      num={Contacts[1].num}
      /> 
      */}
      </div>      

      <TodoList />

      {/* <h3 className='etitle'>Emoji_Menia</h3>
      {Emoji_arr.map(createEmoji)} */}
     
      {/* <h1>{time} </h1>      
      <button onClick={updateTime}> Get Time</button> */}

      {/* <h2>hi!..{fullname.fname}{fullname.lname} </h2>
      <p>{fullname.email}</p>
     <input name="fname" placeholder="enter first name" onChange={handleChange} value={fullname.fname} />
     <input name="lname" placeholder="enter last name"  onChange={handleChange} value={fullname.lname} />
     <input name="email" placeholder="enter e-mail"  onChange={handleChange} value={fullname.email} />
     <button type="submit" >Submit</button> */}


    </div>
  );
}

export default App;
