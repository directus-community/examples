import * as React from "react";
import Article from "./article";

export default function MoreArticles({ articles }) {
  return (
    <section className="more-articles">
      <div className="container">
        <h1 className="more-articles__title">More Articles</h1>
        {articles?.length !== 0 && (
          <div className="articles-grid">
            {articles.map((article, index) => (
              <Article
                key={index}
                article={article}
                bordered={index !== articles.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
