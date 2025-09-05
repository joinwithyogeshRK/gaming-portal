import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar1 as Calendar, Trophy, Users, Clock, Share, Bell, ChevronRight, User, Flag, Award, Gamepad, Video } from












"lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from
"@/components/ui/table";

// Mock data
const tournamentDetails = {
  id: "1",
  title: "Cyber Nexus Championship",
  description: "The ultimate Cyber Nexus tournament featuring the best players from around the world competing for glory and a massive prize pool.",
  longDescription: "The Cyber Nexus Championship is the premier competitive event for Cyber Nexus players. This tournament brings together elite players from across the globe to compete in a high-stakes battle for glory, recognition, and substantial cash prizes.\n\nThe tournament features a group stage followed by a single-elimination bracket. Players will need to showcase their skills, strategic thinking, and adaptability to overcome their opponents and claim the championship title.\n\nWith professional casting, live audience, and streaming across multiple platforms, this is the most prestigious Cyber Nexus event of the year that you don't want to miss!",
  game: {
    id: "1",
    title: "Cyber Nexus",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  backgroundImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  startDate: "2023-06-15",
  endDate: "2023-06-18",
  registrationStartDate: "2023-05-15",
  registrationEndDate: "2023-06-10",
  prizePool: "$50,000",
  prizeDistribution: [
  { position: "1st", prize: "$25,000" },
  { position: "2nd", prize: "$10,000" },
  { position: "3rd-4th", prize: "$5,000" },
  { position: "5th-8th", prize: "$1,250" }],

  currentParticipants: 120,
  maxParticipants: 128,
  status: "ongoing",
  format: "Group Stage + Single Elimination",
  platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
  region: "Global",
  organizer: {
    name: "Quantum Esports",
    logo: "https://i.pravatar.cc/150?u=quantum"
  },
  rules: [
  "All participants must be at least 16 years old",
  "Players must own a legitimate copy of Cyber Nexus",
  "All matches will be played on the latest game version",
  "Players must be available during the scheduled match times",
  "Cheating or exploiting will result in immediate disqualification",
  "Tournament admins have the final say in all disputes"],

  schedule: [
  { stage: "Group Stage", date: "2023-06-15", time: "10:00 - 18:00 UTC" },
  { stage: "Quarter-finals", date: "2023-06-16", time: "12:00 - 16:00 UTC" },
  { stage: "Semi-finals", date: "2023-06-17", time: "14:00 - 16:00 UTC" },
  { stage: "Grand Final", date: "2023-06-18", time: "15:00 - 18:00 UTC" }],

  streams: [
  { platform: "Twitch", url: "https://twitch.tv/cybernexus" },
  { platform: "YouTube", url: "https://youtube.com/cybernexus" }],

  topParticipants: [
  {
    id: "p1",
    username: "NexusChampion",
    avatarUrl: "https://i.pravatar.cc/150?u=p1",
    country: "United States",
    rank: 1
  },
  {
    id: "p2",
    username: "CyberKing",
    avatarUrl: "https://i.pravatar.cc/150?u=p2",
    country: "South Korea",
    rank: 2
  },
  {
    id: "p3",
    username: "QuantumPlayer",
    avatarUrl: "https://i.pravatar.cc/150?u=p3",
    country: "Germany",
    rank: 3
  },
  {
    id: "p4",
    username: "NeonSlayer",
    avatarUrl: "https://i.pravatar.cc/150?u=p4",
    country: "Japan",
    rank: 4
  }]

};

const TournamentDetailsPage = () => {
  const { id } = useParams<{id: string;}>();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  useEffect(() => {
    document.title = `${tournamentDetails.title} | Gaming Portal`;

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  const registrationProgress = Math.min(
    100,
    Math.round(
      tournamentDetails.currentParticipants / tournamentDetails.maxParticipants * 100
    )
  );

  const isRegistrationOpen =
  new Date() >= new Date(tournamentDetails.registrationStartDate) &&
  new Date() <= new Date(tournamentDetails.registrationEndDate);

  const getStatusBadge = () => {
    switch (tournamentDetails.status) {
      case "upcoming":
        return <Badge variant="secondary">Upcoming</Badge>;
      case "ongoing":
        return <Badge variant="accent">Ongoing</Badge>;
      case "completed":
        return <Badge>Completed</Badge>;
      default:
        return null;
    }
  };

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleUnregister = () => {
    setIsRegistered(false);
  };

  const toggleNotification = () => {
    setIsNotificationEnabled(!isNotificationEnabled);
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[50vh] min-h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${tournamentDetails.backgroundImage})` }}>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-end">
              <img
                src={tournamentDetails.game.coverImage}
                alt={tournamentDetails.game.title}
                className="w-32 h-40 object-cover rounded-md shadow-lg border border-border" />

              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {getStatusBadge()}
                  <Badge variant="outline">{tournamentDetails.format}</Badge>
                  <Badge variant="outline">{tournamentDetails.region}</Badge>
                </div>
                <h1 className="text-4xl font-bold">{tournamentDetails.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <Link to={`/games/${tournamentDetails.game.id}`} className="hover:text-accent">
                    {tournamentDetails.game.title}
                  </Link>
                  <span>•</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(tournamentDetails.startDate)}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>{tournamentDetails.prizePool}</span>
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
            <div className="flex flex-wrap gap-4 mb-6">
              {tournamentDetails.status === "upcoming" && isRegistrationOpen ?
              isRegistered ?
              <Button variant="outline" className="flex-1" onClick={handleUnregister}>
                    Unregister
                  </Button> :

              <Button className="flex-1 btn-accent" onClick={handleRegister}>
                    Register Now
                  </Button> :

              tournamentDetails.status === "ongoing" ?
              <Button className="flex-1 btn-secondary">
                  <Video className="mr-2 h-5 w-5" /> Watch Live
                </Button> :

              <Button className="flex-1 btn-primary" disabled={tournamentDetails.status === "completed"}>
                  {tournamentDetails.status === "completed" ? "Tournament Ended" : "Registration Closed"}
                </Button>
              }
              
              <Button
                variant={isNotificationEnabled ? "secondary" : "outline"}
                className="flex-1"
                onClick={toggleNotification}>

                <Bell className="mr-2 h-5 w-5" /> 
                {isNotificationEnabled ? "Notifications On" : "Get Notifications"}
              </Button>
              
              <Button variant="ghost" size="icon">
                <Share className="h-5 w-5" />
              </Button>
            </div>
            
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="participants">Participants</TabsTrigger>
                <TabsTrigger value="rules">Rules</TabsTrigger>
                <TabsTrigger value="prizes">Prizes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About This Tournament</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {tournamentDetails.longDescription}
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Tournament Details</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-medium">Tournament Dates</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(tournamentDetails.startDate)} - {formatDate(tournamentDetails.endDate)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-medium">Registration Period</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(tournamentDetails.registrationStartDate)} - {formatDate(tournamentDetails.registrationEndDate)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Trophy className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-medium">Prize Pool</h3>
                            <p className="text-sm text-muted-foreground">
                              {tournamentDetails.prizePool}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Gamepad className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-medium">Platforms</h3>
                            <p className="text-sm text-muted-foreground">
                              {tournamentDetails.platforms.join(", ")}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Flag className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-medium">Region</h3>
                            <p className="text-sm text-muted-foreground">
                              {tournamentDetails.region}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-medium">Format</h3>
                            <p className="text-sm text-muted-foreground">
                              {tournamentDetails.format}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Watch Live</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {tournamentDetails.streams.map((stream, index) =>
                      <a
                        key={index}
                        href={stream.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 transition-colors">

                          <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center">
                            <Video className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-medium">{stream.platform}</h3>
                            <p className="text-sm text-muted-foreground">Watch on {stream.platform}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 ml-auto" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="schedule">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Tournament Schedule</h2>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Stage</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tournamentDetails.schedule.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.stage}</TableCell>
                            <TableCell>{formatDate(item.date)}</TableCell>
                            <TableCell>{item.time}</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground">
                      All times are shown in UTC. Please convert to your local timezone.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="participants">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Participants</h2>
                    <div className="text-sm text-muted-foreground">
                      {tournamentDetails.currentParticipants}/{tournamentDetails.maxParticipants} Registered
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Progress value={registrationProgress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Registration {registrationProgress}% Complete</span>
                      <span>
                        {tournamentDetails.maxParticipants - tournamentDetails.currentParticipants} spots remaining
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Top Participants</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {tournamentDetails.topParticipants.map((participant) =>
                      <div
                        key={participant.id}
                        className="bg-muted/30 rounded-lg p-4 border border-border flex flex-col items-center text-center">

                          <Avatar className="h-16 w-16 mb-3">
                            <AvatarImage src={participant.avatarUrl} alt={participant.username} />
                            <AvatarFallback>
                              {participant.username.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{participant.username}</div>
                          <div className="text-sm text-muted-foreground">{participant.country}</div>
                          <div className="mt-2">
                            <Badge variant="secondary">Rank #{participant.rank}</Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button variant="outline">View All Participants</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="rules">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Tournament Rules</h2>
                  
                  <ul className="space-y-2">
                    {tournamentDetails.rules.map((rule, index) =>
                    <li key={index} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>{rule}</span>
                      </li>
                    )}
                  </ul>
                  
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <p className="text-sm">
                      By registering for this tournament, you agree to abide by all the rules listed above. 
                      Failure to comply may result in disqualification without refund.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="prizes">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Prize Distribution</h2>
                  
                  <div className="bg-muted/30 rounded-lg p-6 border border-border text-center mb-6">
                    <h3 className="text-lg font-medium mb-1">Total Prize Pool</h3>
                    <div className="text-4xl font-bold text-accent">{tournamentDetails.prizePool}</div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {tournamentDetails.prizeDistribution.map((prize, index) =>
                    <div
                      key={index}
                      className="bg-muted/30 rounded-lg p-4 border border-border flex flex-col items-center text-center">

                        <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center mb-3">
                          <Award className="h-6 w-6 text-accent" />
                        </div>
                        <div className="font-medium">{prize.position}</div>
                        <div className="text-xl font-bold mt-1">{prize.prize}</div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Registration Status</h3>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Participants</span>
                    <span>{tournamentDetails.currentParticipants}/{tournamentDetails.maxParticipants}</span>
                  </div>
                  <Progress value={registrationProgress} className="h-2" />
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  {isRegistrationOpen ?
                  <span>Registration ends {formatDate(tournamentDetails.registrationEndDate)}</span> :
                  new Date() < new Date(tournamentDetails.registrationStartDate) ?
                  <span>Registration starts {formatDate(tournamentDetails.registrationStartDate)}</span> :

                  <span>Registration closed</span>
                  }
                </div>
                
                {tournamentDetails.status === "upcoming" && isRegistrationOpen && !isRegistered &&
                <Button className="w-full btn-accent" onClick={handleRegister}>
                    Register Now
                  </Button>
                }
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Organizer</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={tournamentDetails.organizer.logo}
                    alt={tournamentDetails.organizer.name}
                    className="w-full h-full object-cover" />

                </div>
                <div>
                  <div className="font-medium">{tournamentDetails.organizer.name}</div>
                  <Button variant="link" className="p-0 h-auto text-sm text-accent">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Game Information</h3>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={tournamentDetails.game.coverImage}
                  alt={tournamentDetails.game.title}
                  className="w-16 h-20 object-cover rounded-md" />

                <div>
                  <div className="font-medium">{tournamentDetails.game.title}</div>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm text-accent"
                    asChild>

                    <Link to={`/games/${tournamentDetails.game.id}`}>
                      View Game Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Share Tournament</h3>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default TournamentDetailsPage;