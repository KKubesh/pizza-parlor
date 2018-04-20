import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import Pizza from './Pizza/Pizza';
import OrderTotal from '../OrderTotal/OrderTotal';


const mapStateToProps = reduxState => ({
    reduxState
});


class Menu extends Component {
 // server request for menu item   
 componentDidMount() {
    this.props.dispatch({
        type: 'GET_MENU'
    })
}

    render() {
        console.log(this.props.reduxState)
        let menu = this.props.reduxState.menuReducer.map((pizza) => {
            return ( 
                <Pizza key = {
                    pizza.id
                }
                name = {
                    pizza.name
                }
                description = {
                    pizza.description
                }
                cost = {
                    pizza.cost
                }
                pizza = {
                    pizza
                }
                />
            )
        });

        return ( 
            <div>
        {menu}
        <OrderTotal />
        </div>
        )
    }
}


export default connect(mapStateToProps)(Menu);