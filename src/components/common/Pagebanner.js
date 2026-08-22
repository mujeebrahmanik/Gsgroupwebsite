'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Buttons from './Buttons'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' }
})

function Pagebanner({ title, content, image, breadcrumbs }) {
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

                {/* right — image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md"
                >
                    <Image alt={title} fill src={image} className='object-cover object-center' />
                </motion.div>

            </div>
        </div>
    )
}

export default Pagebanner
