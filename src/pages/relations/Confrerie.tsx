
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const Confrerie = () => {
  return (
    <PageLayout
      title="Confrérie"
      description="Fraternité et communion entre églises"
      bannerImage="/images/banners/confrerie-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">La confrérie des Églises</h2>
              <p className="lead mb-4">L'Église Évangélique du Congo entretient des relations fraternelles avec d'autres dénominations et organisations chrétiennes, formant ainsi une confrérie spirituelle au service du Royaume de Dieu.</p>
              
              <p className="mb-4">Notre confrérie se base sur la reconnaissance mutuelle, le respect et la collaboration dans la mission commune d'annoncer l'Évangile et de servir notre société.</p>
              
              <h3 className="mt-5 mb-3">Nos partenaires</h3>
              <ul className="mb-5">
                <li>Églises protestantes au Congo et en Afrique centrale</li>
                <li>Missions et organisations évangéliques internationales</li>
                <li>Réseaux d'églises pour le développement communautaire</li>
                <li>Séminaires théologiques et instituts bibliques</li>
                <li>Organisations chrétiennes humanitaires</li>
              </ul>
              
              <h3 className="mb-3">Activités de la confrérie</h3>
              <p>Notre confrérie s'exprime à travers diverses activités:</p>
              <ul>
                <li>Rencontres régulières des responsables d'églises</li>
                <li>Échanges de prédicateurs et enseignants</li>
                <li>Formations communes pour les leaders</li>
                <li>Projets missionnaires conjoints</li>
                <li>Conférences et retraites spirituelles</li>
                <li>Initiatives de plaidoyer et d'engagement social</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Alliance des Églises Évangéliques</h4>
                  <p className="card-text">Rejoignez notre réseau d'églises partenaires pour la mission et le développement.</p>
                  <a href="#" className="btn btn-primary">Devenir partenaire</a>
                </div>
              </div>
              
              <div className="card">
                <img src="/images/images/commiGuide.jpg" className="card-img-top" alt="Rencontre de la confrérie" />
                <div className="card-body">
                  <h5 className="card-title">Ressources partagées</h5>
                  <p className="card-text">Accédez aux ressources et documents produits par notre confrérie d'églises.</p>
                  <a href="#" className="btn btn-outline-primary">Voir les ressources</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Confrerie;
