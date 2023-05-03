const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>the dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"red",
                    borderRadius: '20px',
                    padding:'8px'
                }}>Create Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;