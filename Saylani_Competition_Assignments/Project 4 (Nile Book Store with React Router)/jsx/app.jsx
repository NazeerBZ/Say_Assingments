
import React from 'react'
import ReactDOM from 'react-dom'
import {hashHistory, Router, Route, IndexRoute, Link} from 'react-router'
import {Modal} from './modal.jsx'
import {Cart} from './cart.jsx'
import {Checkout} from './checkout.jsx'
import {Product} from './product.jsx'


const PRODUCTS = [
    { id: 0, src: 'images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
    { id: 1, src: 'images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
    { id: 2, src: 'images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
    { id: 3, src: 'images/reactquickly-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly' },
    { id: 4, src: 'images/fullstack-cover.png', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504' }
]


class App extends React.Component {
    componentWillReceiveProps(nextProps) {

        this.isModal = (nextProps.location.state && nextProps.location.state.modal)
        if (this.isModal && nextProps.location.key !== this.props.location.key) {
            this.previousChildren = this.props.children
        }

        // console.log(nextProps.location.state && nextProps.location.state.modal);
        // console.log(nextProps.location.state);
        // console.log(nextProps.location.state.modal);
        // console.log(nextProps.location.key);
        // console.log(this.props.location.key);

        //Now App > Product
        //previous App > Index

    }
    render() {
        console.log('Modal: ', this.isModal)
        return (
            <div className="well">
                <h1>Nile Book store</h1>
                <div>
                    {(this.isModal) ? this.previousChildren : this.props.children}

                    {(this.isModal) ?
                        <Modal returnTo={this.props.location.state.returnTo}>
                            {this.props.children}
                        </Modal> : ''
                    }
                    {/*this.props.children = Product Component*/}
                    {/*this.previouschildren = Index Component*/}
                    {/*Routing on Product Component but showing Product on Model Component*/}
                </div>
            </div>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <p>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open book on a separate page.</p>
                <p><Link to={{ pathname: "/cart" }} className="btn btn-danger">Cart</Link></p>
                <div>
                    {PRODUCTS.map((picture) => (
                        <Link key={picture.id}
                            to={{
                                pathname: `/products/${picture.id}`,
                                state: {    //state is a property of Location object
                                    modal: true,
                                    returnTo: this.props.location.pathname //saving root location to get back on it
                                }
                            }}>
                            <img style={{ margin: 10 }} src={picture.src} height="100" />
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

var cartItems = []

const addToCart = (id) => {
    if (cartItems[id])
        cartItems[id]++
    else
        cartItems[id] = 1
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/products/:id" component={Product} addToCart={addToCart} products={PRODUCTS} />
            <Route path="/cart" component={Cart} cartItems={cartItems} products={PRODUCTS} />
        </Route>
        <Route path="/checkout" component={Checkout} cartItems={cartItems} products={PRODUCTS} />
    </Router>
), document.getElementById('content'))



