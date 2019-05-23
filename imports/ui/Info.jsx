import React, { Component } from 'react';

import {  Header, Message, Segment, Container, Form, Grid, Button } from 'semantic-ui-react';
import FoodDetails from './FoodDetails.jsx'


class Info extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.state;
    this.handleUpdate = this.handleUpdate.bind(this);
  }


  handleUpdate(args){
    var inList = false;
    this.props.addInState(args)


  }

  render() {
    var buildUpList = this.props.state.food.map((fooditems, i) => (
        <FoodItem state={fooditems} key={fooditems.key.toString()} handleUpdate={this.handleUpdate}/>
    ));

    return (
      <Grid.Column>
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            {buildUpList}
          </Grid>
        </Container>
      </Grid.Column>
      
    );
  }
}



class FoodItem extends Component {
  constructor(props){
    super(props)
    this.state = this.props.state
    this.handleUpdate= this.handleUpdate.bind(this)
  }

  handleUpdate(args){
    var itemList ={
      key: this.state.key,
      name: this.state.name,
      category: args.category,
      price: args.price,
      quantity: args.quantity
    }
    this.props.handleUpdate(itemList);
  }

  render(){
    if(this.props.state.quantity > 0){
      return(
        [
          <Grid.Column className="itemName">
            <h3>{this.state.name}</h3>
          </Grid.Column >,
          <Grid.Column className="itemContent">
            {this.props.state.key === 1 ?  <FoodDetailsTitle category="Category" price="Price" quantity="Quantity" key="Title" /> : ''}
            <FoodDetails category={this.props.state.category} price={this.props.state.price} quantity={this.props.state.quantity} keys={this.props.state.key} handleUpdate={this.handleUpdate} Type="Add" />
          </Grid.Column>
              
        ]
      )
    }else{
      return(<div style={{display:'none'}}></div>)
    }
  }
}

class FoodDetailsTitle extends Component {
  constructor(props){
    super(props)
    this.state = this.props.state

    this.handleSubmit = this.handleSubmit.bind(this)    
  }

  handleSubmit(){
    var item = {
      category: this.state.category,
      price: this.state.price,
      quantity: this.state.quantity
    }

    this.props.handleUpdate(item);
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
            <Grid.Column className="itemDetails" />
          </Grid >
        </Container>
            
        ]
    )
  }
}


export default Info;
