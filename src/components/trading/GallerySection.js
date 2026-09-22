import React from 'react'
import Image from 'next/image'

function GallerySection({ title = 'Gallery', images = [], bg = 'bg-cream' }) {
    return (
        <div className={`py-20 px-8 ${bg}`}>
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary capitalize">
                        {title}
                    </h2>
                    <div className="w-16 h-0.5 bg-secondary" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-square rounded-xl overflow-hidden shadow-sm group"
                        >
                            <Image
                                src={src}
                                fill
                                alt={`Gallery image ${index + 1}`}
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default GallerySection
