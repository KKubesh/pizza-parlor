import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});



class OrderTotal extends Component{
    render(){
        let orderTotal = this.props.reduxState.newOrderReducer.reduce( 
            (accumulator, pizzaCost) => {
            return (
                accumulator + pizzaCost.cost
            )
        },0)

        this.props.getTotal(orderTotal)
        
        return(
            <div>
                <p>Total: {orderTotal}</p>
            </div>
        )
    }
}


export default connect(mapStateToProps)(OrderTotal);