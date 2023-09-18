import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <h1 ><Link  to='/'>LOGO</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/write">write</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Header;