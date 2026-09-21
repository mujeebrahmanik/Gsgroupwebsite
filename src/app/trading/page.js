import Pagebanner from '@/components/common/Pagebanner'
import TradingSection from '@/components/common/TradingSection'
import CTASection from '@/components/common/CTASection'

export default function TradingPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[{ title: 'Trading' }]}
                image={[
                    '/images/CHILLER SERVICES/Gemini_Generated_Image_yolxzvyolxzvyolx.jpg',
                    '/images/pipe-works/chilled water pipe line works.JPG',
                    '/images/DUCT/KITCHEN  DUCT WORK.jpg',
                ]}
                title={<>Our <br /><span className='text-muted'>Trading</span></>}
                content='As an authorised distributor for leading international brands, we supply genuine HVAC, plumbing, electrical, and industrial accessories — ensuring fast availability and competitive pricing across the UAE.'
            />
            <TradingSection />
            <CTASection />
        </div>
    )
}
