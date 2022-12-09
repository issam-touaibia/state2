
import Button from 'react-bootstrap/Button';
import './App.css'
import  React,{Component}  from "react";
import img from './Profile/pic.jpg'
import Profile from './Profile/Profile';
  class App extends React.Component{
    
    constructor(props){
      
    super(props) 
    
   
this.state={person:{
  fullName:'Issam Touaibia',
  profession:"Web development",
  bio:" I am a kung fu instructor who love the sport since  I was young and want to progress  in this field for the better via web devoloppment  " ,
  Photo:< img src={img} alt="image"/>

  },
   
  show: false
  
    }
   
 }
 

render(){


  
return(
 
  <div className='app-header'>
  {
    this.state.show?
      <div className=''>
        <h1 className='fullName'>{this.state.person.fullName}</h1>
        <h2 className='bio'>{this.state.person.bio}</h2>
        <h1 className='profession'>{this.state.person.profession}</h1>
        <div className='Photo'>{ this.state.person.Photo}</div>
        <Profile>
       </Profile>
      </div> 
    :null
      
         
    
  }
      <Button variant="link">Link</Button>
   <Button variant="success" onClick={()=> this.setState({...this.state,show:!this.state.show})} >Click Me</Button>
  </div>

);
 
}
 
}

export default App;