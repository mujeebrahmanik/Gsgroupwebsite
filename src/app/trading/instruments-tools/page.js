import Pagebanner from '@/components/common/Pagebanner'
import TradingItemsSection from '@/components/trading/TradingItemsSection'
import CTASection from '@/components/common/CTASection'

const instrumentItems = [
    'Airflow Measuring Instrument',
    'Temperature & Humidity Check',
    'Anomo Meter & Tachometer',
    'Voltage & Resistance Tester',
    'Multimeter and Clamp Meter',
    'Hand & Power Tools',
]

export default function InstrumentsToolsPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Trading', link: '/trading' },
                    { title: 'Instruments & Tools' },
                ]}
                image={[
                    '/images/instruments/01 (1).jpg',
                    '/images/instruments/02.jpg',
                    '/images/instruments/03.jpg',
                    '/images/instruments/04.jpg',
                    '/images/instruments/05.jpg',
                    '/images/instruments/06.jpg',
                    '/images/instruments/07.jpg',
                ]}
                title={<>Instruments <br /><span className='text-muted'>& Tools</span></>}
                content='Golden Star General Trading is one of the best suppliers, distributors and retailers of quality Instruments and Tools in Ajman, United Arab Emirates.'
            />

            <TradingItemsSection
                title='Instruments & Tools'
                description='Golden Star General Trading is one of the best supplier, distributor and retailer of quality HVAC Accessories, Electrical Accessories, Plumbing Accessories, Hardwares, Tools, Safety products and Valves based in Ajman, United Arab Emirates.'
                items={instrumentItems}
            />

            <CTASection />
        </div>
    )
}
