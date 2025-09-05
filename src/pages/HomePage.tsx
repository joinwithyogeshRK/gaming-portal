import HeroSection from "@/components/HeroSection";
import FeaturedGames from "@/components/FeaturedGames";
import LiveTournaments from "@/components/LiveTournaments";
import PopularStreams from "@/components/PopularStreams";
import LatestNews from "@/components/LatestNews";
import CommunitySection from "@/components/CommunitySection";
import DownloadSection from "@/components/DownloadSection";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Gaming Portal | Your Ultimate Gaming Destination";
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedGames />
      <LiveTournaments />
      <PopularStreams />
      <LatestNews />
      <CommunitySection />
      <DownloadSection />
    </div>
  );
};

export default HomePage;