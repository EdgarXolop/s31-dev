import React from 'react'

function Result (props){

    return (

          <div className="column is-8">
            {props.children}
          </div>
    )
}

export default Result;