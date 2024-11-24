import UsedItems from "../Components/UsedItems";
import Product from "../Components/Product";
import Category from "../Components/Category";
import Discount from "../Components/Discount";
import Warranty from "../Components/Warranty";
const NavbarExt = () => {
    return (
        <nav className="container-fluid bg-blue-950">
            <div className="flex justify-center">
                <ul className="font-medium flex p-2 gap-5">
                    <li className="hover:bg-gray-200 hover:text-black hover:rounded-lg transition all-300 rounded-lg p-2 text-white">
                        <a href={Product}>Product</a>
                    </li>
                    <li className="hover:bg-gray-200 hover:text-black hover:rounded-lg transition all-300 rounded-lg p-2 text-white">
                        <a href={Category}>Category</a>
                    </li>
                    <li className="hover:bg-gray-200 hover:text-black hover:rounded-lg transition all-300 rounded-lg p-2 text-white">
                        <a href={Discount}>Discount Items</a>
                    </li>
                    <li className="hover:bg-gray-200 hover:text-black hover:rounded-lg transition all-300 rounded-lg p-2 text-white">
                        <a href={UsedItems}>Used Items</a>
                    </li>
                    <li className="hover:bg-gray-200 hover:text-black hover:rounded-lg transition all-300 rounded-lg p-2 text-white">
                        <a href={Warranty}>Warranty Claim</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavbarExt;