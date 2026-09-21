import Pagebanner from '@/components/common/Pagebanner'
import TradingItemsSection from '@/components/trading/TradingItemsSection'
import CTASection from '@/components/common/CTASection'

const hvacItems = [
    'AC Units',
    'Exhaust Fans',
    'Air Curtains',
    'Industrial Ventilation Fans',
    'Air Filters',
    'Vibration Isolation',
    'Dampers',
    'Compressors',
    'Drain Pumps',
    'Flexible Ducts',
    'Ducts',
    'Insulation Products',
    'Refrigerant Gas & Oil',
    'Thermostats',
]

export default function HvacAccessoriesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Trading', link: '/trading' },
                    { title: 'HVAC Accessories' },
                ]}
                image={[
                    '/images/hvac accessories/01.jpg',
                    '/images/hvac accessories/02.jpg',
                    '/images/hvac accessories/03.jpg',
                    '/images/hvac accessories/04.jpg',
                    '/images/hvac accessories/05.jpg',
                    '/images/hvac accessories/06.jpg',
                    '/images/hvac accessories/07.jpg',
                    '/images/hvac accessories/08.jpg',
                    '/images/hvac accessories/09.jpg',
                ]}
                title={<>HVAC <br /><span className='text-muted'>Accessories</span></>}
                content='Golden Star General Trading is one of the best suppliers, distributors and retailers of quality HVAC Accessories in Ajman, United Arab Emirates.'
            />

            <TradingItemsSection
                title='HVAC Accessories'
                description='Golden Star General Trading is one of the best supplier, distributor and retailer of quality HVAC Accessories, Electrical Accessories, Plumbing Accessories, Hardwares, Tools, Safety products and Valves based in Ajman, United Arab Emirates.'
                items={hvacItems}
            />

            <CTASection />
        </div>
    )
}
