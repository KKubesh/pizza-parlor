import React, {Component} from 'react';


class OrderItem extends Component{

    render(){
        return(
            <tr>
                <th>{this.props.order.customer_name}</th><th>{this.props.order.time_of_order}</th><th>{this.props.order.order_total}</th>
            </tr>
        )
    }

}


export default OrderItem;