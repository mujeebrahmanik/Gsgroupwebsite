import React from 'react'

function WorkCard({icon,index,title,content}) {
  return (
    <div className={`flex flex-col gap-4 p-8 border rounded-xl border-gray-300 ${index%2==0 ? 'bg-primary' : 'bg-cream'}`}>
        <div className="flex justify-between items-center">
            <div className={`flex ${index%2==0 ? 'bg-cream' : 'bg-white'}  shadow-[0_0_20px_rgba(0,0,0,0.15)] text-primary  p-3 rounded-xl`}>
                {icon}
            </div>
            <h4 className={`text-6xl ${index%2==0 ? ' text-cream/20' : ' text-primary/20'}  font-bold`}>
                0{index}
            </h4>
        </div>

        <h3 className={`text-xl font-semibold capitalize ${index%2==0 ? ' text-cream' : ' text-primary'} `}>
            {title}
        </h3>

        <p className="text-sm text-muted">
            {content}
        </p>
      
    </div>
  )
}

export default WorkCard
