import { PinterestCard } from './PinterestCard';

const mockPosts = [
  {
    id: '1',
    author: {
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'Just shipped a new feature! Really excited to see how users react to it. The development process was quite challenging but rewarding.',
    relationship: 'colleague',
    feelings: ['excited', 'grateful'],
    timestamp: '2h',
    likes: 42,
    retweets: 12,
    replies: 8,
    images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop'],
  },
  {
    id: '2', 
    author: {
      name: 'Jane Smith',
      username: 'janesmith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=40&h=40&fit=crop&crop=face',
      verified: false,
    },
    content: 'Beautiful sunset today! Sometimes you just need to take a moment to appreciate the simple things in life. 🌅',
    relationship: 'friends',
    feelings: ['happy', 'nostalgic'],
    timestamp: '4h',
    likes: 128,
    retweets: 34,
    replies: 19,
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop'],
  },
  {
    id: '3',
    author: {
      name: 'Tech News',
      username: 'technews',
      avatar: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'Breaking: New breakthrough in quantum computing could revolutionize the industry. Researchers have developed a more stable quantum processor.',
    relationship: 'colleague',
    feelings: ['excited', 'insightful'],
    timestamp: '6h',
    likes: 892,
    retweets: 247,
    replies: 156,
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop'],
  },
  {
    id: '4',
    author: {
      name: 'Sarah Wilson',
      username: 'sarahw',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      verified: false,
    },
    content: 'Morning coffee and planning my day. There is something magical about early mornings.',
    relationship: 'friends',
    feelings: ['peaceful', 'motivated'],
    timestamp: '1h',
    likes: 67,
    retweets: 15,
    replies: 23,
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop'],
  },
  {
    id: '5',
    author: {
      name: 'Design Studio',
      username: 'designstudio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'New branding project completed for a sustainable fashion brand. Love working with companies that care about the environment.',
    relationship: 'colleague',
    feelings: ['proud', 'inspired'],
    timestamp: '3h',
    likes: 245,
    retweets: 89,
    replies: 34,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=350&fit=crop'],
  },
  {
    id: '6',
    author: {
      name: 'Travel Blogger',
      username: 'wanderlust',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      verified: false,
    },
    content: 'Hidden gem discovered in the mountains. The view from here is absolutely breathtaking!',
    relationship: 'friends',
    feelings: ['amazed', 'grateful'],
    timestamp: '5h',
    likes: 156,
    retweets: 67,
    replies: 45,
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=550&fit=crop'],
  },
];

export const MainFeed = () => {
  return (
    <div className="flex-1">
      {/* Pinterest-style masonry grid */}
      <div className="p-4">
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
          {mockPosts.map((post) => (
            <div key={post.id} className="break-inside-avoid">
              <PinterestCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};