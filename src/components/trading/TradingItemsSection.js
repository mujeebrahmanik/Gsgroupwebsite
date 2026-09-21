import React from 'react'

function TradingItemsSection({ title, description, items = [], bg = 'bg-cream' }) {
    return (
        <div className={`py-20 px-8 ${bg}`}>
            <div className="max-w-6xl mx-auto flex flex-col gap-10">

                {/* heading */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary capitalize">
                        {title}
                    </h2>
                    <div className="w-16 h-0.5 bg-secondary" />
                    {description && (
                        <p className="text-sm text-muted leading-relaxed max-w-3xl">
                            {description}
                        </p>
                    )}
                </div>

                {/* items list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 w-full">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 py-4 border-b border-gray-200"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                            <span className="text-primary font-medium">{item}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TradingItemsSection
