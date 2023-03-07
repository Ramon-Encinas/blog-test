import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
       setTimeout(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8000/blogs');
            const data = await response.json();
            console.log(data);
            setBlogs(data);
            setLoading(false);
        }
        fetchData();
       }, 1000)
    }, []);
        
        
    return (
        <div className="home">
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;