import Pagebanner from '@/components/common/Pagebanner'
import TradingItemsSection from '@/components/trading/TradingItemsSection'
import CTASection from '@/components/common/CTASection'

const electricalItems = [
    'Wires & Cables',
    'Switches & Sockets',
    'Cable Ties & Terminals',
    'Circuit Breaker & Fuses',
    'Conducts & Tubings',
]

export default function ElectricalAccessoriesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Trading', link: '/trading' },
                    { title: 'Electrical Accessories' },
                ]}
                image={[
                    '/images/electrical/01.jpg',
                    '/images/electrical/02.jpg',
                    '/images/electrical/03.jpg',
                    '/images/electrical/04.jpg',
                ]}
                title={<>Electrical <br /><span className='text-muted'>Accessories</span></>}
                content='Golden Star General Trading is one of the best suppliers, distributors and retailers of quality Electrical Accessories in Ajman, United Arab Emirates.'
            />

            <TradingItemsSection
                title='Electrical Accessories'
                description='Golden Star General Trading is one of the best supplier, distributor and retailer of quality HVAC Accessories, Electrical Accessories, Plumbing Accessories, Hardwares, Tools, Safety products and Valves based in Ajman, United Arab Emirates.'
                items={electricalItems}
            />

            <CTASection />
        </div>
    )
}
