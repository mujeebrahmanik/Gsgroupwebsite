import React from 'react'
import ServiceCard from './ServiceCard'

const trading = [
    {
        title: 'HVAC Accessories',
        description: 'A complete range of HVAC accessories including flexible ducts, insulation, grilles, diffusers, dampers, and control components — sourced from trusted global brands.',
        image: '/images/hvac accessories/02.jpg',
        link: '/trading/hvac-accessories',
    },
    {
        title: 'Plumbing Accessories',
        description: 'Comprehensive supply of plumbing accessories including pipes, fittings, connectors, and fixtures for residential, commercial, and industrial applications.',
        image: '/images/plumbing/01 (1).jpg',
        link: '/trading/plumbing-accessories',
    },
    {
        title: 'Electrical Accessories',
        description: 'High-quality electrical accessories including cables, conduits, switches, sockets, panels, and control components meeting international safety standards.',
        image: '/images/electrical/01.jpg',
        link: '/trading/electrical-accessories',
    },
    {
        title: 'Safety Products',
        description: 'Industrial and commercial safety products including PPE, fire safety equipment, signage, and protection gear from certified manufacturers.',
        image: '/images/hero2.avif',
        link: '/trading/safety-products',
    },
    {
        title: 'Adhesive Sealant & Tapes',
        description: 'Wide range of adhesives, sealants, insulation tapes, and bonding solutions for HVAC, plumbing, electrical, and general construction applications.',
        image: '/images/DUCT/KITCHEN  DUCT WORK.jpg',
        link: '/trading/adhesive-sealant-tapes',
    },
    {
        title: 'Instruments & Tools',
        description: 'Professional-grade instruments and tools for measurement, testing, installation, and maintenance across HVAC, mechanical, and electrical trades.',
        image: '/images/motor-rewinding/WhatsApp Image 2026-09-03 at 6.41.08 PM.jpeg',
        link: '/trading/instruments-tools',
    },
    {
        title: 'Valves',
        description: 'Complete range of industrial and HVAC valves including ball, gate, butterfly, check, balancing, and control valves from leading international brands.',
        image: '/images/HVAC Circulating & Transfer Pumps/chilled water pump assembly and piping manifold system.jpg',
        link: '/trading/valves',
    },
]

function TradingSection() {
    return (
        <div className='py-20 px-8 bg-cream'>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-3 gap-8">
                    {trading.map((i, index) => (
                        <ServiceCard
                            key={index}
                            title={i.title}
                            description={i.description}
                            image={i.image}
                            link={i.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TradingSection
