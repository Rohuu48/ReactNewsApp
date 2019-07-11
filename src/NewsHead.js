import React from 'react';
import giphy from './giphy.gif';
import './App.css';

class NewsHead extends React.Component{
    constructor(props){
        super(props);
        this.state={
            image:giphy
        }
    }
    loading=()=>{
        
        this.setState(
            {
                image:this.props.image
            }
            )

    }

   
    render(){
        
        return(
            <div className='bg-light-white dib br3 pa2 ma2 grow bw2 shadow-5' style={{display:"flex",flexDirection:"row", padding:"50px"}}>
            
            <img src={this.state.image} alt="articleImage" onLoad={this.loading} height="200" width="200"/>
            <p style={{padding:"20px"}}>{this.props.description}</p>
            </div>
        );
        
    }
}
export default NewsHead;