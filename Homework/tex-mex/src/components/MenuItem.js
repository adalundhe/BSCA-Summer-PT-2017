import React from 'react'

const MenuItem = (props) => {
  return (
    <div>
      <h3>{props.item.name}</h3>
      <p>{props.item.price}</p>
      <p>{props.item.category}</p>
      <p>{props.item.spiceLevel}</p>
      <img src={props.item.img}/>
    </div>
  )
}

export default MenuItem
