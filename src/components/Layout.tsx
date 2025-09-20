import { Sidebar } from './Sidebar';
import { MainFeed } from './MainFeed';

interface LayoutProps {
  currentPage?: string;
}

export const Layout = ({ currentPage }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto flex">
        <Sidebar currentPage={currentPage} />
        <MainFeed />
      </div>
    </div>
  );
};