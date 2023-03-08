import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        const response = await fetch("http://localhost:8000/blogs");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        console.log(response);
        console.log(data);
        setBlogs(data);
        setLoading(false);
        setError(null);
      }

      fetchData().catch((err) => {
        setLoading(false);
        setError(err.message);
      });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
