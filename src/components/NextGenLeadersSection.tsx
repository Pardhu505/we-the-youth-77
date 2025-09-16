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

  const leaders = [
    {
      name: 'Raghav Chadha',
      description: 'Young MP (AAP), articulate face of youth in politics',
      imageUrl: 'https://epic.uchicago.edu/wp-content/uploads/sites/5/2025/01/1638647506_raghav-chadha.jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Sachin Pilot',
      description: 'Senior Congress leader',
      imageUrl: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/12/pilot1-1545029631.jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Tejasvi Surya',
      description: 'BJP MP, President of Bharatiya Janata Yuva Morcha',
      imageUrl: 'https://pbs.twimg.com/profile_images/1826819616355856384/0UyEk-zl_400x400.jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Aaditya Thackeray',
      description: 'Shiv Sena (UBT) leader, ex-minister in Maharashtra',
      imageUrl: 'https://images.mid-day.com/images/images/2025/jan/aaditya-thackeray-file_d_d.jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Kanhaiya Kumar',
      description: 'Former JNUSU President, now Congress leader; vocal on youth & student issues.',
      imageUrl: 'https://static.toiimg.com/thumb/msid-122106578,imgsize-1055161,width-400,resizemode-4/122106578.jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Hardik Patel',
      description: 'Patidar agitation leader, now active in politics; known for youth mobilization',
      imageUrl: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/04/hardikpatel-1650627109.jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Chinmayi Sripada',
      description: 'Singer & activist; #MeToo voice in India.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Chinmayi_Sripada_at_film_fare_festival_for_winning_96s_best_singer_of_the_year_2018_(cropped).jpg/250px-Chinmayi_Sripada_at_film_fare_festival_for_winning_96s_best_singer_of_the_year_2018_(cropped).jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Trisha Shetty',
      description: 'Gender equality activist, founder of SheSays; Forbes 30 under 30.',
      imageUrl: 'https://femina.wwmindia.com/content/2021/aug/gendertrishashettybcclinsta-21629219706.jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Ridhima Pandey',
      description: 'Climate activist, dubbed “India’s Greta Thunberg”',
      imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201912/IMG20190920124909_-_Copy.jpeg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
    {
      name: 'Sonu Sood',
      description: 'Actor-turned-humanitarian, became a youth icon for COVID relief work.',
      imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/1656656216-Myproject42.jpg',
      support: Math.floor(Math.random() * (98 - 70 + 1) + 70),
    },
  ];

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
            {leaders.map((leader) => (
              <div key={leader.name} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
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
                      <span className="font-bold text-brand-orange">{leader.support}%</span>
                    </div>
                    <div aria-valuemax={100} aria-valuemin={0} role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full bg-secondary h-3">
                      <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-primary transition-all" style={{transform: `translateX(-${100 - leader.support}%)`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
