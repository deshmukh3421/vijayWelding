import Link from "next/link";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const servicesList = [
  "CNC Design",
  "Elevation Design",
  "MDF Design",
  "Wood Design",
  "Acrylic Design",
  "APC Design",
  "Shutter",
  "Fabrication",
  "Turmeric Boiler",
];

export default function Footer() {
  return (
    <footer className="pt-12 bg-welding-black border-t border-welding-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo size="sm" />
            </div>
            <p className="text-[0.75rem] text-welding-accent tracking-[2px] uppercase mb-2.5">
              Quality That You Feel
            </p>
            <p className="text-[0.85rem] text-welding-text-muted leading-relaxed">
              Expert welding & fabrication services delivering precision and
              excellence in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[0.95rem] font-bold mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.85rem] text-welding-text-muted hover:text-welding-accent hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-[0.95rem] font-bold mb-4">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {servicesList.map((service) => (
                <li
                  key={service}
                  className="text-[0.85rem] text-welding-text-muted"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-[0.95rem] font-bold mb-4">
              Contact Info
            </h4>
            <div className="flex flex-col gap-2 text-[0.82rem] text-welding-text-muted leading-snug">
              <p>
                <strong className="text-welding-text-secondary">Address:</strong>{" "}
                Civil Line, Ayodhya Nagar-B, Tq-Risod, Dist Washim
              </p>
              <p>
                <strong className="text-welding-text-secondary">Phone:</strong>{" "}
                <a href="tel:+919373785271" className="hover:text-welding-accent transition-colors">
                  +91 93737 85271
                </a>
              </p>
              <p>
                <strong className="text-welding-text-secondary">Email:</strong>{" "}
                <a href="mailto:vijaywelding1978@gmail.com" className="hover:text-welding-accent transition-colors">
                  vijaywelding1978@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-welding-text-secondary">GSTIN:</strong>{" "}
                27AWZPC3007C1ZQ
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-welding-border py-4 text-center">
          <p className="text-[0.82rem] text-welding-text-muted">
            &copy; {new Date().getFullYear()} Vijay Welding. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
