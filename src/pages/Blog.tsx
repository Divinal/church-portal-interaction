
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const Blog = () => {
  return (
    <PageLayout
      title="Blog"
      description="Actualités et réflexions de l'Église Évangélique du Congo"
      bannerImage="/images/banners/blog-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <article className="mb-5 pb-5 border-bottom">
                <h2 className="mb-3">Retraite spirituelle des jeunes : un moment de ressourcement</h2>
                <div className="d-flex mb-3 text-muted">
                  <div className="me-3"><i className="fas fa-user me-2"></i>Pasteur Michel</div>
                  <div className="me-3"><i className="fas fa-calendar me-2"></i>25 octobre 2023</div>
                  <div><i className="fas fa-tag me-2"></i>Jeunesse</div>
                </div>
                <img src="/images/images/news-2.jpg" className="img-fluid rounded mb-4" alt="Retraite des jeunes" />
                <p className="lead">La retraite spirituelle annuelle des jeunes de l'Église Évangélique du Congo s'est tenue du 15 au 17 octobre à Ngouedi, réunissant plus de 200 jeunes venus de tout le pays.</p>
                <p>Pendant trois jours, les participants ont pu approfondir leur foi à travers des enseignements, des ateliers, des moments de prière et de louange. Le thème de cette année, "Jeunes disciples, sel et lumière du monde", a permis d'explorer la responsabilité des jeunes chrétiens dans la société contemporaine.</p>
                <p>Les témoignages recueillis à la fin de la retraite montrent l'impact profond de ces moments sur la vie spirituelle des jeunes, avec plusieurs décisions d'engagement et de consécration.</p>
                <a href="#" className="btn btn-primary mt-3">Lire la suite</a>
              </article>
              
              <article className="mb-5 pb-5 border-bottom">
                <h2 className="mb-3">Formation des leaders : renforcer la vision de l'église</h2>
                <div className="d-flex mb-3 text-muted">
                  <div className="me-3"><i className="fas fa-user me-2"></i>Dr. Samuel</div>
                  <div className="me-3"><i className="fas fa-calendar me-2"></i>10 octobre 2023</div>
                  <div><i className="fas fa-tag me-2"></i>Formation</div>
                </div>
                <img src="/images/images/news-1.jpg" className="img-fluid rounded mb-4" alt="Formation des leaders" />
                <p className="lead">Un séminaire de formation pour les leaders des consistoires s'est tenu le week-end dernier à Brazzaville, avec pour objectif de renforcer la vision et les compétences des responsables d'église.</p>
                <p>Animé par des formateurs expérimentés, ce séminaire a abordé des thèmes essentiels comme le leadership serviteur, la gestion des conflits, la vision stratégique et la croissance d'église. Les participants ont particulièrement apprécié l'approche pratique et les outils concrets proposés pour améliorer leur service.</p>
                <a href="#" className="btn btn-primary mt-3">Lire la suite</a>
              </article>
              
              <article className="mb-5">
                <h2 className="mb-3">Projet social : inauguration du centre de santé communautaire</h2>
                <div className="d-flex mb-3 text-muted">
                  <div className="me-3"><i className="fas fa-user me-2"></i>Diacre Pierre</div>
                  <div className="me-3"><i className="fas fa-calendar me-2"></i>1 octobre 2023</div>
                  <div><i className="fas fa-tag me-2"></i>Action sociale</div>
                </div>
                <img src="/images/images/santeé.jpg" className="img-fluid rounded mb-4" alt="Centre de santé" />
                <p className="lead">L'Église Évangélique du Congo a inauguré un nouveau centre de santé communautaire dans le quartier de Bacongo à Brazzaville, renforçant ainsi son engagement social.</p>
                <p>Ce centre, fruit d'un partenariat avec des organisations chrétiennes internationales, offrira des soins de qualité à des prix abordables pour les populations défavorisées. Il comprend un service de consultation générale, une maternité, un laboratoire d'analyses et une pharmacie.</p>
                <p>Lors de la cérémonie d'inauguration, le Président de l'Église a souligné l'importance de cette initiative qui s'inscrit dans la mission holistique de l'Église, associant annonce de l'Évangile et service du prochain.</p>
                <a href="#" className="btn btn-primary mt-3">Lire la suite</a>
              </article>
              
              <nav aria-label="Pagination du blog">
                <ul className="pagination justify-content-center mt-5">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Précédent</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Suivant</a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  Catégories
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Actualités
                    <span className="badge bg-primary rounded-pill">12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Enseignements
                    <span className="badge bg-primary rounded-pill">8</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Témoignages
                    <span className="badge bg-primary rounded-pill">5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Actions sociales
                    <span className="badge bg-primary rounded-pill">7</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Événements
                    <span className="badge bg-primary rounded-pill">10</span>
                  </li>
                </ul>
              </div>
              
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  Articles récents
                </div>
                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Concert de louange</h6>
                      <small>3 jours</small>
                    </div>
                    <small className="text-muted">Un moment d'adoration inoubliable</small>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Mission à l'intérieur du pays</h6>
                      <small>1 semaine</small>
                    </div>
                    <small className="text-muted">Témoignage d'une équipe missionnaire</small>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Étude biblique : les Psaumes</h6>
                      <small>2 semaines</small>
                    </div>
                    <small className="text-muted">Découvrir la richesse des Psaumes</small>
                  </a>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header bg-primary text-white">
                  Rechercher
                </div>
                <div className="card-body">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Mot-clé..." />
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
