import React from 'react'
import SectionHeading from '../SectionHeading'
import { MessagesSquare,NotebookPen,FileTerminal } from 'lucide-react';
import WorkCard from '../WorkCard';


const items = [
    {
        title : 'Initial Consultation',
        content:'We begin by deeply understanding your project goals, budget constraints, and strategic timeline to design the right framework for your enterprise.',
        icon: <MessagesSquare />
    },
    {
        title : 'Planning & Strategy',
        content:'Our expert team designs a detailed project plan with clear milestones, resource allocation, risk management, and internationally compliant quality benchmarks.',
        icon: <NotebookPen />
    },
    {
        title : 'Execution & Delivery',
        content:'We execute with precision, maintain full transparency throughout, and deliver on time within agreed quality standards and budget covenants every time.',
        icon: <FileTerminal />
    }
]

function HowWeWorkSection() {
  return (
    <div className='py-20 px-8 bg-white'>
        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
            <SectionHeading
                subTitle='How We Work'
                mainTitle='3 Simple Steps to Project Excellence'
                classname='text-center justify-center items-center'
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((i,index)=>(
                    <WorkCard key={index+1} index={index+1} title={i.title} icon={i.icon} content={i.content} />
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default HowWeWorkSection
