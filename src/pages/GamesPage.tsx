import { useState, useEffect } from "react";
import GameCard from "@/components/GameCard";
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
const allGames = [
{
  id: "1",
  title: "Cyber Nexus",
  coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  genre: "Action RPG",
  releaseDate: "2023-05-15",
  playerCount: 1250000,
  isNew: true,
  isFeatured: true,
  hasActiveTournament: true
},
{
  id: "2",
  title: "Eternal Kingdoms",
  coverImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  genre: "Strategy",
  releaseDate: "2022-11-30",
  playerCount: 980000,
  isFeatured: true,
  hasActiveTournament: false
},
{
  id: "3",
  title: "Velocity Rush",
  coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  genre: "Racing",
  releaseDate: "2023-02-10",
  playerCount: 750000,
  isFeatured: true,
  hasActiveTournament: true
},
{
  id: "4",
  title: "Mystic Legends",
  coverImage: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  genre: "MMORPG",
  releaseDate: "2022-08-22",
  playerCount: 2100000,
  isFeatured: true,
  hasActiveTournament: false
},
{
  id: "5",
  title: "Shadow Tactics",
  coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  genre: "Stealth",
  releaseDate: "2023-01-05",
  playerCount: 620000,
  isNew: true,
  isFeatured: true,
  hasActiveTournament: true
},
{
  id: "6",
  title: "Galactic Frontiers",
  coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  genre: "Space Simulation",
  releaseDate: "2022-12-12",
  playerCount: 890000,
  isFeatured: true,
  hasActiveTournament: false
},
{
  id: "7",
  title: "Neon Drift",
  coverImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  genre: "Racing",
  releaseDate: "2023-04-05",
  playerCount: 450000,
  isNew: true,
  hasActiveTournament: false
},
{
  id: "8",
  title: "Arcane Realms",
  coverImage: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  genre: "Fantasy RPG",
  releaseDate: "2022-10-18",
  playerCount: 1100000,
  hasActiveTournament: true
}];


const genres = ["Action RPG", "Strategy", "Racing", "MMORPG", "Stealth", "Space Simulation", "Fantasy RPG"];

const GamesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popularity");
  const [filteredGames, setFilteredGames] = useState(allGames);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = "Games | Gaming Portal";
  }, []);

  useEffect(() => {
    let result = [...allGames];

    // Apply search filter
    if (searchQuery) {
      result = result.filter((game) =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply genre filter
    if (selectedGenres.length > 0) {
      result = result.filter((game) => selectedGenres.includes(game.genre));
    }

    // Apply sorting
    switch (sortBy) {
      case "popularity":
        result.sort((a, b) => b.playerCount - a.playerCount);
        break;
      case "newest":
        result.sort((a, b) => {
          if (!a.releaseDate || !b.releaseDate) return 0;
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        });
        break;
      case "alphabetical":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredGames(result);
  }, [searchQuery, selectedGenres, sortBy]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
    prev.includes(genre) ?
    prev.filter((g) => g !== genre) :
    [...prev, genre]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGenres([]);
    setSortBy("popularity");
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Games Library</h1>
          <p className="text-muted-foreground">
            Discover and play the latest and greatest games in our collection
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search games..."
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
                      Genres
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Select Genres</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {genres.map((genre) =>
                    <DropdownMenuCheckboxItem
                      key={genre}
                      checked={selectedGenres.includes(genre)}
                      onCheckedChange={() => toggleGenre(genre)}>

                        {genre}
                      </DropdownMenuCheckboxItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="hidden md:block w-[180px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || selectedGenres.length > 0 || sortBy !== "popularity") &&
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
                <h3 className="font-medium mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) =>
                <Badge
                  key={genre}
                  variant={selectedGenres.includes(genre) ? "secondary" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleGenre(genre)}>

                      {genre}
                    </Badge>
                )}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Sort By</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || selectedGenres.length > 0 || sortBy !== "popularity") &&
            <Button variant="ghost" onClick={clearFilters} className="w-full">
                  <X className="h-4 w-4 mr-2" />
                  Clear All Filters
                </Button>
            }
            </div>
          }
          
          {/* Active Filters */}
          {selectedGenres.length > 0 &&
          <div className="flex flex-wrap gap-2 mt-2">
              {selectedGenres.map((genre) =>
            <Badge key={genre} variant="secondary" className="flex items-center gap-1">
                  {genre}
                  <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => toggleGenre(genre)} />

                </Badge>
            )}
            </div>
          }
        </div>
        
        {/* Games Grid */}
        {filteredGames.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) =>
          <GameCard key={game.id} game={game} />
          )}
          </div> :

        <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No games found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        }
      </div>
    </div>);

};

export default GamesPage;