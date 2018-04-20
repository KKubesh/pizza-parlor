import React, { Component} from 'react';
import { connect } from 'react-redux'; 


const mapStateToProps = reduxState => ({
    reduxState
});

class Pizza extends Component {

    state={
        newOrder: {
            //need this being sent to server individually
            id: '',
            name: '',
            description: '',
            cost: ''
        }
    }
   
   

    //post request for order details
    addNewOrder = (order) => {
        //  console.log(this.state.newOrder)
        this.props.dispatch({
            type: 'NEW_ORDER',
            payload: this.state.newOrder
        })
    }
    handleClickAdd= () => {
        console.log('adding pizza');
        this.addNewOrder(this.props.pizza);
    }

    handleClick = () => {
        console.log('in handleclick');
        this.deletePizza(this.props.pizza);
    }

    deletePizza = ()=> {
        console.log('in delete button')
        this.props.dispatch({
            type: 'REMOVE_ORDER',
            payload: this.props.pizza
        })
    }
    render() {
         
        return (
        <div>
            <p>{this.props.pizza.name}
            {this.props.pizza.description}
            {this.props.pizza.cost}<button 
            onClick={this.handleClick}>-</button><button
            onClick={this.handleClickAdd}>+</button></p>
        </div>
        
        )
    }
}//end class


export default connect(mapStateToProps)(Pizza);