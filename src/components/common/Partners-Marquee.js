import React from 'react'
import Image from 'next/image'

const partners = [
    { name: 'Carrier',  image: '/images/partners/01.png' },
    { name: 'York',     image: '/images/partners/02.png' },
    { name: 'Trane',    image: '/images/partners/03.png' },
    { name: 'Bitzer',   image: '/images/partners/04.png' },
    { name: 'Copeland', image: '/images/partners/05.png' },
    { name: 'McQuay',   image: '/images/partners/06.png' },
    { name: 'Dorin',    image: '/images/partners/07.png' },
    { name: 'Bock',     image: '/images/partners/08.png' },
    { name: 'LG',       image: '/images/partners/09.png' },
    { name: 'Ducab',    image: '/images/partners/10.png' },
    { name: 'Uken',     image: '/images/partners/11.png' },
    { name: 'RR Kabel', image: '/images/partners/12.png' },
    { name: 'SKM',      image: '/images/partners/13.png' },
    { name: 'General',  image: '/images/partners/14.png' },
    { name: 'Mueller',  image: '/images/partners/15.png' },
    { name: 'Maksal',   image: '/images/partners/16.png' },
]

function PartnersMarquee() {
    return (
        <div className='flex flex-col gap-6 bg-white py-10 border-t border-gray-200 overflow-hidden'>
            <h6 className="text-xs uppercase tracking-wider text-center font-semibold text-muted">
                Working with UAE&apos;s Leading Companies
            </h6>

            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="flex md:gap-10 gap-5 py-4 animate-marquee whitespace-nowrap">
                    {[...partners, ...partners].map((i, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-36 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <Image
                                src={i.image}
                                alt={`${i.name} logo`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee
