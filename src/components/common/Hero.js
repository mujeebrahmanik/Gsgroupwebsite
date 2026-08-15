import React from 'react'
import Image from 'next/image'
import Buttons from './Buttons'

const counters = [
    {
        title:'15+',
        content:'years'
    },
    {
        title:'200+',
        content:'projects'
    },
    {
        title:'500+',
        content:'clients'
    },
]

function Hero() {
  return (
    <div className='bg-white py-15 px-8'>
        <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-15 gap-10 max-w-7xl mx-auto">

            <div className="flex flex-col gap-8">
                <h1 className="md:text-6xl text-4xl font-extrabold max-w-md text-primary tracking-tight capitalize leading-[1.1]">
                    Building
                    <span className='text-secondary'> Better</span> Solutions
                    for Growth
                </h1>


                <p className="text-base font-normal max-w-md leading-relaxed text-gray-700">
                    A trusted partner delivering excellence across construction, trading, and consulting in the UAE and beyond. 15+ years of proven results.
                </p>

                <div className="flex gap-4 flex-wrap justify-start">
                    <Buttons link='/services' content='explore services' borderColor='border border-primary' />
                     <Buttons link='/contact' content='contact us' bgColor='bg-white' color='text-primary' borderColor='border border-primary' />
                </div>

                <div className="flex flex-wrap py-4  gap-15 ">
                    {counters.map((i,index)=>(
                        
                        <div key={index} className="flex gap-3 flex-col">
                            <h2 className="text-primary font-bold text-2xl tablet:text-3xl">
                                {i.title}
                            </h2>
                            <h3 className="font-medium text-sm text-gray-500 uppercase">
                                {i.content}
                            </h3>
                        </div>
                    ))}
                    
                </div>
            </div>

            {/* image section */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[480px]">

                <div className="relative col-span-2 md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden shadow-xl">
                    <Image src="/images/hero1.avif" fill alt="hero main" className="object-cover" />
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <Image src="/images/hero2.avif" fill alt="hero secondary" className="object-cover" />
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <Image src="/images/hero1.avif" fill alt="hero third" className="object-cover" />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Hero
