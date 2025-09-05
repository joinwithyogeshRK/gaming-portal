import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar1 as Calendar } from "lucide-react";

interface NewsCardProps {
  news: {
    id: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    publishedAt: string;
    readTime: number;
  };
}

const NewsCard = ({ news }: NewsCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div className="game-card group">
      <div className="relative overflow-hidden">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />

        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="text-xs">
            {news.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(news.publishedAt)}</span>
          </div>
          <span>•</span>
          <span>{news.readTime} min read</span>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
          {news.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {news.excerpt}
        </p>
        
        <Link
          to={`/news/${news.id}`}
          className="text-accent hover:text-accent-600 font-medium text-sm inline-flex items-center">

          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7" />

          </svg>
        </Link>
      </div>
    </div>);

};

export default NewsCard;