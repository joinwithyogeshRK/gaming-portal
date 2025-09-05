import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GameCard from "./GameCard";

// Mock data
const featuredGames = [
  {
    id: "1",
    title: "Cyber Nexus",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    genre: "Action RPG",
    releaseDate: "2023-05-15",
    playerCount: 1250000,
    isNew: true,
    isFeatured: true,
    hasActiveTournament: true,
  },
  {
    id: "2",
    title: "Eternal Kingdoms",
    coverImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    genre: "Strategy",
    releaseDate: "2022-11-30",
    playerCount: 980000,
    isFeatured: true,
    hasActiveTournament: false,
  },
  {
    id: "3",
    title: "Velocity Rush",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    genre: "Racing",
    releaseDate: "2023-02-10",
    playerCount: 750000,
    isFeatured: true,
    hasActiveTournament: true,
  },
  {
    id: "4",
    title: "Mystic Legends",
    coverImage: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    genre: "MMORPG",
    releaseDate: "2022-08-22",
    playerCount: 2100000,
    isFeatured: true,
    hasActiveTournament: false,
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
    hasActiveTournament: true,
  },
  {
    id: "6",
    title: "Galactic Frontiers",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    genre: "Space Simulation",
    releaseDate: "2022-12-12",
    playerCount: 890000,
    isFeatured: true,
    hasActiveTournament: false,
  },
];

const FeaturedGames = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemsPerView = 4; // Number of items visible at once
  const maxScroll = Math.max(0, featuredGames.length - itemsPerView);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setScrollPosition(Math.max(0, scrollPosition - 1));
    } else {
      setScrollPosition(Math.min(maxScroll, scrollPosition + 1));
    }
  };

  return (
    <section className="py-16 bg-primary-900/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-glow-secondary">Featured Games</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleScroll("left")}
              disabled={scrollPosition === 0}
              className="border-border hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleScroll("right")}
              disabled={scrollPosition >= maxScroll}
              className="border-border hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${scrollPosition * (100 / itemsPerView)}%)`,
              width: `${(featuredGames.length / itemsPerView) * 100}%`,
            }}
          >
            {featuredGames.map((game) => (
              <div
                key={game.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0"
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;