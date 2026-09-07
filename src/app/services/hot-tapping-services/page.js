import Pagebanner from '@/components/common/Pagebanner'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import CTASection from '@/components/common/CTASection'

const scopeOfWork = [
    {
        title: 'Hot Tapping Services',
        description: 'Specialised hot tapping techniques enabling new connections on live pressurised pipe systems with zero shutdown.',
    },
    {
        title: 'Pipe Branch Connection',
        description: 'Creation of new branch connections on existing pipelines while maintaining continuous system operation.',
    },
    {
        title: 'Tapping Fitting Installation',
        description: 'Precision installation of tapping fittings and saddles to prepare pipes for safe branch cut-in.',
    },
    {
        title: 'Valve Installation',
        description: 'Installation of isolation valves on live pipelines enabling future maintenance without full drain-down.',
    },
    {
        title: 'Pressurized Pipe Connection',
        description: 'Safe connection to pressurised pipes using specialist equipment and procedures to prevent leaks.',
    },
    {
        title: 'Pipe Welding & Fabrication',
        description: 'Certified pipe welding and on-site fabrication supporting all hot tapping and branch connection works.',
    },
    {
        title: 'Chilled Water Hot Tapping',
        description: 'Hot tapping on chilled water systems allowing extensions and modifications without cooling downtime.',
    },
    {
        title: 'HVAC Pipe Modification',
        description: 'Modifications and extensions on HVAC piping networks while systems remain operational.',
    },
    {
        title: 'Pressure Testing',
        description: 'Comprehensive pressure testing of new connections to verify strength and safe operating limits.',
    },
    {
        title: 'Leak Testing',
        description: 'Detailed leak testing after hot tapping to confirm connection integrity and prevent future issues.',
    },
    {
        title: 'Testing & Commissioning',
        description: 'End-to-end testing and commissioning of new tie-ins and connections for safe reliable operation.',
    },
]

export default function HotTappingServicesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Hot Tapping Services' },
                ]}
                image='/images/HVAC Circulating & Transfer Pumps/suctiondischarge header manifold assembly for the vertical multi-stage booster pump system..jpg'
                title={<>Hot Tapping <br /><span className='text-muted'>Services</span></>}
                content='Professional hot tapping services for creating new pipe connections on existing pressurised piping systems with minimum service interruption — ideal for extensions, modifications and tie-ins on live chilled water and HVAC networks.'
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
