import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Repeat2, MoreHorizontal } from 'lucide-react';

interface Comment {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
}

interface CommentSectionProps {
  postId: string;
}

const mockComments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'Krutik',
      username: 'krutikkkkkkkkk',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'How much time does it take to get delivered?',
    timestamp: '17h',
    likes: 2,
    replies: 1,
  },
  {
    id: '2',
    author: {
      name: 'Conor',
      username: 'Conor711',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'These look amazing! The quality seems really good from the photos.',
    timestamp: '15h',
    likes: 5,
    replies: 0,
  },
];

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const [replyText, setReplyText] = useState('');
  const [comments, setComments] = useState(mockComments);

  const handleReply = () => {
    if (!replyText.trim()) return;
    
    const newComment: Comment = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        username: 'yourhandle',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=40&h=40&fit=crop&crop=face',
        verified: false,
      },
      content: replyText,
      timestamp: 'now',
      likes: 0,
      replies: 0,
    };
    
    setComments([newComment, ...comments]);
    setReplyText('');
  };

  return (
    <div className="border-t border-border">
      {/* Reply Input */}
      <div className="p-4 border-b border-border">
        <div className="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=40&h=40&fit=crop&crop=face"
            alt="Your avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <Textarea
              placeholder="Post your reply"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="min-h-[80px] resize-none border-none p-0 text-lg placeholder:text-muted-foreground focus-visible:ring-0"
            />
            <div className="flex justify-end mt-3">
              <Button 
                onClick={handleReply}
                disabled={!replyText.trim()}
                className="rounded-full"
              >
                Reply
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div>
        {comments.map((comment) => (
          <article key={comment.id} className="border-b border-border p-4 hover:bg-hover/50 transition-colors">
            <div className="flex gap-3">
              <img
                src={comment.author.avatar}
                alt={comment.author.name}
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              
              <div className="flex-1 min-w-0">
                {/* Comment Header */}
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-foreground">{comment.author.name}</h4>
                  {comment.author.verified && (
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                  )}
                  <span className="text-muted-foreground">@{comment.author.username}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{comment.timestamp}</span>
                  <div className="ml-auto">
                    <Button variant="ghost" size="sm" className="p-1 h-auto hover:bg-muted">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </div>
                </div>
                
                {/* Comment Content */}
                <p className="text-foreground mb-3 leading-relaxed">{comment.content}</p>
                
                {/* Comment Actions */}
                <div className="flex items-center gap-8 max-w-md">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 p-0 h-auto text-muted-foreground hover:text-primary group">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{comment.replies}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 p-0 h-auto text-muted-foreground hover:text-green-600 group">
                    <div className="p-1.5 rounded-full group-hover:bg-green-600/10 transition-colors">
                      <Repeat2 className="w-4 h-4" />
                    </div>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 p-0 h-auto text-muted-foreground hover:text-red-600 group">
                    <div className="p-1.5 rounded-full group-hover:bg-red-600/10 transition-colors">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{comment.likes}</span>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};