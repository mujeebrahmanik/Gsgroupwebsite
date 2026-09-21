import Pagebanner from '@/components/common/Pagebanner'
import TradingItemsSection from '@/components/trading/TradingItemsSection'
import CTASection from '@/components/common/CTASection'

const valvesItems = [
    '2 Way and 3 Way Control Valves',
    'Gate Valve & Globe Valve',
    'Angle Valve & Ball Valve',
    'Non Return / Check Valve',
    'Actuator & Air Vent',
    'Pressure Reducing & Relief Valves',
    'Butterfly & Double Regulating Valve',
    'Expansion Joint & Strainers',
]

export default function ValvesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Trading', link: '/trading' },
                    { title: 'Valves' },
                ]}
                image={[
                    '/images/valves/01.jpg',
                    '/images/valves/02.jpg',
                    '/images/valves/03.jpg',
                    '/images/valves/04.jpg',
                    '/images/valves/05.jpg',
                ]}
                title={<>Valves </>}
                content='Golden Star General Trading is one of the best suppliers, distributors and retailers of quality Valves in Ajman, United Arab Emirates.'
            />

            <TradingItemsSection
                title='Valves'
                description='Golden Star General Trading is one of the best supplier, distributor and retailer of quality HVAC Accessories, Electrical Accessories, Plumbing Accessories, Hardwares, Tools, Safety products and Valves based in Ajman, United Arab Emirates.'
                items={valvesItems}
            />

            <CTASection />
        </div>
    )
}
