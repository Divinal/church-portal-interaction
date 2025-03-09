
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const Communication = () => {
  return (
    <PageLayout
      title="Département de Communication"
      description="Communication et média au service de l'Évangile"
      bannerImage="/images/banners/communication-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Le département de Communication</h2>
              <p className="lead mb-4">Le département de Communication de l'Église Évangélique du Congo est chargé de diffuser le message de l'Évangile à travers les médias traditionnels et numériques.</p>
              
              <p className="mb-4">Dans un monde de plus en plus connecté, notre département joue un rôle crucial dans la diffusion de l'Évangile, la communication interne et externe de l'Église, et la production de contenu médiatique de qualité.</p>
              
              <h3 className="mt-5 mb-3">Nos services</h3>
              <ul className="mb-5">
                <li>Radio et émissions télévisées</li>
                <li>Présence sur les réseaux sociaux</li>
                <li>Publication de livres et brochures</li>
                <li>Production audiovisuelle</li>
                <li>Relations publiques et communiqués de presse</li>
                <li>Site web et communication digitale</li>
              </ul>
              
              <h3 className="mb-3">Radio Évangélique</h3>
              <p>Notre radio émet 24h/24 et propose des programmes variés:</p>
              <ul>
                <li>Prédications et enseignements bibliques</li>
                <li>Émissions pour enfants et jeunes</li>
                <li>Musique chrétienne</li>
                <li>Débats et entretiens</li>
                <li>Informations et actualités chrétiennes</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Formation en médias</h4>
                  <p className="card-text">Nous proposons des formations en journalisme, production audiovisuelle et gestion des réseaux sociaux.</p>
                  <a href="#" className="btn btn-primary">S'inscrire</a>
                </div>
              </div>
              
              <div className="card">
                <img src="/images/images/radio.jpg" className="card-img-top" alt="Studio radio" />
                <div className="card-body">
                  <h5 className="card-title">Notre studio</h5>
                  <p className="card-text">Découvrez notre studio de production équipé de matériel professionnel.</p>
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

export default Communication;
