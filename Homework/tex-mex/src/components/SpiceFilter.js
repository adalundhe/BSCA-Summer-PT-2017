import React from 'react';

const SpiceFilter = (props) => {
  return(
    <div>
      <input type="number" onChange={props.onFilterChanged} />
    </div>
  )
}

export default SpiceFilter
