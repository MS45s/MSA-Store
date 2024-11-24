import StoreLogo from '../Assets/logo arsip msa.webp';
import LoginRegister from './LogRegButton';
import '../CSS/Navbar.css';
import Cart from './CartIcon';
const Navbar = () => {
    return (
        <nav className="container-fluid flex p-2 justify-center gap-1 dark:bg-slate-600" id="navbar-msa" style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
            <div className="flex mr-5 items-center" id="search_bar_Msa_store">
                <img src={StoreLogo} className="hover: cursor-pointer" id="store-logo" alt="Logo store" style={{ width: '5rem' }} onClick={() => (window.location.href = '/')} />
                <input type="search" id="search-bar" className="h-full pl-10 text-sm text-gray-900 border-gray-300 bg-gray-50 focus:ring-blue-950 focus:border-blue-950 dark:placeholder-gray-400 dark:focus:ring-blue-950 dark:focus:border-blue-950" style={{ borderRadius: '8px 8px 8px 8px' }} placeholder="Search product..." />
                <button type="submit" id="search-button" className="h-full mr-5 text-white bg-blue-950 hover:bg-gray-200 hover:border-blue-950 border-2 border-blue-950 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 dark:bg-blue-950 dark:hover:bg-gray-200 dark:focus:ring-blue-800" style={{ borderRadius: '8px 8px 8px 8px' }}>Search</button>
            </div>
            <div className="flex gap-2" id='log_reg_cart_msa'>
                <Cart />
                <LoginRegister />
            </div>
        </nav>
    );
}
export default Navbar;