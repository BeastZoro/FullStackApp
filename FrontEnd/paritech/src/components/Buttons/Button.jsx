import React from 'react'

export const Button = ({value}) => {
  return (
    <button className='px-[25px] py-[6px] rounded-md uppercase font-medium text-white bg-blue-700'>{value}</button>
  )
}

export const ButtonWhite  = ({value, action}) =>{
    return(
        <button className='px-[25px] py-[6px] rounded-md uppercase font-medium text-blue-700 border border-blue-700' onClick={action}>{value}</button>
    )
}