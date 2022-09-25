import React, {Component} from "react";
import Menu from "./MenuComponent";
import {DISHES} from '../shared/dishes';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
        };

    }
    render(){
    
        return(
            <div>
            <Menu dishes={this.state.dishes}/>      
            </div>
          
        )
    }
}

export default Home;