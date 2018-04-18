import React from  'react'

function Content (props){
    return(

        <div className="columns is-multiline">
            {props.children}
        </div>
    )
}

export default Content;