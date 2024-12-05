import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-300 pb-8 pt-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
            <h3 className="text-white text-lg font-semibold mb-4">Immoexclusive.ch</h3>
            <p className="text-sm leading-relaxed">
            We are committed to providing high-quality services and solutions to meet all your needs. 
            </p>
        </div>
        
        
        <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
        </div>
        
        
        <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors">App Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
            </ul>
        </div>
        
        
        <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-sm">
            E-Mail: <a href="mailto:info@example.com" className="text-blue-400 hover:underline">info@example.com</a>
            </p>
            <p className="text-sm mt-2">
            Phone: <a href="tel:+123456789" className="text-blue-400 hover:underline">+1 (234) 567-890</a>
            </p>
            <p className="text-sm mt-2">
            Address: 123 Main Street, City, Country
            </p>
        </div>
        </div>
        
    
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; 2024 Immoexclusive.ch. Alle Rechte vorbehalten.</p>
        </div>
    </div>
    </footer>

  )
}

export default Footer