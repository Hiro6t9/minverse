
import { Youtube, MessageSquare, Copy, Store, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  copyServerIP: () => void;
}

export default function Footer({ copyServerIP }: FooterProps) {
  return (
    <footer id="join" className="bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded"></div>
              <span className="text-xl font-bold">Minverse</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Join our community for the ultimate Minecraft experience with custom game modes, events, and an amazing community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#game-modes" className="text-muted-foreground hover:text-primary transition-colors">
                  Game Modes
                </a>
              </li>
              <li>
                <a href="#join" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Now
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Server IP:</span>
                <span className="font-mono">PLAY.MINVERSE.FUN</span>
                <button 
                  onClick={copyServerIP}
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="Copy server IP"
                >
                  <Copy size={16} />
                </button>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Discord"
                >
                  <MessageSquare size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Three-Line Section with Buttons */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="glass-card p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Join Now Line */}
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold mb-4">Ready to Play?</h3>
                <Button 
                  className="minecraft-btn w-full max-w-xs bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400"
                  onClick={copyServerIP}
                >
                  <ExternalLink size={18} />
                  Join Now
                </Button>
              </div>
              
              {/* Discord Line */}
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                <Button 
                  className="w-full max-w-xs bg-[#5865F2] hover:bg-[#4a55e3]"
                  onClick={() => window.open('https://discord.gg/minverse', '_blank')}
                >
                  <MessageSquare size={18} />
                  Discord
                </Button>
              </div>
              
              {/* Store Line */}
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold mb-4">Support The Server</h3>
                <Button 
                  className="w-full max-w-xs bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400"
                  onClick={() => window.open('https://store.minverse.fun', '_blank')}
                >
                  <Store size={18} />
                  Store
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Minverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
