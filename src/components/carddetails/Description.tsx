import React from 'react'

export default function Description({ description }: any) {

  return (
    <p className="text-justify font-[MullerLight] tracking-wide">
      {description}
    </p>
  )
}
