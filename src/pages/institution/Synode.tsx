
import Banner from "@/components/Banner";
import PageLayout from "@/components/PageLayout";
import CommentForm from "@/components/CommentForm";

const Synode = () => {
  return (
    <PageLayout>
      <Banner
        title="Le Synode"
        description="L'assemblée délibérante de l'Église Évangélique du Congo"
        bannerImage="https://images.unsplash.com/photo-1466442929976-97f336a657be"
      />
      
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12 animate-fade-in">
            <h2 className="section-title">Qu'est-ce que le Synode ?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le Synode est l'instance suprême de l'Église Évangélique du Congo. Il est composé de délégués élus par les différentes régions ecclésiastiques et se réunit généralement tous les trois ans pour prendre les décisions majeures concernant l'orientation de l'Église.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Le Synode a pour mission d'élaborer et de réviser les statuts et règlements de l'Église, d'élire les membres du Conseil Synodal, et de délibérer sur les questions doctrinales, éthiques et organisationnelles importantes.
            </p>
          </section>
          
          <section className="mb-12 animate-fade-in delay-100">
            <h2 className="section-title">Fonctions et responsabilités</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-church-gold font-bold mr-2">•</span>
                <span>Définir et réviser la vision et la mission de l'Église</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-gold font-bold mr-2">•</span>
                <span>Approuver les changements constitutionnels et les règlements internes</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-gold font-bold mr-2">•</span>
                <span>Élire le Président de l'Église et les membres du Conseil Synodal</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-gold font-bold mr-2">•</span>
                <span>Examiner et approuver les rapports financiers et opérationnels</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-gold font-bold mr-2">•</span>
                <span>Prendre position sur les questions théologiques et éthiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-gold font-bold mr-2">•</span>
                <span>Établir des partenariats avec d'autres églises et organisations</span>
              </li>
            </ul>
          </section>
          
          <section className="mb-12 animate-fade-in delay-200">
            <h2 className="section-title">Structure du Synode</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le Synode est présidé par le Président de l'Église assisté par un bureau élu lors de chaque session synodale. Les délibérations se déroulent selon un règlement précis qui garantit la participation équitable de tous les délégués.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 text-church-DEFAULT">Composition</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Délégués pastoraux de chaque consistoire</li>
                  <li>Délégués laïcs élus par les assemblées régionales</li>
                  <li>Membres du Conseil Synodal</li>
                  <li>Directeurs des départements synodaux</li>
                  <li>Invités spéciaux (sans droit de vote)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 text-church-DEFAULT">Sessions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Session ordinaire tous les trois ans</li>
                  <li>Sessions extraordinaires selon les besoins</li>
                  <li>Commissions thématiques préparatoires</li>
                  <li>Plénières délibératives</li>
                  <li>Célébrations cultuelles</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="animate-fade-in delay-300 mb-12">
            <h2 className="section-title">Histoire synodale</h2>
            <p className="text-lg text-gray-700 mb-6">
              Depuis sa fondation, l'Église Évangélique du Congo a tenu de nombreux synodes qui ont marqué son histoire et son évolution. Ces assemblées ont permis à l'Église de s'adapter aux changements sociaux tout en restant fidèle à ses fondements théologiques.
            </p>
            <div className="border-l-4 border-church-gold pl-6 my-8">
              <p className="italic text-gray-600">
                "Le Synode est la manifestation visible de notre unité dans la diversité, où chaque voix compte et où ensemble nous discernons la direction que le Seigneur nous indique pour notre Église."
              </p>
              <p className="mt-2 font-medium">— Extrait des actes du Synode de 2019</p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="section-title">Partagez votre opinion</h2>
            <div className="mt-8">
              <CommentForm />
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Synode;
