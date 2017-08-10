import React from 'react'

const style = {
  color: 'blue'
}

const BookParagraph = props =>
  <p style={style}>{props.children}</p>

export default BookParagraph