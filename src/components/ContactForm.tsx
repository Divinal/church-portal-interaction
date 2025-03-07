
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        nom: "",
        email: "",
        sujet: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-DEFAULT"
            placeholder="Votre nom complet"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-DEFAULT"
            placeholder="votre@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
          Sujet
        </label>
        <select
          id="sujet"
          name="sujet"
          required
          value={formData.sujet}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-DEFAULT"
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="question">Question générale</option>
          <option value="evenement">Information sur un événement</option>
          <option value="priere">Demande de prière</option>
          <option value="adhesion">Adhésion à l'église</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-DEFAULT"
          placeholder="Votre message..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="bg-church-DEFAULT text-white py-3 px-6 rounded-md hover:bg-church-dark transition-colors font-medium flex items-center justify-center"
      >
        {isLoading ? (
          <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
        ) : null}
        Envoyer le message
      </button>
    </form>
  );
};

export default ContactForm;
