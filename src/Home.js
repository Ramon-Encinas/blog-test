import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => { 
        async function fetchData() {
            const response = await fetch('http://localhost:8000/blogs');
            const data = await response.json();
            console.log(data);
            setBlogs(data);
        }
        fetchData();
    }, []);
        
        
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;