import React from 'react'
import { Star } from 'lucide-react'

function TestimonialCards({rating = 5, content, author, company,initials}) {
  return (
    <div className='flex flex-col gap-6 justify-between bg-primary rounded-lg p-8'>
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    className={i < rating ? 'text-secondary' : 'text-white/20'}
                    fill={i < rating ? 'currentColor' : 'none'}
                />
            ))}
        </div>
            <p className="text-base text-white/70">
                {content}
            </p>

        <div className="flex gap-4">
            <div className="flex bg-secondary text-primary uppercase rounded-full w-fit h-fit p-3 font-bold">
                {initials}
            </div>
            <div className="flex flex-col gap-1 text-white/70">
                <p className="text-base font-medium capitalize">{author}</p>
                <p className="text-xs font-light capitalize">{company}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards
