import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class Menu extends Component {
    constructor(props) {
        super(props);  
    this.state={
      selectedDish: null
    };
       
    }  
    
    onDishSelect(dish){
      this.setState({selectedDish: dish})
      console.log('selected Dish is ', this.state.selectedDish)
    }


    renderDish(dish){
        if(dish!=null){
          return(
          <div className='col-5 md-12 m-1'>
            <Card>
              <Card.Img width="100%" src={dish.image} alt={dish.name}/>
              <Card.Body>
                <Card.Title>{dish.name}
                </Card.Title>
                <Card.Text>{dish.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
       )}  else{
          return <div></div>
        }
    }

    
    
    

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id}  className="col-12 col-md-5 m-1" >
                  <Card key={dish.id} >
                  <Card.Img width="100%" src={dish.image} alt={dish.name} />
                  <Card.Body>
                      <Card.Title>{dish.name}</Card.Title>
                      <Card.Text>   {dish.description}   </Card.Text>
        <Button variant="primary"  onClick={()=> this.onDishSelect(dish)}>select this dish</Button>
      </Card.Body>
                  
                </Card>
              </div>
            );
        });

        return (
          
          <div className="container">
            <div className="row">
            
                  {menu}

                
            </div>

            <div className="row">
      {this.renderDish(this.state.selectedDish)}

        </div>

      </div>

        );
    }
  }

export default Menu;