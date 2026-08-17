import React from 'react'
import SectionHeading from '../SectionHeading'
import ImgCards from '../ImgCards'

const ServiceData = [
    {
        title: 'Products',
        content: 'We supply high-performance HVAC and refrigeration equipment including Air-Cooled, Water-Cooled, and Screw Chillers from globally trusted brands — engineered for commercial and industrial demands across the UAE.',
        link: '/products',
        image: '/images/hp.jpeg'
    },
    {
        title: 'Services',
        content: 'From design and installation to maintenance and emergency support, our certified engineers deliver end-to-end MEP and HVAC services that keep your systems running at peak efficiency year-round.',
        link: '/services',
        image: '/images/chillerservice.jpeg'
    },
    {
        title: 'Trading',
        content: 'As an authorised distributor for leading international brands, we supply genuine spare parts, compressors, controls, and cooling components — ensuring fast availability and competitive pricing across the region.',
        link: '/trading',
        image: '/images/hp.jpeg'
    },
]

function ExpertiseSection() {
  return (
    <div className='py-15 px-8 bg-cream'>
        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
            <SectionHeading
                subTitle='our expertise'
                mainTitle='Three pillars of business excellence'
                paragraph='From industrial cooling products to civil engineering and global trading — GS Group delivers integrated solutions across the UAE'
                paraColor='text-gray-600'

            />

            <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-3 gap-10">
                {ServiceData.map((i,index)=>(
                    <ImgCards key={index} img={i.image} title={i.title} content={i.content} link={i.link} />
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default ExpertiseSection
