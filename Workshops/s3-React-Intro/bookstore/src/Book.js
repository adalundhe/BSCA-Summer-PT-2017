import React from 'react'
import BookParagraph from './BookParagraph'

const Book = (props) =>
  <div>
    <h3>Title: { props.book.title }</h3>
    <BookParagraph>Author: { props.book.author }</BookParagraph>
    <BookParagraph>Rank: { props.rank }</BookParagraph>
    <BookParagraph>Last Read By: { props.readBy }</BookParagraph>
  </div>

export default Book
