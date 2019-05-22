import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react'
import ShoppingCart from './ShoppingCart.jsx';
import Info from './Info.jsx';


class App extends Component {
	constructor(props) {
		super(props);

		var today =new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		if(dd<10) dd='0'+dd;
		if(mm<10) mm='0'+mm;

		var date = today.getFullYear() + '-' + mm + '-' + dd + "T" +
			today.getHours()+ "-" + today.getMinutes() +"-" +today.getSeconds();
		this.state = {
			food: [
				{
					key: 1,
					name: "Chicken Fillets, 6 x 100g",
					category: "Meat & Poultry",
					price: "4.50",
					quantity: 12
				},
				{
					key: 2,
					name: "Sirlion Steaks, 4 x 6-8oz",
					category:"Meat & Poultry",
					price: "45.70",
					quantity: 6
				},
				{
					key: 3,
					name: "Whole Free-Range Turkey, 1 x 16-18lbs",
					category:"Meat & Poultry",
					price: "43.20",
					quantity: 8
				},
				{
					key: 4,
					name: "Granny Smith Apples, 4 x 16 each",
					category: "Fruit & Vegtables",
					price: "3.75",
					quantity: 0
				},
				{
					key: 5,
					name: "Loose Carrots, 4 x 20 each",
					category: "Fruit & Vegtables",
					price: "2.67",
					quantity: 2
				},
				{
					key: 6,
					name: "Mandarin Oranges, 6 x 10 x 12",
					category: "Fruit & Vegtables",
					price: "12.23",
					quantity: 8
				},
				{
					key: 7,
					name: "Cauliflower Florets, 10 x 500g",
					category: "Fruit & Vegtables",
					price: "5.00",
					quantity: 5
				},
				{
					key: 8,
					name: "Coca-Cola, 6 x 2L",
					category: "Drinks",
					price: "8.30",
					quantity: 6
				},
				{
					key: 9,
					name: "Still Mineral Water, 6 x 24 x 500ml",
					category: "Drinks",
					price: "21.75",
					quantity: 9
				},
				{
					key: 10,
					name: "Sparkling Mineral Water, 6 x 24 x 500ml",
					category: "Drinks",
					price: "25.83",
					quantity: 16
				},
				{
					key: 11,
					name: "Mars bar, 6 x 24 x 50g",
					category: "Confectionary & Desserts",
					price: "42.82",
					quantity: 4
				},
				{
					key: 12,
					name: "Peppermint Chewing Gum, 6 x 50 x 30g",
					category: "Confectionary & Desserts",
					price: "35.70",
					quantity: 6
				},
				{
					key: 13,
					name: "Strawberry Cheesecake, 6 x 50 x 30g",
					category: "Confectionary & Desserts",
					price: "8.52",
					quantity: 0
				},
				{
					key: 14,
					name: "Vanilla Ice Cream, 6 x 4L",
					category: "Confectionary & Desserts",
					price: "3.80",
					quantity: 2
				},
				{
					key: 15,
					name: "Plain Flour, 10 x 1kg",
					category: "Baking/Cooking Ingredients",
					price: "6.21",
					quantity: 4
				},
				{
					key: 16,
					name: "Icing Sugar, 16 x 750g",
					category: "Baking/Cooking Ingredients",
					price: "9.38",
					quantity: 6
				},
				{
					key: 17,
					name: "Free-Range Eggs. 10 x 12 each",
					category: "Baking/Cooking Ingredients",
					price: "9.52",
					quantity: 9
				},
				{
					key: 18,
					name: "Caster Sugar, 16 x 750g",
					category: "Baking/Cooking Ingredients",
					price: "12.76",
					quantity: 13
				},
				{
					key: 19,
					name: "Kitchen Roll, 100 x 300 sheets",
					category: "Miscellaneous Items",
					price: "43.92",
					quantity: 19
				},
				{
					key: 20,
					name: "Paper Plates, 10 x 200 each",
					category: "Miscellaneous Items",
					price: "16.19",
					quantity: 7
				}
			],
			shoppingCart:[
				{
					key: 1,
					name: "Chicken Fillets, 6 x 100g",
					category: "Meat & Poultry",
					price: "4.50",
					quantity: 0
				},
				{
					key: 2,
					name: "Sirlion Steaks, 4 x 6-8oz",
					category:"Meat & Poultry",
					price: "45.70",
					quantity: 0
				},
				{
					key: 3,
					name: "Whole Free-Range Turkey, 1 x 16-18lbs",
					category:"Meat & Poultry",
					price: "43.20",
					quantity: 0
				},
				{
					key: 4,
					name: "Granny Smith Apples, 4 x 16 each",
					category: "Fruit & Vegtables",
					price: "3.75",
					quantity: 0
				},
				{
					key: 5,
					name: "Loose Carrots, 4 x 20 each",
					category: "Fruit & Vegtables",
					price: "2.67",
					quantity: 0
				},
				{
					key: 6,
					name: "Mandarin Oranges, 6 x 10 x 12",
					category: "Fruit & Vegtables",
					price: "12.23",
					quantity: 0
				},
				{
					key: 7,
					name: "Cauliflower Florets, 10 x 500g",
					category: "Fruit & Vegtables",
					price: "5.00",
					quantity: 0
				},
				{
					key: 8,
					name: "Coca-Cola, 6 x 2L",
					category: "Drinks",
					price: "8.30",
					quantity: 0
				},
				{
					key: 9,
					name: "Still Mineral Water, 6 x 24 x 500ml",
					category: "Drinks",
					price: "21.75",
					quantity: 0
				},
				{
					key: 10,
					name: "Sparkling Mineral Water, 6 x 24 x 500ml",
					category: "Drinks",
					price: "25.83",
					quantity: 0
				},
				{
					key: 11,
					name: "Mars bar, 6 x 24 x 50g",
					category: "Confectionary & Desserts",
					price: "42.82",
					quantity: 0
				},
				{
					key: 12,
					name: "Peppermint Chewing Gum, 6 x 50 x 30g",
					category: "Confectionary & Desserts",
					price: "35.70",
					quantity: 0
				},
				{
					key: 13,
					name: "Strawberry Cheesecake, 6 x 50 x 30g",
					category: "Confectionary & Desserts",
					price: "8.52",
					quantity: 0
				},
				{
					key: 14,
					name: "Vanilla Ice Cream, 6 x 4L",
					category: "Confectionary & Desserts",
					price: "3.80",
					quantity: 0
				},
				{
					key: 15,
					name: "Plain Flour, 10 x 1kg",
					category: "Baking/Cooking Ingredients",
					price: "6.21",
					quantity: 0
				},
				{
					key: 16,
					name: "Icing Sugar, 16 x 750g",
					category: "Baking/Cooking Ingredients",
					price: "9.38",
					quantity: 0
				},
				{
					key: 17,
					name: "Free-Range Eggs. 10 x 12 each",
					category: "Baking/Cooking Ingredients",
					price: "9.52",
					quantity: 0
				},
				{
					key: 18,
					name: "Caster Sugar, 16 x 750g",
					category: "Baking/Cooking Ingredients",
					price: "12.76",
					quantity: 0
				},
				{
					key: 19,
					name: "Kitchen Roll, 100 x 300 sheets",
					category: "Miscellaneous Items",
					price: "43.92",
					quantity: 0
				},
				{
					key: 20,
					name: "Paper Plates, 10 x 200 each",
					category: "Miscellaneous Items",
					price: "16.19",
					quantity: 0
				}
			],
			runningTotal:0,
			numberOfBakingItemsAdded: 0,
			numberOfDrinksTotal: 0,
			numberOfDrinksAdded: 0,
			absoluteTotals:0,
			promoCodeUsed: false,
			promoCodeInput: "",
			error:'',
			promotionApplied:[
				{
					name: "10PCDRINK",
					content: "Buying a bulk of drinks, recieve 10% reduction on drinks",
					applyMe: false
				},
				{
					name: "50GBPBACKINGGOODS",
					content: "£5 pounds off your order when spending £50.00 or more on Baking/Cooking Ingredients",
					applyMe: false
				},
				{
					name: "200FFPROMO",
					content: "You have applied the correct promo code. Spend £100 to get £20 off",
					applyMe: false
				}
			]
		};
    	this.updateState = this.updateState.bind(this);
    	this.removeItemParent = this.removeItemParent.bind(this);
    	this.addInState = this.addInState.bind(this);
    	this.checkPromoCode = this.checkPromoCode.bind(this);
    	this.inputPromoCode = this.inputPromoCode.bind(this);

	}

	updateState(name, value){
		this.setState({ [name]: value });
	}

	updateBalance(value){
		this.setState({ balance: (value) });
	}


	addInState = (attrs) => {
		
		var drinkAdded = false;
		var bakingItemAdded = false;
		var drinksTotal = 0;
		var bakingItemPrice = 0;

		{/* update the food list and shopping cart lists to show stock */}
		this.setState({
			food:this.state.food.map((item) => {
				if (item.key === attrs.key ) {
					if(item.quantity > 0){
						return {
							key: item.key,
							name: item.name,
							category: item.category,
							price: item.price,
							quantity: item.quantity  - 1,
						};
					}else{
						return {
							key: item.key,
							name: item.name,
							category: item.category,
							price: item.price,
							quantity: 0,
							error:"No More Stock Left"
						};
					}
				} else {
					return item;
				}
			}),
			shoppingCart:
				this.state.shoppingCart.map((item) => {
					if (item.key === attrs.key) {
						if(item.category =="Drinks"){
							drinkAdded=true
							drinksTotal = item.price
						}else if(item.category =="Baking/Cooking Ingredients"){
							bakingItemAdded=true
							bakingItemPrice=item.price
						}
						return {
							key: item.key,
							name: item.name,
							category: item.category,
							price: item.price,
							quantity: (item.quantity + 1)
						}						
					} else {
						return item;
					}
				}),
		});
			// console.log(bakingItemPrice)

		if(drinkAdded == true){
			this.setState({ numberOfDrinksAdded: (this.state.numberOfDrinksAdded + 1) })
			this.setState({ numberOfDrinksTotal: (parseFloat(this.state.numberOfDrinksTotal) + parseFloat(drinksTotal)) })
			
			if(this.state.numberOfDrinksAdded >= 10){
				var promotionApplied = this.state.promotionApplied;
				promotionApplied[0].applyMe = true;
				this.setState({ promotionApplied: this.state.promotionApplied })
			}
		}
		else if (bakingItemAdded == true ){
			this.setState({ numberOfBakingItemsAdded: (parseFloat(this.state.numberOfBakingItemsAdded) + parseFloat(bakingItemPrice)).toFixed(2) })

			if(this.state.numberOfBakingItemsAdded >= 50){
				var promotionApplied = this.state.promotionApplied;
				promotionApplied[1].applyMe = true;
				this.setState({ promotionApplied: this.state.promotionApplied })
			}
		}

	};

    removeItemParent(attrs){

		var drinkAdded = false;
		var bakingItemAdded = false;
		var drinksTotal = 0;
		var bakingItemPrice = 0;

    	this.setState({
			food:this.state.food.map((item) => {
				if (item.key === attrs.key ) {
					if(item.category =="Drinks"){
						drinkAdded=true
						drinksTotal=item.price
					}else if(item.category =="Baking/Cooking Ingredients"){
						bakingItemAdded=true
						bakingItemPrice=item.price
					}
					return {
						key: item.key,
						name: item.name,
						category: item.category,
						price: item.price,
						quantity: item.quantity  + 1,
					};
				} else {
					return item;
				}
			}),
			shoppingCart:
				this.state.shoppingCart.map((item) => {
					if (item.key === attrs.key) {
						if(item.category =="Drinks"){
							drinkAdded=true
						}else if(item.category =="Baking/Cooking Ingredients"){
							bakingItemAdded=true
						}
						return {
							key: item.key,
							name: item.name,
							category: item.category,
							price: item.price,
							quantity: (item.quantity - 1)
						}						
					} else {
						return item;
					}
				}),
		});
		
		if(drinkAdded == true){
			this.setState({ numberOfDrinksAdded: (this.state.numberOfDrinksAdded - 1) })
			this.setState({ numberOfDrinksTotal: (parseFloat(this.state.numberOfDrinksTotal) - parseFloat(drinksTotal)) })
			if(this.state.numberOfDrinksAdded <= 10){
				var promotionApplied = this.state.promotionApplied;
				promotionApplied[0].applyMe = false;
				this.setState({ promotionApplied: this.state.promotionApplied })
			}
		}
		else if (bakingItemAdded == true ){
			// console.log(bakingItemPrice)
			this.setState({ numberOfBakingItemsAdded: (parseFloat(this.state.numberOfBakingItemsAdded) - parseFloat(bakingItemPrice)).toFixed(2) })

			if(this.state.numberOfBakingItemsAdded <= 50){
				var promotionApplied = this.state.promotionApplied;
				promotionApplied[1].applyMe = false;
				this.setState({ promotionApplied: this.state.promotionApplied })
			}
		}

    }


    inputPromoCode(attrs){
    	this.setState({ promoCodeInput: attrs.value })
    }

    checkPromoCode(){
    	var promoCodeInput = this.state.promoCodeInput;
    	
		var currentPromoCodeUsed = false

		this.setState({
			promotionApplied:this.state.promotionApplied.map((item) => {
				if (item.name == promoCodeInput ) {
					console.log(item.name == promoCodeInput)
					currentPromoCodeUsed = true
					return {
						name: item.name,
						content: item.content,
						applyMe: true
					};
				} else {
					return item;
				}
			})
		})
    	console.log(this.state)

    	if(currentPromoCodeUsed == false){
    		this.setState({promoCodeUsed: currentPromoCodeUsed})
    		this.setState({error: "Incorrect Code used"})
    	}else{
    		this.setState({promoCodeUsed: currentPromoCodeUsed})
    		this.setState({error: ""})
    	}
    	console.log(this.state)
    }

	render() {
		var current = this.state;
		const isLogged = this.state.signedIn === "true";
		
		return (
			<Container>
				<Grid textAlign="center" centered columns={2}>
					
					<Grid.Column className="shoppingcartContainer">
						<ShoppingCart state={this.state} updateState={this.updateState} 
						updateBalance={this.updateBalance}  handleRemoval={this.removeItemParent} 
						checkPromoCode={this.checkPromoCode} inputPromoCode={this.inputPromoCode} key="1" /> 
					</Grid.Column>
					
					<Grid.Column className="foodListContainer">
						<Info  state={this.state} addInStateParent={this.addInState} updateBalance={this.updateBalance}  key="3" addInState={this.addInState} />  
					</Grid.Column>

				</Grid>
			</Container>
		);
	}
}

export default App;
