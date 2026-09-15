import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav className="bg-red-100">

            <div className='flex justify-between container mx-auto'>
                <img src={logo} alt="" />

                <ul className='flex gap-4 items-center'>
                    <li>Home</li>
                    <li>ficture</li>
                    <li>team</li>
                    <li>lio</li>
                </ul>
            </div>

        </nav>
    );
};

export default Nav;