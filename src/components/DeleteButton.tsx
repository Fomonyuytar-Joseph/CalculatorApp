import React from 'react'

interface DeleteButtonProps{
   handleClearDigit:()=> void;
   className?: string; 
   digit: string;
}

const DeleteButton = ({handleClearDigit ,className ,digit}:DeleteButtonProps) =>  {
  return (
    <button className={className} onClick={() => { handleClearDigit()} }>
    {digit}
  </button>
  )
}

export default DeleteButton