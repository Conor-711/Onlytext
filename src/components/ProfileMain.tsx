import { ArrowLeft, MoreHorizontal, Calendar, Link as LinkIcon, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileTabs } from './ProfileTabs';
import { Post } from './Post';
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
    relationship: 'Personal',
    timestamp: '39m',
    likes: 20,
    retweets: 1,
    replies: 4,
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
    relationship: 'Work',
    timestamp: '3h',
    likes: 694,
    retweets: 34,
    replies: 16,
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
      <div>
        {mockProfilePosts.map((post) => (
          <div key={post.id} className="relative group">
            <Post post={post} />
            {/* Edit button for own posts */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <EditPostDialog post={{ id: post.id, content: post.content, relationship: post.relationship }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};