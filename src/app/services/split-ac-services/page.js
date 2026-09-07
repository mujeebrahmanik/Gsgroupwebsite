import Pagebanner from '@/components/common/Pagebanner'
import ServiceTypesSection from '@/components/services/ServiceTypesSection'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import AMCSection from '@/components/services/AMCSection'
import CTASection from '@/components/common/CTASection'

const splitAcTypes = [
    'Wall-Mounted Split AC',
    'Inverter Split AC',
    'Non-Inverter Split AC',
    'Commercial Split AC',
    'High-Wall Split AC',
    'Cooling & Heating Split AC Systems',
]

const splitAcServices = [
    {
        title: 'Split AC Supply & Installation',
        description: 'Supply and installation of split AC units from all leading brands for residential and commercial applications.',
    },
    {
        title: 'New Split AC Installation',
        description: 'Professional installation of new split AC systems including mounting, wiring, piping and commissioning.',
    },
    {
        title: 'Split AC Servicing & Cleaning',
        description: 'Complete servicing and deep cleaning of indoor and outdoor units to maintain cooling efficiency.',
    },
    {
        title: 'Preventive AC Maintenance',
        description: 'Regular preventive maintenance schedules to minimise breakdowns and extend AC lifespan.',
    },
    {
        title: 'Split AC Repair & Troubleshooting',
        description: 'Expert diagnosis and repair for all types of split AC faults, from cooling issues to electrical problems.',
    },
    {
        title: 'Compressor Inspection & Repair',
        description: 'Compressor inspection, diagnosis and repair to restore optimal cooling performance.',
    },
    {
        title: 'Refrigerant Leak Testing & Gas Charging',
        description: 'Accurate leak detection, refrigerant recovery and precise gas charging as per system requirements.',
    },
    {
        title: 'Copper Pipe Supply & Installation',
        description: 'Supply and precision installation of copper refrigerant piping with leak-free brazed connections.',
    },
    {
        title: 'Drain Pipe Installation & Cleaning',
        description: 'Installation, unclogging and cleaning of AC drain pipes to prevent water leakage and blockage.',
    },
    {
        title: 'Indoor & Outdoor Unit Cleaning',
        description: 'Comprehensive cleaning of both indoor and outdoor AC units to remove dust, dirt and contaminants.',
    },
    {
        title: 'Condenser & Evaporator Coil Cleaning',
        description: 'Deep chemical cleaning of condenser and evaporator coils to improve heat exchange efficiency.',
    },
    {
        title: 'Air Filter Cleaning & Replacement',
        description: 'Cleaning and replacement of air filters to maintain indoor air quality and optimal airflow.',
    },
    {
        title: 'Electrical & Control System Checking',
        description: 'Inspection of electrical panels, wiring, contactors and safety devices for safe reliable operation.',
    },
    {
        title: 'Thermostat & Sensor Inspection',
        description: 'Testing and calibration of thermostats and sensors for accurate temperature control.',
    },
    {
        title: 'AC Performance Testing',
        description: 'Full performance evaluation of cooling capacity, airflow, temperature and power consumption.',
    },
    {
        title: 'Split AC Replacement & Upgrading',
        description: 'Replacement of aged units with modern energy-efficient split ACs to reduce running costs.',
    },
    {
        title: 'Emergency AC Repair Services',
        description: '24/7 emergency AC repair to restore cooling operations quickly with minimal disruption.',
    },
]

const amcItems = [
    'Scheduled preventive maintenance',
    'Complete AC inspection and servicing',
    'Indoor and outdoor unit cleaning',
    'Filter and coil cleaning',
    'Refrigerant pressure and leakage checks',
    'Electrical and control system inspection',
    'Performance testing',
    'Breakdown and emergency support',
    'Repair and replacement recommendations',
]

export default function SplitAcServicesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Split AC Services' },
                ]}
                image='/images/hero2.avif'
                title={<>Split AC <br /><span className='text-muted'>Services</span></>}
                content='We provide maintenance and repair services for major Split AC makes and models — from wall-mounted and inverter systems to commercial cooling and heating units.'
            />

            <ServiceTypesSection
                title='Types We Cover'
                types={splitAcTypes}
            />

            <ServiceDetailSection
                title='What We Do'
                services={splitAcServices}
            />

            <AMCSection
                title='AMC Services'
                items={amcItems}
            />

            <CTASection />
        </div>
    )
}
