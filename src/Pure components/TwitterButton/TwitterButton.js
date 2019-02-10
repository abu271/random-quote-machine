import React from 'react'

const TwitterButton = props => {
    return(
        <a target = "_blank" href={`https://twitter.com/intent/tweet?text=${props.quote}`}><i className="fab fa-twitter"></i></a>
    )
}

export default TwitterButton