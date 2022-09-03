import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class DishDetails extends Component{
    constructor(props){
        super(props);

    }

    render(){
        if(dish!=null){
            return(
                <div className='col-5 md-5 m-1'>
                <Card>
                  <Card.Img width="100%" src={dish.image} alt={dish.name}/>
                  <Card.Body>
                    <Card.Title>{dish.name}
                    </Card.Title>
                    <Card.Text>{dish.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )} else{
                return <div></div>
            }
       
        
    }
}

export default DishDetails;