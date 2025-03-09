
import React from 'react';
import PageLayout from '@/components/PageLayout';
import CommentForm from '@/components/CommentForm';

const FAQ = () => {
  return (
    <PageLayout
      title="Foire Aux Questions"
      description="Réponses aux questions fréquemment posées sur l'Église Évangélique du Congo"
      bannerImage="/images/banners/synode-banner.jpg"
    >
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Questions fréquemment posées</h2>
              
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3 border">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Quelles sont les croyances fondamentales de l'Église Évangélique du Congo?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>L'Église Évangélique du Congo adhère aux croyances fondamentales du christianisme évangélique, notamment:</p>
                      <ul>
                        <li>L'autorité suprême de la Bible comme Parole de Dieu</li>
                        <li>Le salut par la grâce de Dieu, par la foi en Jésus-Christ</li>
                        <li>La nécessité de la conversion personnelle et d'une vie transformée</li>
                        <li>L'importance de partager l'Évangile (évangélisation)</li>
                        <li>La Trinité: Père, Fils et Saint-Esprit</li>
                        <li>Le retour de Jésus-Christ</li>
                      </ul>
                      <p>Notre confession de foi complète est disponible dans la section "À propos" de notre site.</p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3 border">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Comment puis-je rejoindre l'Église Évangélique du Congo?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>Pour rejoindre notre église, vous pouvez:</p>
                      <ol>
                        <li>Visiter l'une de nos paroisses lors d'un culte dominical (généralement à 9h)</li>
                        <li>Vous présenter aux responsables d'accueil qui vous orienteront</li>
                        <li>Participer au cours d'instruction religieuse pour les nouveaux membres</li>
                        <li>Après cette période d'instruction, vous pourrez devenir membre par baptême (si vous n'êtes pas déjà baptisé) ou par transfert de votre église précédente</li>
                      </ol>
                      <p>Nous vous invitons à contacter la paroisse la plus proche de chez vous pour plus d'informations sur les horaires spécifiques et le processus d'intégration.</p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3 border">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Quels sont les horaires des cultes?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>Les horaires habituels des cultes dans nos paroisses sont:</p>
                      <ul>
                        <li><strong>Culte dominical:</strong> 9h00 - 11h30</li>
                        <li><strong>École du dimanche:</strong> 8h00 - 9h00 (pour les enfants)</li>
                        <li><strong>Étude biblique:</strong> Mercredi 18h00 - 19h30</li>
                        <li><strong>Réunion de prière:</strong> Vendredi 18h00 - 19h30</li>
                        <li><strong>Répétition des chorales:</strong> Samedi (horaires variables selon les chorales)</li>
                      </ul>
                      <p>Ces horaires peuvent varier légèrement selon les paroisses. Nous vous recommandons de contacter directement la paroisse que vous souhaitez visiter pour confirmer les horaires exacts.</p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3 border">
                  <h3 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Comment puis-je demander la visite d'un pasteur?
                    </button>
                  </h3>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>Pour demander la visite d'un pasteur, vous pouvez:</p>
                      <ol>
                        <li>Contacter directement le secrétariat de votre paroisse locale</li>
                        <li>Remplir le formulaire de contact sur notre site web en précisant votre demande</li>
                        <li>Demander à un membre de l'église de transmettre votre requête aux responsables</li>
                      </ol>
                      <p>Nos pasteurs sont disponibles pour les visites pastorales, prières pour les malades, conseils spirituels, et autres besoins pastoraux. Dans les situations urgentes, vous pouvez appeler le numéro d'urgence pastorale: +242 XX XXX XXXX.</p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3 border">
                  <h3 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Comment puis-je soutenir financièrement l'église?
                    </button>
                  </h3>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>Vous pouvez soutenir financièrement l'église de plusieurs façons:</p>
                      <ul>
                        <li><strong>Dîmes et offrandes:</strong> Lors des cultes ou en les déposant au secrétariat de la paroisse</li>
                        <li><strong>Virement bancaire:</strong> Sur le compte de l'église (détails disponibles auprès du trésorier)</li>
                        <li><strong>Mobile Money:</strong> Via les numéros dédiés aux dons (disponibles auprès de votre paroisse)</li>
                        <li><strong>Dons spécifiques:</strong> Pour des projets particuliers (construction, mission, aide humanitaire, etc.)</li>
                      </ul>
                      <p>Toutes les contributions sont utilisées avec transparence pour soutenir le ministère de l'église, les œuvres sociales et les projets missionnaires. Des rapports financiers réguliers sont présentés aux membres.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <h3 className="mb-4">Vous avez d'autres questions?</h3>
                <p>Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter directement. Notre équipe sera heureuse de vous répondre.</p>
                <a href="/contact" className="btn btn-primary mt-2">Contactez-nous</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="mb-5">
                <CommentForm />
              </div>
              
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  Documentation
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-file-pdf text-danger me-2"></i>
                    <a href="#" className="text-decoration-none">Confession de foi</a>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-file-pdf text-danger me-2"></i>
                    <a href="#" className="text-decoration-none">Constitution de l'Église</a>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-file-pdf text-danger me-2"></i>
                    <a href="#" className="text-decoration-none">Guide du nouveau membre</a>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-file-pdf text-danger me-2"></i>
                    <a href="#" className="text-decoration-none">Calendrier des activités</a>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Support pastoral</h5>
                  <p className="card-text">Besoin de conseils, de prière ou d'accompagnement spirituel? Nos pasteurs sont à votre disposition.</p>
                  <a href="/contact" className="btn btn-outline-primary">Prendre rendez-vous</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
