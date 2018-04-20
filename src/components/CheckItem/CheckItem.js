import React, {Component} from 'react';

class CheckItem extends Component {
    render(){
        return (
            <tr><th>{this.props.item.name}</th><th>{this.props.item.quantity}</th><th>{this.props.item.cost}</th></tr>
        )
    }
}

export default CheckItem;