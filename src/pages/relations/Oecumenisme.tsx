
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const Oecumenisme = () => {
  return (
    <PageLayout
      title="Œcuménisme"
      description="L'unité dans la diversité chrétienne"
      bannerImage="/images/banners/oecumenisme-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Notre engagement œcuménique</h2>
              <p className="lead mb-4">L'Église Évangélique du Congo est profondément engagée dans le dialogue œcuménique, reconnaissant l'importance de l'unité chrétienne tout en respectant la diversité des expressions de foi.</p>
              
              <p className="mb-4">Nous croyons que malgré nos différences doctrinales et liturgiques, nous partageons une foi commune en Jésus-Christ et sommes appelés à témoigner ensemble de l'Évangile dans notre société.</p>
              
              <h3 className="mt-5 mb-3">Nos partenariats œcuméniques</h3>
              <ul className="mb-5">
                <li>Membre du Conseil Œcuménique des Églises</li>
                <li>Participation au Conseil des Églises Chrétiennes au Congo</li>
                <li>Dialogue avec les Églises catholique, orthodoxe et protestantes</li>
                <li>Collaborations pour des projets sociaux et humanitaires</li>
                <li>Participation aux initiatives de prière pour l'unité des chrétiens</li>
              </ul>
              
              <h3 className="mb-3">Activités œcuméniques</h3>
              <p>Notre engagement œcuménique se traduit par diverses activités:</p>
              <ul>
                <li>Semaine de prière pour l'unité des chrétiens</li>
                <li>Conférences et colloques théologiques interconfessionnels</li>
                <li>Projets de développement communautaire conjoints</li>
                <li>Célébrations et commémorations communes</li>
                <li>Échanges de chaires entre pasteurs de différentes confessions</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Prochain événement œcuménique</h4>
                  <p className="card-text">Célébration œcuménique de Pentecôte le 23 mai 2024 à la cathédrale de Brazzaville.</p>
                  <a href="#" className="btn btn-primary">Plus d'informations</a>
                </div>
              </div>
              
              <div className="card">
                <img src="/images/images/news-1.jpg" className="card-img-top" alt="Rencontre œcuménique" />
                <div className="card-body">
                  <h5 className="card-title">Déclarations communes</h5>
                  <p className="card-text">Consultez les déclarations et communiqués issus du dialogue œcuménique.</p>
                  <a href="#" className="btn btn-outline-primary">Lire les déclarations</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Oecumenisme;
