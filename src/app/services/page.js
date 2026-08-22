import Pagebanner from '@/components/common/Pagebanner'
import ServicesSection from '@/components/common/ServicesSection'
import CTASection from '@/components/common/CTASection'
import React from 'react'

function page() {
  return (
    <div>
        <Pagebanner
            breadcrumbs={[{ title: 'services' }]}
            image='/images/chillerservice.jpeg'
            title={<>our <br /><span className='text-muted'>services</span></>}
            content='Building landmark projects that shape the future of the UAE. Delivering execution excellence on every asset.'
        />
        <ServicesSection />
        <CTASection />
    </div>
  )
}

export default page
