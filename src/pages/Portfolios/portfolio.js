import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SingleBlog } from "../../components";
import { Helmet } from "react-helmet";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import "../Blog/BlogPage.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function PortfolioPage() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const filteredArticles = blogData.filter((blog) => {
    const content = blog.title + blog.description + blog.date;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Blog</title>
      </Helmet>
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Blogs</h1>
      </div>
      <div className="blogPage--container">
        <div className="blog--search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Seach blog..."
            className={classes.search}
          />
        </div>
        <div className="blogs--container">
          <Grid
            className="blog-grid"
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {filteredArticles.reverse().map((blog) => (
              <SingleBlog
                theme={theme}
                title={blog.title}
                desc={blog.description}
                date={blog.date}
                image={blog.image}
                url={blog.url}
                key={blog.id}
                id={blog.id}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
