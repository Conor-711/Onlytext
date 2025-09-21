import { PinterestHeader } from './PinterestHeader';
import { PinterestSidebar } from './PinterestSidebar';
import { ProfileMain } from './ProfileMain';

export const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <PinterestHeader />
      <div className="flex">
        <PinterestSidebar currentPage="profile" />
        <ProfileMain />
      </div>
    </div>
  );
};