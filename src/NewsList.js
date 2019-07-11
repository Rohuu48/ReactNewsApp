import React from 'react';
import NewsHead from './NewsHead.js'
import './NewsList.css';

class NewsList extends React.Component{
    

    render(){
        if(this.props.empty){
            return(
                <h1>OOPS!THE COUNTRY YOU ARE SEARCHING FOR DOES NOT EXIST</h1>
            );
        }
        else{
            return(
                <div style={{textAlign:"justify"}}>
                
                {
                this.props.news.map(
                    (item)=><NewsHead  description={item.description} image={item.urlToImage}/>
                )
                }
                
            </div>
    
            );
        }
    }
}
export default NewsList