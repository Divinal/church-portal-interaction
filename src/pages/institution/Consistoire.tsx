
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const Consistoire = () => {
  return (
    <PageLayout
      title="Consistoire"
      description="Les régions ecclésiastiques de l'Église Évangélique du Congo"
      bannerImage="/images/banners/consistoire-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Les Consistoires</h2>
              <p className="lead mb-4">Les consistoires sont les divisions régionales de l'Église Évangélique du Congo, regroupant plusieurs paroisses dans une zone géographique définie.</p>
              
              <p className="mb-4">Chaque consistoire est dirigé par un bureau consistorial qui veille à la coordination des activités des paroisses, à l'application des décisions synodales et à la communion fraternelle entre les communautés locales.</p>
              
              <h3 className="mt-5 mb-3">Organisation des Consistoires</h3>
              <ul className="mb-5">
                <li>Le <strong>Président de Consistoire</strong> - Supervise l'ensemble du consistoire</li>
                <li>Le <strong>Secrétaire de Consistoire</strong> - Coordonne l'administration</li>
                <li>Le <strong>Trésorier de Consistoire</strong> - Gère les finances</li>
                <li>Les <strong>Représentants Départementaux</strong> - Supervisent les activités de leur département</li>
                <li>Les <strong>Pasteurs des paroisses</strong> - Membres de droit du consistoire</li>
              </ul>
              
              <h3 className="mb-3">Répartition géographique</h3>
              <p>Notre église compte actuellement 12 consistoires répartis comme suit:</p>
              <ul>
                <li>Consistoire de Brazzaville Nord (8 paroisses)</li>
                <li>Consistoire de Brazzaville Sud (7 paroisses)</li>
                <li>Consistoire de Pointe-Noire (6 paroisses)</li>
                <li>Consistoire du Kouilou (5 paroisses)</li>
                <li>Consistoire du Niari (4 paroisses)</li>
                <li>Consistoire de la Bouenza (5 paroisses)</li>
                <li>Consistoire du Pool (6 paroisses)</li>
                <li>Consistoire des Plateaux (4 paroisses)</li>
                <li>Consistoire de la Cuvette (5 paroisses)</li>
                <li>Consistoire de la Sangha (3 paroisses)</li>
                <li>Consistoire de la Likouala (4 paroisses)</li>
                <li>Consistoire de la Diaspora (paroisses à l'étranger)</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Réunions consistoriales</h4>
                  <p className="card-text">Les consistoires se réunissent trimestriellement pour évaluer et planifier leurs activités.</p>
                  <a href="#" className="btn btn-primary">Calendrier des réunions</a>
                </div>
              </div>
              
              <div className="card">
                <img src="/images/images/esgae.jpg" className="card-img-top" alt="Réunion de consistoire" />
                <div className="card-body">
                  <h5 className="card-title">Trouver une paroisse</h5>
                  <p className="card-text">Consultez notre répertoire pour trouver une paroisse près de chez vous.</p>
                  <a href="#" className="btn btn-outline-primary">Rechercher</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Consistoire;
