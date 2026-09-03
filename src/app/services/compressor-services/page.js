import Pagebanner from '@/components/common/Pagebanner'
import ServiceTypesSection from '@/components/services/ServiceTypesSection'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import CTASection from '@/components/common/CTASection'

const compressorTypes = [
    'Screw Compressors',
    'Scroll Compressors',
    'Reciprocating Compressors',
    'Centrifugal Compressors',
    'Hermetic Compressors',
    'Semi-Hermetic Compressors',
    'Open-Type Compressors',
    'All Major Makes & Models',
]

const compressorServices = [
    {
        title: 'Chiller Compressor Repair',
        description: 'Expert repair services for all types of chiller compressors, restoring performance and reliability with minimal downtime.',
    },
    {
        title: 'Compressor Overhauling',
        description: 'Complete tear-down, inspection, part replacement and reassembly to bring aged compressors back to factory-grade performance.',
    },
    {
        title: 'Compressor Preventive Maintenance',
        description: 'Scheduled maintenance to identify wear early, prevent unexpected failures and extend overall compressor life.',
    },
    {
        title: 'Compressor Breakdown Repair',
        description: 'Rapid on-site breakdown response and repair to restore cooling operations with minimum disruption.',
    },
    {
        title: 'Compressor Troubleshooting',
        description: 'Systematic fault diagnosis to identify performance issues, abnormal sounds, vibrations, or electrical faults.',
    },
    {
        title: 'Compressor Inspection & Diagnosis',
        description: 'Comprehensive inspection including oil analysis, pressure checks and electrical testing to assess compressor health.',
    },
    {
        title: 'Bearing & Seal Replacement',
        description: 'Precision replacement of worn bearings and seals to eliminate leaks, noise and premature compressor failure.',
    },
    {
        title: 'Compressor Oil Replacement',
        description: 'Draining, flushing and refilling with the correct grade of compressor oil to maintain lubrication and cooling efficiency.',
    },
    {
        title: 'Refrigerant Leak Testing',
        description: 'Advanced leak detection using electronic and pressure-based methods to identify and isolate refrigerant leaks.',
    },
    {
        title: 'Refrigerant Charging',
        description: 'Accurate refrigerant recovery, evacuation and recharging as per manufacturer specifications and system requirements.',
    },
    {
        title: 'Compressor Installation & Replacement',
        description: 'Professional installation and replacement of new or reconditioned compressors with full commissioning and testing.',
    },
    {
        title: 'Testing & Commissioning',
        description: 'End-to-end testing of pressures, temperatures, current draw and performance parameters after service or installation.',
    },
    {
        title: 'Reliable Compressor Repair Solutions',
        description: 'Long-term repair solutions backed by genuine spares, skilled technicians and warranty-backed workmanship.',
    },
]

export default function CompressorServicesPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Compressor Services' },
                ]}
                image='/images/chillerservice.jpeg'
                title={<>Compressor <br /><span className='text-muted'>Services</span></>}
                content='Regular chiller compressor maintenance and servicing helps improve cooling efficiency, reduce unexpected breakdowns and extend equipment operating life.'
            />

            <ServiceTypesSection
                title='Compressor Types We Cover'
                types={compressorTypes}
            />

            <ServiceDetailSection
                title='What We Do'
                services={compressorServices}
            />

            <CTASection />
        </div>
    )
}
