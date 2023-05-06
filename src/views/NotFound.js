import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry! Page not found</h2>
            <br />
            <Link to="/">Go back to homepage</Link>
        </div>
    );
}

export default NotFound;