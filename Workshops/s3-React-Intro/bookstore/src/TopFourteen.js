import React from 'react'
import Book from './Book'

const TopFourteen = (props) => {
  return(
    <div>
      {
        props.books.map((book,index) =>
          <Book book={book} rank={props.rankings[index]} readyBy={props.readers[index]} key={index} />
        )
      }
    </div>
  )
}

export default TopFourteen
