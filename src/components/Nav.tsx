import { LuBadgeDollarSign } from 'react-icons/lu';
import logo from '../assets/logo.png'

const Nav = ({coin} : {coin : number}) => {

    return (
        <nav className="bg-red-100">

            <div className='flex justify-between items-center container mx-auto'>
                <img src={logo} alt="" />

                <ul className='flex gap-4 items-center'>
                    <li>Home</li>
                    <li>ficture</li>
                    <li>team</li>
                    <li>lio</li>
                </ul>

                <h2 className='font-bold text-3xl text-black flex gap-2 items-center'>
                    <LuBadgeDollarSign />
                    {coin}
                </h2>
            </div>

        </nav>
    );
};

export default Nav;