
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const BureauSynodal = () => {
  return (
    <PageLayout
      title="Bureau Synodal"
      description="L'équipe dirigeante de l'Église Évangélique du Congo"
      bannerImage="/images/banners/bureau-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Le Bureau Synodal</h2>
              <p className="lead mb-4">Le Bureau Synodal est l'organe exécutif de l'Église Évangélique du Congo, chargé de mettre en œuvre les décisions du Synode et du Conseil Synodal.</p>
              
              <p className="mb-4">Composé d'une équipe de responsables élus, le Bureau Synodal assure la gestion quotidienne de l'église et la coordination de ses différents départements et services.</p>
              
              <h3 className="mt-5 mb-3">Composition du Bureau Synodal</h3>
              <ul className="mb-5">
                <li><strong>Le Président</strong> - Représentant légal de l'église</li>
                <li><strong>Le Vice-président</strong> - Seconde le président dans ses fonctions</li>
                <li><strong>Le Secrétaire Général</strong> - Coordonne l'administration</li>
                <li><strong>Le Trésorier</strong> - Gère les finances de l'église</li>
                <li><strong>Le Conseiller Théologique</strong> - Responsable des questions doctrinales</li>
                <li><strong>Les Secrétaires Départementaux</strong> - Supervisent les différents départements</li>
              </ul>
              
              <h3 className="mb-3">Rôles et responsabilités</h3>
              <p>Le Bureau Synodal est chargé de:</p>
              <ul>
                <li>Exécuter les décisions du Synode et du Conseil Synodal</li>
                <li>Représenter l'église auprès des autorités et partenaires</li>
                <li>Gérer l'administration générale de l'église</li>
                <li>Superviser les départements et services</li>
                <li>Coordonner les activités au niveau national</li>
                <li>Préparer les réunions du Conseil Synodal et du Synode</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  Membres actuels du Bureau
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Rév. Paul Mbama - Président</li>
                  <li className="list-group-item">Rév. Jean Kibangou - Vice-président</li>
                  <li className="list-group-item">Pasteur Antoine Mouanda - Secrétaire Général</li>
                  <li className="list-group-item">M. Simon Makosso - Trésorier</li>
                  <li className="list-group-item">Dr. Marie Ngoma - Conseillère Théologique</li>
                </ul>
              </div>
              
              <div className="card">
                <img src="/images/images/bureauSyn.jpg" className="card-img-top" alt="Bureau Synodal" />
                <div className="card-body">
                  <h5 className="card-title">Contacter le Bureau Synodal</h5>
                  <p className="card-text">Pour toute question ou demande concernant l'Église Évangélique du Congo.</p>
                  <a href="#" className="btn btn-outline-primary">Nous contacter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BureauSynodal;
