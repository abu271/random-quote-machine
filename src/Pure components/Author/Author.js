import React from 'react'
import './Author.css'

const Author = props => {
    return(
        <p id = "author">By {props.author}</p>
    )
}

export default Author