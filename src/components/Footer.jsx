import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo / Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-400 mb-2">Φιλία Δημητριάδη</h2>
            <p className="text-sm text-gray-400">
              Υψηλής ποιότητας φροντίδα υγείας με επίκεντρο τον άνθρωπο.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-white transition">Αρχική</a></li>
              <li><a href="#services" className="hover:text-white transition">Υπηρεσίες</a></li>
              <li><a href="#contact" className="hover:text-white transition">Επικοινωνία</a></li>
            </ul>
          </div>

          {/* Column 3: Contact + Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Επικοινωνία</h3>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400 mb-2">
              <FaPhoneAlt className="text-teal-400" /> (555) 123-4567
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400 mb-4">
              <FaEnvelope className="text-teal-400" /> info@drsmith.com
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-teal-400"><FaFacebookF /></a>
              <a href="#" className="hover:text-teal-400"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ιατρείο Φιλίας Δημητριάδη. Όλα τα δικαιώματα διατηρούνται.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
