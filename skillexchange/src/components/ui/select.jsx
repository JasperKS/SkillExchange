import React from 'react'

export const Select = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <select className='border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'>
        {children}
      </select>
    </div>
  )
}

export const SelectTrigger = ({ children, className }) => {
  return (
    <div className={`absolute top-0 right-0 px-2 py-1 ${className}`}>
      {children}
    </div>
  )
}

export const SelectValue = ({ children }) => {
  return <div className='text-sm'>{children}</div>
}

export const SelectContent = ({ children }) => {
  return <div className='mt-2'>{children}</div>
}

export const SelectItem = ({ children, value }) => {
  return <option value={value}>{children}</option>
}
export const SelectGroup = ({ children }) => {
  return <optgroup>{children}</optgroup>
}
export const SelectSeparator = () => {
  return <hr className='my-2' />
}