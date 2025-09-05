import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StreamCard from "./StreamCard";

// Mock data
const streams = [
  {
    id: "1",
    title: "Cyber Nexus - Ranked Matches with Pro Tips",
    thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    game: {
      id: "1",
      title: "Cyber Nexus",
    },
    streamer: {
      id: "101",
      username: "ProGamer123",
      avatarUrl: "https://i.pravatar.cc/150?u=101",
    },
    viewerCount: 12500,
    isLive: true,
  },
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
  {
    id: "4",
    title: "Mystic Legends - Guild Raid Night",
    thumbnailUrl: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    game: {
      id: "4",
      title: "Mystic Legends",
    },
    streamer: {
      id: "104",
      username: "MagicMaster",
      avatarUrl: "https://i.pravatar.cc/150?u=104",
    },
    viewerCount: 9200,
    isLive: true,
  },
  {
    id: "5",
    title: "Shadow Tactics - Stealth Mission Walkthrough",
    thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    game: {
      id: "5",
      title: "Shadow Tactics",
    },
    streamer: {
      id: "105",
      username: "NinjaShadow",
      avatarUrl: "https://i.pravatar.cc/150?u=105",
    },
    viewerCount: 3800,
    isLive: false,
  },
];

const PopularStreams = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemsPerView = 4; // Number of items visible at once
  const maxScroll = Math.max(0, streams.length - itemsPerView);

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
          <h2 className="text-3xl font-bold text-glow-secondary">Popular Streams</h2>
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
              width: `${(streams.length / itemsPerView) * 100}%`,
            }}
          >
            {streams.map((stream) => (
              <div
                key={stream.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0"
              >
                <StreamCard stream={stream} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularStreams;