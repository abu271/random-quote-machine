import React from 'react'

const TwitterButton = props => {
    return(
        <a className= "buttonStyle" target="_blank" href={`https://twitter.com/intent/tweet?text=${props.quote} By ${props.author}`}><i className="fab fa-twitter"></i></a> 
    )
}

export default TwitterButton