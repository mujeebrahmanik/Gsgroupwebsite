import Pagebanner from '@/components/common/Pagebanner'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import AMCSection from '@/components/services/AMCSection'
import CTASection from '@/components/common/CTASection'

const scopeOfWork = [
    {
        title: 'ERV System Supply & Installation',
        description: 'Supply and professional installation of ERV systems for residential, commercial and industrial buildings.',
    },
    {
        title: 'Fresh Air & Exhaust Air Ventilation',
        description: 'Balanced fresh-air intake and exhaust ventilation to maintain healthy indoor air quality.',
    },
    {
        title: 'ERV Unit Replacement & Upgrading',
        description: 'Replacement of aged units with modern, energy-efficient ERV systems for improved performance.',
    },
    {
        title: 'Ductwork Connection & Installation',
        description: 'Complete design and installation of ductwork connecting ERV units to the building HVAC network.',
    },
    {
        title: 'Fresh Air & Exhaust Duct Installation',
        description: 'Fabrication and installation of dedicated fresh air and exhaust ducts with proper sizing and routing.',
    },
    {
        title: 'Electrical Power & Control Connections',
        description: 'Full electrical power wiring and control connections including safety devices and control panels.',
    },
    {
        title: 'Controller & Sensor Installation',
        description: 'Installation and configuration of controllers and sensors for smart automated ERV operation.',
    },
    {
        title: 'Filters Inspection & Replacement',
        description: 'Regular inspection and replacement of ERV filters to maintain air quality and airflow performance.',
    },
    {
        title: 'Heat/Energy Recovery Core Cleaning',
        description: 'Deep cleaning of the heat/energy recovery core to maintain thermal transfer efficiency.',
    },
    {
        title: 'Fan Motor Inspection & Servicing',
        description: 'Inspection, lubrication and servicing of fan motors to prevent failures and reduce noise.',
    },
    {
        title: 'Blower & Bearing Inspection',
        description: 'Detailed inspection of blowers and bearings to ensure smooth, vibration-free operation.',
    },
    {
        title: 'Damper Inspection & Adjustment',
        description: 'Inspection, calibration and adjustment of dampers for balanced airflow control.',
    },
    {
        title: 'Airflow Testing & Balancing',
        description: 'Airflow testing and balancing to ensure ERV systems meet design specifications.',
    },
    {
        title: 'Condensate Drain Inspection',
        description: 'Inspection and cleaning of condensate drains to prevent blockages and water leakage.',
    },
    {
        title: 'Refrigerant Circuit Inspection',
        description: 'Refrigerant circuit inspection where applicable, including pressure checks and leak testing.',
    },
    {
        title: 'Leak Testing & Troubleshooting',
        description: 'Comprehensive leak testing and systematic troubleshooting to identify performance issues.',
    },
    {
        title: 'Testing & Commissioning',
        description: 'Complete system testing and commissioning to hand over a fully verified working ERV system.',
    },
    {
        title: 'Performance Inspection',
        description: 'Performance evaluation of ventilation rates, energy recovery efficiency and system parameters.',
    },
    {
        title: 'Preventive Maintenance',
        description: 'Scheduled preventive maintenance to minimise breakdowns and extend ERV service life.',
    },
    {
        title: 'Corrective Maintenance',
        description: 'Prompt corrective maintenance to restore performance after breakdowns or faults.',
    },
    {
        title: 'Emergency Repair Services',
        description: '24/7 emergency response for urgent ERV system repairs with minimal operational disruption.',
    },
]

const amcItems = [
    'Filter cleaning & replacement',
    'Fan and motor inspection',
    'Heat recovery core cleaning',
    'Electrical checking',
    'Airflow inspection',
    'Duct connection checking',
    'Control system inspection',
    'Fault diagnosis',
]

export default function ErvSystemServicesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'ERV System Services' },
                ]}
                image='/images/hero1.avif'
                title={<>ERV System <br /><span className='text-muted'>Services</span></>}
                content='We provide complete ERV (Energy Recovery Ventilation) System Supply, Installation, Testing, Commissioning, Maintenance, Repair and AMC Services — delivering controlled fresh-air ventilation while recovering energy from exhaust air to improve indoor air quality and reduce HVAC load.'
            />

            <ServiceDetailSection
                title='Scope of Work'
                description='From ERV supply and installation to maintenance, repair, replacement, testing, commissioning and AMC — we deliver complete energy recovery ventilation solutions tailored to project and site requirements.'
                services={scopeOfWork}
                bg='bg-white'
            />

            <AMCSection
                title='ERV Maintenance & AMC'
                items={amcItems}
            />

            <CTASection />
        </div>
    )
}
