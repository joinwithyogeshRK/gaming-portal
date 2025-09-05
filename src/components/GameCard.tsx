import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Trophy } from "lucide-react";

interface GameCardProps {
  game: {
    id: string;
    title: string;
    coverImage: string;
    genre: string;
    releaseDate?: string;
    playerCount: number;
    isNew?: boolean;
    isFeatured?: boolean;
    hasActiveTournament?: boolean;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="game-card group">
      <div className="relative overflow-hidden">
        <img 
          src={game.coverImage} 
          alt={game.title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/20 backdrop-blur-sm hover:bg-background/40"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
            {game.title}
          </h3>
          <div className="flex gap-1">
            {game.isNew && (
              <Badge variant="secondary" className="text-xs">New</Badge>
            )}
            {game.isFeatured && (
              <Badge variant="accent" className="text-xs">Featured</Badge>
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3">{game.genre}</p>
        
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{game.playerCount.toLocaleString()}</span>
          </div>
          
          {game.hasActiveTournament && (
            <div className="flex items-center gap-1 text-secondary">
              <Trophy className="h-4 w-4" />
              <span>Active Tournament</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button asChild className="flex-1 btn-primary">
            <Link to={`/games/${game.id}`}>View Details</Link>
          </Button>
          <Button className="flex-1 btn-accent">Play Now</Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;