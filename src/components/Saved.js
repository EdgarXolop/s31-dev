import React, {Component} from 'react'
import PropTypes from"prop-types";
import savedcss from "../styles/Saved.css";

class Saved extends Component {
    state = {
        titleList : "Saved",
        saved : this.props.saved
    }
    
    render(){
        return (
            <div className="column is-12 saved">
                <div className="column is-5">
                    <h2 className="subtitle subtitle-saved">{this.state.titleList}</h2>
                    <div className="line"></div>
                </div>
                <div className="column is-12 ">
                    <aside className="menu">
                        <ul className="menu-list">
                            {
                                this.state.saved.map((s)=>{
                                    return (
                                        <li key={s.name}>
                                            <a>
                                                <span className="icon is-small" click="buyback($index)"> 
                                                    <i className="fa fa-close"></i>
                                                    &nbsp;&nbsp;| 
                                                </span>
                                                &nbsp;&nbsp;{s.name}
                                                &nbsp;&nbsp;                              
                                                <button className="button is-rounded is-small cart"> 
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>                     
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </aside>
                </div>
                <style scoped src={savedcss}></style>
            </div>
        )
    }
}

Saved.propTypes = {
    saved: PropTypes.array.isRequired
}

export default Saved;