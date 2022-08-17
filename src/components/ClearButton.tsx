import React from 'react'

interface ClearButtonProps{
   handleClearDigit:()=> void;
   className?: string; 
   digit: string;
}

const ClearButton = ({handleClearDigit ,className ,digit}:ClearButtonProps) =>  {
  return (
    <button className={className} onClick={() => { handleClearDigit()} }>
    {digit}
  </button>
  )
}

export default ClearButton