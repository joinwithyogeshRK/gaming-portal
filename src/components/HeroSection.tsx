import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedGame {
  id: string;
  title: string;
  description: string;
  backgroundUrl: string;
  logoUrl: string;
  trailerUrl: string;
}

const featuredGames: FeaturedGame[] = [
  {
    id: "1",
    title: "Cyber Nexus",
    description: "Enter a dystopian future where cybernetic enhancements blur the line between human and machine. Battle corporate overlords in this action-packed RPG.",
    backgroundUrl: "/images/hero-bg-1.jpg",
    logoUrl: "/images/game-logo-1.png",
    trailerUrl: "#",
  },
  {
    id: "2",
    title: "Eternal Kingdoms",
    description: "Build your empire, forge alliances, and conquer rivals in this epic strategy game set in a medieval fantasy world.",
    backgroundUrl: "/images/hero-bg-2.jpg",
    logoUrl: "/images/game-logo-2.png",
    trailerUrl: "#",
  },
  {
    id: "3",
    title: "Velocity Rush",
    description: "Push the limits of speed in this futuristic racing game featuring gravity-defying tracks and customizable vehicles.",
    backgroundUrl: "/images/hero-bg-3.jpg",
    logoUrl: "/images/game-logo-3.png",
    trailerUrl: "#",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const currentGame = featuredGames[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredGames.length);
      setIsTransitioning(false);
    }, 500);
  };

  const selectSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${currentGame.backgroundUrl || "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          {/* Game Logo */}
          <div className="mb-6">
            {currentGame.logoUrl ? (
              <img 
                src={currentGame.logoUrl} 
                alt={currentGame.title} 
                className="h-24 object-contain"
              />
            ) : (
              <h1 className="text-5xl font-display text-white text-glow-accent">
                {currentGame.title}
              </h1>
            )}
          </div>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-8">
            {currentGame.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="btn-accent">
              <Link to={`/games/${currentGame.id}`}>
                Play Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/30">
              <a href={currentGame.trailerUrl}>
                <Play className="mr-2 h-5 w-5" /> Watch Trailer
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => selectSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;