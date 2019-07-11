import React from 'react';
import global from "./global.svg";
import pic from './pic.svg';

class Navbar extends React.Component{
  render(){
  
     return(
          <nav style={{padding:"30px"}} className="navbar navbar-expand-lg navbar-yellow bg-light">
          <img className="grow bw2 shadow-5" src={global} height="175" width="175"/>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a style={{padding:"30px"}} class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      
      </ul>
      </div>

              
                <input onChange={()=>this.props.chng(event)}
                     placeholder='Search Countries'/>
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.props.click}>Submit</button>    
        
              
              
          
        </nav>
     );
}

}

export default Navbar;