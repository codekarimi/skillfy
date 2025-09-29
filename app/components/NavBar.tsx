import {Link} from "react-router";
import { usePuterStore } from "~/lib/puter";


const Navbar = () => {
    
    const { isLoading, auth } = usePuterStore();
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">SKILLFY🚀</p>
            </Link>
           
            <button className="primary-button w-fit text-xl font-semibold" onClick={auth.signOut}><p>Log out</p></button>
            
        </nav>
    )
}
export default Navbar