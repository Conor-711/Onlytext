import { Home, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: User, label: 'Profile', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="sticky top-0 h-screen w-64 border-r border-border px-6 py-4">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="mb-8 px-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">X</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          {navItems.map(({ icon: Icon, label, active }) => (
            <Button
              key={label}
              variant="ghost"
              size="lg"
              className={`
                w-full justify-start gap-4 text-left font-normal px-3 py-3 h-auto
                ${active 
                  ? 'bg-nav-hover text-foreground font-medium' 
                  : 'text-muted-foreground hover:bg-nav-hover hover:text-foreground'
                }
                transition-colors
              `}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xl">{label}</span>
            </Button>
          ))}
        </nav>

        {/* Post button */}
        <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-3 text-lg rounded-full">
          Post
        </Button>
      </div>
    </div>
  );
};