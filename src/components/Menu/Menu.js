import React, {Component} from 'react';
import { connect } from 'react-redux'; 


const mapStateToProps = reduxState => ({
    reduxState
});

class Menu extends Component{
// server request for menu item    
 componentDidMount() {
     this.props.dispatch({
         type: 'GET_MENU'
     })
 }
 //post request for order details
 addNewOrder() {
     this.props.dispatch({
         type: 'ADD_ORDER',
         payload: this.state.newOrder
     })
 }



    render(){
        let menu = this.props.reduxState.menuReducer.map((pizza) => {
            return <p key= {pizza.id}>{pizza.name}{pizza.description}{pizza.cost}</p>
        })
        return (
            <div>
            <h2> Menu</h2>
            {menu}
            {/* <pre>{JSON.stringify(this.state)}</pre>  */}
            </div>
        )

    }
}
// "pizza" ("name", "description", "cost")
// VALUES ('Splat of Marinara', 'Cheeseless pizza with marinara, garlic and red peppers.', 12.99),
// ('Onamonapizza', 'Cheese, BBQ sauce and artichokes.', 14.99),
// ('Pepperoni', 'Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.', 14.99),
// ('Over the Rainbow', 'One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion.', 19.99),
// ('Chinese Firedragon', 'Pepperoni, pineapple and banana peppers.', 15.99),
// ('Bad Date', 'Garlic, Onion and Pepperoni.', 24.99

export default connect(mapStateToProps)(Menu);