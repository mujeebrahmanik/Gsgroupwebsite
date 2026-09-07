import Pagebanner from '@/components/common/Pagebanner'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import AMCSection from '@/components/services/AMCSection'
import CTASection from '@/components/common/CTASection'

const scopeOfWork = [
    {
        title: 'Heat Pump Supply & Installation',
        description: 'Supply and professional installation of heat pump systems for residential, commercial and industrial applications.',
    },
    {
        title: 'Heating & Cooling Heat Pump Systems',
        description: 'Complete solutions for heat pump systems providing both heating and cooling for year-round comfort.',
    },
    {
        title: 'Heat Pump Replacement & Upgrading',
        description: 'Replacement of aged units with modern energy-efficient heat pump systems to reduce operating costs.',
    },
    {
        title: 'Complete Heat Pump Piping Connections',
        description: 'Design and installation of all associated piping for heat pump systems with leak-free connections.',
    },
    {
        title: 'Electrical Power & Control Connections',
        description: 'Full electrical power and control wiring including safety devices, breakers and control panels.',
    },
    {
        title: 'Water Pump & Circulation System Installation',
        description: 'Installation of circulation pumps and water systems supporting heat pump operation and heat transfer.',
    },
    {
        title: 'Insulation & Valve Installation',
        description: 'Piping insulation and installation of shut-off, balancing and control valves for reliable operation.',
    },
    {
        title: 'Thermostat & Control System Installation',
        description: 'Installation and configuration of thermostats and control systems for accurate temperature management.',
    },
    {
        title: 'Testing & Commissioning',
        description: 'Complete system testing and commissioning to ensure optimal performance from day one.',
    },
    {
        title: 'Performance Inspection',
        description: 'Performance evaluation of heating and cooling capacity, efficiency and system parameters.',
    },
    {
        title: 'Refrigerant Pressure & Leak Testing',
        description: 'Precise pressure testing and leak detection to prevent refrigerant loss and maintain efficiency.',
    },
    {
        title: 'Electrical & Control Panel Inspection',
        description: 'Inspection and testing of electrical panels, contactors, sensors and safety devices.',
    },
    {
        title: 'Compressor Inspection & Maintenance',
        description: 'Detailed compressor inspection, servicing and maintenance to protect the heart of the heat pump.',
    },
    {
        title: 'Condenser & Evaporator Coil Cleaning',
        description: 'Deep cleaning of condenser and evaporator coils to maintain heat transfer efficiency.',
    },
    {
        title: 'Fan Motor Inspection & Servicing',
        description: 'Inspection, lubrication and servicing of fan motors to prevent failures and reduce noise.',
    },
    {
        title: 'Refrigerant Gas Checking & Top-Up',
        description: 'Accurate refrigerant checking, recovery and top-up as per manufacturer specifications.',
    },
    {
        title: 'Water Circuit Inspection & Flushing',
        description: 'Inspection and flushing of water circuits to remove scale, sludge and blockages.',
    },
    {
        title: 'Filter, Strainer & Valve Inspection',
        description: 'Regular inspection of filters, strainers and valves to maintain smooth uninterrupted flow.',
    },
    {
        title: 'Fault Diagnosis & Troubleshooting',
        description: 'Systematic fault diagnosis to identify performance issues, alarms and hidden malfunctions.',
    },
    {
        title: 'Heat Pump Repair & Replacement',
        description: 'Expert repair and replacement services for all heat pump components and full units.',
    },
    {
        title: 'Preventive Maintenance',
        description: 'Scheduled preventive maintenance to reduce breakdowns and extend heat pump service life.',
    },
    {
        title: 'Corrective Maintenance',
        description: 'Prompt corrective maintenance to restore performance after breakdowns or performance drops.',
    },
]

const amcItems = [
    'Scheduled preventive maintenance',
    'System inspection',
    'Cleaning and servicing',
    'Electrical checking',
    'Refrigerant checking',
    'Water circuit inspection',
    'Fault troubleshooting',
    'Emergency repair support',
]

export default function HeatCoolPumpServicesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Heat & Cool Pump Services' },
                ]}
                image={[
                    '/images/HEAT & COOL PUMP/Gemini_Generated_Image_kn2hijkn2hijkn2h.jpg',
                    '/images/HEAT & COOL PUMP/WhatsApp Image 2026-08-31 at 3.10.23 PM.jpeg',
                    '/images/HEAT & COOL PUMP/WhatsApp Image 2026-08-31 at 3.10.25 PM.jpeg',
                ]}
                title={<>Heat & Cool <br /><span className='text-muted'>Pump Services</span></>}
                content='We provide complete Heat Pump Supply, Installation, Testing, Commissioning, Maintenance, Repair, and AMC Services for residential, commercial, industrial, hotel, and building applications.'
            />

            <ServiceDetailSection
                title='Scope of Work'
                description='From supply and installation to maintenance, repair, replacement and AMC — we deliver end-to-end HVAC solutions to keep your heat pump systems operating safely and efficiently.'
                services={scopeOfWork}
                bg='bg-white'
            />

            <AMCSection
                title='AMC Services'
                items={amcItems}
            />

            <CTASection />
        </div>
    )
}
