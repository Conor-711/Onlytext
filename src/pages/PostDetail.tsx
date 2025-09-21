import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PinterestHeader } from '@/components/PinterestHeader';
import { PinterestSidebar } from '@/components/PinterestSidebar';
import { Filmstrip } from '@/components/Filmstrip';
import { useState } from 'react';

// Mock data for the post detail
const mockPostDetail = {
  id: '1',
  author: {
    name: 'John Doe',
    username: 'johndoe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    verified: true,
  },
  content: 'Just received these amazing swag items from the team! The quality is incredible and the design is so clean. Really excited to rep the brand! 🔥',
  timestamp: '8:04 PM · Sep 20, 2025',
  views: '11.3K',
  likes: 368,
  retweets: 6,
  replies: 49,
  bookmarks: 15,
  images: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      thumbUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=80&fit=crop',
      isActive: true,
      index: 0
    },
    {
      id: '2', 
      url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop',
      thumbUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=80&fit=crop',
      isActive: false,
      index: 1
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop',
      thumbUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=120&h=80&fit=crop',
      isActive: false,
      index: 2
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&h=400&fit=crop',
      thumbUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=120&h=80&fit=crop',
      isActive: false,
      index: 3
    }
  ],
  hasLockedContent: true
};

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleImageSwitch = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background">
      <PinterestHeader />
      <div className="flex">
        <PinterestSidebar />
        
        {/* Main Content */}
        <div className="flex-1 max-w-2xl mx-auto">
          {/* Header */}
          <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={handleBack} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Post</h1>
          </div>

          {/* Post Content */}
          <div className="p-4">
            {/* Author Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={mockPostDetail.author.avatar}
                alt={mockPostDetail.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground">{mockPostDetail.author.name}</h3>
                  {mockPostDetail.author.verified && (
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground">@{mockPostDetail.author.username}</p>
              </div>
            </div>

            {/* Post Text */}
            <p className="text-foreground text-lg leading-relaxed mb-4">{mockPostDetail.content}</p>

            {/* Main Image Area */}
            <div className="mb-4">
              <img
                src={mockPostDetail.images[activeImageIndex].url}
                alt="Post content"
                className="w-full rounded-2xl border border-border"
              />
            </div>

            {/* Filmstrip */}
            <Filmstrip
              images={mockPostDetail.images}
              activeIndex={activeImageIndex}
              onImageSelect={handleImageSwitch}
            />

            {/* Timestamp and Views */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-4 pt-4 border-t border-border">
              <span>{mockPostDetail.timestamp}</span>
              <span>·</span>
              <span>{mockPostDetail.views} Views</span>
            </div>

            {/* Pinterest-style Actions */}
            <div className="flex items-center justify-between py-4 border-t border-border mt-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center gap-2 ${isLiked ? 'text-red-600' : 'text-muted-foreground hover:text-red-600'}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{mockPostDetail.likes + (isLiked ? 1 : 0)}</span>
              </Button>
              
              <Button 
                variant="default" 
                size="sm" 
                className={`${isBookmarked ? 'bg-primary' : 'bg-primary hover:bg-primary/90'}`}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                {isBookmarked ? 'Saved' : 'Save'}
              </Button>

              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Share className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Comments placeholder */}
          <div className="p-4 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            <p className="text-muted-foreground">Comments feature coming soon...</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 space-y-6">
          {/* Author More Content */}
          <div className="bg-card rounded-2xl p-4 border border-border">
            <h3 className="text-lg font-bold mb-4">More from {mockPostDetail.author.name}</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <img
                  src={mockPostDetail.author.avatar}
                  alt={mockPostDetail.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{mockPostDetail.author.name}</span>
                    <span className="text-muted-foreground text-sm">2h</span>
                  </div>
                  <p className="text-sm text-foreground">Just finished reviewing the new design system. Loving the attention to detail!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Recommendations */}
          <div className="bg-card rounded-2xl p-4 border border-border">
            <h3 className="text-lg font-bold mb-4">You might like</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=40&h=40&fit=crop&crop=face"
                  alt="Jane Smith"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">Jane Smith</span>
                  </div>
                  <p className="text-muted-foreground text-sm">@janesmith</p>
                </div>
                <Button variant="outline" size="sm">Follow</Button>
              </div>
              
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=40&h=40&fit=crop&crop=face"
                  alt="Tech News"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">Tech News</span>
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">@technews</p>
                </div>
                <Button variant="outline" size="sm">Follow</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;