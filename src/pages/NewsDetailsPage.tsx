import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar1 as Calendar, Clock, Share, MessageSquare, ThumbsUp, Bookmark, ChevronLeft, ChevronRight } from








"lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import NewsCard from "@/components/NewsCard";

// Mock data
const newsDetails = {
  id: "1",
  title: "Cyber Nexus Announces Major Expansion",
  excerpt: "The popular cyberpunk RPG is getting a massive new expansion that adds 30+ hours of gameplay and a new urban zone.",
  content: `
    <p>Quantum Studios, the developer behind the hit cyberpunk RPG Cyber Nexus, has announced a major expansion titled "Neon Shadows" that will be released later this year.</p>
    
    <p>The expansion will add a completely new urban zone called "District Zero," a lawless area that was quarantined following a mysterious technological disaster. Players will be able to explore this dangerous new region, which features unique architecture, factions, and storylines.</p>
    
    <h2>New Content and Features</h2>
    
    <p>According to the developers, "Neon Shadows" will include:</p>
    
    <ul>
      <li>30+ hours of new gameplay content</li>
      <li>A new urban zone with 5 distinct neighborhoods</li>
      <li>3 new factions to interact with</li>
      <li>Dozens of new side quests and activities</li>
      <li>New weapons, cybernetic implants, and gear</li>
      <li>An expanded character progression system</li>
    </ul>
    
    <p>"We've been listening to our community since the game launched, and we're excited to deliver this expansion that addresses many of their requests while taking the story in a bold new direction," said Sarah Chen, Creative Director at Quantum Studios.</p>
    
    <h2>Continuing the Story</h2>
    
    <p>The expansion will continue the story of the base game, picking up after the events of the main campaign. Players will investigate a series of mysterious disappearances in District Zero, uncovering a conspiracy that threatens to destabilize the entire city.</p>
    
    <p>The narrative will feature returning characters from the main game as well as new allies and adversaries. Player choices from the base game will carry over and influence certain events in the expansion.</p>
    
    <h2>Release Date and Pricing</h2>
    
    <p>"Neon Shadows" is scheduled for release on October 15, 2023, and will be available on all platforms where Cyber Nexus is currently available. The expansion will be priced at $29.99, with a 10% discount for players who pre-order.</p>
    
    <p>Additionally, Quantum Studios announced that a free update will be released alongside the expansion, bringing quality-of-life improvements and balance changes to the base game for all players.</p>
  `,
  imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  category: "Updates",
  publishedAt: "2023-05-28",
  readTime: 4,
  author: {
    name: "Alex Johnson",
    role: "Senior Gaming Editor",
    avatarUrl: "https://i.pravatar.cc/150?u=alex"
  },
  tags: ["Cyber Nexus", "RPG", "Expansion", "DLC", "Quantum Studios"],
  likeCount: 342,
  commentCount: 57
};

const relatedNews = [
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
  id: "6",
  title: "Galactic Frontiers Patch 2.5 Notes",
  excerpt: "The latest patch for Galactic Frontiers brings balance changes, bug fixes, and quality of life improvements.",
  imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Updates",
  publishedAt: "2023-05-15",
  readTime: 6
}];


const NewsDetailsPage = () => {
  const { id } = useParams<{id: string;}>();

  useEffect(() => {
    document.title = `${newsDetails.title} | Gaming Portal`;

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Link to="/news" className="hover:text-accent">News</Link>
              <span className="mx-2">/</span>
              <span>{newsDetails.category}</span>
            </div>
            
            {/* Article Header */}
            <div className="mb-6">
              <Badge variant="secondary" className="mb-3">
                {newsDetails.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{newsDetails.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(newsDetails.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{newsDetails.readTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{newsDetails.commentCount} comments</span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="mb-6">
              <img
                src={newsDetails.imageUrl}
                alt={newsDetails.title}
                className="w-full h-auto rounded-lg" />

            </div>
            
            {/* Author Info */}
            <div className="flex items-center gap-3 mb-6">
              <Avatar>
                <AvatarImage src={newsDetails.author.avatarUrl} alt={newsDetails.author.name} />
                <AvatarFallback>
                  {newsDetails.author.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{newsDetails.author.name}</div>
                <div className="text-sm text-muted-foreground">{newsDetails.author.role}</div>
              </div>
            </div>
            
            {/* Article Content */}
            <div
              className="prose prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: newsDetails.content }} />

            
            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {newsDetails.tags.map((tag, index) =>
                <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                )}
              </div>
            </div>
            
            {/* Article Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="outline" className="flex-1 sm:flex-none">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Like ({newsDetails.likeCount})
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comment ({newsDetails.commentCount})
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
            
            <Separator className="mb-8" />
            
            {/* Navigation */}
            <div className="flex justify-between mb-8">
              <Button variant="ghost" asChild>
                <Link to="/news">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to News
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link to={`/news/${relatedNews[0].id}`}>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Related Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((news) =>
                <NewsCard key={news.id} news={news} />
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Popular Articles</h3>
              <div className="space-y-4">
                {relatedNews.map((news) =>
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="flex gap-3 group">

                    <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-16 h-16 object-cover rounded-md" />

                    <div>
                      <h4 className="text-sm font-medium group-hover:text-accent transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span>{formatDate(news.publishedAt)}</span>
                        <span>•</span>
                        <span>{news.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                <Link to="/news?category=Updates" className="block text-sm hover:text-accent transition-colors">
                  Updates
                </Link>
                <Link to="/news?category=Esports" className="block text-sm hover:text-accent transition-colors">
                  Esports
                </Link>
                <Link to="/news?category=DLC" className="block text-sm hover:text-accent transition-colors">
                  DLC
                </Link>
                <Link to="/news?category=Events" className="block text-sm hover:text-accent transition-colors">
                  Events
                </Link>
                <Link to="/news?category=Announcements" className="block text-sm hover:text-accent transition-colors">
                  Announcements
                </Link>
                <Link to="/news?category=Platform" className="block text-sm hover:text-accent transition-colors">
                  Platform
                </Link>
                <Link to="/news?category=Interviews" className="block text-sm hover:text-accent transition-colors">
                  Interviews
                </Link>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest gaming news and updates.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  required />

                <Button type="submit" className="w-full btn-accent">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default NewsDetailsPage;