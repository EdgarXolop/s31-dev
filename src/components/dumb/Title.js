import React from 'react'

function Title (props){

    return(
    <div className="column is-8">
        <br/>
        <h5 className="title is-5">{props.text}</h5>
    </div>        
    )
}

export default Title;