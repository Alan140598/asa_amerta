import React from 'react'

export default function CardFaq(props) {
  return (
    <div className='lg:h-[160px] lg:w-[340px] lg:px-7 lg:py-3 rounded-lg bg-white mb-2'>
        <h1 className='text-base font-semibold'>{props.textPertanyaan}</h1>
        <p className='text-xs'>{props.textPenjelasan}</p>
    </div>
  )
}
