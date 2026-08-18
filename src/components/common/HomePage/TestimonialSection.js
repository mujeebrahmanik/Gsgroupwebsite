import React from 'react'
import SectionHeading from '../SectionHeading'
import TestimonialCards from '../TestimonialCards'

const testimonials = [
    {
        rating: 5,
        content: 'GS Group delivered our infrastructure project on time and within budget. Their attention to quality and professionalism set them apart from any contractor we have worked with across the Emirates.',
        author: 'Ahmed Al-Khalifa',
        initials: 'AK',
        company: 'Director of Infrastructure, Emaar Properties',
    },
    {
        rating: 5,
        content: 'Their supply chain expertise is unmatched in the UAE. GS Group streamlined our procurement operations and significantly reduced delays across all active construction sites.',
        author: 'Sarah Reynolds',
        initials: 'SR',
        company: 'Head of Procurement, ADNOC Group',
    },
    {
        rating: 4,
        content: 'The consulting team at GS Group brought clarity to our expansion strategy. Their regional insights and governance frameworks have been instrumental to our growth trajectory.',
        author: 'Mohammed Al-Jaber',
        initials: 'MJ',
        company: 'CEO, Al Jaber Industrial Group',
    },
]

function TestimonialSection() {
  return (
    <div className='py-20 px-8 bg-cream'>
        <div className="flex flex-col gap-15 max-w-7xl mx-auto">
            <SectionHeading
            subTitle='Client Testimonials'
            mainTitle='What Our Partners Say'
            classname='justify-center items-center'
            textAlign='text-center'
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((i,index)=>(
                <TestimonialCards key={index} rating={i.rating} initials={i.initials} content={i.content} author={i.author} company={i.company}/>
            ))}
        </div>
        </div>
    </div>
  )
}

export default TestimonialSection
