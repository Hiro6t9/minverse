
import { useState, useEffect } from "react";
import { Users } from "lucide-react";

interface ServerStatusProps {
  serverIp: string;
  className?: string;
}

interface ServerData {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
}

export default function ServerStatus({ serverIp, className }: ServerStatusProps) {
  const [serverData, setServerData] = useState<ServerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching server status
    // In a real application, this would fetch from a Minecraft server API
    const fetchServerStatus = () => {
      setLoading(true);
      
      // Simulated server data
      setTimeout(() => {
        setServerData({
          online: true,
          players: {
            online: Math.floor(Math.random() * 100),
            max: 200
          }
        });
        setLoading(false);
      }, 1500);
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000); // Refresh every minute
    
    return () => clearInterval(interval);
  }, [serverIp]);

  if (loading) {
    return (
      <div className={`glass-card p-4 ${className}`}>
        <div className="animate-pulse flex items-center justify-center space-x-2">
          <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-card p-4 ${className}`}>
      {serverData?.online ? (
        <div className="flex items-center justify-center space-x-3">
          <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
          <span className="server-status-online">Online</span>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{serverData.players.online}/{serverData.players.max}</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-3">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
          <span className="server-status-offline">Offline</span>
        </div>
      )}
    </div>
  );
}
