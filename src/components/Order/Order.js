import React, {Component} from 'react';
import { connect } from 'react-redux';
import OrderItem from '../OrderItem/OrderItem'

const mapStateToProps = reduxState => ({
    reduxState,
});

class Order extends Component{

    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.props.dispatch({
            type: 'ORDER_LIST'
        })
    }
// What are we doing with action payload once we get it from ORDER_LIST
    render(){
        let orders = this.props.reduxState.orderList.map(order => {
            return (
                <OrderItem key={order.id} order={order}/>
            )
        })
        
        return(
            <div>
                <h2>Order</h2>
                <table>
                    <thead>
                        <tr><th>Name</th><th>Time Order Placed</th><th>Cost</th></tr>
                    </thead>
                    <tbody>
                        {orders}
                    </tbody>
                </table>
            </div>
        )
    }


}


export default connect(mapStateToProps)(Order);