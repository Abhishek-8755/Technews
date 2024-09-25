import React, { useEffect, useState } from 'react'
import { NewsItems } from './NewsItems';

export const Newsboard = ({category}) => {
    const [articles,setArticles]=useState([]);
    // useEffect(()=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    //     fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));

    // },[category])
  useEffect(() => {
  const fetchArticles = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      response.ok ? setArticles(data.articles) : console.error("Failed to fetch articles:", data.message);
    } catch (error) {
      console.error("Error fetching the articles:", error); // Catch network or other errors
    }
  };

  fetchArticles();
}, [category]);

  return (

    <div>
        <h2 className='text-center'>Latest<span className='badge bg-danger'>News</span></h2>
        {articles.map((news,index)=>{return<NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} author={news.author}/>})}
    </div>
  )
}
