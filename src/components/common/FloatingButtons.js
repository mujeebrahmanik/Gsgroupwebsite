import React from 'react'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-3 z-50 flex flex-col gap-3">

            {/* WhatsApp */}
            <a
                href="https://wa.me/97167310225"
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={26} />
            </a>

            {/* Call */}
            <a
                href="tel:+97167310225"
                className="w-13 h-13 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Call us"
            >
                <Phone size={22} />
            </a>

        </div>
    )
}

export default FloatingButtons
