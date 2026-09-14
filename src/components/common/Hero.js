'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Buttons from './Buttons'
import { motion, AnimatePresence } from 'framer-motion'

const counters = [
    { title: '15+', content: 'years' },
    { title: '200+', content: 'projects' },
    { title: '500+', content: 'clients' },
]

const heroImages = [
    '/images/CHILLER SERVICES/CHILLER-WITH TAC NEED HOME PAGE.jpg',
    '/images/HEAT & COOL PUMP/Heat & cool pump.jpg',
    '/images/HVAC Circulating & Transfer Pumps/vertical multi-stage centrifugal pump skid system.jpg',
    '/images/DUCT/KITCHEN  DUCT WORK.jpg',
    '/images/pipe-works/chilled water pipe line works.JPG',
    '/images/PIPE FREEZING/pipe  freezing.JPG',
    '/images/hottapping/hottapping.JPG',
    '/images/motor-rewinding/WhatsApp Image 2026-09-03 at 6.41.08 PM.jpeg',
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' }
})

function Hero() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroImages.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className='bg-white py-20 px-8'>
            <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-15 gap-10 max-w-7xl mx-auto">

                <div className="flex flex-col gap-8">
                    <motion.h1
                        {...fadeUp(0)}
                        className="md:text-6xl text-4xl font-extrabold max-w-md text-primary tracking-tight capitalize leading-[1.1]"
                    >
                        complete
                        <span className='text-secondary'> HVAC</span> Solutions
                    </motion.h1>

                    <motion.p {...fadeUp(0.15)} className="text-base font-normal max-w-md leading-relaxed text-gray-700">
                        A trusted partner delivering excellence across construction, trading, and consulting in the UAE and beyond. 15+ years of proven results.
                    </motion.p>

                    <motion.div {...fadeUp(0.25)} className="flex gap-4 flex-wrap justify-start">
                        <Buttons link='/services' content='explore services' borderColor='border border-primary' />
                        <Buttons link='/contact' content='contact us' bgColor='bg-white' color='text-primary' borderColor='border border-primary' />
                    </motion.div>

                    <motion.div {...fadeUp(0.35)} className="flex flex-wrap py-4 gap-15">
                        {counters.map((i, index) => (
                            <div key={index} className="flex gap-3 flex-col">
                                <h2 className="text-primary font-bold text-2xl tablet:text-3xl">{i.title}</h2>
                                <h3 className="font-medium text-sm text-gray-500 uppercase">{i.content}</h3>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* image carousel */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl"
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
                                src={heroImages[current]}
                                fill
                                alt="hero"
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* dot indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {heroImages.map((_, i) => (
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
                </motion.div>

            </div>
        </div>
    )
}

export default Hero
