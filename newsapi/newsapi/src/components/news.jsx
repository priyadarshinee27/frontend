// src/components/News.js
import React, { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "f46d0e2e308f4a708e4abe50647cc1b2"; // Replace with your real API key
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Headlines</h1>
      {articles.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {articles.map((article, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
