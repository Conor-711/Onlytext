import { PinterestHeader } from './PinterestHeader';
import { PinterestSidebar } from './PinterestSidebar';
import { MainFeed } from './MainFeed';

interface LayoutProps {
  currentPage?: string;
}

export const Layout = ({ currentPage }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <PinterestHeader />
      <div className="flex">
        <PinterestSidebar currentPage={currentPage} />
        <MainFeed />
      </div>
    </div>
  );
};