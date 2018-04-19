import React, {Component} from 'react';


class Order extends Component{

    render(){
        let orders = this.props.reduxState.pizzalist.map(order => {
            return (
                <OrderItem key={order.id} order={order}/>
            )
        })
        
        return(
            <div>
                 <tr><th>Name</th><th>Time Order Placed</th><th>Cost</th></tr>
            </div>
        )
    }


}


export default OrderItem;