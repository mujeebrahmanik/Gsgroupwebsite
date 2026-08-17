import React from 'react'

const items =[
    {
        title:'15+',
        content:'years of experience'
    },
    {
        title:'200+',
        content:'projects delivered'
    },
    {
        title:'500+',
        content:'clients worldwide'
    },
    {
        title:'50+',
        content:'proffesionals'
    }
]

function Counters() {
  return (
    <div className='py-15 px-8 bg-primary'>
        <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
                {items.map((i,index)=>(
                    <div key={index} className="flex justify-center items-center flex-col gap-3">
                        <h3 className="text-5xl font-bold text-secondary">
                            {i.title}
                        </h3>
                        <h6 className="text-xs tracking-wider font-medium text-white uppercase">
                            {i.content}
                        </h6>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Counters
