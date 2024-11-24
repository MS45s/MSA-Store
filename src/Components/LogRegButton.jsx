import LoginLogo from '../Assets/enter1.webp';
import RegisterLogo from '../Assets/user1.webp';
const LoginRegister = () => {
    return (
        <>
            <div className="flex hover:cursor-pointer items-center">
                <div className="flex mr-5 gap-2">
                    <div className="flex items-center">
                        <img src={LoginLogo} alt="Enter logo" className='w-5 h-auto mr-2' /><span>Login</span>
                    </div>
                    <div className="flex items-center">
                        <img src={RegisterLogo} alt="Register logo" className='w-5 h-auto mr-1' /><span>Register</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginRegister;