
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import { FaGithub } from "react-icons/fa";
const RightSideNav = () => {
    return (
       <div>
         <div className="p-4 space-y-3 mb-5 ">
            <h1 className="mb-4">Login With</h1>
            <button className="btn btn-outline w-full">
            <FaGoogle />
               <span> Sigin in with Google</span>
            </button>
            <button className="btn btn-outline w-full">
            <FaGithub />
               <span> Sigin in with Github</span>
            </button>
        </div>
         <div className="p-4  mb-4">
            <h1 className="mb-4">Find Us On</h1>
            <a className="flex items-center text-lg border rounded-t-lg p-4" href="">
                <FaFacebook className="mr-4 text-xl"></FaFacebook><span>Facebook</span>
            </a>
            <a className="flex items-center text-lg border-x  p-4" href="">
                <FaTwitter className="mr-4 text-xl"></FaTwitter><span>Twitter</span>
            </a>
            <a className="flex items-center text-lg border rounded-b-lg p-4" href="">
                <FaInstagram className="mr-4 text-xl"></FaInstagram><span>Instagram</span>
            </a>
             
        </div>
                {/* -qzone */}
        <div className="p-4 space-y-3 mb-5 ">
            <h1 className="mb-4">Q-Zone</h1>
             <img src={qzone1} alt="" />
             <img src={qzone2} alt="" />
             <img src={qzone3} alt="" />
        </div>
       </div>
    );
};

export default RightSideNav;