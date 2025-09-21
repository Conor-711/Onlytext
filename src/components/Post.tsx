import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface PostProps {
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
  };
}

export const Post = ({ post }: PostProps) => {
  const navigate = useNavigate();

  const handlePostClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on buttons or other interactive elements
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    navigate(`/post/${post.id}`);
  };

  return (
    <article 
      className="border-b border-border p-4 hover:bg-hover/50 transition-colors cursor-pointer"
      onClick={handlePostClick}
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full flex-shrink-0"
        />
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-foreground">{post.author.name}</h3>
            {post.author.verified && (
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs">✓</span>
              </div>
            )}
            <span className="text-muted-foreground">@{post.author.username}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{post.timestamp}</span>
            <div className="ml-auto">
              <Button variant="ghost" size="sm" className="p-1 h-auto hover:bg-muted">
                <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
              </Button>
            </div>
          </div>
          
          {/* Post content */}
          <p className="text-foreground mb-3 leading-relaxed">{post.content}</p>
          
          {/* Relationship and Feelings badges */}
          {(post.relationship || (post.feelings && post.feelings.length > 0)) && (
            <div className="mb-3 flex flex-wrap gap-2">
              {post.relationship && (
                <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {post.relationship}
                </span>
              )}
              {post.feelings && post.feelings.map((feeling) => (
                <span key={feeling} className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {feeling}
                </span>
              ))}
            </div>
          )}
          
          {/* Actions */}
          <div className="flex items-center gap-12 max-w-md">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 p-0 h-auto text-muted-foreground hover:text-primary group">
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-sm">{post.replies}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-2 p-0 h-auto text-muted-foreground hover:text-green-600 group">
              <div className="p-2 rounded-full group-hover:bg-green-600/10 transition-colors">
                <Repeat2 className="w-5 h-5" />
              </div>
              <span className="text-sm">{post.retweets}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-2 p-0 h-auto text-muted-foreground hover:text-red-600 group">
              <div className="p-2 rounded-full group-hover:bg-red-600/10 transition-colors">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-sm">{post.likes}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-primary group">
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <Share className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};