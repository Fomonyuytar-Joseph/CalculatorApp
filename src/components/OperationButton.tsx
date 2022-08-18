import React from 'react'

interface OperationButtonProps {

    className?: string; 
    operation: string;

}

const OperationButton = ({className , operation}:OperationButtonProps)=> {
  return (
    <button className={className} onClick={() => console.log('Hi') }>
    {operation}
  </button>
  )
}

export default OperationButton