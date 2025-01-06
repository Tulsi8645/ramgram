import React from 'react';
import NewsCard from './NewsCard';
import { NewsItem } from '../../types/news';
import SectionTitle from '../common/SectionTitle';

const newsData: NewsItem[] = [
  {
    date: "March 10, 2024",
    category: "Healthcare",
    title: "New Healthcare Center Opens in Kohalpur",
    description: "Our new healthcare center will provide essential medical services to over 1,000 families in the region.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    slug: "healthcare-center-opens"
  },
  {
    date: "March 5, 2024",
    category: "Education",
    title: "Vocational Training Program Graduates 50 Students",
    description: "Celebrating the success of our latest batch of vocational training graduates.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    slug: "vocational-training-graduates"
  },
  {
    date: "March 1, 2024",
    category: "Environment",
    title: "Community Clean-up Drive Success",
    description: "Over 200 volunteers participated in our monthly community clean-up initiative.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
    slug: "community-cleanup"
  }
];

const NewsUpdates: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Latest News & Updates"
          subtitle="Stay informed about our latest initiatives, success stories, and community impact."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {newsData.map((news, index) => (
            <NewsCard key={news.slug} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsUpdates;