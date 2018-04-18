import React, {PureComponent} from 'react'
import PropTypes from"prop-types";

class Saved extends PureComponent {
    
    render(){
        return (
            <li >
                <a>
                    <button className="icon is-small" onClick={()=>{this.props.buyback(this.props.index)}}> 
                        <i className="fa fa-close"></i>
                        &nbsp;&nbsp;| 
                    </button>
                    &nbsp;&nbsp;{this.props.domain.name}
                    &nbsp;&nbsp;                              
                    <button className="button is-rounded is-small cart"> 
                        <i className="fa fa-shopping-cart"></i>
                    </button>                     
                </a>
            </li>
        )
    }
}

Saved.propTypes = {
    domain: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    buyback: PropTypes.func.isRequired
}

export default Saved;