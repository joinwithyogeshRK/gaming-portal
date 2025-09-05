import { Button } from "@/components/ui/button";
import { Download, Apple, Monitor, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-primary-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-glow-accent mb-4">Download Our App</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the Gaming Portal app to access your games, tournaments, and community on any device. Stay connected with friends and never miss a gaming moment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Windows */}
            <div className="bg-background/20 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-800 flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Windows</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For Windows 10 and above
              </p>
              <Button className="w-full btn-secondary">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </div>
            
            {/* macOS */}
            <div className="bg-background/20 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-800 flex items-center justify-center">
                  <Apple className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">macOS</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For macOS 11 and above
              </p>
              <Button className="w-full btn-secondary">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </div>
            
            {/* Mobile */}
            <div className="bg-background/20 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-800 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For iOS and Android
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/20">
                  App Store
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/20">
                  Play Store
                </Button>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            By downloading, you agree to our <a href="#" className="text-accent hover:underline">Terms of Service</a> and <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;