import Pagebanner from '@/components/common/Pagebanner'
import ServiceTypesSection from '@/components/services/ServiceTypesSection'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import AMCSection from '@/components/services/AMCSection'
import CTASection from '@/components/common/CTASection'

const chillerTypes = [
    'Air-Cooled Chillers',
    'Water-Cooled Chillers',
    'Screw Chillers',
    'Scroll Chillers',
    'Centrifugal Chillers',
    'Reciprocating Chillers',
    'Absorption Chillers',
    'Packaged Chillers',
    'Industrial Process Chillers',
    'Modular Chillers',
    'All Major Makes & Models',
]

const chillerServices = [
    {
        title: 'Preventive Maintenance',
        description: 'Scheduled inspection and maintenance to minimize breakdowns and maintain reliable chiller operation.',
    },
    {
        title: 'Chiller Servicing & Cleaning',
        description: 'Complete inspection, cleaning and servicing of chiller components to maintain system efficiency.',
    },
    {
        title: 'Compressor Maintenance & Overhauling',
        description: 'Inspection, servicing, repair and overhauling of compressors, including full troubleshooting.',
    },
    {
        title: 'Refrigeration System Services',
        description: 'Refrigerant pressure checking, leak testing, refrigerant charging, troubleshooting and rectification.',
    },
    {
        title: 'Condenser & Evaporator Maintenance',
        description: 'Cleaning, inspection and maintenance of condenser and evaporator systems.',
    },
    {
        title: 'Electrical & Control System Maintenance',
        description: 'Inspection and troubleshooting of electrical panels, contactors, overload protection, controllers, sensors, and thermostats.',
    },
    {
        title: 'Chilled Water System Maintenance',
        description: 'Inspection of chilled water pumps, valves, strainers, piping, flow systems and related components.',
    },
    {
        title: 'Cooling Tower Maintenance',
        description: 'Inspection, cleaning and maintenance of cooling towers and all associated components.',
    },
    {
        title: 'Breakdown & Emergency Services',
        description: 'Rapid troubleshooting and repair support for breakdowns, abnormal temperatures, high/low pressure and compressor issues.',
    },
    {
        title: 'Testing & Performance Monitoring',
        description: 'Checking operating parameters, temperatures, pressures, water flow, electrical readings and overall chiller performance.',
    },
]

const amcItems = [
    'Chiller Type & Capacity',
    'Number of Units',
    'Equipment Condition',
    'Operating Hours',
    'Site Requirements',
    'Preventive Maintenance Frequency',
    'Client-Specific Maintenance Requirements',
]

export default function ChillerServicesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Chiller Services' },
                ]}
                image='/images/chillerservice.jpeg'
                title={<>Chiller <br /><span className='text-muted'>Services</span></>}
                content='Professional chiller maintenance, repair, servicing and Annual Maintenance Contract (AMC) services for commercial and industrial systems across the UAE.'
            />

            <ServiceTypesSection
                title='Chiller Types We Cover'
                types={chillerTypes}
            />

            <ServiceDetailSection
                title='What We Do'
                services={chillerServices}
            />

            <AMCSection
                title='AMC Customization'
                items={amcItems}
            />

            <CTASection />
        </div>
    )
}
