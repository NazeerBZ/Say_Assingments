
import React from 'react'
import {Link} from 'react-router'

export class Checkout extends React.Component {
  render() {
    var count = 0
    return (
      <div>
        <h1>Invoice</h1>
        <table className="table table-bordered">
          <tbody>
            {Object.keys(this.props.route.cartItems).map((item, index, list) => {
              count = count + this.props.route.cartItems[item]
              return (
                <tr key={item}>
                  <td>{this.props.route.products[item].title}</td>
                  <td>{this.props.route.cartItems[item]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <p>Total: {count}</p>
      </div>
    )
  }
}

