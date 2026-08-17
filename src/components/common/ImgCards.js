import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';


function ImgCards({img,title,content,link}) {
  return (
    <div className='flex flex-col gap-4 border-2 border-gray-200 rounded-2xl bg-white min-h-[500px]'>
        <div className="relative w-full h-60 rounded-t-lg overflow-hidden">
            <Image src={img} alt={title} fill className="object-cover" />
        </div>

        <div className="flex flex-col px-6 py-4 gap-4">
            <h3 className="text-xl font-semibold text-primary capitalize">
                {title}
            </h3>

            <p className="text-sm text-muted">
                {content}
            </p>

            <Link href={link} className='mt-3 flex text-sm w-fit rounded-full font-semibold gap-2 items-center justify-center  hover:text-primary text-secondary-dark capitalize' >know more <ArrowRight/> </Link>

        </div>
    </div>
  )
}

export default ImgCards
