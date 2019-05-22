import React, { Component } from 'react';
import {  Header, Message, Segment, Container, Form, Grid, Button } from 'semantic-ui-react'
import FoodDetails from './FoodDetails.jsx'


class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.state;
    this.handleRemoval = this.handleRemoval.bind(this);
    this.applyCode = this.applyCode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleRemoval(args){
    var inList = false;

    this.props.handleRemoval(args);
    // console.log(this)

  }

  applyCode(args){
    this.props.checkPromoCode()
    console.log("this.props.checkPromoCode")
    console.log(this)
  }

  handleChange(e, { name, value }){
    console.log(name)
    this.props.inputPromoCode({ name, value })
  }


  render() {
    const { error } = this.props.state
    var shoppingCartList = this.props.state.shoppingCart.map((fooditems, i) => (
        <FoodItem state={fooditems} key={fooditems.name} handleRemoval={this.handleRemoval}/>
    ));

    // console.log(error)

    var totalValue =0
    for (var i = this.props.state.shoppingCart.length - 1; i >= 0; i--) {
      totalValue+= this.props.state.shoppingCart[i].price * this.props.state.shoppingCart[i].quantity
    }
    var totalDisplay = parseFloat(totalValue).toFixed(2)
    
    var discountDisplay = 0;
    
    if(this.props.state.numberOfDrinksAdded >= 10){
      discountDisplay = parseFloat(discountDisplay) + parseFloat(this.props.state.numberOfDrinksTotal / 10).toFixed(2)
    }

    if(totalDisplay > 99.99){
      discountDisplay = parseFloat(discountDisplay) - 20

    }

    if(this.props.state.numberOfBakingItemsAdded >= 50){
      discountDisplay = parseFloat(discountDisplay) + 5
    }

    var discountList = this.props.state.promotionApplied.map((promotionApplied) => (
        <DiscountListsContainer state={promotionApplied} key={promotionApplied.name} />
    ));    
    return (
      <Grid.Column>
        <Container>
          <Header as='h2'>Shopping Cart Summary</Header>
            <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
              {shoppingCartList}
            </Grid>
            <Message info>
              <Message.Header>Total</Message.Header>
              <p>£{totalDisplay}</p>
            </Message>

            <Form onSubmit={this.applyCode}>
              <Segment stacked>
                <Form.Input
                  label="Apply Voucher Code?"
                  iconPosition="left"
                  name="promoCode"
                  placeholder="Voucher Code"
                  onChange={this.handleChange}
                />
                <Form.Button content="Apply Voucher" />
              </Segment>
            </Form>

            <Message info>
              <Message.Header>Discounts</Message.Header>
              <Message.List key="Discounts" >
                {discountList}
                {parseFloat(discountDisplay) != 0 ? <div>Discounts on total is {parseFloat(discountDisplay).toFixed(2)}</div> : <div className="none"/> }
              </Message.List>
            </Message>
            {error === "" ? '' : <div><Message error header="Invalid." content={error} /></div>}
        </Container>
      </Grid.Column>
      
    );
  }
}



class FoodItem extends Component {
  constructor(props){
    super(props)
    this.state = this.props.state
    this.handleRemoval= this.handleRemoval.bind(this)
  }

  handleRemoval(args){
    var itemList ={
      key: this.state.key
    }
    this.props.handleRemoval(itemList);
  }

  render(){
    if(this.props.state.quantity > 0){
      var [splitName, amount]= this.state.name.split(',');
      // console.log(splitName)
      return(
        [
          <Grid.Column className="itemName">
            <h3>{splitName}</h3>
            <h3>{amount}</h3>
          </Grid.Column >,
          <Grid.Column className="itemContent">
            {this.props.state.key === 1 ?  <FoodDetailsTitle category="Category" price="Price" quantity="Quantity" key="Title" /> : ''}
            <FoodDetails category={this.props.state.category} price={this.props.state.price} quantity={this.props.state.quantity} keys={this.props.state.key} handleRemoval={this.handleRemoval} type="Remove" />
          </Grid.Column>
              
        ]
      )
    }else{
      return(
        <div style={{display:'none'}}></div>
      )
    }
  }
}

class FoodDetailsTitle extends Component {
  constructor(props){
    super(props)
    this.state = this.props.state

  }

  render(){
    // console.log(this.props)
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

class DiscountListsContainer extends Component {
  constructor(props){
    super(props)
console.log(this.props)
  }

  render(){
      return(
        (this.props.state.applyMe == true ? <Message.Item>{this.props.state.content}</Message.Item> : <div className="none"/> )
      )
  }
}


export default ShoppingCart;