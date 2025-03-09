import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const Musique = () => {
  return (
    <PageLayout
      title="Département de la Musique"
      description="La musique au cœur de notre église"
      bannerImage="/images/banners/musique-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Le ministère de la Musique</h2>
              <p className="lead mb-4">La musique joue un rôle essentiel dans notre culte et notre vie spirituelle. Le département de la Musique de l'Église Évangélique du Congo coordonne toutes les activités musicales dans l'église.</p>
              
              <p className="mb-4">Notre département de musique est responsable de la formation des musiciens, des chorales et des groupes de louange dans toutes les paroisses. Nous croyons que la musique est un moyen puissant pour adorer Dieu et toucher les cœurs.</p>
              
              <h3 className="mt-5 mb-3">Nos activités</h3>
              <ul className="mb-5">
                <li>Formation musicale pour les jeunes et les adultes</li>
                <li>Concours de chant entre les chorales des différentes paroisses</li>
                <li>Production d'albums de louange et d'adoration</li>
                <li>Organisation de concerts spirituels</li>
                <li>Développement de nouveaux chants en langues locales</li>
              </ul>
              
              <h3 className="mb-3">L'école de musique</h3>
              <p>Notre département dispose d'une école de musique qui offre des formations en:</p>
              <ul>
                <li>Chant et technique vocale</li>
                <li>Instruments (piano, guitare, batterie, instruments traditionnels)</li>
                <li>Direction de chorale</li>
                <li>Composition et arrangement musical</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Événements à venir</h4>
                  <p className="card-text">Notre grand concert annuel aura lieu le 15 décembre 2023 à Brazzaville.</p>
                  <a href="#" className="btn btn-primary">S'inscrire</a>
                </div>
              </div>
              
              <div className="card">
                <img src="/images/images/news-3.jpg" className="card-img-top" alt="Concert de louange" />
                <div className="card-body">
                  <h5 className="card-title">Galerie photos</h5>
                  <p className="card-text">Découvrez les moments forts de nos concerts et célébrations.</p>
                  <a href="#" className="btn btn-outline-primary">Voir la galerie</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Musique;
