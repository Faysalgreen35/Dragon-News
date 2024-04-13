 
import logo from '../../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center' >
            <img src={logo} className='mx-auto' alt="" />
            <p className="font-poppins"> Journalism Without Fear or Favour</p>
            <p className="font-poppins"> {moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;