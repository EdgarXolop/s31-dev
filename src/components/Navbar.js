import React, { Component } from 'react';
import PropTypes from "prop-types";
import "../styles/Navbar.css"

class Navbar extends Component {
  state = {
    logo : this.props.logo,
    warning: this.props.warning
  }
  
  render() {
    return (
      <div name="navbar">
        <nav className="navbar is-dark navbar-s31">
          <div className="navbar-brand">
            <a className="navbar-item">          
              <img src={this.state.logo} width="28" height="50" alt="logo-s31"/>          
            </a>
          </div>
          <div className="navbar-item is-expanded">
            <div className="field">
                <div className="control has-icons-left ">
                  <input className="input is-medium" type="text" placeholder="Search"/>
                  <span className="icon is-medium is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
            </div>
          </div>
    
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <span className="icon">
                    <i className="fa fa-bookmark"></i>
                  </span>
                </p>
                <p className="control">
                  <button className="button is-rounded is-warning is-small">{this.state.warning}</button>
                </p>
                <p className="control">
                  <button className="button is-transparent ">
                    <i className="class fa fa-ellipsis-h"></i>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = { 
  logo: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired
 }

export default Navbar;
