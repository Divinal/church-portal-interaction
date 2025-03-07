
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-church-DEFAULT text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-church-gold">Église Évangélique du Congo</h3>
            <p className="mb-4">
              Église du Christ au Congo, annonçant l'Évangile et servant la communauté depuis plusieurs décennies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-church-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-church-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-church-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-church-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-church-gold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-church-gold transition-colors inline-block">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/institution/synode" className="hover:text-church-gold transition-colors inline-block">
                  Synode
                </Link>
              </li>
              <li>
                <Link to="/departements/jeunesse" className="hover:text-church-gold transition-colors inline-block">
                  Jeunesse
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-church-gold transition-colors inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-church-gold transition-colors inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="hover:text-church-gold transition-colors inline-block">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-church-gold transition-colors inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-church-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-church-gold" />
                <span>123 Rue de l'Église, Brazzaville, Congo</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-church-gold" />
                <span>+242 12 345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-church-gold" />
                <span>contact@egliseevangeliquecongo.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>
            &copy; {currentYear} Église Évangélique du Congo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
