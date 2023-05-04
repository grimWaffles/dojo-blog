import BlogList from "../components/BlogList";
import useFetch from "../Hooks/useFetch";

const Home3 = () => {    
    const {data : blogs, isPending : isPending, err} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
        </div>
    );
}

export default Home3;