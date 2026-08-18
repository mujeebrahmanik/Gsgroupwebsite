import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const company = [
    { title: 'Home',    link: '/' },
    { title: 'About',   link: '/about' },
    { title: 'Careers', link: '/careers' },
]

const services = [
    { title: 'Construction', link: '/services/construction' },
    { title: 'Trading',      link: '/trading' },
    { title: 'Consulting',   link: '/services/consulting' },
]

const contact = [
    { icon: <Phone size={16} />,   text: '+971 6731 0225',               link: 'tel:+97167310225' },
    { icon: <Mail size={16} />,    text: 'info@gsgroup.ae',               link: 'mailto:info@gsgroup.ae' },
    { icon: <MapPin size={16} />,  text: <>Emaar Square, Building 4,<br/> Downtown Dubai, UAE</>, link: '#' },
]

const social = [
    { icon: <FaFacebookF size={14} />,  link: '#' },
    { icon: <FaInstagram size={14} />,  link: '#' },
    { icon: <FaLinkedinIn size={14} />, link: '#' },
    { icon: <FaXTwitter size={14} />,   link: '#' },
]

function Footer() {
    return (
        <footer className='bg-primary-dark px-8'>

            {/* main footer */}
            <div className="flex flex-wrap justify-between gap-12 max-w-7xl mx-auto py-16">

                {/* brand */}
                <div className="flex flex-col gap-5">
                    <Image src='/images/gslogo.png' alt='GS Group' width={50} height={50} className='h-12 w-50' />
                    <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                        A premium corporate conglomerate based in Dubai, delivering strategic investments, trading, and engineering structures.
                    </p>
                    <div className="flex gap-3">
                        {social.map((i, index) => (
                            <a
                                key={index}
                                href={i.link}
                                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-secondary hover:text-secondary transition-colors duration-200"
                            >
                                {i.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* company */}
                <div className="flex flex-col gap-6">
                    <h6 className="text-xs font-bold uppercase tracking-widest text-white">Company</h6>
                    <ul className="flex flex-col gap-3">
                        {company.map((i, index) => (
                            <li key={index}>
                                <Link href={i.link} className="text-sm text-white/60 hover:text-secondary transition-colors duration-200">
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* services */}
                <div className="flex flex-col gap-6">
                    <h6 className="text-xs font-bold uppercase tracking-widest text-white">Services</h6>
                    <ul className="flex flex-col gap-3">
                        {services.map((i, index) => (
                            <li key={index}>
                                <Link href={i.link} className="text-sm text-white/60 hover:text-secondary transition-colors duration-200">
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* contact */}
                <div className="flex flex-col gap-6">
                    <h6 className="text-xs font-bold uppercase tracking-widest text-white">Contact</h6>
                    <ul className="flex flex-col gap-4">
                        {contact.map((i, index) => (
                            <li key={index}>
                                <a href={i.link} className="flex gap-3 items-start text-sm text-white/60 hover:text-secondary transition-colors duration-200">
                                    <span className="text-secondary mt-0.5 flex-shrink-0">{i.icon}</span>
                                    {i.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* bottom bar */}
            <div className="border-t border-white/10 max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-white/40">© 2026 GS Group. All Rights Reserved.</p>
                <div className="flex gap-6">
                    {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, i) => (
                        <Link key={i} href='#' className="text-xs text-white/40 hover:text-secondary transition-colors duration-200">
                            {item}
                        </Link>
                    ))}
                </div>
            </div>

        </footer>
    )
}

export default Footer
