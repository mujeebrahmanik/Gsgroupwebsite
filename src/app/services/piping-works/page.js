import Pagebanner from '@/components/common/Pagebanner'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import CTASection from '@/components/common/CTASection'

const scopeOfWork = [
    {
        title: 'MS Pipe Supply',
        description: 'Supply of MS (Mild Steel) pipes as per project specifications, sizes, and grades for various applications.',
    },
    {
        title: 'Pipe Cutting, Threading & Fabrication',
        description: 'Precision pipe cutting, threading, grooving and fabrication tailored to site and design requirements.',
    },
    {
        title: 'Welding & Jointing Works',
        description: 'Professional welding and jointing works ensuring leak-free, high-strength pipe connections.',
    },
    {
        title: 'MS Pipework Installation',
        description: 'Installation of MS pipework strictly as per approved drawings and verified site requirements.',
    },
    {
        title: 'Pipe Supports, Clamps & Hangers',
        description: 'Fabrication and installation of pipe supports, clamps, hangers and brackets for secure mounting.',
    },
    {
        title: 'Valve & Fitting Installation',
        description: 'Installation of shut-off, control, balancing and check valves along with associated fittings.',
    },
    {
        title: 'Flange & Coupling Installation',
        description: 'Precision installation of flanges and couplings for reliable connections and easy future maintenance.',
    },
    {
        title: 'Pipe Routing & Alignment',
        description: 'Careful pipe routing and alignment to ensure optimal flow, minimum resistance and clean layout.',
    },
    {
        title: 'Hydrostatic & Pressure Testing',
        description: 'Hydrostatic and pressure testing with detailed leak checking to verify system integrity.',
    },
    {
        title: 'Surface Preparation & Coating',
        description: 'Surface preparation and painting/coating works where required to prevent corrosion and extend pipe life.',
    },
    {
        title: 'Insulation Works',
        description: 'Pipe insulation works where applicable to minimise thermal losses, condensation and heat gain.',
    },
    {
        title: 'Final Testing & Commissioning',
        description: 'End-to-end final testing and commissioning to hand over a fully verified operational piping system.',
    },
]

export default function PipingWorksPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Piping Works' },
                ]}
                image='/images/HVAC Circulating & Transfer Pumps/chilled water pump assembly and piping manifold system.jpg'
                title={<>MS Pipe Supply & <br /><span className='text-muted'>Installation</span></>}
                content='Professional MS (Mild Steel) Pipe Supply & Installation Services for HVAC, chilled water, plumbing, firefighting, industrial and mechanical applications — from material supply and fabrication to installation, testing and commissioning.'
            />

            <ServiceDetailSection
                title='Scope of Work'
                services={scopeOfWork}
                bg='bg-white'
            />

            <CTASection />
        </div>
    )
}
