import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div id="header">
            Header
            <Link to={"/about"}>About</Link>
        </div>
    )
}

export default Header