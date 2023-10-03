import moment from 'moment';
import Logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="text-center mt-5">
            <img className="" src={Logo} alt="" />
            <p className="text-2xl text-gray-500">Journalism Without Fear or Favour</p>
            <p className='text-2xl font-medium'>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;