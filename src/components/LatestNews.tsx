import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

// Mock data
const news = [
  {
    id: "1",
    title: "Cyber Nexus Announces Major Expansion",
    excerpt: "The popular cyberpunk RPG is getting a massive new expansion that adds 30+ hours of gameplay and a new urban zone.",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Updates",
    publishedAt: "2023-05-28",
    readTime: 4,
  },
  {
    id: "2",
    title: "Eternal Kingdoms World Tournament Announced",
    excerpt: "The biggest Eternal Kingdoms tournament yet will feature teams from 32 countries competing for a $250,000 prize pool.",
    imageUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Esports",
    publishedAt: "2023-05-25",
    readTime: 3,
  },
  {
    id: "3",
    title: "Velocity Rush Adds New Track Pack",
    excerpt: "Five new gravity-defying tracks have been added to Velocity Rush in the latest DLC, along with three new vehicles.",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "DLC",
    publishedAt: "2023-05-22",
    readTime: 2,
  },
];

const LatestNews = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-glow-accent">Latest News</h2>
          <Button asChild variant="outline" className="border-border hover:bg-muted">
            <Link to="/news">View All News</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;