import { ArrowLeft, MoreHorizontal, Calendar, Link as LinkIcon, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileTabs } from './ProfileTabs';
import { PinterestCard } from './PinterestCard';
import { EditPostDialog } from './EditPostDialog';
import { useState } from 'react';

const mockProfilePosts = [
  {
    id: '1',
    author: {
      name: 'amrit',
      username: 'amritwt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'I stopped looking at notifications, post analytics, haven\'t replied to low effort slop comments & messages and it is truly freeing for my brain',
    relationship: 'personal',
    feelings: ['peaceful', 'grateful'],
    timestamp: '39m',
    likes: 20,
    retweets: 1,
    replies: 4,
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'],
  },
  {
    id: '2',
    author: {
      name: 'amrit',
      username: 'amritwt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'Weather app concept with clean interface and smooth animations. What do you think?',
    relationship: 'colleague',
    feelings: ['excited', 'proud'],
    timestamp: '3h',
    likes: 694,
    retweets: 34,
    replies: 16,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop'],
  },
  {
    id: '3',
    author: {
      name: 'amrit',
      username: 'amritwt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'Morning coffee routine and planning my creative projects for the week.',
    relationship: 'personal',
    feelings: ['motivated', 'peaceful'],
    timestamp: '1d',
    likes: 156,
    retweets: 23,
    replies: 12,
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop'],
  },
  {
    id: '4',
    author: {
      name: 'amrit',
      username: 'amritwt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'New design system components completed. Clean, minimal, and accessible.',
    relationship: 'colleague',
    feelings: ['satisfied', 'accomplished'],
    timestamp: '2d',
    likes: 389,
    retweets: 67,
    replies: 28,
    images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=350&fit=crop'],
  },
  {
    id: '5',
    author: {
      name: 'amrit',
      username: 'amritwt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'Weekend hiking adventure. Nature always provides the best inspiration for design.',
    relationship: 'friends',
    feelings: ['amazed', 'refreshed'],
    timestamp: '3d',
    likes: 245,
    retweets: 45,
    replies: 19,
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=550&fit=crop'],
  },
  {
    id: '6',
    author: {
      name: 'amrit',
      username: 'amritwt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: 'Late night coding session with some good music. There\'s something magical about building things when the world is quiet.',
    relationship: 'personal',
    feelings: ['focused', 'content'],
    timestamp: '4d',
    likes: 178,
    retweets: 31,
    replies: 15,
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=450&fit=crop'],
  },
];

export const ProfileMain = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="flex-1 border-r border-border">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center gap-8">
        <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-nav-hover rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            amrit
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xs">✓</span>
            </div>
          </h1>
          <p className="text-sm text-muted-foreground">14.7K posts</p>
        </div>
      </div>

      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/70 text-sm">make a dent in the universe.</span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 pb-4">
        {/* Avatar and Actions */}
        <div className="flex justify-between items-start mb-4">
          <div className="relative -mt-16">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
              alt="amrit"
              className="w-32 h-32 rounded-full border-4 border-background"
            />
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <Button variant="ghost" size="sm" className="p-2 h-auto border border-border hover:bg-nav-hover rounded-full">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 h-auto border border-border hover:bg-nav-hover rounded-full">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="sm" className="p-2 h-auto border border-border hover:bg-nav-hover rounded-full">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>
              </svg>
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90 font-bold px-6 rounded-full">
              Following
            </Button>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              amrit
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs">✓</span>
              </div>
            </h2>
            <p className="text-muted-foreground">@amritwt</p>
          </div>

          <div className="space-y-2">
            <p className="text-foreground">
              21, engineer. hire coders: 
              <span className="text-primary"> @crackeddevs</span>.
            </p>
            <Button variant="link" className="text-primary p-0 h-auto font-normal">
              View more
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <LinkIcon className="w-4 h-4" />
              <span className="text-primary">amritwt.me</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Joined October 2022</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div>
              <span className="font-bold text-foreground">430</span>
              <span className="text-muted-foreground ml-1">Following</span>
            </div>
            <div>
              <span className="font-bold text-foreground">29.6K</span>
              <span className="text-muted-foreground ml-1">Followers</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-1">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=20&h=20&fit=crop&crop=face" alt="" className="w-5 h-5 rounded-full border border-background" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=20&h=20&fit=crop&crop=face" alt="" className="w-5 h-5 rounded-full border border-background" />
            </div>
            <span>Followed by Dominik, lily, and 42 others you follow</span>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Posts */}
      <div className="p-4">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {mockProfilePosts.map((post) => (
            <div key={post.id} className="break-inside-avoid relative group">
              <PinterestCard post={post} />
              {/* Edit button for own posts */}
              <div className="absolute top-2 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <EditPostDialog post={{ id: post.id, content: post.content, relationship: post.relationship, feelings: post.feelings }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};