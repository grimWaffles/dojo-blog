import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data, isPending, err } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const deleteBlog = (id) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE",
        }).then(res => {
            history.push("/")
        }).catch(err => {

        })
    }

    return (
        <div className="blog-details">
            <h2>Blog Details for Blog-{id}</h2>
            <br /><br />
            {isPending && <div>Loading...</div>}
            {data &&
                <div>
                    <h2>{data.title}</h2>
                    <p>Written By {data.author}</p>
                    <p>{data.body}</p>
                </div>}

            <button onClick={()=>deleteBlog(id)}>Delete Blog</button>
        </div>
    );
}

export default BlogDetails;