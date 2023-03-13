import React from 'react'
import { Link } from 'react-router-dom'

function Cancel() {
  return (
    <>
        <div className="c-text">Payment cancelled</div>
        <Link to='/' className="c-text">Back to home</Link>
    </>
  )
}

export default Cancel
