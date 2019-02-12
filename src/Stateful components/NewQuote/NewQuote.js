import React from 'react'

const NewQuote = props => {
    return(
        <button className="buttonStyle" onClick = {props.handleClick}>New quote!</button>
    )
}

export default NewQuote