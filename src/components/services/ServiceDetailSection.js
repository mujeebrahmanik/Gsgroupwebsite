import React from 'react'
import { ArrowRight } from 'lucide-react'

function ServiceDetailSection({ title = 'Our Services', description, services = [], bg = 'bg-cream' }) {
    const cardBg = bg === 'bg-white' ? 'bg-cream' : 'bg-white'
    return (
        <div className={`py-20 px-8 ${bg}`}>
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <div className="flex flex-col gap-3 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary capitalize">{title}</h2>
                    {description && <p className="text-sm text-muted leading-relaxed">{description}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-3 gap-6">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-3 ${cardBg} rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300`}
                        >
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                <ArrowRight size={15} className="text-secondary-dark" />
                            </div>
                            <h3 className="text-base font-bold text-primary">{item.title}</h3>
                            <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailSection
