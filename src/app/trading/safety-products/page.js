import Pagebanner from '@/components/common/Pagebanner'
import TradingItemsSection from '@/components/trading/TradingItemsSection'
import CTASection from '@/components/common/CTASection'

const safetyItems = [
    'Breathing Protection',
    'Eye & Hearing Protection',
    'Head & Face Protection',
    'Protective Clothes',
    'Hand & Foot Protection',
]

export default function SafetyProductsPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Trading', link: '/trading' },
                    { title: 'Safety Products' },
                ]}
                image={[
                    '/images/safety/01 (1).jpg',
                    '/images/safety/02.jpg',
                    '/images/safety/03.jpg',
                    '/images/safety/04.jpg',
                ]}
                title={<>Safety <br /><span className='text-muted'>Products</span></>}
                content='Golden Star General Trading is one of the best suppliers, distributors and retailers of quality Safety Products in Ajman, United Arab Emirates.'
            />

            <TradingItemsSection
                title='Safety Products'
                description='Golden Star General Trading is one of the best supplier, distributor and retailer of quality HVAC Accessories, Electrical Accessories, Plumbing Accessories, Hardwares, Tools, Safety products and Valves based in Ajman, United Arab Emirates.'
                items={safetyItems}
            />

            <CTASection />
        </div>
    )
}
