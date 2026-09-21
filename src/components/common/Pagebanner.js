'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Buttons from './Buttons'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' }
})

function Pagebanner({ title, content, image, breadcrumbs, interval = 4000 }) {
    const images = Array.isArray(image) ? image : [image]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (images.length <= 1) return
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, interval)
        return () => clearInterval(timer)
    }, [images.length, interval])

    return (
        <div className='bg-white py-16 px-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto gap-12">

                {/* left */}
                <div className="flex flex-col gap-6">

                    <motion.div {...fadeUp(0)} className="text-xs font-bold tracking-widest uppercase flex gap-2 items-center">
                        <Link className='text-muted hover:text-primary' href='/'>Home</Link>
                        <ChevronRight size={13} className='text-muted' />
                        {breadcrumbs.map((i, index) => (
                            i.link ? (
                                <span key={index} className='flex gap-2 items-center'>
                                    <Link className='text-muted hover:text-primary' href={i.link}>{i.title}</Link>
                                    <ChevronRight size={13} className='text-muted' />
                                </span>
                            ) : (
                                <span key={index} className='text-primary font-bold'>{i.title}</span>
                            )
                        ))}
                    </motion.div>

                    <motion.div {...fadeUp(0.1)} className="flex text-5xl font-bold flex-col leading-tight capitalize text-primary">
                        {title}
                    </motion.div>

                    <motion.p {...fadeUp(0.2)} className="text-sm text-body max-w-sm leading-relaxed">
                        {content}
                    </motion.p>

                    <motion.div {...fadeUp(0.3)} className="flex gap-4 flex-wrap">
                        <Buttons content='Start a Project' link='/contact' />
                    </motion.div>
                </div>

                {/* right — carousel */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-md ml-auto"
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className="absolute inset-0"
                        >
                            <Image
                                alt={typeof title === 'string' ? title : 'banner'}
                                fill
                                src={images[current]}
                                className='object-cover object-center'
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        current === i ? 'w-8 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                                    }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>

            </div>
        </div>
    )
}

export default Pagebanner
