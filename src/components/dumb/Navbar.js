import React from 'react';
import PropTypes from "prop-types";

function Navbar (props) {
  const {
    logo ,
    warning
  } = props
  
    return (
      <div name="navbar">
        <nav className="navbar is-dark navbar-s31">
          <div className="navbar-brand">
            <a className="navbar-item">          
              <img src={logo} width="28" height="50" alt="logo-s31"/>          
            </a>
          </div>
          <div className="navbar-item is-expanded">
            <div className="field">
                <div className="control has-icons-left ">
                  {props.children}
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
                    <i className="fa fa-lg fa-bookmark-o"></i>
                  </span>
                </p>
                <p className="control">
                  <button className="button is-rounded is-warning is-small">{warning}</button>
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
    )
}

Navbar.propTypes = { 
  logo: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired
 }

export default Navbar;
