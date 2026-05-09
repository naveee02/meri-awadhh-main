import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

function NewsComponent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=Ayodhya&apiKey=20fd56da8c1247de82856d2fd80b1211`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="bg-slate-400">
  <div id="main" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {articles.map((article, index) => (
      <LazyLoad key={index} height={200} offset={100} once>
        <div className="bg-white shadow-md rounded-md overflow-hidden w-[450px] h-[350px] flex flex-col">
          {/* Image: takes 50% height */}
          <div className="h-[175px] overflow-hidden">
            <img
              src={article.urlToImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content: takes 50% height */}
          <div className="p-4 h-[175px] flex flex-col justify-between overflow-hidden">
            <h3 className="text-base font-semibold line-clamp-2 leading-tight">
              {article.title}
            </h3>
            <p className="text-sm text-gray-700 line-clamp-3 leading-snug">
              {article.description}
            </p>
            <p className="text-xs text-gray-500 truncate mt-2">
              {article.author || "Unknown"} | {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </LazyLoad>
    ))}
  </div>
</div>

  );
}

export default NewsComponent;
