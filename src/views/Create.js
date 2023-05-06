import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('Blogs using inputs')
    const [author, setAuthor] = useState('yoshi')
    const [body, setBody] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dolor quo commodi totam eius, inventore soluta rerum temporibus veniam alias, eligendi libero reprehenderit laudantium harum illum recusandae. Fuga minima officiis numquam modi. Possimus quod repellat optio, sit neque ducimus enim laudantium saepe sint atque rerum harum mollitia veniam ipsam! Fugiat!')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault()

        const blog = { title, body, author }

        setIsPending(true)

        setTimeout(() => {
            fetch('http://localhost:8000/blogs',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(blog)
                })
                .then(res => {
                    setIsPending(false)
                    //history.go(-1);
                    history.push("/")
                }).catch(err => {

                })
        }, 2000);

        console.log('Button clicked', blog)
    }

    return (
        <div>
            <h2>Create a blog</h2><br />
            <form className="create" onSubmit={onSubmit}>
                <label>Title: </label>
                <input id="blog-title" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} required />

                <label>Author: </label>
                <select id="blog-author" value={author} onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                <label>Blog:</label>
                <textarea id="blog-body" value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default Create;