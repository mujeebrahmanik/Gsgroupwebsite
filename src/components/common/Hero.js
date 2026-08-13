import React from 'react'
import Buttons from './Buttons'

function Hero() {
  return (
    <div className='bg-white py-20 px-8'>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-15 max-w-7xl mx-auto">

            <div className="flex flex-col gap-6">
                <h1 className="md:text-6xl text-5xl font-extrabold max-w-sm text-primary tracking-tight capitalize leading-[1.1]">
                    Building
                    <span className='text-secondary'> Better</span> Solutions
                    for Growth
                </h1>


                <p className="text-base font-normal max-w-md leading-relaxed text-gray-700">
                    A trusted partner delivering excellence across construction, trading, and consulting in the UAE and beyond. 15+ years of proven results.
                </p>

                <div className="flex gap-4 flex-wrap justify-start">
                    <Buttons link='/services' content='explore services' />
                     <Buttons link='/contact' content='contact us' bgColor='bg-white' color='text-primary' borderColor='border border-primary' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero
