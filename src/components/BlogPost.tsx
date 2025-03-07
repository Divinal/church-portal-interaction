
import { useState } from "react";
import { Calendar, MessageSquare, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  content: string;
  commentCount?: number;
  imageSrc?: string;
}

const BlogPost = ({
  title,
  date,
  author,
  content,
  commentCount = 0,
  imageSrc,
}: BlogPostProps) => {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Commentaire envoyé",
        description: "Votre commentaire a été publié avec succès.",
      });
      setComment("");
    }, 1000);
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
      {imageSrc && (
        <div className="h-64 md:h-80 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-church-DEFAULT">
          {title}
        </h1>
        
        <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6 gap-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-1" />
            <span>{commentCount} commentaires</span>
          </div>
        </div>
        
        <div className="prose max-w-none mb-10" dangerouslySetInnerHTML={{ __html: content }} />
        
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-xl font-serif font-bold mb-4 text-church-DEFAULT">
            Laissez un commentaire
          </h3>
          
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-church-DEFAULT"
              rows={4}
              placeholder="Votre commentaire..."
              required
            ></textarea>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-church-DEFAULT text-white py-2 px-6 rounded-md hover:bg-church-dark transition-colors font-medium flex items-center"
            >
              {isSubmitting ? (
                <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : null}
              Publier
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
