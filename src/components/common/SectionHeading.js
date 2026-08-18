'use client'

import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
}

function SectionHeading({ mainTitle, subTitle, paragraph, classname, textAlign, subColor, mainColor, paraColor, paraSize }) {
    return (
        <div className={`flex flex-col gap-6 ${classname || 'justify-start items-start'} ${textAlign || 'text-start'}`}>
            {subTitle &&
                <motion.h4
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className={`text-sm tracking-widest font-semibold uppercase ${subColor || 'text-secondary-dark'}`}
                >
                    {subTitle}
                </motion.h4>
            }

            {mainTitle &&
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className={`md:text-4xl text-3xl font-bold capitalize ${mainColor || 'text-primary'}`}
                >
                    {mainTitle}
                </motion.h2>
            }

            {paragraph &&
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    className={`${paraSize || 'text-sm'} max-w-xl ${paraColor || 'text-muted'}`}
                >
                    {paragraph}
                </motion.div>
            }
        </div>
    )
}

export default SectionHeading
