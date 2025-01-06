import React from 'react';
import { NewsItem } from '../../types/news';
import { formatDate } from '../../lib/dateUtils';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={news.image} 
        alt={news.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-gray-600 text-sm">{formatDate(news.date)}</span>
          <span className="text-blue-700 text-sm font-medium">{news.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{news.title}</h3>
        <p className="text-gray-600 mb-4">{news.description}</p>
        <button className="text-blue-700 font-semibold inline-flex items-center hover:text-blue-800">
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;