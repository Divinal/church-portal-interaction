
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const Evangelisation = () => {
  return (
    <PageLayout
      title="Département d'Évangélisation"
      description="Annoncer la Bonne Nouvelle à toutes les nations"
      bannerImage="/images/banners/evangelisation-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Le département d'Évangélisation</h2>
              <p className="lead mb-4">Le département d'Évangélisation coordonne tous les efforts missionnaires et d'évangélisation de l'Église Évangélique du Congo, selon l'ordre de Jésus d'aller faire de toutes les nations des disciples.</p>
              
              <p className="mb-4">Notre vision est de voir l'Évangile annoncé dans tous les coins du Congo et au-delà, transformant des vies et établissant de nouvelles communautés de croyants.</p>
              
              <h3 className="mt-5 mb-3">Nos stratégies d'évangélisation</h3>
              <ul className="mb-5">
                <li>Campagnes d'évangélisation dans les villes et villages</li>
                <li>Missions à court et long terme</li>
                <li>Formation d'évangélistes et missionnaires</li>
                <li>Évangélisation par les médias (radio, TV, internet)</li>
                <li>Implantation de nouvelles églises</li>
                <li>Actions sociales et humanitaires</li>
              </ul>
              
              <h3 className="mb-3">Formation missionnaire</h3>
              <p>Notre école de mission prépare les futurs missionnaires avec des cours sur:</p>
              <ul>
                <li>Théologie missionnaire</li>
                <li>Anthropologie culturelle</li>
                <li>Techniques d'évangélisation</li>
                <li>Implantation d'églises</li>
                <li>Langues et adaptation culturelle</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Devenir missionnaire</h4>
                  <p className="card-text">Vous sentez un appel missionnaire? Rejoignez notre programme de formation et de déploiement sur le terrain.</p>
                  <a href="#" className="btn btn-primary">S'engager</a>
                </div>
              </div>
              
              <div className="card">
                <img src="/images/images/news-2.jpg" className="card-img-top" alt="Campagne d'évangélisation" />
                <div className="card-body">
                  <h5 className="card-title">Témoignages du terrain</h5>
                  <p className="card-text">Lisez les récits inspirants de nos missionnaires et des vies transformées par l'Évangile.</p>
                  <a href="#" className="btn btn-outline-primary">Lire les témoignages</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Evangelisation;
