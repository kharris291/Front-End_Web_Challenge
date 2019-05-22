import React, { Component } from 'react';
import {  Container, Grid, Button } from 'semantic-ui-react'


class FoodDetails extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)    
  }

  handleSubmit(){
    if(this.props.Type == 'Add'){
       var item = {
        category: this.props.category,
        price: this.props.price,
        quantity: this.props.quantity
      }

      this.props.handleUpdate(item);
    }else{

      this.props.handleRemoval();
    }
  }

  render(){
    return(
      [
        <Container>
          <Grid textAlign="center" centered columns={4}>
            <Grid.Column className="itemDetails">
              <h3>{this.props.category}</h3>
            </Grid.Column >
            <Grid.Column  className="itemDetails">
              <h3>{this.props.price}</h3>
            </Grid.Column>
            <Grid.Column className="itemDetails">
              <h3>{this.props.quantity}</h3>
            </Grid.Column >
            <Grid.Column className="itemDetails">
              {this.props.Type == 'Add' ? <Button onClick={this.handleSubmit} > Add Item</Button> : <Button onClick={this.handleSubmit} > Remove Item</Button> }
            </Grid.Column >
          </Grid >
        </Container>
            
        ]
    )
  }
}


export default FoodDetails;