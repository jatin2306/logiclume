import Link from "next/link";
import Button from "./Button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[var(--color-black)] to-black text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FaHeart className="text-[var(--color-accent)]" />
              deopersindia
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              A modern IT solutions company providing web development, mobile apps, UI/UX design, and digital marketing services to businesses worldwide.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <span>4/126 Palm Olympia Greater Noida (201306)</span>
              </p>
              <p className="flex items-start gap-3">
                <FaPhoneAlt className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <a href="tel:+919758403169" className="hover:text-white transition">+91-9758403169</a>
              </p>
              <p className="flex items-start gap-3">
                <FaEnvelope className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <a href="mailto:info@deopersindia.com" className="hover:text-white transition">info@deopersindia.com</a>
              </p>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#services" className="hover:text-[var(--color-primary)] transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--color-primary)] transition">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--color-primary)] transition">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--color-primary)] transition">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--color-primary)] transition">
                  Custom Software Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#home" className="hover:text-[var(--color-primary)] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--color-primary)] transition">About Us</a></li>
              <li><a href="#services" className="hover:text-[var(--color-primary)] transition">Services</a></li>
              <li><a href="#team" className="hover:text-[var(--color-primary)] transition">Our Team</a></li>
              <li><a href="#gallery" className="hover:text-[var(--color-primary)] transition">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-[var(--color-primary)] transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-primary)] transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Connect With Us</h3>
            <p className="text-gray-300 text-sm mb-6">
              Follow us on social media to stay updated on our latest initiatives and events.
            </p>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://facebook.com" 
                aria-label="Facebook" 
                className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white hover:bg-[var(--color-secondary)] transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="https://www.instagram.com/deopersindia/" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white hover:bg-[var(--color-secondary)] transition"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://wa.me/919758403169" 
                aria-label="WhatsApp" 
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-white mb-3">Subscribe to Our Newsletter</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-lg bg-white text-gray-900 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] w-full"
                />
                <Button variant="primary" size="md" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>  

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left text-gray-400 text-sm">
            <p>
              © {currentYear} <span className="font-semibold text-white">DeopersIndia</span>. All rights reserved.
            </p>
            <p className="text-xs mt-2">
              Made by <a href="https://deopersindia.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-[var(--color-accent)] transition">DeopersIndia</a> | Empowering Communities Through Service
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-400 justify-center md:justify-end">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
