import { Search, Bell, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

export const PinterestHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <Button variant="ghost" className="font-semibold" onClick={() => navigate('/')}>
            Home
          </Button>
          <Button variant="ghost" className="font-semibold" onClick={() => navigate('/create-post')}>
            Create
          </Button>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for ideas"
              className="pl-10 bg-muted/50 border-none rounded-full py-2"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2" onClick={() => navigate('/profile')}>
            <User className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};