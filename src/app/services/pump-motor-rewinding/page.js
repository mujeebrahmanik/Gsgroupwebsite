import Pagebanner from '@/components/common/Pagebanner'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import CTASection from '@/components/common/CTASection'

const scopeOfWork = [
    {
        title: 'Pump Motor Inspection & Fault Diagnosis',
        description: 'Detailed inspection and systematic fault diagnosis to identify winding, mechanical or electrical faults.',
    },
    {
        title: 'Motor Winding Testing & Rewinding',
        description: 'Complete motor winding testing and precision rewinding to restore full electrical performance.',
    },
    {
        title: 'Replacement of Damaged Winding Materials',
        description: 'Replacement of burnt or damaged winding materials with high-quality copper and insulation grades.',
    },
    {
        title: 'Bearing Inspection & Replacement',
        description: 'Precision inspection and replacement of worn bearings to eliminate noise, vibration and premature failure.',
    },
    {
        title: 'Motor Shaft & Mechanical Condition Inspection',
        description: 'Inspection of motor shafts and mechanical components for wear, alignment and structural integrity.',
    },
    {
        title: 'Impeller & Pump Assembly Inspection',
        description: 'Detailed inspection of impellers and complete pump assemblies to identify wear and performance issues.',
    },
    {
        title: 'Replacement of Damaged Electrical Components',
        description: 'Replacement of damaged electrical components including terminals, connectors, contactors and controls.',
    },
    {
        title: 'Insulation Resistance & Continuity Testing',
        description: 'Precise insulation resistance and continuity testing to verify winding integrity and electrical safety.',
    },
    {
        title: 'Motor Alignment & Assembly',
        description: 'Precision motor alignment and reassembly to ensure smooth vibration-free operation.',
    },
    {
        title: 'No-Load & Load Testing',
        description: 'No-load and full-load testing to verify motor performance under actual operating conditions.',
    },
    {
        title: 'Pump Performance Checking',
        description: 'Full pump performance evaluation including flow rate, pressure, current draw and efficiency.',
    },
    {
        title: 'Final Testing & Commissioning',
        description: 'End-to-end final testing and commissioning to hand over a fully verified working pump motor system.',
    },
    {
        title: 'Preventive Maintenance & Repair Support',
        description: 'Ongoing preventive maintenance and repair support to keep pumps and motors reliable long-term.',
    },
]

export default function PumpMotorRewindingPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Pump & Motor Rewinding' },
                ]}
                image='/images/HVAC Circulating & Transfer Pumps/vertical multi-stage centrifugal pump skid system.jpg'
                title={<>Pump & Motor <br /><span className='text-muted'>Rewinding</span></>}
                content='Professional Pump and Motor Winding Repair Services for commercial, residential, industrial and HVAC applications — our technicians provide complete inspection, rewinding, repair, testing and commissioning to restore equipment performance and reliability.'
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
