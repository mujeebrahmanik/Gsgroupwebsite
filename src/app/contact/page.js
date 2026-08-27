import Pagebanner from '@/components/common/Pagebanner'
import SectionHeading from '@/components/common/SectionHeading'
import ContactSection from '@/components/contact/ContactSection'

export default function ContactPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[{ title: 'Contact' }]}
                image='/images/chillerservice.jpeg'
                title={<>Get In <br /><span className='text-muted'>Touch</span></>}
                content='Reach out to our team for enquiries, service requests, AMC quotations, or partnership opportunities. We respond within 24 hours.'
            />
            <ContactSection />

            {/* map */}
            <div className="w-full h-[450px]">
                
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0!2d55.4977!3d25.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShop+No+6%2C+Near+Lucky+Roundabout%2C+Industrial+Area+2%2C+Ajman!5e0!3m2!1sen!2sae!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GS Group Location"
                />
            </div>
        </div>
    )
}
