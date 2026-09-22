import Pagebanner from '@/components/common/Pagebanner'
import ServicesSection from '@/components/common/ServicesSection'
import CTASection from '@/components/common/CTASection'
import React from 'react'

function page() {
  return (
    <div>
        <Pagebanner
            breadcrumbs={[{ title: 'services' }]}
            image={[
                '/images/CHILLER SERVICES/Gemini_Generated_Image_yolxzvyolxzvyolx.jpg',
                '/images/HEAT & COOL PUMP/Heat & cool pump.jpg',
                '/images/DUCT/KITCHEN  DUCT WORK.jpg',
                '/images/pipe-works/chilled water pipe line works.JPG',
                '/images/motor-rewinding/WhatsApp Image 2026-09-03 at 6.41.08 PM.jpeg',
            ]}
            title={<>our <br /><span className='text-muted'>services</span></>}
            content='Building landmark projects that shape the future of the UAE. Delivering execution excellence on every asset.'
        />
        <ServicesSection />
        <CTASection />
    </div>
  )
}

export default page
