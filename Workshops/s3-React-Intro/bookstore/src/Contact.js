import React from 'react'

const Contact = (props) =>
  <div>
    <h3>{props.title}</h3>
    <p>{props.address.street}</p>
    <p>{props.address.city}</p>
    <p>{props.address.state}</p>
    <p>{props.address.zip}</p>
    <h3>{props.phoneNumber}</h3>
    <h3>{props.email}</h3>
  </div>

export default Contact
