import React from 'react'

function SelectDropdown({
    handleSelect,
    label,
    types,
    defaultValue="",
   selectClassName,
    containerClassName
}:any) {
  return (
    <div className={`${containerClassName}`}>
    <select onChange={handleSelect}  className={`w-[250px] bg-white text-gray-600 outline-none rounded py-1 space-y-1 text-xl ${selectClassName}`}  defaultValue={defaultValue}>
    <option value="" disabled>{label}</option>
    {types && types.map((item:any) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
    </div>
  )
}

export default SelectDropdown