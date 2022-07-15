import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../src/styles.css";
import shoppingBag from "../Assets/shopping-bag.svg";
import Search from "../Assets/search.svg";
import User from "../Assets/user.svg";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="headerStart">
          <Link to="/">VENIA</Link>
        </div>
        <div className="headerCenter">
          <div>Women</div>
          <div>Men</div>
          <div>Smart Gear</div>
          <div>Accessories</div>
        </div>
        <div className="headerLast">
          <div>
            {" "}
            <img src={Search} alt="search" />
            Search
          </div>
          <div>
            {" "}
            <img src={User} alt="User" />
            SignIn
          </div>
          <div className="nav-item">
            <Link to="/carts">
              <img src={shoppingBag} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart
  };
};
export default connect(mapStateToProps, null)(Header);
