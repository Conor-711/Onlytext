import { Sidebar } from './Sidebar';
import { ProfileMain } from './ProfileMain';

export const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto flex">
        <Sidebar currentPage="profile" />
        <ProfileMain />
      </div>
    </div>
  );
};