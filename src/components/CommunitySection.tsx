import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, MessageSquare, Trophy, Headphones } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-16 bg-primary-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-glow-secondary mb-4">Join Our Gaming Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow gamers, participate in discussions, join tournaments, and stay updated with the latest gaming trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Forums */}
          <div className="neon-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Forums</h3>
            <p className="text-muted-foreground mb-4">
              Join discussions on your favorite games, share strategies, and connect with the community.
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/community">Browse Forums</Link>
            </Button>
          </div>

          {/* Groups */}
          <div className="neon-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Groups</h3>
            <p className="text-muted-foreground mb-4">
              Find like-minded gamers, create or join gaming groups based on your interests.
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/community">Explore Groups</Link>
            </Button>
          </div>

          {/* Tournaments */}
          <div className="neon-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Tournaments</h3>
            <p className="text-muted-foreground mb-4">
              Compete in tournaments, climb the leaderboards, and win exciting prizes.
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/tournaments">Join Tournaments</Link>
            </Button>
          </div>

          {/* Voice Chat */}
          <div className="neon-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <Headphones className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Voice Chat</h3>
            <p className="text-muted-foreground mb-4">
              Connect with voice channels, coordinate with teammates, and make new friends.
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/community">Join Voice Channels</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="btn-accent">
            <Link to="/community">Explore Community</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;