import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';
import Checkout from '../Checkout/Checkout';


class Nav extends Component {
    render(){
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li>
                                <Link to="/checkout">Checkout</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path='/menu' component={Menu}/>
                    <Route path='/order' component={Order}/>
                    <Route path='/checkout' component={Checkout}/>
                </div>

            </Router>
        )
    }
}

export default Nav;