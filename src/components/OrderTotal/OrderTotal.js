import React, {Component} from 'react';
import { connect } from 'react-redux';
import CheckItem from '../CheckItem/CheckItem.js'

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
        
        return(
            <div>
                <p>Total: {orderTotal}</p>
            </div>
        )
    }
}


export default connect(mapStateToProps)(OrderTotal);