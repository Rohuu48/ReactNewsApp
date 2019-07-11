import React from 'react';


class CountryList extends React.Component{
    render(){
        return(
            <div>
            {countries.map((item)=>
               
                   <button onClick={()=>this.props.change(item)}>{item}</button>
              
                
            )}
        
        </div>
        );
    }
}

export default CountryList;