import { useState, useEffect } from "react";
import StreamCard from "@/components/StreamCard";
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
const allStreams = [
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
  title: "Eternal Kingdoms - Building the Ultimate Empire",
  thumbnailUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "2",
    title: "Eternal Kingdoms"
  },
  streamer: {
    id: "102",
    username: "StrategyQueen",
    avatarUrl: "https://i.pravatar.cc/150?u=102"
  },
  viewerCount: 8700,
  isLive: true
},
{
  id: "3",
  title: "Velocity Rush - Speed Run Challenge",
  thumbnailUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "3",
    title: "Velocity Rush"
  },
  streamer: {
    id: "103",
    username: "SpeedDemon",
    avatarUrl: "https://i.pravatar.cc/150?u=103"
  },
  viewerCount: 5300,
  isLive: true
},
{
  id: "4",
  title: "Mystic Legends - Guild Raid Night",
  thumbnailUrl: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "4",
    title: "Mystic Legends"
  },
  streamer: {
    id: "104",
    username: "MagicMaster",
    avatarUrl: "https://i.pravatar.cc/150?u=104"
  },
  viewerCount: 9200,
  isLive: true
},
{
  id: "5",
  title: "Shadow Tactics - Stealth Mission Walkthrough",
  thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "5",
    title: "Shadow Tactics"
  },
  streamer: {
    id: "105",
    username: "NinjaShadow",
    avatarUrl: "https://i.pravatar.cc/150?u=105"
  },
  viewerCount: 3800,
  isLive: false
},
{
  id: "6",
  title: "Galactic Frontiers - Space Exploration",
  thumbnailUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "6",
    title: "Galactic Frontiers"
  },
  streamer: {
    id: "106",
    username: "CosmicVoyager",
    avatarUrl: "https://i.pravatar.cc/150?u=106"
  },
  viewerCount: 2100,
  isLive: true
},
{
  id: "7",
  title: "Neon Drift - Championship Race",
  thumbnailUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "7",
    title: "Neon Drift"
  },
  streamer: {
    id: "107",
    username: "DriftKing",
    avatarUrl: "https://i.pravatar.cc/150?u=107"
  },
  viewerCount: 4500,
  isLive: true
},
{
  id: "8",
  title: "Arcane Realms - Mage Tower Challenge",
  thumbnailUrl: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  game: {
    id: "8",
    title: "Arcane Realms"
  },
  streamer: {
    id: "108",
    username: "WizardMaster",
    avatarUrl: "https://i.pravatar.cc/150?u=108"
  },
  viewerCount: 6700,
  isLive: false
}];


const games = [
"Cyber Nexus",
"Eternal Kingdoms",
"Velocity Rush",
"Mystic Legends",
"Shadow Tactics",
"Galactic Frontiers",
"Neon Drift",
"Arcane Realms"];


const LiveStreamsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [liveOnly, setLiveOnly] = useState(true);
  const [sortBy, setSortBy] = useState("viewers");
  const [filteredStreams, setFilteredStreams] = useState(allStreams);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = "Live Streams | Gaming Portal";
  }, []);

  useEffect(() => {
    let result = [...allStreams];

    // Apply search filter
    if (searchQuery) {
      result = result.filter((stream) =>
      stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stream.game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stream.streamer.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply game filter
    if (selectedGames.length > 0) {
      result = result.filter((stream) => selectedGames.includes(stream.game.title));
    }

    // Apply live only filter
    if (liveOnly) {
      result = result.filter((stream) => stream.isLive);
    }

    // Apply sorting
    switch (sortBy) {
      case "viewers":
        result.sort((a, b) => b.viewerCount - a.viewerCount);
        break;
      case "alphabetical":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredStreams(result);
  }, [searchQuery, selectedGames, liveOnly, sortBy]);

  const toggleGame = (game: string) => {
    setSelectedGames((prev) =>
    prev.includes(game) ?
    prev.filter((g) => g !== game) :
    [...prev, game]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGames([]);
    setLiveOnly(true);
    setSortBy("viewers");
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Live Streams</h1>
          <p className="text-muted-foreground">
            Watch your favorite streamers play the latest games
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search streams, games, or streamers..."
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
                <Button
                  variant={liveOnly ? "secondary" : "outline"}
                  onClick={() => setLiveOnly(!liveOnly)}>

                  Live Only
                </Button>
              </div>
              
              <div className="hidden md:block w-[180px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="viewers">Most Viewers</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || selectedGames.length > 0 || !liveOnly || sortBy !== "viewers") &&
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
                <h3 className="font-medium mb-2">Stream Status</h3>
                <Button
                variant={liveOnly ? "secondary" : "outline"}
                onClick={() => setLiveOnly(!liveOnly)}
                className="w-full">

                  {liveOnly ? "Live Only" : "All Streams"}
                </Button>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Sort By</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="viewers">Most Viewers</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || selectedGames.length > 0 || !liveOnly || sortBy !== "viewers") &&
            <Button variant="ghost" onClick={clearFilters} className="w-full">
                  <X className="h-4 w-4 mr-2" />
                  Clear All Filters
                </Button>
            }
            </div>
          }
          
          {/* Active Filters */}
          {selectedGames.length > 0 &&
          <div className="flex flex-wrap gap-2 mt-2">
              {selectedGames.map((game) =>
            <Badge key={game} variant="secondary" className="flex items-center gap-1">
                  {game}
                  <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => toggleGame(game)} />

                </Badge>
            )}
            </div>
          }
        </div>
        
        {/* Streams Grid */}
        {filteredStreams.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStreams.map((stream) =>
          <StreamCard key={stream.id} stream={stream} />
          )}
          </div> :

        <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No streams found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        }
      </div>
    </div>);

};

export default LiveStreamsPage;