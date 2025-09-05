import { useState, useEffect } from "react";
import TournamentCard from "@/components/TournamentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ListFilter as Filter, ChevronDown, X } from




"lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger } from
"@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

// Mock data
const allTournaments = [
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
  title: "Eternal Kingdoms World Cup",
  game: {
    id: "2",
    title: "Eternal Kingdoms",
    coverImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  startDate: "2023-07-01",
  endDate: "2023-07-10",
  registrationEndDate: "2023-06-25",
  prizePool: "$100,000",
  currentParticipants: 85,
  maxParticipants: 256,
  status: "upcoming" as const
},
{
  id: "3",
  title: "Velocity Rush Grand Prix",
  game: {
    id: "3",
    title: "Velocity Rush",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  startDate: "2023-05-20",
  endDate: "2023-05-22",
  registrationEndDate: "2023-05-15",
  prizePool: "$25,000",
  currentParticipants: 64,
  maxParticipants: 64,
  status: "completed" as const
},
{
  id: "4",
  title: "Mystic Legends Arena",
  game: {
    id: "4",
    title: "Mystic Legends",
    coverImage: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  startDate: "2023-06-25",
  endDate: "2023-06-30",
  registrationEndDate: "2023-06-20",
  prizePool: "$75,000",
  currentParticipants: 45,
  maxParticipants: 64,
  status: "upcoming" as const
},
{
  id: "5",
  title: "Shadow Tactics Invitational",
  game: {
    id: "5",
    title: "Shadow Tactics",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  startDate: "2023-06-10",
  endDate: "2023-06-12",
  registrationEndDate: "2023-06-05",
  prizePool: "$30,000",
  currentParticipants: 32,
  maxParticipants: 32,
  status: "ongoing" as const
},
{
  id: "6",
  title: "Galactic Frontiers League",
  game: {
    id: "6",
    title: "Galactic Frontiers",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  startDate: "2023-05-01",
  endDate: "2023-05-30",
  registrationEndDate: "2023-04-25",
  prizePool: "$150,000",
  currentParticipants: 128,
  maxParticipants: 128,
  status: "completed" as const
}];


const games = [
"Cyber Nexus",
"Eternal Kingdoms",
"Velocity Rush",
"Mystic Legends",
"Shadow Tactics",
"Galactic Frontiers"];


const TournamentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("date");
  const [filteredTournaments, setFilteredTournaments] = useState(allTournaments);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = "Tournaments | Gaming Portal";
  }, []);

  useEffect(() => {
    let result = [...allTournaments];

    // Apply search filter
    if (searchQuery) {
      result = result.filter((tournament) =>
      tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tournament.game.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply game filter
    if (selectedGames.length > 0) {
      result = result.filter((tournament) => selectedGames.includes(tournament.game.title));
    }

    // Apply status filter
    if (selectedStatus.length > 0) {
      result = result.filter((tournament) => selectedStatus.includes(tournament.status));
    }

    // Apply sorting
    switch (sortBy) {
      case "date":
        result.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        break;
      case "prize":
        result.sort((a, b) => {
          const prizeA = parseInt(a.prizePool.replace(/[^0-9]/g, ""));
          const prizeB = parseInt(b.prizePool.replace(/[^0-9]/g, ""));
          return prizeB - prizeA;
        });
        break;
      case "popularity":
        result.sort((a, b) => b.currentParticipants - a.currentParticipants);
        break;
      default:
        break;
    }

    setFilteredTournaments(result);
  }, [searchQuery, selectedGames, selectedStatus, sortBy]);

  const toggleGame = (game: string) => {
    setSelectedGames((prev) =>
    prev.includes(game) ?
    prev.filter((g) => g !== game) :
    [...prev, game]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatus((prev) =>
    prev.includes(status) ?
    prev.filter((s) => s !== status) :
    [...prev, status]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGames([]);
    setSelectedStatus([]);
    setSortBy("date");
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tournaments</h1>
          <p className="text-muted-foreground">
            Compete in tournaments, climb the leaderboards, and win exciting prizes
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search tournaments..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />

            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}>

                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Games
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Select Games</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {games.map((game) =>
                    <DropdownMenuCheckboxItem
                      key={game}
                      checked={selectedGames.includes(game)}
                      onCheckedChange={() => toggleGame(game)}>

                        {game}
                      </DropdownMenuCheckboxItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Status
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Tournament Status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={selectedStatus.includes("upcoming")}
                      onCheckedChange={() => toggleStatus("upcoming")}>

                      Upcoming
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={selectedStatus.includes("ongoing")}
                      onCheckedChange={() => toggleStatus("ongoing")}>

                      Ongoing
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={selectedStatus.includes("completed")}
                      onCheckedChange={() => toggleStatus("completed")}>

                      Completed
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="hidden md:block w-[180px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Start Date</SelectItem>
                    <SelectItem value="prize">Prize Pool</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || selectedGames.length > 0 || selectedStatus.length > 0 || sortBy !== "date") &&
              <Button variant="ghost" onClick={clearFilters} className="hidden md:flex">
                  <X className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              }
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters &&
          <div className="md:hidden space-y-4 p-4 bg-muted rounded-md mb-4">
              <div>
                <h3 className="font-medium mb-2">Games</h3>
                <div className="flex flex-wrap gap-2">
                  {games.map((game) =>
                <Badge
                  key={game}
                  variant={selectedGames.includes(game) ? "secondary" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleGame(game)}>

                      {game}
                    </Badge>
                )}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Status</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                  variant={selectedStatus.includes("upcoming") ? "secondary" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleStatus("upcoming")}>

                    Upcoming
                  </Badge>
                  <Badge
                  variant={selectedStatus.includes("ongoing") ? "secondary" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleStatus("ongoing")}>

                    Ongoing
                  </Badge>
                  <Badge
                  variant={selectedStatus.includes("completed") ? "secondary" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleStatus("completed")}>

                    Completed
                  </Badge>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Sort By</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Start Date</SelectItem>
                    <SelectItem value="prize">Prize Pool</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || selectedGames.length > 0 || selectedStatus.length > 0 || sortBy !== "date") &&
            <Button variant="ghost" onClick={clearFilters} className="w-full">
                  <X className="h-4 w-4 mr-2" />
                  Clear All Filters
                </Button>
            }
            </div>
          }
          
          {/* Active Filters */}
          {(selectedGames.length > 0 || selectedStatus.length > 0) &&
          <div className="flex flex-wrap gap-2 mt-2">
              {selectedGames.map((game) =>
            <Badge key={game} variant="secondary" className="flex items-center gap-1">
                  {game}
                  <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => toggleGame(game)} />

                </Badge>
            )}
              
              {selectedStatus.map((status) =>
            <Badge key={status} variant="secondary" className="flex items-center gap-1">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                  <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => toggleStatus(status)} />

                </Badge>
            )}
            </div>
          }
        </div>
        
        {/* Tournaments Grid */}
        {filteredTournaments.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTournaments.map((tournament) =>
          <TournamentCard key={tournament.id} tournament={tournament} />
          )}
          </div> :

        <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No tournaments found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        }
      </div>
    </div>);

};

export default TournamentsPage;