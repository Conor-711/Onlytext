import { Sidebar } from './Sidebar';
import { MainFeed } from './MainFeed';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto flex">
        <Sidebar />
        <MainFeed />
      </div>
    </div>
  );
};