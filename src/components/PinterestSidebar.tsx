import { Home, User, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface PinterestSidebarProps {
  currentPage?: string;
}

export const PinterestSidebar = ({ currentPage }: PinterestSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine active page from route if not explicitly passed
  const activePage = currentPage || (location.pathname === '/profile' ? 'profile' : 'home');

  const navItems = [
    { icon: Home, label: 'Home', id: 'home', path: '/' },
    { icon: Plus, label: 'Create', id: 'create', path: '/create-post' },
    { icon: User, label: 'Profile', id: 'profile', path: '/profile' },
    { icon: Settings, label: 'Settings', id: 'settings', path: '/settings' },
  ];

  return (
    <div className="sticky top-16 h-[calc(100vh-4rem)] w-20 flex flex-col items-center py-4 border-r border-border">
      {/* Navigation */}
      <nav className="space-y-4">
        {navItems.map(({ icon: Icon, label, id, path }) => (
          <Button
            key={label}
            variant="ghost"
            size="sm"
            onClick={() => navigate(path)}
            className={`
              w-12 h-12 p-0 rounded-full
              ${activePage === id
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }
              transition-colors
            `}
            title={label}
          >
            <Icon className="w-6 h-6" />
          </Button>
        ))}
      </nav>
    </div>
  );
};