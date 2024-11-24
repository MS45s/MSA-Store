import CartIcon from '../Assets/cart.webp';
const Cart = () => {
    return (
        <>
        <div className="flex items-center hover:cursor-pointer">
            <img src={CartIcon} alt="Cart icon logo" className="mr-2 w-5" /><span className='mr-3'>Cart</span>
        </div>
        </>
    )
};
export default Cart;