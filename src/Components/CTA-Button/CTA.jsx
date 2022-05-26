import React from 'react'

export default function CTA({ classname, text }) {
  return (
    <React.Fragment>
        <button className={`CTA ${classname}`} >{text}</button>
    </React.Fragment>
  )
}
