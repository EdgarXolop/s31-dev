import React from 'react'

function Cart (props) {
    return(
        <div className="column is-4 columns saved-main">
        <img className="triangle" src="assets/triangle.png"/>
        <div className="column is-12 saved">
            <div className="column is-5">
                <h2 className="subtitle subtitle-saved">{props.titleList}</h2>
                <div className="line"></div>
            </div>
            <div className="column is-12 ">
                <aside className="menu">
                    <ul className="menu-list">
                        {props.children}
                    </ul>
                </aside>
            </div>
        </div>
        </div>
    )
}

export default Cart