
import { Book, Music, Users, Bell, Calendar } from "lucide-react";
import Banner from "@/components/Banner";
import PageLayout from "@/components/PageLayout";
import NewsCard from "@/components/NewsCard";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  // Données simulées pour l'affichage
  const news = [
    {
      id: 1,
      title: "Conférence spirituelle annuelle",
      excerpt: "Rejoignez-nous pour notre conférence spirituelle annuelle sous le thème 'Vivre par la foi' avec nos orateurs invités...",
      date: "12 juin 2023",
      imageSrc: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      url: "/blog/conference-spirituelle",
    },
    {
      id: 2,
      title: "Camp de jeunesse 2023",
      excerpt: "Le camp de jeunesse aura lieu du 15 au 20 août sous le thème 'Une génération qui change le monde'...",
      date: "5 juin 2023",
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      url: "/blog/camp-jeunesse",
    },
    {
      id: 3,
      title: "Nomination du nouveau conseil synodal",
      excerpt: "Suite aux élections synodales, nous avons le plaisir d'annoncer la nomination du nouveau conseil synodal...",
      date: "1 juin 2023",
      imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      url: "/blog/nouveau-conseil",
    },
  ];

  const services = [
    {
      title: "Cultes et prières",
      description: "Rejoignez-nous pour nos cultes dominicaux et moments de prières communautaires.",
      icon: <Bell size={32} />,
      url: "/cultes",
    },
    {
      title: "Groupes de jeunesse",
      description: "Activités et programmes dédiés aux jeunes de tous âges.",
      icon: <Users size={32} />,
      url: "/departements/jeunesse",
    },
    {
      title: "École du dimanche",
      description: "Formation biblique pour les enfants chaque dimanche matin.",
      icon: <Book size={32} />,
      url: "/ecole-dimanche",
    },
    {
      title: "Chorale et musique",
      description: "Louez le Seigneur à travers nos différentes chorales et groupes musicaux.",
      icon: <Music size={32} />,
      url: "/departements/musique",
    },
    {
      title: "Événements",
      description: "Découvrez nos prochains événements et activités de l'église.",
      icon: <Calendar size={32} />,
      url: "/evenements",
    },
  ];

  return (
    <PageLayout>
      <Banner
        title="Église Évangélique du Congo"
        description="Annoncer l'Évangile, Servir le prochain, Vivre dans la foi"
        bannerImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
      />

      {/* Section Actualités */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Actualités</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les dernières nouvelles et événements de notre église
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <NewsCard
                key={item.id}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                imageSrc={item.imageSrc}
                url={item.url}
                className={`delay-${index * 100}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a
              href="/blog"
              className="inline-block bg-church-DEFAULT text-white py-3 px-6 rounded-md hover:bg-church-dark transition-colors font-medium"
            >
              Toutes les actualités
            </a>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les différents services et ministères de notre église
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                url={service.url}
                className={`delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Citation */}
      <section className="py-20 bg-church-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
            "Annoncer la Bonne Nouvelle et servir le prochain par amour du Christ."
          </blockquote>
          <cite className="text-church-gold font-medium">— Le Président de l'Église Évangélique du Congo</cite>
        </div>
      </section>

      {/* Section Invitation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="section-title">Rejoignez-nous ce dimanche</h2>
            <p className="text-lg text-gray-600 mb-6">
              Nous vous invitons à nous rejoindre pour notre culte dominical et à découvrir la joie de la fraternité chrétienne.
            </p>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Lieu:</span> 123 Rue de l'Église, Brazzaville
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Horaires:</span> Dimanche à 9h00 et 11h00
              </p>
            </div>
          </div>
          <div className="md:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
              alt="Église"
              className="rounded-lg shadow-lg animate-fade-in"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
