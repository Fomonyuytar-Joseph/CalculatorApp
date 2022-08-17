
import React from 'react'

interface ButtonProps{
    digit:string,
    className?:string
}

const Button=({digit ,className}:ButtonProps) => {
  return (
    <input className={className}  type="button" value={digit}/>
  )
}

export default Button