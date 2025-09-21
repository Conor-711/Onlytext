import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface PinterestCardProps {
  post: {
    id: string;
    author: {
      name: string;
      username: string;
      avatar: string;
      verified: boolean;
    };
    content: string;
    relationship?: string;
    feelings?: string[];
    timestamp: string;
    likes: number;
    retweets: number;
    replies: number;
    images?: string[];
  };
}

export const PinterestCard = ({ post }: PinterestCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on buttons or other interactive elements
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    navigate(`/post/${post.id}`);
  };

  // Generate a random height for masonry effect
  const heights = [280, 320, 360, 400, 440];
  const randomHeight = heights[Math.floor(Math.random() * heights.length)];

  return (
    <div 
      className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
      onClick={handleCardClick}
      style={{ height: randomHeight }}
    >
      {/* Image placeholder with content */}
      <div className="relative h-3/4 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        {post.images && post.images.length > 0 ? (
          <img 
            src={post.images[0]} 
            alt="Post content"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="p-4 text-center">
            <p className="text-foreground font-medium leading-relaxed line-clamp-6">
              {post.content}
            </p>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-2 rounded-full">
            Save
          </Button>
        </div>

        {/* More button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 p-1 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Card footer */}
      <div className="p-3 h-1/4">
        <div className="flex items-start gap-2">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {post.author.name}
            </p>
            {(post.relationship || (post.feelings && post.feelings.length > 0)) && (
              <div className="flex flex-wrap gap-1 mt-1">
                {post.relationship && (
                  <span className="inline-block bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs">
                    {post.relationship}
                  </span>
                )}
                {post.feelings && post.feelings.slice(0, 2).map((feeling) => (
                  <span key={feeling} className="inline-block bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full text-xs">
                    {feeling}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};