import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Share, 
  MessageSquare, 
  Users, 
  Eye, 
  Bell, 
  Gift, 
  Send, 
  Smile, 
  ChevronDown
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data
const streamDetails = {
  id: "1",
  title: "Cyber Nexus - Ranked Matches with Pro Tips",
  description: "Join me for some high-level Cyber Nexus gameplay! I'll be sharing pro tips and strategies while climbing the ranked ladder. Feel free to ask questions in the chat!",
  thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  game: {
    id: "1",
    title: "Cyber Nexus",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  streamer: {
    id: "101",
    username: "ProGamer123",
    avatarUrl: "https://i.pravatar.cc/150?u=101",
    followers: 125000,
    description: "Professional Cyber Nexus player and content creator. 3x tournament champion and strategy guide author.",
  },
  viewerCount: 12500,
  likeCount: 3200,
  isLive: true,
  startedAt: "2023-06-01T14:30:00Z",
  tags: ["Competitive", "Ranked", "Tips & Tricks", "Pro Player"],
};

const chatMessages = [
  {
    id: "c1",
    user: {
      username: "GameFan42",
      avatarUrl: "https://i.pravatar.cc/150?u=c1",
    },
    message: "That was an amazing play!",
    timestamp: "2023-06-01T14:35:00Z",
  },
  {
    id: "c2",
    user: {
      username: "NexusNewbie",
      avatarUrl: "https://i.pravatar.cc/150?u=c2",
    },
    message: "Can you explain that combo again?",
    timestamp: "2023-06-01T14:36:30Z",
  },
  {
    id: "c3",
    user: {
      username: "StratMaster",
      avatarUrl: "https://i.pravatar.cc/150?u=c3",
    },
    message: "I think the northern route is better for that mission",
    timestamp: "2023-06-01T14:37:45Z",
  },
  {
    id: "c4",
    user: {
      username: "CyberFan99",
      avatarUrl: "https://i.pravatar.cc/150?u=c4",
    },
    message: "What's your favorite character build?",
    timestamp: "2023-06-01T14:38:20Z",
  },
  {
    id: "c5",
    user: {
      username: "GamerGirl2023",
      avatarUrl: "https://i.pravatar.cc/150?u=c5",
    },
    message: "Just subscribed! Love your content!",
    timestamp: "2023-06-01T14:39:10Z",
    isHighlighted: true,
  },
  {
    id: "c6",
    user: {
      username: "RookiePlayer",
      avatarUrl: "https://i.pravatar.cc/150?u=c6",
    },
    message: "How do you deal with the boss in level 5?",
    timestamp: "2023-06-01T14:40:05Z",
  },
  {
    id: "c7",
    user: {
      username: "TechGuru",
      avatarUrl: "https://i.pravatar.cc/150?u=c7",
    },
    message: "What graphics settings are you using?",
    timestamp: "2023-06-01T14:41:30Z",
  },
  {
    id: "c8",
    user: {
      username: "StreamSupporter",
      avatarUrl: "https://i.pravatar.cc/150?u=c8",
    },
    message: "Donated $20! Keep up the great work!",
    timestamp: "2023-06-01T14:42:15Z",
    isHighlighted: true,
  },
];

const recommendedStreams = [
  {
    id: "2",
    title: "Eternal Kingdoms - Building the Ultimate Empire",
    thumbnailUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    game: {
      id: "2",
      title: "Eternal Kingdoms",
    },
    streamer: {
      id: "102",
      username: "StrategyQueen",
      avatarUrl: "https://i.pravatar.cc/150?u=102",
    },
    viewerCount: 8700,
    isLive: true,
  },
  {
    id: "3",
    title: "Velocity Rush - Speed Run Challenge",
    thumbnailUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    game: {
      id: "3",
      title: "Velocity Rush",
    },
    streamer: {
      id: "103",
      username: "SpeedDemon",
      avatarUrl: "https://i.pravatar.cc/150?u=103",
    },
    viewerCount: 5300,
    isLive: true,
  },
];

const StreamDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState(chatMessages);
  
  useEffect(() => {
    document.title = `${streamDetails.title} | Gaming Portal`;
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatMessage.trim()) return;
    
    const newMessage = {
      id: `new-${Date.now()}`,
      user: {
        username: "You",
        avatarUrl: "https://i.pravatar.cc/150?u=you",
      },
      message: chatMessage,
      timestamp: new Date().toISOString(),
    };
    
    setMessages([...messages, newMessage]);
    setChatMessage("");
  };

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const toggleNotification = () => {
    setIsNotificationEnabled(!isNotificationEnabled);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content - Video and Info */}
          <div className="flex-1">
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
              {streamDetails.isLive ? (
                <iframe
                  src={streamDetails.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={streamDetails.title}
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-bold mb-2">Stream is offline</p>
                    <p className="text-muted-foreground">Check back later or watch past broadcasts</p>
                  </div>
                </div>
              )}
              
              {streamDetails.isLive && (
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-red-500/80 backdrop-blur-sm px-2 py-1 rounded-md">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span className="text-xs font-medium text-white">LIVE</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md">
                    <Eye className="h-3 w-3 text-white" />
                    <span className="text-xs font-medium text-white">{streamDetails.viewerCount.toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Stream Info */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{streamDetails.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Link 
                  to={`/games/${streamDetails.game.id}`}
                  className="text-sm text-accent hover:underline"
                >
                  {streamDetails.game.title}
                </Link>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{streamDetails.viewerCount.toLocaleString()} watching</span>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>{streamDetails.likeCount.toLocaleString()} likes</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {streamDetails.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <p className="text-muted-foreground">{streamDetails.description}</p>
            </div>
            
            {/* Streamer Info */}
            <div className="flex items-start gap-4 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src={streamDetails.streamer.avatarUrl} alt={streamDetails.streamer.username} />
                <AvatarFallback>
                  {streamDetails.streamer.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold">{streamDetails.streamer.username}</h3>
                  <span className="text-sm text-muted-foreground">
                    {streamDetails.streamer.followers.toLocaleString()} followers
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {streamDetails.streamer.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={isFollowing ? "secondary" : "accent"}
                    size="sm"
                    onClick={toggleFollow}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button 
                    variant={isNotificationEnabled ? "secondary" : "outline"}
                    size="sm"
                    onClick={toggleNotification}
                  >
                    <Bell className="h-4 w-4 mr-1" />
                    {isNotificationEnabled ? "Notifications On" : "Notify Me"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Gift className="h-4 w-4 mr-1" />
                    Donate
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Recommended Streams */}
            <div>
              <h2 className="text-xl font-bold mb-4">Recommended Streams</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedStreams.map((stream) => (
                  <Link 
                    key={stream.id}
                    to={`/streams/${stream.id}`}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={stream.thumbnailUrl} 
                        alt={stream.title} 
                        className="w-full h-32 object-cover transition-transform group-hover:scale-105"
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
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={stream.streamer.avatarUrl} alt={stream.streamer.username} />
                          <AvatarFallback>
                            {stream.streamer.username.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-sm font-medium line-clamp-1 group-hover:text-accent transition-colors">
                            {stream.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {stream.streamer.username}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Chat Sidebar */}
          <div className="lg:w-80 h-[600px] bg-muted/30 rounded-lg border border-border overflow-hidden flex flex-col">
            <div className="p-3 border-b border-border flex justify-between items-center">
              <h3 className="font-bold">Live Chat</h3>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            
            <ScrollArea className="flex-1 p-3">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex gap-2 ${msg.isHighlighted ? "p-2 rounded-md bg-secondary/10 border border-secondary/20" : ""}`}
                  >
                    <Avatar className="h-6 w-6 mt-0.5">
                      <AvatarImage src={msg.user.avatarUrl} alt={msg.user.username} />
                      <AvatarFallback>
                        {msg.user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{msg.user.username}</span>
                        <span className="text-xs text-muted-foreground">{formatDate(msg.timestamp)}</span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-3 border-t border-border">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    placeholder="Send a message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="pr-8"
                  />
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0 top-0 h-full"
                  >
                    <Smile className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamDetailsPage;