import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar1 as Calendar, Trophy, Users, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TournamentCardProps {
  tournament: {
    id: string;
    title: string;
    game: {
      id: string;
      title: string;
      coverImage: string;
    };
    startDate: string;
    endDate: string;
    registrationEndDate: string;
    prizePool: string;
    currentParticipants: number;
    maxParticipants: number;
    status: "upcoming" | "ongoing" | "completed";
  };
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  const getStatusBadge = () => {
    switch (tournament.status) {
      case "upcoming":
        return <Badge variant="secondary">Upcoming</Badge>;
      case "ongoing":
        return <Badge variant="accent">Ongoing</Badge>;
      case "completed":
        return <Badge>Completed</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const registrationProgress = Math.min(
    100,
    Math.round(
      tournament.currentParticipants / tournament.maxParticipants * 100
    )
  );

  const isRegistrationOpen = new Date() < new Date(tournament.registrationEndDate);

  return (
    <div className="game-card">
      <div className="relative">
        <img
          src={tournament.game.coverImage}
          alt={tournament.game.title}
          className="w-full h-48 object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary-900/90 to-transparent flex flex-col justify-end p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-white">{tournament.title}</h3>
            {getStatusBadge()}
          </div>
          <p className="text-sm text-white/80">
            {tournament.game.title}
          </p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{formatDate(tournament.startDate)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="h-4 w-4 text-secondary" />
            <span>{tournament.prizePool}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>
                {tournament.currentParticipants}/{tournament.maxParticipants} Participants
              </span>
            </div>
            <span className="text-sm">{registrationProgress}%</span>
          </div>
          <Progress value={registrationProgress} className="h-2" />
        </div>

        {tournament.status !== "completed" &&
        <div className="flex items-center gap-1 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            {isRegistrationOpen ?
          <span>Registration ends {formatDate(tournament.registrationEndDate)}</span> :

          <span>Registration closed</span>
          }
          </div>
        }

        <div className="flex gap-2">
          <Button asChild className="flex-1 btn-primary">
            <Link to={`/tournaments/${tournament.id}`}>View Details</Link>
          </Button>
          {tournament.status === "upcoming" && isRegistrationOpen ?
          <Button className="flex-1 btn-accent">Register</Button> :
          tournament.status === "ongoing" ?
          <Button className="flex-1 btn-secondary">Watch Live</Button> :

          <Button className="flex-1 btn-ghost" disabled={tournament.status === "completed"}>
              {tournament.status === "completed" ? "Ended" : "Registration Closed"}
            </Button>
          }
        </div>
      </div>
    </div>);

};

export default TournamentCard;