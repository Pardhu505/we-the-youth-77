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
import { useState } from 'react';

export const NextGenLeadersSection = () => {
  const [votes, setVotes] = useState<{[key: string]: number}>({"Urban Futures": 1});
  const [selectedPriority, setSelectedPriority] = useState<string | null>("Urban Futures");

  const priorities = [
    { name: 'Urban Futures', icon: Building2, color: 'brand-orange' },
    { name: "Women's Safety", icon: Shield, color: 'brand-red-orange' },
    { name: 'Love & Choice', icon: Heart, color: 'brand-saffron' },
    { name: 'Healthy Living', icon: Heart, color: 'brand-green' },
    { name: 'Education & Skills', icon: GraduationCap, color: 'brand-yellow' },
    { name: 'Mental Health', icon: Brain, color: 'brand-orange' },
    { name: 'Climate Action', icon: Leaf, color: 'brand-green' },
    { name: 'Cost of Living', icon: DollarSign, color: 'brand-red-orange' },
    { name: 'Body & Identity', icon: User, color: 'brand-saffron' },
    { name: 'Migration & Opportunity', icon: Plane, color: 'brand-yellow' },
  ];

  const handleVote = () => {
    if (!selectedPriority) {
      alert("Please select a priority to vote for.");
      return;
    }
    alert("Voting is temporarily disabled. Please try again later.");
  };

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
            {priorities.map((priority) => (
              <div
                key={priority.name}
                className={`rounded-lg text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-${priority.color}/10 border-2 ${selectedPriority === priority.name ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setSelectedPriority(priority.name)}
              >
                <div className="text-center">
                  <priority.icon className={`mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 text-${priority.color}`} width={40} height={40} />
                  <h4 className="font-bold text-sm mb-2 text-foreground">{priority.name}</h4>
                  <div>
                    <p className="text-xs text-muted-foreground">{votes[priority.name] || 0} {votes[priority.name] === 1 ? 'vote' : 'votes'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={handleVote}
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
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="relative mb-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Arya Rajendran" className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-brand-orange/20 group-hover:border-brand-orange transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-brand-orange/20 transition-opacity duration-300 opacity-0"></div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Arya Rajendran</h4>
                <p className="text-sm text-muted-foreground mb-4">Youngest Mayor in India</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-bold text-brand-orange">92%</span>
                  </div>
                  <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full bg-secondary h-3">
                    <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-primary transition-all" style={{transform: 'translateX(-8%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="relative mb-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Greta Thunberg" className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-brand-orange/20 group-hover:border-brand-orange transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-brand-orange/20 transition-opacity duration-300 opacity-0"></div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Greta Thunberg</h4>
                <p className="text-sm text-muted-foreground mb-4">Climate Activist</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-bold text-brand-orange">88%</span>
                  </div>
                  <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full bg-secondary h-3">
                    <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-primary transition-all" style={{transform: 'translateX(-12%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="relative mb-4">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" alt="Malala Yousafzai" className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-brand-orange/20 group-hover:border-brand-orange transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-brand-orange/20 transition-opacity duration-300 opacity-0"></div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Malala Yousafzai</h4>
                <p className="text-sm text-muted-foreground mb-4">Education Advocate</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-bold text-brand-orange">95%</span>
                  </div>
                  <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full bg-secondary h-3">
                    <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-primary transition-all" style={{transform: 'translateX(-5%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="relative mb-4">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Ritesh Agarwal" className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-brand-orange/20 group-hover:border-brand-orange transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-brand-orange/20 transition-opacity duration-300 opacity-0"></div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Ritesh Agarwal</h4>
                <p className="text-sm text-muted-foreground mb-4">Young Entrepreneur</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-bold text-brand-orange">76%</span>
                  </div>
                  <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full bg-secondary h-3">
                    <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-primary transition-all" style={{transform: 'translateX(-24%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="relative mb-4">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face" alt="Disha Ravi" className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-brand-orange/20 group-hover:border-brand-orange transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-brand-orange/20 transition-opacity duration-300 opacity-0"></div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Disha Ravi</h4>
                <p className="text-sm text-muted-foreground mb-4">Environmental Activist</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-bold text-brand-orange">84%</span>
                  </div>
                  <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full bg-secondary h-3">
                    <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-primary transition-all" style={{transform: 'translateX(-16%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-center">
                <div className="relative mb-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Nikhil Taneja" className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-brand-orange/20 group-hover:border-brand-orange transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-brand-orange/20 transition-opacity duration-300 opacity-0"></div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Nikhil Taneja</h4>
                <p className="text-sm text-muted-foreground mb-4">Content Creator &amp; Advocate</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-bold text-brand-orange">71%</span>
                  </div>
                  <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full bg-secondary h-3">
                    <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-primary transition-all" style={{transform: 'translateX(-29%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center space-x-4">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 transition-all duration-300 hover:shadow-hover h-11 rounded-md px-8 group">
              <Vote className="lucide lucide-vote mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Vote for Leaders
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 group">
              <UserPlus className="lucide lucide-user-plus mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Nominate a Leader
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
