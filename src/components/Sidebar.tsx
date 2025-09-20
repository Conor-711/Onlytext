import { Home, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  currentPage?: string;
}

export const Sidebar = ({ currentPage }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine active page from route if not explicitly passed
  const activePage = currentPage || (location.pathname === '/profile' ? 'profile' : 'home');

  const navItems = [
    { icon: Home, label: 'Home', id: 'home', path: '/' },
    { icon: User, label: 'Profile', id: 'profile', path: '/profile' },
    { icon: Settings, label: 'Settings', id: 'settings', path: '/settings' },
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
          {navItems.map(({ icon: Icon, label, id, path }) => (
            <Button
              key={label}
              variant="ghost"
              size="lg"
              onClick={() => navigate(path)}
              className={`
                w-full justify-start gap-4 text-left font-normal px-3 py-3 h-auto
                ${activePage === id
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