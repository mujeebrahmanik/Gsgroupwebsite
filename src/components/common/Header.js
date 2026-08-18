'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Contact = [
    {
        icon: <Phone size={18} />,
        content: '+971 6731 0225',
        link: 'tel:+97167310225'
    },
    {
        icon: <Mail size={18} />,
        content: 'info@gsgroup.ae',
        link: 'mailto:info@gsgroup.ae'
    },
]

const Social = [
    {
        icon: <FaInstagram size={16} />,
        link: 'https://www.linkedin.com'
    },
    {
        icon: <FaLinkedinIn size={16} />,
        link: 'https://www.linkedin.com'
    },
    {
        icon: <FaXTwitter size={16} />,
        link: 'https://www.linkedin.com'
    }
]



const HeaderLinks = [
    {
        title: 'home',
        link: '/'
    },
    {
        title: 'products',
        link: '/products',
        sub: [
            {
                title: 'chiller',
                link: '/products/chiller'
            },
             {
                title: 'chiller',
                link: '/products/chiller'
            },
             {
                title: 'chiller',
                link: '/products/chiller'
            }
        ]
    },
    {
        title: 'services',
        link: '/services',
        sub: [
            {
                title: 'chiller',
                link: '/services/chiller'
            }
        ]
    },
    {
        title: 'trading',
        link: '/trading'
    },
    {
        title: 'contact',
        link: '/contact'
    },
]


export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [mobileExpanded, setMobileExpanded] = useState(null)
    const path = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const OnToggle = () => {
        setDrawerOpen(!drawerOpen)
        setMobileExpanded(null)
    }

    return (
        <nav className='sticky top-0 z-50'>

            {/* top header */}
            <div className="tablet:block hidden px-8 py-3 bg-primary-dark">
                <div className="flex justify-between max-w-7xl mx-auto">
                    <div className="flex gap-4">
                        {Contact.map((i, index) => (
                            <div key={index} className="flex gap-2 items-center">
                                <div className="flex text-secondary">{i.icon}</div>
                                <a href={i.link} target='_blank' className="text-white text-xs hover:underline underline-offset-5 hover:text-secondary">{i.content}</a>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {Social.map((i, index) => (
                            <a href={i.link} key={index} className="flex hover:text-secondary text-white border-secondary">
                                {i.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`py-3 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg bg-cream/80 shadow-sm' : 'bg-white'}`}>
                <div className="px-6">
                    <div className="mx-auto container max-w-7xl text-base">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center flex-shrink-0">
                                <Image src='/images/gslogo.png' className="h-14 lg:w-full" height={120} width={120} style={{ width: 'auto' }} alt="gs logo" priority />
                            </div>

                            {/* Desktop nav */}
                            <ul className="hidden lg:flex space-x-12">
                                {HeaderLinks.map((i, index) => (
                                    <li
                                        key={index}
                                        className="relative"
                                        onMouseEnter={() => i.sub && setActiveDropdown(index)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <Link
                                            href={i.link}
                                            className={`${path == i.link ? 'text-secondary-dark' : 'text-black'} cursor-pointer uppercase text-sm transition-all duration-300 capitalize font-semibold tracking-wider  hover:underline hover:text-primary underline-offset-8 flex items-center gap-1`}
                                        >
                                            {i.title}
                                            {i.sub && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />}
                                        </Link>

                                        {i.sub && (
                                            <div className={`absolute top-full left-0 pt-4 min-w-48 transition-all duration-200 ${activeDropdown === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                                                <ul className="bg-primary shadow-xl pt-1 pb-2">
                                                    {i.sub.map((sub, si) => (
                                                        <li key={si}>
                                                            <Link
                                                                href={sub.link}
                                                                className="block px-5 py-1.5 text-xs uppercase tracking-widest font-semibold text-white hover:text-secondary hover:pl-6 transition-all duration-150"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <Link href='/contact' className="hidden lg:flex capitalize items-center gap-2 bg-secondary-dark text-primary font-bold rounded-full px-4 py-3  capitalize text-sm hover:bg-black hover:text-white cursor-pointer">
                                get in touch
                            </Link>

                            <div className="lg:hidden flex flex-row gap-6 justify-end">
                                <Link href='/contact' className="flex lg:hidden capitalize items-center gap-2 bg-secondary-dark text-primary font-bold rounded-full px-4 py-3  capitalize text-xs hover:bg-black hover:text-white cursor-pointer">
                                    get in touch
                                </Link>

                                <button onClick={OnToggle} className={`cursor-pointer border p-2 rounded-full relative z-50 ${drawerOpen ? 'border-white text-white' : 'border-muted text-primary'}`}>
                                    {drawerOpen ? <X /> : <Menu />}
                                </button>
                            </div>

                            {/* Mobile drawer */}
                            <div
                                style={{ clipPath: drawerOpen ? 'circle(150% at calc(100% - 40px) 40px)' : 'circle(0% at calc(100% - 40px) 40px)' }}
                                className="fixed z-20 w-full h-screen bg-primary right-0 top-0 px-8 py-24 flex flex-col justify-start items-start lg:hidden transition-[clip-path] duration-500 ease-in-out overflow-y-auto"
                            >
                                <ul className="flex flex-col gap-4 w-full">
                                    {HeaderLinks.map((i, index) => (
                                        <li key={index} className="border-b border-white/10 pb-6">
                                            <div className="flex items-baseline gap-4">
                                                <span className="text-xs text-white/70 font-inter w-5">0{index + 1}</span>
                                                {i.sub ? (
                                                    <div className="flex items-center gap-2 flex-1">
                                                        <Link href={i.link} onClick={() => setDrawerOpen(false)} className={`cursor-pointer text-2xl transition-all duration-300 capitalize  ${path == i.link ? 'text-secondary-dark' : 'text-white'} font-semibold hover:text-secondary`}>
                                                            {i.title}
                                                        </Link>
                                                        <button
                                                            onClick={() => setMobileExpanded(mobileExpanded === index ? null : index)}
                                                            className="cursor-pointer text-white hover:text-secondary p-1"
                                                        >
                                                            <ChevronDown size={18} className={`transition-transform duration-200 ${mobileExpanded === index ? 'rotate-180' : ''}`} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <Link href={i.link} onClick={() => setDrawerOpen(false)} className={`cursor-pointer text-2xl font-semibold transition-all duration-300 capitalize ${path == i.link ? 'text-secondary-dark' : 'text-white'} hover:text-secondary `}>
                                                        {i.title}
                                                    </Link>
                                                )}
                                            </div>

                                            {i.sub && mobileExpanded === index && (
                                                <ul className="ml-9 mt-3 flex flex-col gap-2">
                                                    {i.sub.map((sub, si) => (
                                                        <li key={si}>
                                                            <Link
                                                                href={sub.link}
                                                                onClick={() => setDrawerOpen(false)}
                                                                className="text-white/70 font-semibold capitalize text-base hover:text-secondary transition-colors"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}
