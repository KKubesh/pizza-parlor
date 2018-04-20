import React, {Component} from 'react';
import { connect } from 'react-redux';
import CheckItem from '../CheckItem/CheckItem.js'
import OrderTotal from '../OrderTotal/OrderTotal.js'

const mapStateToProps = reduxState => ({
    reduxState,
});



class Checkout extends Component{
    constructor(props) {
        super(props)
        this.state = {
            customer_name: '',
            total: {}
        }
    }
    

    componentDidMount() {
        // use component did mount to dispatch an action to request the checkoutList from the API
        this.props.dispatch({
            type: 'CHECKOUT_LIST'
        })
    }

    handleClick= () => {
        let orderTotal = this.props.reduxState.newOrderReducer.reduce( 
            (accumulator, pizzaCost) => {
            return (
                accumulator + pizzaCost.cost
            )
        },0)
        this.props.dispatch({ 
            type: 'ADD_ORDER', 
            payload: {
            pizzaOrder: this.props.reduxState.newOrderReducer,
            customer_name: this.state.customer_name,
            order_total: orderTotal
            }
        })
    }

    getTotal= (total) => {
        this.setState({
            order_total: total
        })
    }

    handleChange = event => {
        this.setState({
            customer_name: event.target.value
        })
    }

    render(){
        let itemList = this.props.reduxState.newOrderReducer.map(item => {
            return (
                <CheckItem key={item.id} item={item} />
            )
        })
        
        return(
            <div>
                <h2>Checkout</h2>
                <input type="text" placeholder="Your Name" onChange={this.handleChange}/>
                <table>
                    <thead>
                        <tr><th>Name</th><th>Quantity</th><th>Cost</th></tr>
                    </thead>
                    <tbody>
                        {itemList}
                    </tbody>
                </table>
                <OrderTotal getTotal={this.getTotal}/>
                <button onClick={this.handleClick}>Check Out</button>
            </div>
        )
    }


}


export default connect(mapStateToProps)(Checkout);