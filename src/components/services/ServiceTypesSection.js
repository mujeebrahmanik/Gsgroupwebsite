import React from 'react'
import { CheckCircle } from 'lucide-react'

function ServiceTypesSection({ title = 'Types We Cover', types = [] }) {
    return (
        <div className='py-20 px-8 bg-white'>
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary capitalize">{title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 tablet:grid-cols-4 gap-4">
                    {types.map((type, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-cream border border-gray-100 rounded-xl px-4 py-3"
                        >
                            <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                            <span className="text-sm font-medium text-primary">{type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceTypesSection
