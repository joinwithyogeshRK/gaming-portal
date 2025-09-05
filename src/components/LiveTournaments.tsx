import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TournamentCard from "./TournamentCard";

// Mock data
const tournaments = [
  {
    id: "1",
    title: "Cyber Nexus Championship",
    game: {
      id: "1",
      title: "Cyber Nexus",
      coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    startDate: "2023-06-15",
    endDate: "2023-06-18",
    registrationEndDate: "2023-06-10",
    prizePool: "$50,000",
    currentParticipants: 120,
    maxParticipants: 128,
    status: "ongoing" as const,
  },
  {
    id: "2",
    title: "Eternal Kingdoms World Cup",
    game: {
      id: "2",
      title: "Eternal Kingdoms",
      coverImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    startDate: "2023-07-01",
    endDate: "2023-07-10",
    registrationEndDate: "2023-06-25",
    prizePool: "$100,000",
    currentParticipants: 85,
    maxParticipants: 256,
    status: "upcoming" as const,
  },
  {
    id: "3",
    title: "Velocity Rush Grand Prix",
    game: {
      id: "3",
      title: "Velocity Rush",
      coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    startDate: "2023-05-20",
    endDate: "2023-05-22",
    registrationEndDate: "2023-05-15",
    prizePool: "$25,000",
    currentParticipants: 64,
    maxParticipants: 64,
    status: "completed" as const,
  },
  {
    id: "4",
    title: "Mystic Legends Arena",
    game: {
      id: "4",
      title: "Mystic Legends",
      coverImage: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    startDate: "2023-06-25",
    endDate: "2023-06-30",
    registrationEndDate: "2023-06-20",
    prizePool: "$75,000",
    currentParticipants: 45,
    maxParticipants: 64,
    status: "upcoming" as const,
  },
];

const LiveTournaments = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemsPerView = 3; // Number of items visible at once
  const maxScroll = Math.max(0, tournaments.length - itemsPerView);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setScrollPosition(Math.max(0, scrollPosition - 1));
    } else {
      setScrollPosition(Math.min(maxScroll, scrollPosition + 1));
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-glow-accent">Live Tournaments</h2>
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
              width: `${(tournaments.length / itemsPerView) * 100}%`,
            }}
          >
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <TournamentCard tournament={tournament} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTournaments;