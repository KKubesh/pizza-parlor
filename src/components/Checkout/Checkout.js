import React, {Component} from 'react';
import { connect } from 'react-redux';
import CheckItem from '../CheckItem/CheckItem.js'

const mapStateToProps = reduxState => ({
    reduxState,
});



class Checkout extends Component{
    constructor(props) {
        super(props)
        this.state = {
            customer_name: ''
        }
    }
    

    componentDidMount() {
        // use component did mount to dispatch an action to request the checkoutList from the API
        this.props.dispatch({
            type: 'CHECKOUT_LIST'
        })
    }

    handleClick= () => {
        this.props.dispatch({ 
            type: 'ADD_ORDER', 
            payload: {
            pizzaOrder: this.props.reduxState.newOrderReducer,
            customer_name: this.state.customer_name
            }
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
                <p>{this.state.customer_name}</p>
                <table>
                    <thead>
                        <tr><th>Name</th><th>Quantity</th><th>Cost</th></tr>
                    </thead>
                    <tbody>
                        {itemList}
                    </tbody>
                </table>
                <button onClick={this.handleClick}>Check Out</button>
            </div>
        )
    }


}


export default connect(mapStateToProps)(Checkout);