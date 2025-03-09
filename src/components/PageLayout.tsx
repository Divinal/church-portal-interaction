
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  bannerImage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  description, 
  bannerImage = '/images/banners/home-banner.jpg' 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {bannerImage && (
        <Banner 
          title={title} 
          description={description}
          bannerImage={bannerImage}
        />
      )}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
