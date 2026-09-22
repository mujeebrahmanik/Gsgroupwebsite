import Pagebanner from '@/components/common/Pagebanner'
import TradingItemsSection from '@/components/trading/TradingItemsSection'
import CTASection from '@/components/common/CTASection'

const adhesiveItems = [
    'Adhesive & Aerosol',
    'Foam Spray & Gun',
    'Anti Corrosion Coating',
    'Construction & HVAC Adhesive',
    'Chemical Anchors',
]

export default function AdhesiveSealantTapesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Trading', link: '/trading' },
                    { title: 'Adhesive Sealant & Tapes' },
                ]}
                image={[
                    '/images/adhensive/01.jpg',
                    '/images/adhensive/02.jpg',
                    '/images/adhensive/03.jpg',
                    '/images/adhensive/04.jpg',
                ]}
                title={<>Adhesive <br /><span className='text-muted'>Sealant & Tapes</span></>}
                content='Golden Star General Trading is one of the best suppliers, distributors and retailers of quality Adhesives, Sealants and Tapes in Ajman, United Arab Emirates.'
            />

            <TradingItemsSection
                title='Adhesive Sealant & Tapes'
                description='Golden Star General Trading is one of the best supplier, distributor and retailer of quality HVAC Accessories, Electrical Accessories, Plumbing Accessories, Hardwares, Tools, Safety products and Valves based in Ajman, United Arab Emirates.'
                items={adhesiveItems}
            />

            <CTASection />
        </div>
    )
}
