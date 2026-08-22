import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
    {
        title: 'Chiller Services',
        description: 'Complete chiller maintenance, repair, and installation services for air-cooled and water-cooled systems across commercial and industrial facilities.',
        image: '/images/chillerservice.jpeg',
        link: '/services/chiller-services',
    },
    {
        title: 'Compressor Services',
        description: 'Expert diagnosis, overhaul, and replacement of refrigeration and HVAC compressors from all major brands including Bitzer, Copeland, and Dorin.',
        image: '/images/chillerservice.jpeg',
        link: '/services/compressor-services',
    },
    {
        title: 'DX Unit Services',
        description: 'Installation, commissioning, and maintenance of Direct Expansion units for precise temperature control in commercial and industrial environments.',
        image: '/images/chillerservice.jpeg',
        link: '/services/dx-unit-services',
    },
    {
        title: 'Split AC Services',
        description: 'Professional installation, servicing, and repair of split air conditioning systems for residential, commercial, and light industrial applications.',
        image: '/images/chillerservice.jpeg',
        link: '/services/split-ac-services',
    },
    {
        title: 'Duct Works',
        description: 'Design, fabrication, and installation of HVAC ductwork systems ensuring optimal airflow, energy efficiency, and indoor air quality.',
        image: '/images/chillerservice.jpeg',
        link: '/services/duct-works',
    },
    {
        title: 'Heat & Cool Pump Services',
        description: 'Supply, installation, and maintenance of heat pump systems delivering efficient heating and cooling solutions for year-round comfort.',
        image: '/images/chillerservice.jpeg',
        link: '/services/heat-cool-pump-services',
    },
    {
        title: 'ERV System Services',
        description: 'Energy Recovery Ventilation system installation and maintenance to improve indoor air quality while minimising energy consumption.',
        image: '/images/chillerservice.jpeg',
        link: '/services/erv-system-services',
    },
    {
        title: 'Pump & Motor Rewinding Works',
        description: 'In-house rewinding and repair of pumps and electric motors, restoring performance and extending equipment life at competitive cost.',
        image: '/images/chillerservice.jpeg',
        link: '/services/pump-motor-rewinding',
    },
    {
        title: 'Piping Works',
        description: 'Design and installation of refrigerant, chilled water, and condenser water piping systems with precision fabrication and leak-free connections.',
        image: '/images/chillerservice.jpeg',
        link: '/services/piping-works',
    },
    {
        title: 'Piping Freezing',
        description: 'Non-intrusive pipe freezing solutions enabling valve replacement and maintenance work on live systems without draining the entire circuit.',
        image: '/images/chillerservice.jpeg',
        link: '/services/piping-freezing',
    },
    {
        title: 'Hot Tapping Services',
        description: 'Specialised hot tapping services allowing connection to pressurised pipelines without system shutdown, minimising operational disruption.',
        image: '/images/chillerservice.jpeg',
        link: '/services/hot-tapping-services',
    },
]

function ServicesSection() {
    return (
        <div className='py-20 px-8 bg-cream'>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-3 gap-8">
                    {services.map((i, index) => (
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

export default ServicesSection
