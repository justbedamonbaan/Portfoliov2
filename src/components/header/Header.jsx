import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/about">About</Link></button>
            <button><Link to="/projects">Projects</Link></button>
        </div>

    );


}