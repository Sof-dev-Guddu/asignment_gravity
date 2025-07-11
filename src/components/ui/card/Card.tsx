import React from 'react'

function Card({
className,
children,
key
}:any) {
  return (
    <div key={key} className={`bg-white rounded flex flex-col  ${className}`}>
        {children}
    </div>
  )
}

export default Card