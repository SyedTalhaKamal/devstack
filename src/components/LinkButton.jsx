import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton({links_path,className,links_text}) {
  return (
    <Link to={links_path} className={`d-inline-block ${className}`}>{links_text}</Link>
  )
}

export default LinkButton