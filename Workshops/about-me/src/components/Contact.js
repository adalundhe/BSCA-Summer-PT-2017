import React from 'react';

const Contact = (props) => {
  return(
    <div className="contact-sec">
      <h3 className="sec-header">Contact: {props.info.name}</h3>
    </div>
  )
}

export default Contact
