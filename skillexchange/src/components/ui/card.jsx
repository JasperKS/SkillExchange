import React from 'react'

export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto ${className}`}
    >
      {children}
    </div>
  )
}

export const CardContent = ({ children }) => {
  return <div className='flex flex-col space-y-4'>{children}</div>
}
