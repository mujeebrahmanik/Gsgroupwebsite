import Pagebanner from '@/components/common/Pagebanner'
import TradingItemsSection from '@/components/trading/TradingItemsSection'
import CTASection from '@/components/common/CTASection'

const plumbingItems = [
    'Basin Mixer / Sink Mixer',
    'Kitchen Accessories',
    'Bathroom Accessories',
    'Plumbing Consumables',
    'Flexible, Gaskets & Hose',
    'Soundproof Pipes',
]

export default function PlumbingAccessoriesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Trading', link: '/trading' },
                    { title: 'Plumbing Accessories' },
                ]}
                image={[
                    '/images/plumbing/01 (1).jpg',
                    '/images/plumbing/02.jpg',
                    '/images/plumbing/03.jpg',
                    '/images/plumbing/04.jpg',
                    '/images/plumbing/05.jpg',
                    '/images/plumbing/06.jpg',
                ]}
                title={<>Plumbing <br /><span className='text-muted'>Accessories</span></>}
                content='Golden Star General Trading is one of the best suppliers, distributors and retailers of quality Plumbing Accessories in Ajman, United Arab Emirates.'
            />

            <TradingItemsSection
                title='Plumbing Accessories'
                description='Golden Star General Trading is one of the best supplier, distributor and retailer of quality HVAC Accessories, Electrical Accessories, Plumbing Accessories, Hardwares, Tools, Safety products and Valves based in Ajman, United Arab Emirates.'
                items={plumbingItems}
            />

            <CTASection />
        </div>
    )
}
