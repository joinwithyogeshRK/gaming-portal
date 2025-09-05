import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StreamCardProps {
  stream: {
    id: string;
    title: string;
    thumbnailUrl: string;
    game: {
      id: string;
      title: string;
    };
    streamer: {
      id: string;
      username: string;
      avatarUrl: string;
    };
    viewerCount: number;
    isLive: boolean;
  };
}

const StreamCard = ({ stream }: StreamCardProps) => {
  return (
    <div className="game-card group">
      <div className="relative overflow-hidden">
        <img
          src={stream.thumbnailUrl}
          alt={stream.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {stream.isLive && (
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <Badge variant="accent" className="text-xs">LIVE</Badge>
          </div>
        )}
        
        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
          <Eye className="h-3 w-3" />
          <span className="text-xs font-medium">{stream.viewerCount.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold line-clamp-1 group-hover:text-accent transition-colors">
            {stream.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs">
            {stream.game.title}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={stream.streamer.avatarUrl} alt={stream.streamer.username} />
              <AvatarFallback>
                {stream.streamer.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{stream.streamer.username}</span>
          </div>
        </div>
        
        <Button asChild className="w-full btn-primary">
          <Link to={`/streams/${stream.id}`}>
            {stream.isLive ? "Watch Stream" : "View Channel"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default StreamCard;