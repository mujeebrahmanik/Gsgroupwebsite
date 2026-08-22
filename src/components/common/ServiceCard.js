import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function ServiceCard({ title, description, image, link }) {
    return (
        <div className='flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>

            <div className="relative w-full h-52 flex-shrink-0">
                <Image src={image} fill alt={title} className='object-cover' />
            </div>

            <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-base font-bold text-primary capitalize">{title}</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">{description}</p>
                <Link
                    href={link}
                    className="flex items-center gap-2 w-fit bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-secondary-dark transition-colors duration-200 mt-2"
                >
                    Learn More <ArrowRight size={15} />
                </Link>
            </div>

        </div>
    )
}

export default ServiceCard
