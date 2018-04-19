import React, {Component} from 'react';


class OrderItem extends Component{

    render(){
        return(
            <div>
                 <tr><th>{this.props.order.name}</th><th>{this.props.order.time}</th><th>{this.props.order.cost}</th></tr>
            </div>
        )
    }


}


export default OrderItem;