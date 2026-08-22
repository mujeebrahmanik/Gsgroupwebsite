import React from 'react'
import { Settings } from 'lucide-react'
import Buttons from '../common/Buttons'

function AMCSection({ title = 'AMC Customization', items = [] }) {
    return (
        <div className='py-20 px-8 bg-white'>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-secondary-dark">Maintenance Contracts</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
                        <p className="text-sm text-muted leading-relaxed max-w-md">
                            Our Annual Maintenance Contracts are fully tailored to your equipment and operational requirements — ensuring maximum uptime and cost efficiency.
                        </p>
                    </div>
                    <Buttons content='Request an AMC Quote' link='/contact' />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 border border-gray-100 bg-cream rounded-xl px-4 py-3"
                        >
                            <Settings size={16} className="text-secondary flex-shrink-0" />
                            <span className="text-sm font-medium text-primary">{item}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AMCSection
