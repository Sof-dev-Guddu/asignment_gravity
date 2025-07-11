import React from 'react'

function Card({
className,
children,

}:any) {
  return (
    <div  className={`bg-white rounded flex flex-col  ${className}`}>
        {children}
    </div>
  )
}

export default Card