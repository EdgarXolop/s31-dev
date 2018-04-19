import React, {Component} from 'react'
import PropTypes from"prop-types"
import '../styles/Domain.css'


class Domain extends Component {
    
    state = {
        domain : this.props.domain,
        dot:"fa fa-circle",
        bookmark:"fa fa-bookmark",
        selected: "fa fa-circle",
        namecheapLogo: "assets/namecheap-icon.png"
    }

    over=()=>{
        this.setState({
            selected : (this.state.domain.available ? this.state.bookmark : this.state.dot)
        })
    }
    leave=()=>{
        this.setState({
            selected : (this.state.dot)
        })
    }

    render(){
        return (
            <div className="columns domain" onMouseOver={this.over} onMouseLeave={this.leave}>
                <div className="column is-1">
                    <span className={(this.state.domain.available?'domain-dot':'unavailable') + " icon is-small" }>
                        {this.state.domain.available?<i className={this.state.selected} ></i>:null}
                        {!this.state.domain.available?<i className={this.state.dot} ></i>:null}
                    </span>
                </div>
                <div className={(this.state.domain.available? null:"disabled") + ' column is-6 domain-txt'} >
                    {this.state.domain.name}
                </div>
                <div className="column is-2 div-price">
                    <div><label class="price">{this.state.domain.currency}{this.state.domain.price}  </label>  </div>                  
                    <div>
                        <label class="at">AT </label>
                        <label class="namecheap">NAMECHAEAP</label> 
                    </div> 
                </div>
                <div className="column is-2">
                    <button className="button is-medium is-rounded btn-buy" disabled={!this.state.domain.available} onClick={()=>{this.props.buy(this.props.index)}}>
                        &nbsp;
                        <img src={this.state.namecheapLogo} width="20px"/>
                        &nbsp;
                        Buy now &nbsp;&nbsp;
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
        )
    }

}

Domain.propTypes = {
    domain: PropTypes.object.isRequired
}

export default Domain;