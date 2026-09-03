import Pagebanner from '@/components/common/Pagebanner'
import ServiceTypesSection from '@/components/services/ServiceTypesSection'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import CTASection from '@/components/common/CTASection'

const piServices = [
    {
        title: 'PI Duct Fabrication',
        description: 'Precision fabrication of Pre-Insulated ductwork sections tailored to project drawings and site conditions.',
    },
    {
        title: 'PI Duct Installation',
        description: 'Complete on-site installation of Pre-Insulated ducts with proper alignment, supports and fittings.',
    },
    {
        title: 'Jointing & Coupling',
        description: 'Airtight jointing and coupling of PI duct sections using approved bonding and sealing methods.',
    },
    {
        title: 'Insulation Works',
        description: 'Integrated insulation for thermal efficiency, reduced heat loss and condensation prevention.',
    },
    {
        title: 'Sealing Works',
        description: 'Complete sealing of joints, connections and openings to prevent air leakage and maintain performance.',
    },
    {
        title: 'Finishing Works',
        description: 'Clean, professional finishing works for aesthetically finished exposed and concealed ductwork.',
    },
]

const giServices = [
    {
        title: 'Rectangular GI Ducts',
        description: 'Fabrication and installation of standard rectangular GI ductwork in all sizes and gauges.',
    },
    {
        title: 'Custom GI Ducts',
        description: 'Custom GI ducts designed to fit unique layouts, space constraints and project-specific airflow needs.',
    },
    {
        title: 'Fittings & Transitions',
        description: 'Precision-fabricated transitions, offsets and connectors for smooth airflow between duct sections.',
    },
    {
        title: 'Elbows, Branches & Reducers',
        description: 'Custom elbows, branches and reducers fabricated to match design specifications and airflow requirements.',
    },
    {
        title: 'Duct Supports & Hangers',
        description: 'Structural supports, hangers and brackets for secure and vibration-free duct mounting.',
    },
    {
        title: 'Accessories & Installation',
        description: 'Supply and installation of GI duct accessories including dampers, grilles, diffusers and access panels.',
    },
]

const scopeOfWork = [
    {
        title: 'Ductwork as per HVAC Drawings',
        description: 'All ductwork executed strictly in accordance with approved HVAC drawings and verified site measurements.',
    },
    {
        title: 'Duct Accessories & Fittings',
        description: 'Supply and installation of transitions, elbows, branches, reducers and all associated duct accessories.',
    },
    {
        title: 'Duct Supports & Suspension Systems',
        description: 'Fabrication and installation of duct supports, hangers, brackets and suspension systems for secure mounting.',
    },
    {
        title: 'Dampers, Grilles & Diffusers',
        description: 'Installation of dampers, grilles, diffusers and flexible connections for balanced airflow distribution.',
    },
    {
        title: 'Duct Insulation & Sealing',
        description: 'Full duct insulation and sealing works to prevent thermal losses and improve energy efficiency.',
    },
    {
        title: 'Joint Sealing & Leakage Prevention',
        description: 'Precise duct joint sealing to prevent air leakage and maintain designed airflow performance.',
    },
    {
        title: 'Equipment Connection',
        description: 'Connection of ductwork to AHU, FCU, Package Units, DX Units and other HVAC equipment.',
    },
    {
        title: 'Modification & Replacement',
        description: 'Modification, extension and replacement of existing ductwork to suit new layouts or system upgrades.',
    },
    {
        title: 'Duct Repair & Rectification',
        description: 'Repair and rectification works for damaged, leaking or under-performing ductwork sections.',
    },
    {
        title: 'Testing & Airflow Balancing',
        description: 'Testing, inspection and airflow balancing support to ensure ductwork meets design specifications.',
    },
    {
        title: 'Final Inspection & Commissioning',
        description: 'Final installation inspection and commissioning assistance to hand over a fully verified system.',
    },
]

const whyChooseUs = [
    'Experienced HVAC Ductwork Team',
    'Custom Fabrication as per Site Requirements',
    'Quality Materials & Accessories',
    'Professional Installation',
    'Proper Duct Sealing & Insulation',
    'Suitable for New & Replacement Works',
    'Reliable Maintenance & Modification Support',
]

export default function DuctWorksPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Duct Works' },
                ]}
                image='/images/chillerservice.jpeg'
                title={<>Duct <br /><span className='text-muted'>Works</span></>}
                content='We provide PI (Pre-Insulated) and GI (Galvanized Iron) Duct Fabrication & Installation services for commercial, industrial, residential, and institutional HVAC applications — fabricated to approved drawings, site requirements and required HVAC standards for efficient airflow and durability.'
            />

            <ServiceDetailSection
                title='PI Duct Services'
                description='Our Pre-Insulated (PI) Duct solutions provide lightweight, energy-efficient, and corrosion-resistant ductwork suitable for modern HVAC applications. We undertake complete PI duct fabrication, installation, jointing, insulation, sealing, and finishing works.'
                services={piServices}
                bg='bg-white'
            />

            <ServiceDetailSection
                title='GI Duct Services'
                description='We fabricate and install GI sheet metal ductwork in various sizes and configurations based on project requirements. Our services include rectangular and custom GI ducts, fittings, transitions, elbows, branches, reducers, supports, and accessories.'
                services={giServices}
                bg='bg-cream'
            />

            <ServiceDetailSection
                title='Additional Scope of Work'
                services={scopeOfWork}
                bg='bg-white'
            />

            <ServiceTypesSection
                title='Why Choose Us'
                types={whyChooseUs}
            />

            <CTASection />
        </div>
    )
}
