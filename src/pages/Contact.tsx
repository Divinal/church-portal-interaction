
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Banner from "@/components/Banner";
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <PageLayout>
      <Banner
        title="Contact"
        subtitle="Nous sommes à votre écoute"
        imageSrc="https://images.unsplash.com/photo-1473177104440-ffee2f376098"
      />
      
      <div className="page-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulaire de contact */}
            <div className="animate-fade-in">
              <h2 className="section-title mb-8">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
            
            {/* Informations de contact */}
            <div className="animate-fade-in delay-100">
              <h2 className="section-title mb-8">Nos coordonnées</h2>
              
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-church-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-church-DEFAULT mb-2">Adresse</h3>
                      <p className="text-gray-600">
                        123 Rue de l'Église<br />
                        Quartier Centre-ville<br />
                        Brazzaville, Congo
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-church-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-church-DEFAULT mb-2">Téléphone</h3>
                      <p className="text-gray-600">
                        Bureau principal: +242 12 345 6789<br />
                        Secrétariat: +242 98 765 4321
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-church-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-church-DEFAULT mb-2">Email</h3>
                      <p className="text-gray-600">
                        Information générale: info@egliseevangeliquecongo.org<br />
                        Secrétariat: secretariat@egliseevangeliquecongo.org<br />
                        Président: president@egliseevangeliquecongo.org
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-church-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-church-DEFAULT mb-2">Horaires d'ouverture</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 8h00 - 16h00<br />
                        Samedi: 9h00 - 12h00<br />
                        Dimanche: Fermé (sauf pour les cultes)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-serif font-bold text-xl text-church-DEFAULT mb-4">Mot du Président</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <div className="mb-4 md:mb-0 md:mr-6 md:w-1/4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                      alt="Président de l'Église Évangélique du Congo"
                      className="rounded-full w-32 h-32 object-cover border-4 border-church-gold"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <p className="italic text-gray-600 mb-4">
                      "Au nom de toute l'Église Évangélique du Congo, je vous souhaite la bienvenue. Notre église est ouverte à tous, et nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans votre cheminement spirituel."
                    </p>
                    <p className="font-medium text-church-DEFAULT">
                      Révérend Paul Moukala<br />
                      <span className="font-normal text-gray-500">Président de l'Église Évangélique du Congo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carte (simulée) */}
          <div className="mt-16 animate-fade-in delay-200">
            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-church-DEFAULT mx-auto mb-4" />
                  <p className="text-gray-700">
                    Carte interactive disponible bientôt
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Liens rapides */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in delay-300">
            <a href="/faq" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-serif font-bold text-xl text-church-DEFAULT mb-2">FAQ</h3>
              <p className="text-gray-600">
                Consultez notre foire aux questions pour des réponses rapides aux demandes les plus courantes.
              </p>
            </a>
            <a href="/politique-confidentialite" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-serif font-bold text-xl text-church-DEFAULT mb-2">Politique de confidentialité</h3>
              <p className="text-gray-600">
                Découvrez comment nous protégeons vos données personnelles lorsque vous nous contactez.
              </p>
            </a>
            <a href="/" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-serif font-bold text-xl text-church-DEFAULT mb-2">Accueil</h3>
              <p className="text-gray-600">
                Retournez à notre page d'accueil pour explorer le reste de notre site.
              </p>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
