import React from 'react'

function Search({
value,
handleChange,
label,
showLable,
className
}:any) {
  return (
    <div className='mt-4'>
        <label htmlFor='search' className={showLable?'sr-only':""}>{label}</label>
        <input id="search" type='text' value={value} onChange={handleChange} placeholder='Serach Pokemon By Name ...'  className={`w-[250px] bg-white text-gray-600 outline-none rounded py-1 px-4 space-y-1 text-l ${className}`}/>
    </div>
  )
}

export default Search