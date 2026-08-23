'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
    {
        icon: <Phone size={20} />,
        title: 'Phone',
        value: '+971 6731 0225',
        link: 'tel:+97167310225',
    },
    {
        icon: <Mail size={20} />,
        title: 'Email',
        value: 'info@gsgroup.ae',
        link: 'mailto:info@gsgroup.ae',
    },
    {
        icon: <MapPin size={20} />,
        title: 'Address',
        value: 'Shop No: 6, Near Lucky Roundabout Ajman, Industrial Area 2',
        link: '#',
    },
    {
        icon: <Clock size={20} />,
        title: 'Working Hours',
        value: 'Mon – Sat: 8:00 AM – 6:00 PM',
        link: null,
    },
]

function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        // handle form submission
    }

    return (
        <div className='py-20 px-8 bg-cream'>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* left — info */}
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-secondary-dark">Contact Information</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">We'd Love to Hear From You</h2>
                        <p className="text-sm text-muted leading-relaxed max-w-md">
                            Whether you have a service enquiry, need an AMC quotation, or want to discuss a project — our team is ready to help.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        {contactInfo.map((i, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary flex-shrink-0">
                                    {i.icon}
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">{i.title}</span>
                                    {i.link ? (
                                        <a href={i.link} className="text-sm font-medium text-primary hover:text-secondary-dark transition-colors">
                                            {i.value}
                                        </a>
                                    ) : (
                                        <span className="text-sm font-medium text-primary">{i.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* right — form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-primary">Send Us a Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-muted">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Ahmed Al-Khalifa"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-primary placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-muted">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@company.com"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-primary placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-muted">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+971 50 000 0000"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-primary placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-muted">Subject</label>
                            <select
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors bg-white"
                            >
                                <option value="">Select a subject</option>
                                <option value="chiller">Chiller Services</option>
                                <option value="amc">AMC Quotation</option>
                                <option value="trading">Trading Enquiry</option>
                                <option value="general">General Enquiry</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell us about your requirement..."
                            className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-primary placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-secondary-dark transition-colors duration-200 text-sm"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ContactSection
