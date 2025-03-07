
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AuthFormProps {
  onSuccess: (user: { email: string; name: string }) => void;
}

const AuthForm = ({ onSuccess }: AuthFormProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation de l'authentification
    setTimeout(() => {
      setIsLoading(false);
      
      // Simule une authentification réussie
      if (email && password) {
        toast({
          title: isLogin ? "Connexion réussie" : "Compte créé avec succès",
          description: isLogin 
            ? "Vous êtes maintenant connecté." 
            : "Votre compte a été créé et vous êtes maintenant connecté.",
        });
        
        onSuccess({ email, name: name || email.split("@")[0] });
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Veuillez remplir tous les champs requis.",
        });
      }
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full animate-fade-in">
      <h2 className="text-2xl font-serif font-bold text-church-DEFAULT mb-6 text-center">
        {isLogin ? "Connexion" : "Créer un compte"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-DEFAULT"
              placeholder="Votre nom"
            />
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-DEFAULT"
            placeholder="votre@email.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-DEFAULT"
            placeholder="••••••••"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-church-DEFAULT text-white py-2 px-4 rounded-md hover:bg-church-dark transition-colors font-medium flex justify-center items-center"
        >
          {isLoading ? (
            <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          ) : null}
          {isLogin ? "Se connecter" : "S'inscrire"}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-church-DEFAULT hover:text-church-gold text-sm"
        >
          {isLogin ? "Créer un compte" : "Se connecter"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
