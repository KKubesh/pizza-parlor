import React, {Component} from 'react';


class OrderItem extends Component{

    render(){
        return(
            <tr>
                <th>{this.props.order.name}</th><th>{this.props.order.quantity}</th><th>{this.props.order.cost}</th>
            </tr>
        )
    }

}


export default OrderItem;