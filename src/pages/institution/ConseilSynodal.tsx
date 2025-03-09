
import Banner from "@/components/Banner";
import PageLayout from "@/components/PageLayout";

const ConseilSynodal = () => {
  // Simulation de données
  const membres = [
    {
      nom: "Révérend Paul Moukala",
      fonction: "Président",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Théologien de formation, le Révérend Moukala préside le Conseil Synodal depuis 2018."
    },
    {
      nom: "Révérende Marie Bokamba",
      fonction: "Vice-Présidente",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description: "Spécialiste en missiologie et en développement communautaire."
    },
    {
      nom: "Dr. Jean Malonga",
      fonction: "Secrétaire Général",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Docteur en théologie et ancien professeur d'université."
    },
    {
      nom: "Mme. Sylvie Nzaba",
      fonction: "Trésorière",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Économiste de formation avec une expérience en gestion d'organisations à but non lucratif."
    },
    {
      nom: "Pasteur Thomas Mabiala",
      fonction: "Membre",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      description: "Responsable des relations œcuméniques et interreligieuses."
    },
    {
      nom: "Diacre Antoine Koumba",
      fonction: "Membre",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      description: "Spécialiste en développement et action sociale."
    }
  ];

  return (
    <PageLayout>
      <Banner
        title="Conseil Synodal"
        description="L'organe exécutif entre les sessions du Synode"
        bannerImage="https://images.unsplash.com/photo-1466442929976-97f336a657be"
      />
      
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12 animate-fade-in">
            <h2 className="section-title">Rôle et mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le Conseil Synodal est l'organe exécutif de l'Église Évangélique du Congo. Il est chargé de mettre en œuvre les décisions prises par le Synode et d'assurer la gestion quotidienne de l'Église entre les sessions synodales.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Composé de membres élus par le Synode pour un mandat de quatre ans, le Conseil Synodal se réunit régulièrement pour prendre des décisions concernant l'administration, les finances, les ressources humaines et les orientations pastorales de l'Église.
            </p>
          </section>
          
          <section className="mb-12 animate-fade-in delay-100">
            <h2 className="section-title">Attributions principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 text-church-DEFAULT">Administration</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-church-gold font-bold mr-2">•</span>
                    <span>Exécuter les décisions du Synode</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-gold font-bold mr-2">•</span>
                    <span>Gérer les affaires courantes de l'Église</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-gold font-bold mr-2">•</span>
                    <span>Superviser les départements et services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-gold font-bold mr-2">•</span>
                    <span>Représenter l'Église dans ses relations extérieures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 text-church-DEFAULT">Pastorale</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-church-gold font-bold mr-2">•</span>
                    <span>Veiller à la formation théologique et continue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-gold font-bold mr-2">•</span>
                    <span>Accompagner et soutenir les églises locales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-gold font-bold mr-2">•</span>
                    <span>Coordonner l'évangélisation et la mission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-gold font-bold mr-2">•</span>
                    <span>Maintenir l'unité doctrinale et spirituelle</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-16 animate-fade-in delay-200">
            <h2 className="section-title">Membres actuels du Conseil</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {membres.map((membre, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={membre.photo}
                      alt={membre.nom}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-serif font-bold mb-1 text-church-DEFAULT">
                      {membre.nom}
                    </h3>
                    <p className="text-church-gold font-medium mb-3">{membre.fonction}</p>
                    <p className="text-gray-600">{membre.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="animate-fade-in delay-300">
            <h2 className="section-title">Fonctionnement</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le Conseil Synodal fonctionne de manière collégiale, sous la direction du Président de l'Église. Il se réunit au moins une fois par trimestre, et plus fréquemment si nécessaire. Les décisions sont prises à la majorité des voix, avec une préférence pour le consensus.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-church-DEFAULT mt-8">
              <h3 className="text-xl font-serif font-bold mb-3 text-church-DEFAULT">Contact</h3>
              <p className="text-gray-700 mb-2">
                Pour contacter le Conseil Synodal, veuillez adresser votre correspondance au Secrétariat Général :
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> conseil@egliseevangeliquecongo.org<br />
                <strong>Téléphone:</strong> +242 12 345 6789<br />
                <strong>Adresse:</strong> 123 Rue de l'Église, Brazzaville, Congo
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default ConseilSynodal;
