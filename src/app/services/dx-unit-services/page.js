import Pagebanner from '@/components/common/Pagebanner'
import ServiceTypesSection from '@/components/services/ServiceTypesSection'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import AMCSection from '@/components/services/AMCSection'
import CTASection from '@/components/common/CTASection'

const dxTypes = [
    'DX Package Units',
    'Ducted DX Units',
    'Rooftop Units',
    'Split DX Systems',
    'Air-Cooled DX Units',
    'Commercial & Industrial DX Systems',
]

const dxServices = [
    {
        title: 'DX Unit Supply & Installation',
        description: 'Supply and professional installation of DX units for commercial and industrial cooling applications.',
    },
    {
        title: 'DX System Testing & Commissioning',
        description: 'Full system testing and commissioning to ensure optimal performance and compliance with design specifications.',
    },
    {
        title: 'Preventive Maintenance & Servicing',
        description: 'Scheduled preventive maintenance to keep DX systems running efficiently and prevent unexpected breakdowns.',
    },
    {
        title: 'DX Unit Breakdown & Repair',
        description: 'Fast response breakdown repair services to minimise downtime and restore cooling operations quickly.',
    },
    {
        title: 'Compressor Inspection & Repair',
        description: 'Detailed compressor inspection, diagnosis and repair to maintain reliable cooling performance.',
    },
    {
        title: 'Refrigerant Leak Testing & Gas Charging',
        description: 'Advanced leak detection, refrigerant recovery and precise gas charging as per manufacturer specifications.',
    },
    {
        title: 'Copper Refrigerant Pipe Installation & Repair',
        description: 'Precision fabrication, installation and repair of copper refrigerant piping with leak-free brazed connections.',
    },
    {
        title: 'Condenser & Evaporator Coil Cleaning',
        description: 'Deep cleaning of condenser and evaporator coils to improve heat transfer and energy efficiency.',
    },
    {
        title: 'Air Filter Cleaning & Replacement',
        description: 'Routine cleaning and replacement of air filters to maintain indoor air quality and airflow performance.',
    },
    {
        title: 'Electrical & Control System Inspection',
        description: 'Inspection and testing of electrical panels, contactors, controllers and safety devices for reliable operation.',
    },
    {
        title: 'Thermostat, Sensor & Controller Checking',
        description: 'Calibration and testing of thermostats, sensors and controllers for accurate temperature regulation.',
    },
    {
        title: 'Performance Testing & Troubleshooting',
        description: 'Full performance evaluation including pressures, temperatures and current draw to identify inefficiencies.',
    },
    {
        title: 'DX Unit Replacement & Upgrading',
        description: 'Replacement of aged units with modern energy-efficient DX systems tailored to your cooling requirements.',
    },
    {
        title: 'Emergency Repair & Maintenance Services',
        description: '24/7 emergency response for urgent DX system repairs and maintenance to keep operations running.',
    },
]

const amcItems = [
    'Scheduled preventive maintenance',
    'Complete system inspection',
    'Cleaning and servicing',
    'Refrigerant pressure and leakage checks',
    'Electrical and control system checks',
    'Performance monitoring',
    'Breakdown and emergency support',
    'Recommended repair and replacement works',
]

export default function DXUnitServicesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'DX Unit Services' },
                ]}
                image='/images/dx unit/images.jpg'
                title={<>DX Unit <br /><span className='text-muted'>Services</span></>}
                content='We provide maintenance and technical support for various DX air conditioning systems — from package and ducted units to rooftop, split and industrial DX systems.'
            />

            <ServiceTypesSection
                title='DX Systems We Cover'
                types={dxTypes}
            />

            <ServiceDetailSection
                title='What We Do'
                services={dxServices}
            />

            <AMCSection
                title='AMC Services'
                items={amcItems}
            />

            <CTASection />
        </div>
    )
}
