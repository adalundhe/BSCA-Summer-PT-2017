import React from 'react';
import MenuItem from './MenuItem'

// JUST to build the list. Dumb component.
const MenuList = (props) => {
  return(
    <div>
      {
        props.items.map((item, index) => <MenuItem item={item} key={index} />)
      }
    </div>
  )
}

export default MenuList
