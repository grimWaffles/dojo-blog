import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

const Home2 = () => {
    
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id)
        setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log('UseEffect ran!')
    });

    return (
        <div className="home">
            {/* To loop through a list in react */}
            <BlogList blogs={blogs} title="All Blogs:" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title={"Mario's Blogs:"} handleDelete={handleDelete}></BlogList>
        </div>
    );
}

export default Home2;