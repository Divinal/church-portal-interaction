
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const FemmesFamille = () => {
  return (
    <PageLayout
      title="Département Femmes et Famille"
      description="Soutenir les femmes et renforcer les familles"
      bannerImage="/images/banners/femmes-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Le département Femmes et Famille</h2>
              <p className="lead mb-4">Le département Femmes et Famille de l'Église Évangélique du Congo œuvre pour l'épanouissement spirituel des femmes et le renforcement des familles selon les principes bibliques.</p>
              
              <p className="mb-4">Nous croyons que des femmes épanouies et des familles solides constituent le fondement d'une église forte et d'une société saine. Notre département travaille à équiper les femmes pour leur rôle dans l'église, la famille et la société.</p>
              
              <h3 className="mt-5 mb-3">Nos activités</h3>
              <ul className="mb-5">
                <li>Retraites spirituelles pour femmes</li>
                <li>Séminaires sur le mariage et l'éducation des enfants</li>
                <li>Formations en leadership féminin</li>
                <li>Groupes de prière et d'étude biblique</li>
                <li>Projets d'entraide et de soutien aux veuves et orphelins</li>
                <li>Programmes d'alphabétisation et formation professionnelle</li>
              </ul>
              
              <h3 className="mb-3">Nos programmes</h3>
              <p>Tout au long de l'année, nous organisons différents programmes:</p>
              <ul>
                <li>Programme "Femme de valeur" - Formation en leadership</li>
                <li>Programme "Foyer chrétien" - Pour les couples et familles</li>
                <li>Programme "Mères priantes" - Groupes de prière pour mères</li>
                <li>Programme "Veuves et orphelins" - Soutien aux personnes vulnérables</li>
              </ul>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Prochain événement</h4>
                  <p className="card-text">Retraite des femmes du 10 au 12 novembre 2023 sur le thème "Femme selon le cœur de Dieu".</p>
                  <a href="#" className="btn btn-primary">S'inscrire</a>
                </div>
              </div>
              
              <div className="card">
                <img src="/images/images/retraite.jpg" className="card-img-top" alt="Retraite des femmes" />
                <div className="card-body">
                  <h5 className="card-title">Témoignages</h5>
                  <p className="card-text">Découvrez les témoignages des femmes dont la vie a été transformée grâce à nos programmes.</p>
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

export default FemmesFamille;
