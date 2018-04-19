import React, {Component} from 'react';
import { connect } from 'react-redux'; 


const mapStateToProps = reduxState => ({
    reduxState
});

class Menu extends Component{
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
//  handleClick = () => {
//      console.log('in delete button');

//  }




    render(){
        let menu = this.props.reduxState.menuReducer.map((pizza) => {
            return <p key= {pizza.id}>{pizza.name}{pizza.description}{pizza.cost}
            <button Onclick="this.handleClick">-</button><button Onclick="this.handleClickAdd">+</button></p>
        });
        return (
            <div>
            <h2> Menu</h2>
            {menu}
            <button onClick={this.addNewOrder}>Add order</button>
            {/* <pre>{JSON.stringify(this.state)}</pre>  */}
            </div>
        )

    }
}


export default connect(mapStateToProps)(Menu);