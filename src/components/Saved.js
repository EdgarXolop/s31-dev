import React from 'react'
import PropTypes from"prop-types";
import "../styles/Saved.css";

function Saved (props){
    
    return (
        <li >
            <a>
                <button className="icon is-small" onClick={()=>{props.buyback(props.index)}}> 
                    <i className="fa fa-close"></i>
                    &nbsp;&nbsp;| 
                </button>
                &nbsp;&nbsp;{props.domain.name}
                &nbsp;&nbsp;                              
                <button className="button is-rounded is-small cart"> 
                    <i className="fa fa-shopping-cart"></i>
                </button>                     
            </a>
        </li>
    )
}

Saved.propTypes = {
    domain: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    buyback: PropTypes.func.isRequired
}

export default Saved;