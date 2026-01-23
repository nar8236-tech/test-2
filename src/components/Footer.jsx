import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#2C3539] text-white"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://ucarecdn.com/0138c0f5-1fbb-4b97-af92-625b8e6f67d6/-/format/auto/"
                alt="Proper Management Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <span
                className="text-lg font-bold"
                style={{ letterSpacing: "0.5px" }}
              >
                PROPER MANAGEMENT
              </span>
            </div>
            <p className="text-[#E5E7EB] text-sm leading-relaxed mb-4">
              Professional residential and commercial property management
              services in New Hampshire. Trusted by property owners for over 10
              years.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-[#E5E7EB]">
                <span className="font-semibold text-white">10+ Years</span> of
                Experience
              </div>
              <div className="flex items-center gap-2 text-[#E5E7EB]">
                <span className="font-semibold text-white">
                  250+ Properties
                </span>{" "}
                Managed
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="/"
                className="text-[#E5E7EB] hover:text-white transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-[#E5E7EB] hover:text-white transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-[#E5E7EB] hover:text-white transition-colors text-sm"
              >
                Services
              </a>
              <a
                href="/properties"
                className="text-[#E5E7EB] hover:text-white transition-colors text-sm"
              >
                Properties
              </a>
              <a
                href="/testimonials"
                className="text-[#E5E7EB] hover:text-white transition-colors text-sm"
              >
                Testimonials
              </a>
              <a
                href="/contact"
                className="text-[#E5E7EB] hover:text-white transition-colors text-sm"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:603-717-8401"
                className="flex items-start gap-3 text-[#E5E7EB] hover:text-white transition-colors group"
              >
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#E5E7EB] mb-1">Phone</div>
                  <div className="text-sm font-medium">603-717-8401</div>
                </div>
              </a>
              <a
                href="mailto:propermanagementnh@gmail.com"
                className="flex items-start gap-3 text-[#E5E7EB] hover:text-white transition-colors group"
              >
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#E5E7EB] mb-1">Email</div>
                  <div className="text-sm font-medium break-all">
                    propermanagementnh@gmail.com
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-[#E5E7EB]">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#E5E7EB] mb-1">Address</div>
                  <div className="text-sm font-medium">
                    PO Box 60
                    <br />
                    Tilton, NH 03276
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#708090] border-opacity-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#E5E7EB]">
            <div>© 2026 Proper Management LLC. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
