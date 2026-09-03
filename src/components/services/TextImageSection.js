import React from 'react'
import Image from 'next/image'

function TextImageSection({ subTitle, title, description, image, reverse = false, bg = 'bg-white' }) {
    return (
        <div className={`py-20 px-8 ${bg}`}>
            <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>

                <div className="flex flex-col gap-5">
                    {subTitle && (
                        <span className="text-xs font-semibold uppercase tracking-widest text-secondary-dark">{subTitle}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-primary capitalize">{title}</h2>
                    <p className="text-sm text-muted leading-relaxed max-w-md">{description}</p>
                </div>

                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
                    <Image src={image} fill alt={title} className='object-cover' />
                </div>

            </div>
        </div>
    )
}

export default TextImageSection
