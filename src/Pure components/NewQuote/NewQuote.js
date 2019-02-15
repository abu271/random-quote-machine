import React from 'react'

const NewQuote = props => {
    return(
        <button id = "new-quote" className="buttonStyle" onClick = {props.handleClick}>New quote!</button>
    )
}

export default NewQuote