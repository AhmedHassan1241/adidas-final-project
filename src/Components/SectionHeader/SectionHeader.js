import React from 'react'

const SectionHeader = (props) => {
  return (
    <>
             <h2 className="ms-2 mb-3 text-uppercase fw-bold">{props.children}</h2>
 
    </>
  )
}

export default SectionHeader
