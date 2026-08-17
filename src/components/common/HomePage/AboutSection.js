import React from 'react'
import Image from 'next/image'
import SectionHeading from '../SectionHeading'
import Buttons from '../Buttons'

function AboutSection() {
  return (
    <div className='bg-white py-20 px-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 tablet:gap-20 gap-15 max-w-7xl mx-auto">

            <div className="relative h-[480px]">

                {/* back image */}
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl">
                    <Image src="/images/chillerservice.jpeg" fill alt="about main" className="object-cover" />
                </div>

                {/* front image */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image src="/images/hero1.avif" fill alt="about secondary" className="object-cover" />
                </div>

                {/* experience badge */}
                <div className="absolute bottom-[-10] right-[-10] bg-primary text-white rounded-2xl p-5 shadow-xl z-10">
                    <p className="text-3xl font-black text-secondary">15+</p>
                    <p className="text-xs uppercase tracking-widest">Years Experience</p>
                </div>

            </div>

            <div className="flex flex-col gap-6">
                <SectionHeading
                    subTitle='Who We Are'
                    mainTitle='Comprehensive Solution for Business Excellence'
                    paraSize='text-base'
                    paragraph={<>GS Group is a multi-sector corporate conglomerate in the UAE, strategically positioned to support the nation's ambitious infrastructure and supply chain development.<br/><br/>

                    Over fifteen years, we have scaled operations across construction, trading, and business advisory, ensuring sustainable growth for public and private sector clients.
                    </>}
                    
                />
                <Buttons content='get in touch' link='/contact/' />
            </div>
        </div>
      
    </div>
  )
}

export default AboutSection
