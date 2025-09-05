import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Heart, Share, Calendar1 as Calendar, Users, Trophy, Star, Info, MessageSquare, Image as ImageIcon, Video } from












"lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import TournamentCard from "@/components/TournamentCard";
import StreamCard from "@/components/StreamCard";

// Mock data
const gameDetails = {
  id: "1",
  title: "Cyber Nexus",
  description: "Enter a dystopian future where cybernetic enhancements blur the line between human and machine. Battle corporate overlords in this action-packed RPG with deep character customization and a branching narrative that responds to your choices.",
  longDescription: "Cyber Nexus is set in the sprawling metropolis of New Meridian in the year 2077, where powerful corporations control every aspect of daily life. As a mercenary with experimental cybernetic implants, you navigate the dangerous streets, taking on contracts and uncovering a conspiracy that threatens to change the balance of power forever.\n\nThe game features a deep character progression system, allowing you to enhance your character with various cybernetic implants that grant unique abilities. Combat is fast-paced and tactical, combining gunplay, melee, and special abilities derived from your implants.\n\nYour choices matter in the world of Cyber Nexus. Form alliances, betray factions, or chart your own path as you navigate the complex political landscape of New Meridian. Every decision has consequences that ripple throughout the game world.",
  coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  backgroundImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  genre: "Action RPG",
  releaseDate: "2023-05-15",
  developer: "Quantum Studios",
  publisher: "Digital Horizon Games",
  platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
  tags: ["Cyberpunk", "RPG", "Open World", "Sci-Fi", "Action"],
  rating: 4.8,
  reviewCount: 1250,
  playerCount: 1250000,
  isNew: true,
  isFeatured: true,
  hasActiveTournament: true,
  systemRequirements: {
    minimum: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-4670K or AMD Ryzen 3 3300X",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 580",
      storage: "70 GB available space"
    },
    recommended: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2070 or AMD Radeon RX 5700 XT",
      storage: "70 GB SSD"
    }
  },
  screenshots: [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],

  videos: [
  {
    id: "v1",
    title: "Official Trailer",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: "v2",
    title: "Gameplay Walkthrough",
    thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "#"
  }]

};

const relatedTournaments = [
{
  id: "1",
  title: "Cyber Nexus Championship",
  game: {
    id: "1",
    title: "Cyber Nexus",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  startDate: "2023-06-15",
  endDate: "2023-06-18",
  registrationEndDate: "2023-06-10",
  prizePool: "$50,000",
  currentParticipants: 120,
  maxParticipants: 128,
  status: "ongoing" as const
},
{
  id: "2",
  title: "Cyber Nexus Weekly Cup",
  game: {
    id: "1",
    title: "Cyber Nexus",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  startDate: "2023-06-25",
  endDate: "2023-06-25",
  registrationEndDate: "2023-06-24",
  prizePool: "$5,000",
  currentParticipants: 45,
  maxParticipants: 64,
  status: "upcoming" as const
}];


const relatedStreams = [
{
  id: "1",
  title: "Cyber Nexus - Ranked Matches with Pro Tips",
  thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "1",
    title: "Cyber Nexus"
  },
  streamer: {
    id: "101",
    username: "ProGamer123",
    avatarUrl: "https://i.pravatar.cc/150?u=101"
  },
  viewerCount: 12500,
  isLive: true
},
{
  id: "2",
  title: "Cyber Nexus - New DLC Exploration",
  thumbnailUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "1",
    title: "Cyber Nexus"
  },
  streamer: {
    id: "102",
    username: "GameExplorer",
    avatarUrl: "https://i.pravatar.cc/150?u=102"
  },
  viewerCount: 8700,
  isLive: true
}];


const GameDetailsPage = () => {
  const { id } = useParams<{id: string;}>();
  const [selectedScreenshot, setSelectedScreenshot] = useState(gameDetails.screenshots[0]);

  useEffect(() => {
    document.title = `${gameDetails.title} | Gaming Portal`;

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[50vh] min-h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${gameDetails.backgroundImage})` }}>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-end">
              <img
                src={gameDetails.coverImage}
                alt={gameDetails.title}
                className="w-32 h-40 object-cover rounded-md shadow-lg border border-border" />

              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {gameDetails.isNew && <Badge variant="secondary">New Release</Badge>}
                  {gameDetails.hasActiveTournament && <Badge variant="accent">Active Tournament</Badge>}
                </div>
                <h1 className="text-4xl font-bold">{gameDetails.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{gameDetails.genre}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(gameDetails.releaseDate).getFullYear()}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{gameDetails.playerCount.toLocaleString()} players</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>{gameDetails.rating} ({gameDetails.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="flex-1">
            <div className="flex gap-4 mb-6">
              <Button className="flex-1 btn-accent">
                <Play className="mr-2 h-5 w-5" /> Play Now
              </Button>
              <Button variant="outline" className="flex-1">
                <Download className="mr-2 h-5 w-5" /> Download
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share className="h-5 w-5" />
              </Button>
            </div>
            
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
                <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
                <TabsTrigger value="streams">Live Streams</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About {gameDetails.title}</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {gameDetails.longDescription}
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 rounded-lg p-4 border border-border">
                        <h3 className="font-bold mb-2">Minimum</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex">
                            <span className="font-medium w-24">OS:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.minimum.os}</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium w-24">Processor:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.minimum.processor}</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium w-24">Memory:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.minimum.memory}</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium w-24">Graphics:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.minimum.graphics}</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium w-24">Storage:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.minimum.storage}</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-4 border border-border">
                        <h3 className="font-bold mb-2">Recommended</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex">
                            <span className="font-medium w-24">OS:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.recommended.os}</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium w-24">Processor:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.recommended.processor}</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium w-24">Memory:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.recommended.memory}</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium w-24">Graphics:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.recommended.graphics}</span>
                          </li>
                          <li className="flex">
                            <span className="font-medium w-24">Storage:</span>
                            <span className="text-muted-foreground">{gameDetails.systemRequirements.recommended.storage}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="media">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Screenshots & Videos</h2>
                    
                    <div className="mb-6">
                      <img
                        src={selectedScreenshot}
                        alt={gameDetails.title}
                        className="w-full h-[400px] object-cover rounded-lg" />

                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {gameDetails.screenshots.map((screenshot, index) =>
                      <div
                        key={index}
                        className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                        selectedScreenshot === screenshot ? "border-accent" : "border-transparent"}`
                        }
                        onClick={() => setSelectedScreenshot(screenshot)}>

                          <img
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-24 object-cover" />

                        </div>
                      )}
                      
                      {gameDetails.videos.map((video) =>
                      <div
                        key={video.id}
                        className="cursor-pointer rounded-md overflow-hidden border-2 border-transparent relative group">

                          <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-24 object-cover" />

                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-1">
                            <p className="text-xs text-white truncate">{video.title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tournaments">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Active Tournaments</h2>
                  
                  {relatedTournaments.length > 0 ?
                  <div className="grid md:grid-cols-2 gap-6">
                      {relatedTournaments.map((tournament) =>
                    <TournamentCard key={tournament.id} tournament={tournament} />
                    )}
                    </div> :

                  <div className="text-center py-12 bg-muted/30 rounded-lg border border-border">
                      <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-xl font-bold mb-2">No Active Tournaments</h3>
                      <p className="text-muted-foreground mb-4">
                        There are currently no tournaments for this game.
                      </p>
                      <Button asChild variant="outline">
                        <Link to="/tournaments">Browse All Tournaments</Link>
                      </Button>
                    </div>
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="streams">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Live Streams</h2>
                  
                  {relatedStreams.length > 0 ?
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {relatedStreams.map((stream) =>
                    <StreamCard key={stream.id} stream={stream} />
                    )}
                    </div> :

                  <div className="text-center py-12 bg-muted/30 rounded-lg border border-border">
                      <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-xl font-bold mb-2">No Live Streams</h3>
                      <p className="text-muted-foreground mb-4">
                        There are currently no live streams for this game.
                      </p>
                      <Button asChild variant="outline">
                        <Link to="/streams">Browse All Streams</Link>
                      </Button>
                    </div>
                  }
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Game Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Developer</span>
                  <span>{gameDetails.developer}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Publisher</span>
                  <span>{gameDetails.publisher}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Release Date</span>
                  <span>{new Date(gameDetails.releaseDate).toLocaleDateString()}</span>
                </li>
                <li>
                  <span className="text-muted-foreground block mb-1">Platforms</span>
                  <div className="flex flex-wrap gap-2">
                    {gameDetails.platforms.map((platform) =>
                    <Badge key={platform} variant="outline">{platform}</Badge>
                    )}
                  </div>
                </li>
                <li>
                  <span className="text-muted-foreground block mb-1">Tags</span>
                  <div className="flex flex-wrap gap-2">
                    {gameDetails.tags.map((tag) =>
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    )}
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Player Rating</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-3xl font-bold">{gameDetails.rating}</div>
                <div className="flex-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) =>
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                      i < Math.floor(gameDetails.rating) ?
                      "text-yellow-500 fill-yellow-500" :
                      i < gameDetails.rating ?
                      "text-yellow-500 fill-yellow-500 opacity-50" :
                      "text-muted-foreground"}`
                      } />

                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {gameDetails.reviewCount.toLocaleString()} reviews
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>5 stars</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>4 stars</span>
                    <span>20%</span>
                  </div>
                  <Progress value={20} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>3 stars</span>
                    <span>3%</span>
                  </div>
                  <Progress value={3} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>2 stars</span>
                    <span>1%</span>
                  </div>
                  <Progress value={1} className="h-1" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>1 star</span>
                    <span>1%</span>
                  </div>
                  <Progress value={1} className="h-1" />
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-accent" />
                <h3 className="font-bold">Community</h3>
              </div>
              <Button asChild variant="outline" className="w-full mb-2">
                <Link to="/community">Join Discussion</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/community">Find Players</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default GameDetailsPage;