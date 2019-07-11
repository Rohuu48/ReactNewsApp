import React from 'react';
import NewsList from './NewsList.js';
import giphy2 from './giphy2.gif';
import Scroll from './Scroll';
import Navbar from './Navbar';
import {countries} from './countries';
import './NewsApp.css';

class NewsApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            newsArray:[],
            loader:false,
            searchField:'',
            empty:true
        }
    }

    change=(event)=>{
        this.setState({
            searchField:event.target.value
        })
    }

    clicked=()=>{
        countries.map((country)=>{
            if(this.state.searchField.toLowerCase()==country.name.toLowerCase()){
                let cod=country.code.toLowerCase()
                console.log(country)
                console.log(cod)
                this.countrynews(cod)
            }
        })
        
    }

    countrynews=(country)=>{
     this.setState(
         {
         loader:true,
         newsArray:[]
        }
     );
        console.log(country)
        fetch(`https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=a9b320f1f47644f99dab6b9407db90b0`).then((response)=>{
         return response.json();
        }).then((json)=>{
            console.log(json);
            this.setState({
                newsArray:json.articles,
                loader:false,
                empty:false
                },()=>{
                console.log(this.state.news);
               
            })

        })
    }

    render(){
        return(<div>
            <Navbar chng={this.change} click={this.clicked}/>
        
            {this.state.loader && <img src={giphy2} class='center' height="500" width="200" />}
            <Scroll>
            <NewsList news={this.state.newsArray} check={this.state.empty} loading={this.state.loader}/>
            </Scroll>
            </div>
        );
    }
}
export default NewsApp;