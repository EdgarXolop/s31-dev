import React from 'react'

function Body(props) {
    return(

      <div className="container is-paddingless">
      {props.children}
      </div>
    )
}

export default Body;