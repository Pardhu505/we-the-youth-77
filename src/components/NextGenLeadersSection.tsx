import {
  Building2,
  Shield,
  Heart,
  GraduationCap,
  Brain,
  Leaf,
  DollarSign,
  User,
  Plane,
  Vote,
  UserPlus
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast"

const priorityIcons: { [key: string]: React.ElementType } = {
  'Urban Futures': Building2,
  "Women's Safety": Shield,
  'Love & Choice': Heart,
  'Healthy Living': Heart,
  'Education & Skills': GraduationCap,
  'Mental Health': Brain,
  'Climate Action': Leaf,
  'Cost of Living': DollarSign,
  'Body & Identity': User,
  'Migration & Opportunity': Plane,
};

const priorityColors: { [key: string]: string } = {
  'Urban Futures': 'brand-orange',
  "Women's Safety": 'brand-red-orange',
  'Love & Choice': 'brand-saffron',
  'Healthy Living': 'brand-green',
  'Education & Skills': 'brand-yellow',
  'Mental Health': 'brand-orange',
  'Climate Action': 'brand-green',
  'Cost of Living': 'brand-red-orange',
  'Body & Identity': 'brand-saffron',
  'Migration & Opportunity': 'brand-yellow',
};

interface Priority {
  _id: string;
  priority: string;
  votes: number;
}

interface Leader {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  votes: number;
}

export const NextGenLeadersSection = () => {
  const { toast } = useToast();
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }

    const fetchPriorities = async () => {
      try {
        const res = await fetch('/api/priorities/votes');
        const data = await res.json();
        setPriorities(data);
      } catch (error) {
        console.error('Error fetching priorities:', error);
      }
    };

    const fetchLeaders = async () => {
      try {
        const res = await fetch('/api/leaders');
        const data = await res.json();
        setLeaders(data);
      } catch (error) {
        console.error('Error fetching leaders:', error);
      }
    };

    fetchPriorities();
    fetchLeaders();
  }, []);

  const handleVotePriority = async () => {
    if (!selectedPriority || !userEmail) {
      toast({
        title: "Please select a priority and register to vote.",
        variant: "destructive",
      })
      return;
    }

    try {
      const res = await fetch('/api/priorities/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priority: selectedPriority, email: userEmail }),
      });

      if (res.ok) {
        toast({
          title: "Vote submitted successfully!",
        })
        const updatedPriority = await res.json();
        setPriorities(priorities.map(p => p.priority === selectedPriority ? { ...p, votes: updatedPriority.votes } : p));
      } else {
        const errorData = await res.json();
        toast({
          title: errorData.msg || "Failed to submit vote.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error voting for priority:', error);
      toast({
        title: "An error occurred while voting.",
        variant: "destructive",
      })
    }
  };

  const handleVoteLeader = async () => {
    if (!selectedLeader || !userEmail) {
      toast({
        title: "Please select a leader and register to vote.",
        variant: "destructive",
      })
      return;
    }

    try {
      const res = await fetch(`/api/leaders/${selectedLeader}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });

      if (res.ok) {
        toast({
          title: "Vote submitted successfully!",
        })
        const updatedLeader = await res.json();
        setLeaders(leaders.map(l => l._id === selectedLeader ? { ...l, votes: updatedLeader.votes } : l));
      } else {
        const errorData = await res.json();
        toast({
          title: errorData.msg || "Failed to submit vote.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error voting for leader:', error);
      toast({
        title: "An error occurred while voting.",
        variant: "destructive",
      })
    }
  };

  const totalPriorityVotes = priorities.reduce((acc, p) => acc + p.votes, 0);
  const totalLeaderVotes = leaders.reduce((acc, l) => acc + l.votes, 0);

  return (
    <section id="next-gen" className="py-20 px-4 bg-gradient-to-br from-background via-brand-orange/5 to-brand-yellow/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Next-Gen Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The future belongs to youth. Vote for priorities that matter and leaders who represent the next generation.</p>
        </div>
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Top Youth Priorities</h3>
            <p className="text-lg text-muted-foreground mb-8">What issues matter most to India's youth? Click to select and vote.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {priorities.map((priority) => {
              const Icon = priorityIcons[priority.priority];
              const color = priorityColors[priority.priority];
              return (
                <div
                  key={priority._id}
                  className={`rounded-lg text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-${color}/10 border-2 ${selectedPriority === priority.priority ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setSelectedPriority(priority.priority)}
                >
                  <div className="text-center">
                    {Icon && <Icon className={`mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 text-${color}`} width={40} height={40} />}
                    <h4 className="font-bold text-sm mb-2 text-foreground">{priority.priority}</h4>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">{priority.votes} {priority.votes === 1 ? 'vote' : 'votes'}</p>
                      <div aria-valuemax={100} aria-valuemin={0} role="progressbar" className="relative w-full overflow-hidden rounded-full bg-secondary h-2">
                        <div className="h-full w-full flex-1 bg-primary transition-all" style={{transform: `translateX(-${100 - (totalPriorityVotes > 0 ? Math.round((priority.votes / totalPriorityVotes) * 100) : 0)}%)`}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-center">
            <button
              onClick={handleVotePriority}
              disabled={!userEmail || !selectedPriority}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 transition-all duration-300 hover:shadow-hover h-11 rounded-md px-8 group"
            >
              <Vote className="lucide lucide-vote mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Vote for Your Top Priorities
            </button>
          </div>
        </div>
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Next-Gen Leaders Panel</h3>
            <p className="text-lg text-muted-foreground mb-8">Young changemakers shaping India's future. Vote for leaders who inspire you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {leaders.map((leader) => (
              <div
                key={leader._id}
                className={`rounded-lg border bg-card text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${selectedLeader === leader._id ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setSelectedLeader(leader._id)}
              >
                <div className="text-center">
                  <div className="relative mb-4">
                    <img src={leader.imageUrl} alt={leader.name} className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-brand-orange/20 group-hover:border-brand-orange transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-brand-orange/20 transition-opacity duration-300 opacity-0"></div>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{leader.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{leader.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Support</span>
                      <span className="font-bold text-brand-orange">{totalLeaderVotes > 0 ? Math.round((leader.votes / totalLeaderVotes) * 100) : 0}%</span>
                    </div>
                    <div aria-valuemax={100} aria-valuemin={0} role="progressbar" className="relative w-full overflow-hidden rounded-full bg-secondary h-3">
                      <div className="h-full w-full flex-1 bg-primary transition-all" style={{transform: `translateX(-${100 - (totalLeaderVotes > 0 ? Math.round((leader.votes / totalLeaderVotes) * 100) : 0)}%)`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center space-x-4">
            <button
              onClick={handleVoteLeader}
              disabled={!userEmail || !selectedLeader}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 transition-all duration-300 hover:shadow-hover h-11 rounded-md px-8 group"
            >
              <Vote className="lucide lucide-vote mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Vote for Leaders
            </button>
            <button disabled className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 group">
              <UserPlus className="lucide lucide-user-plus mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Nominate a Leader
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
