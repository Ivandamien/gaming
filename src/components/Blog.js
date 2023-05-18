import React from 'react';
import { blog1, blog2, blog3 } from '../assets/images';

const Blog = () => {
  const articles = [
    {
      id: 1,
      image: blog1,
      author: 'Admin',
      date: 'September 19, 2022',
      title: 'Shooter Action Video',
      excerpt: 'Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.'
    },
    {
      id: 2,
      image: blog2,
      author: 'Admin',
      date: 'September 19, 2022',
      title: 'The Walking Dead',
      excerpt: 'Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.'
    },
    {
      id: 3,
      image: blog3,
      author: 'Admin',
      date: 'September 19, 2022',
      title: 'Defense Of The Ancients',
      excerpt: 'Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.'
    }
  ];

  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <h2 className="h2 section-title">
          Latest News &amp; <span className="span">Articles</span>
        </h2>
        <p className="section-text">
          Compete With 100 Players On A Remote Island For Winner Takes Showdown Known Issue Where Certain Skin Strategic
        </p>
        <ul className="blog-list">
          {articles.map(article => (
            <li key={article.id}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ '--width': 400, '--height': 290 }}>
                  <img src={article.image} width="400" height="290" loading="lazy" alt={article.title} className="img-cover" />
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="person-outline"></ion-icon>
                      <a href="/" className="item-text">{article.author}</a>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <time dateTime="2022-09-19" className="item-text">{article.date}</time>
                    </li>
                  </ul>
                  <h3>
                    <a href="/" className="card-title">{article.title}</a>
                  </h3>
                  <p className="card-text">
                    {article.excerpt}
                  </p>
                  <a href="/" className="card-link">
                    <span className="span">Read More</span>
                    <ion-icon name="caret-forward"></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
