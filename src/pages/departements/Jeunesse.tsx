
import { Calendar, Award, MapPin } from "lucide-react";
import Banner from "@/components/Banner";
import PageLayout from "@/components/PageLayout";

const Jeunesse = () => {
  const activites = [
    {
      titre: "Groupe de louange",
      description: "Formation musicale pour les jeunes talents de l'église",
      horaire: "Chaque samedi à 15h",
      lieu: "Salle de musique"
    },
    {
      titre: "Étude biblique jeunesse",
      description: "Étude approfondie de la Bible adaptée aux jeunes",
      horaire: "Mercredi à 18h",
      lieu: "Salle principale"
    },
    {
      titre: "Action sociale",
      description: "Visites aux orphelinats et activités caritatives",
      horaire: "Premier samedi du mois",
      lieu: "Variable selon l'activité"
    },
    {
      titre: "Sport et loisirs",
      description: "Basketball, football et autres activités sportives",
      horaire: "Dimanche après-midi",
      lieu: "Terrain de sport"
    },
    {
      titre: "Camp de jeunesse annuel",
      description: "Une semaine d'enseignement, de prière et d'activités",
      horaire: "Août (une semaine)",
      lieu: "Centre de retraite"
    },
    {
      titre: "Mentoring",
      description: "Programme de mentorat par des adultes de l'église",
      horaire: "Rendez-vous individuels",
      lieu: "Variable"
    }
  ];

  const temoignages = [
    {
      nom: "Jean M.",
      age: 19,
      texte: "Le département de la jeunesse a transformé ma vie. J'ai trouvé une famille spirituelle et appris à approfondir ma foi."
    },
    {
      nom: "Sophie K.",
      age: 22,
      texte: "Grâce aux activités du département, j'ai pu développer mes talents de leadership et servir ma communauté."
    },
    {
      nom: "Paul T.",
      age: 17,
      texte: "Les études bibliques m'ont aidé à mieux comprendre ma foi et à l'appliquer dans ma vie quotidienne et à l'école."
    }
  ];

  return (
    <PageLayout>
      <Banner
        title="Département de la Jeunesse"
        description="Former et accompagner la nouvelle génération dans la foi"
        bannerImage="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&h=800&fit=crop"
      />
      
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16 animate-fade-in">
            <h2 className="section-title">Notre vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le Département de la Jeunesse de l'Église Évangélique du Congo a pour mission d'accompagner les jeunes dans leur cheminement spirituel, afin qu'ils deviennent des disciples engagés de Jésus-Christ et des acteurs de transformation dans la société.
            </p>
            <p className="text-lg text-gray-700">
              Nous croyons que les jeunes ne sont pas seulement l'Église de demain, mais qu'ils font partie intégrante de l'Église d'aujourd'hui. Notre objectif est de leur donner les outils nécessaires pour vivre leur foi de manière authentique et pertinente dans le monde contemporain.
            </p>
          </section>
          
          <section className="mb-16 animate-fade-in delay-100">
            <h2 className="section-title">Nos activités</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {activites.map((activite, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-serif font-bold mb-3 text-church-DEFAULT">
                    {activite.titre}
                  </h3>
                  <p className="text-gray-600 mb-4">{activite.description}</p>
                  <div className="flex items-center text-gray-500 mb-2">
                    <Calendar size={16} className="mr-2 text-church-gold" />
                    <span>{activite.horaire}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-2 text-church-gold" />
                    <span>{activite.lieu}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="mb-16 animate-fade-in delay-200">
            <h2 className="section-title">Direction du département</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Pasteur Michel Batantou"
                    className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-church-gold"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-serif font-bold text-church-DEFAULT mb-2">
                    Pasteur Michel Batantou
                  </h3>
                  <p className="text-church-gold font-medium mb-4">Directeur du Département de la Jeunesse</p>
                  <p className="text-gray-700 mb-4">
                    Le Pasteur Michel Batantou dirige le département depuis 2018. Ancien responsable jeunesse lui-même, il a à cœur de transmettre sa passion pour l'Évangile et d'accompagner les jeunes dans leur développement spirituel.
                  </p>
                  <p className="text-gray-700">
                    Il est assisté par une équipe dynamique de jeunes leaders formés pour encadrer les différentes activités du département.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-16 animate-fade-in delay-300">
            <h2 className="section-title">Témoignages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {temoignages.map((temoignage, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
                  <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                    <Award size={32} className="text-church-gold" />
                  </div>
                  <p className="italic text-gray-600 mb-4">"{temoignage.texte}"</p>
                  <div className="font-medium">
                    <span className="text-church-DEFAULT">{temoignage.nom}</span>
                    <span className="text-gray-500"> • {temoignage.age} ans</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="animate-fade-in delay-400">
            <h2 className="section-title">Nous rejoindre</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le Département de la Jeunesse est ouvert à tous les jeunes de 12 à 30 ans. Que vous soyez déjà membre de l'église ou simplement curieux d'en savoir plus, vous êtes les bienvenus à nos activités.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-church-DEFAULT mt-8">
              <h3 className="text-xl font-serif font-bold mb-4 text-church-DEFAULT">
                Pour plus d'informations
              </h3>
              <p className="text-gray-700 mb-4">
                Contactez-nous par email ou téléphone, ou venez directement nous rencontrer lors d'une de nos activités.
              </p>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-700">
                    <strong>Email:</strong> jeunesse@egliseevangeliquecongo.org<br />
                    <strong>Téléphone:</strong> +242 98 765 4321
                  </p>
                </div>
                <a
                  href="/contact"
                  className="bg-church-DEFAULT text-white py-2 px-6 rounded-md hover:bg-church-dark transition-colors font-medium inline-block"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Jeunesse;
