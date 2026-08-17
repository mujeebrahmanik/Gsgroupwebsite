import React from 'react'

function SectionHeading({mainTitle,subTitle,paragraph,classname,textAlign,subColor,mainColor,paraColor,paraSize}) {
  return (
    <div className={`flex flex-col gap-6 ${classname || 'justify-start items-start' } ${textAlign || 'text-start'}`}>
        {subTitle &&
            <h4 className={`text-sm tracking-widest font-semibold uppercase ${subColor || 'text-secondary-dark'}`}>
            {subTitle}
            </h4>
        }

        {mainTitle && 
            <h2 className={`md:text-4xl text-3xl font-bold capitalize ${mainColor || 'text-primary'}`}>
            {mainTitle}
            </h2>
        }

        {paragraph &&
            <div className={`${paraSize || 'text-sm'} max-w-xl ${paraColor || 'text-muted'}`}>
                {paragraph}
            </div>
        }
        
    </div>
  )
}

export default SectionHeading
