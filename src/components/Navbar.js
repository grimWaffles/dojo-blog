import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>the dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor:"red",
                    borderRadius: '20px',
                    padding:'8px'
                }}>Create Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;