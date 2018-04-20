import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import Pizza from './Pizza/Pizza';


const mapStateToProps = reduxState => ({
    reduxState
});

class Menu extends Component {
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
            menu
        )
    }
}


export default connect(mapStateToProps)(Menu);