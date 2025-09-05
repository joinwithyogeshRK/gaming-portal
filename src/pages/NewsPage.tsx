import { useState, useEffect } from "react";
import NewsCard from "@/components/NewsCard";
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
const allNews = [
{
  id: "1",
  title: "Cyber Nexus Announces Major Expansion",
  excerpt: "The popular cyberpunk RPG is getting a massive new expansion that adds 30+ hours of gameplay and a new urban zone.",
  imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Updates",
  publishedAt: "2023-05-28",
  readTime: 4
},
{
  id: "2",
  title: "Eternal Kingdoms World Tournament Announced",
  excerpt: "The biggest Eternal Kingdoms tournament yet will feature teams from 32 countries competing for a $250,000 prize pool.",
  imageUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Esports",
  publishedAt: "2023-05-25",
  readTime: 3
},
{
  id: "3",
  title: "Velocity Rush Adds New Track Pack",
  excerpt: "Five new gravity-defying tracks have been added to Velocity Rush in the latest DLC, along with three new vehicles.",
  imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "DLC",
  publishedAt: "2023-05-22",
  readTime: 2
},
{
  id: "4",
  title: "Mystic Legends Celebrates 5th Anniversary",
  excerpt: "The popular MMORPG is celebrating its 5th anniversary with special in-game events, rewards, and a massive community gathering.",
  imageUrl: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Events",
  publishedAt: "2023-05-20",
  readTime: 5
},
{
  id: "5",
  title: "Shadow Tactics Developer Reveals New Game",
  excerpt: "The studio behind the hit stealth game Shadow Tactics has announced their next project, a sci-fi tactical adventure.",
  imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Announcements",
  publishedAt: "2023-05-18",
  readTime: 3
},
{
  id: "6",
  title: "Galactic Frontiers Patch 2.5 Notes",
  excerpt: "The latest patch for Galactic Frontiers brings balance changes, bug fixes, and quality of life improvements.",
  imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Updates",
  publishedAt: "2023-05-15",
  readTime: 6
},
{
  id: "7",
  title: "Gaming Portal App Gets Major Redesign",
  excerpt: "Our mobile app has been completely redesigned with a new user interface, improved performance, and new features.",
  imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Platform",
  publishedAt: "2023-05-12",
  readTime: 2
},
{
  id: "8",
  title: "Interview with Arcane Realms Lead Designer",
  excerpt: "We sat down with the lead designer of Arcane Realms to discuss the game's development, future plans, and community feedback.",
  imageUrl: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Interviews",
  publishedAt: "2023-05-10",
  readTime: 8
}];


const categories = ["Updates", "Esports", "DLC", "Events", "Announcements", "Platform", "Interviews"];

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [filteredNews, setFilteredNews] = useState(allNews);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = "News | Gaming Portal";
  }, []);

  useEffect(() => {
    let result = [...allNews];

    // Apply search filter
    if (searchQuery) {
      result = result.filter((news) =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((news) => selectedCategories.includes(news.category));
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case "readTime":
        result.sort((a, b) => a.readTime - b.readTime);
        break;
      default:
        break;
    }

    setFilteredNews(result);
  }, [searchQuery, selectedCategories, sortBy]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
    prev.includes(category) ?
    prev.filter((c) => c !== category) :
    [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSortBy("newest");
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Gaming News</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest news, updates, and announcements from the gaming world
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search news..."
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
                      Categories
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Select Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categories.map((category) =>
                    <DropdownMenuCheckboxItem
                      key={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}>

                        {category}
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
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="readTime">Reading Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || selectedCategories.length > 0 || sortBy !== "newest") &&
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
                <h3 className="font-medium mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) =>
                <Badge
                  key={category}
                  variant={selectedCategories.includes(category) ? "secondary" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleCategory(category)}>

                      {category}
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
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="readTime">Reading Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || selectedCategories.length > 0 || sortBy !== "newest") &&
            <Button variant="ghost" onClick={clearFilters} className="w-full">
                  <X className="h-4 w-4 mr-2" />
                  Clear All Filters
                </Button>
            }
            </div>
          }
          
          {/* Active Filters */}
          {selectedCategories.length > 0 &&
          <div className="flex flex-wrap gap-2 mt-2">
              {selectedCategories.map((category) =>
            <Badge key={category} variant="secondary" className="flex items-center gap-1">
                  {category}
                  <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => toggleCategory(category)} />

                </Badge>
            )}
            </div>
          }
        </div>
        
        {/* News Grid */}
        {filteredNews.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) =>
          <NewsCard key={news.id} news={news} />
          )}
          </div> :

        <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No news found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        }
      </div>
    </div>);

};

export default NewsPage;