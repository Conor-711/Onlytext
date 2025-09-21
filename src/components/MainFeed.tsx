import { PostComposer } from './PostComposer';
import { Post } from './Post';

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
  },
];

export const MainFeed = () => {
  return (
    <div className="flex-1 border-r border-border">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border p-4">
        <h1 className="text-xl font-bold">Home</h1>
      </div>

      {/* Post Composer */}
      <PostComposer />

      {/* Posts */}
      <div>
        {mockPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};