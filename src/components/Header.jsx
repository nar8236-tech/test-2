import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/properties" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-[#E5E7EB] transition-shadow duration-150 ${
        isScrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : ""
      }`}
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Top bar with contact info */}
      <div className="bg-[#2C3539] text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:603-717-8401"
              className="flex items-center gap-2 hover:text-[#E5E7EB] transition-colors"
            >
              <Phone size={14} />
              <span>603-717-8401</span>
            </a>
            <a
              href="mailto:propermanagementnh@gmail.com"
              className="flex items-center gap-2 hover:text-[#E5E7EB] transition-colors"
            >
              <Mail size={14} />
              <span>propermanagementnh@gmail.com</span>
            </a>
          </div>
          <div className="text-xs text-[#E5E7EB]">
            Serving New Hampshire with Excellence
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="https://ucarecdn.com/0138c0f5-1fbb-4b97-af92-625b8e6f67d6/-/format/auto/"
              alt="Proper Management Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span
                className="text-xl font-bold text-[#2C3539]"
                style={{ letterSpacing: "0.5px" }}
              >
                PROPER MANAGEMENT
              </span>
              <span className="text-xs text-[#708090]">
                Professional Property Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#2C3539] hover:text-[#708090] font-medium text-sm transition-colors duration-150"
                style={{ letterSpacing: "0.3px" }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/contact"
              className="bg-[#2C3539] hover:bg-[#708090] text-white font-semibold text-sm px-6 py-3 rounded-md transition-all duration-150 active:scale-[0.98]"
              style={{
                boxShadow: "0 2px 4px rgba(44,53,57,0.2)",
              }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#2C3539] hover:text-[#708090] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB] py-4">
          <nav className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#2C3539] hover:text-[#708090] font-medium text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-[#2C3539] hover:bg-[#708090] text-white font-semibold text-sm px-6 py-3 rounded-md text-center transition-all duration-150"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
