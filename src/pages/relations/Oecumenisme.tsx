
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const Organisation = () => {
  return (
    <PageLayout
      title="Département d'Organisation"
      description="Structurer et coordonner les activités de l'église"
      bannerImage="/images/banners/organisation-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Le département d'Organisation</h2>
              <p className="lead mb-4">Le département d'Organisation est responsable de la gestion, de la planification et de la coordination des activités et événements de l'Église Évangélique du Congo.</p>
              
              <p className="mb-4">Notre équipe travaille à structurer efficacement les différentes activités de l'église, à gérer les ressources humaines et matérielles, et à veiller au bon déroulement des événements et projets.</p>
              
              <h3 className="mt-5 mb-3">Nos responsabilités</h3>
              <ul className="mb-5">
                <li>Planification et coordination des événements majeurs</li>
                <li>Gestion des ressources humaines de l'église</li>
                <li>Administration et gestion des infrastructures</li>
                <li>Élaboration et suivi du calendrier annuel</li>
                <li>Coordination entre les différents départements</li>
                <li>Formation en leadership et gestion d'équipe</li>
              </ul>
              
              <h3 className="mb-3">Notre équipe</h3>
              <p>Le département d'Organisation est composé de:</p>
              <ul>
                <li>Un directeur</li>
                <li>Des coordinateurs régionaux</li>
                <li>Des responsables d'événements</li>
                <li>Des experts en gestion de projet</li>
                <li>Du personnel administratif et logistique</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Calendrier des événements</h4>
                  <p className="card-text">Consultez le calendrier officiel des activités et événements de l'Église Évangélique du Congo.</p>
                  <a href="#" className="btn btn-primary">Voir le calendrier</a>
                </div>
              </div>
              
              <div className="card">
                <img src="/images/images/calendar3.png" className="card-img-top" alt="Calendrier d'organisation" />
                <div className="card-body">
                  <h5 className="card-title">Formation en leadership</h5>
                  <p className="card-text">Découvrez nos programmes de formation en leadership et gestion d'équipe.</p>
                  <a href="#" className="btn btn-outline-primary">En savoir plus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Organisation;
