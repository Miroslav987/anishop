import React from 'react'

export default function Сharacterization({characterization}:any) {

  
  return (
    <div className='w-full  md:w-[50%] '>
      {characterization.map((e:any,i:number)=>(
      <div key={i} className='flex items-end'>
        <p>{e.name}</p>
        <div className='mx-[5px] w-full border-b-2 border-dotted'></div>
        <p className='whitespace-nowrap'>{e.info}</p>
      </div>
    ))}
    </div>
  )
}
