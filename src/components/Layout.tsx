import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <ScrollArea className="flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;