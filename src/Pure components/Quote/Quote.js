import React from 'react'
import './Quote.css'

const Quote = props => {
    return(
        <div id = "text">
            <p>"{props.quote}"</p>
        </div>
    )
}

export default Quote