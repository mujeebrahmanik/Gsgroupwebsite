import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'
import Buttons from './Buttons'

function CTASection() {
  return (
    <div className='relative py-15 px-8 overflow-hidden'>
        <Image
                src="/images/ctabg.jpg"
                fill
                alt="cta background"
                className="object-cover"
        />

        <div className="flex absolute inset-0 bg-primary/90"></div>

        <div className="relative z-10 flex flex-col gap-8 max-w-7xl mx-auto">
            
            <SectionHeading
                subTitle='Partner With Us'
                mainTitle="Let's Build Something Better Together"
                paragraph="Connect with GS Group to explore how our cross-sector services and resilient supply chains can support your enterprise requirements."
                classname='justify-center items-center'
                textAlign='text-center'
                mainColor='text-white'
                paraColor='text-white'
            />

            <div className="flex justify-center items-center md:flex-row flex-col gap-6">
                <Buttons content='contact us' bgColor='bg-secondary-dark' borderColor=' ' color='text-black' link='/contact'/>
            </div>
        </div>
      
    </div>
  )
}

export default CTASection
