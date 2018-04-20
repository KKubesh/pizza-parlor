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
    // server request for menu item   
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MENU'
        })
    }

    //post request for order details
    addNewOrder = (order) => {
        //  console.log(this.state.newOrder)
        this.props.dispatch({
            type: 'NEW_ORDER',
            payload: this.state.newOrder
        })
    }

    handleClick = () => {
        console.log('in handleclick');
        this.deletePizza();
    }

    deletePizza = ()=> {
        console.log('in delete button')
        this.props.dispatch({
            type: 'REMOVE_ORDER',
            payload: this.state.pizza
        })
    }
    render() {
        console.log('something'); 
        return (
        <div>
            <p><button onClick={this.handleClick}>-</button><button onClick="this.handleClickAdd">+</button></p>
        </div>
        
        )
    }
}//end class


export default connect(mapStateToProps)(Pizza);