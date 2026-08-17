import React from 'react'
import Link from 'next/link'

function Buttons({bgColor,color,link,borderColor,content}) {
  return (
    <Link href={link} className={`w-fit capitalize py-4 px-6 font-medium rounded-full ${bgColor || 'bg-primary'} ${color || 'text-white'} ${borderColor || 'border border-white'}`} >
      {content}
    </Link>
  )
}

export default Buttons
