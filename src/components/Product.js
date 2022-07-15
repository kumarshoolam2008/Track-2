import React, { Component } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import heart from "../Assets/heart.svg";
export class Product extends Component {
  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { _products } = this.props._products;
    console.log(_products);
    if (_products.length > 0) {
      return (
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-12">
            <div className="row">
              {_products.map((item, index) => (
                <div
                  key={index}
                  className="col-md-2"
                  style={{ marginBottom: "10px" }}
                >
                  <NavLink to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt="img"
                      className="img-resposive"
                      style={{ width: "100%", height: "100px" }}
                    />
                  </NavLink>

                  <h5>{item.title}</h5>
                  <h5> ${item.price}</h5>
                  <img src={heart} alt="img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
