import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Order extends Component{

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