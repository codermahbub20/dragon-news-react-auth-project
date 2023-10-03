
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import add1 from "../../../assets/bg.png"

const Rightsidenav = () => {
    return (
        <div>


            <div className="p-4 rounded-lg border">
                <h1 className="text-2xl font-medium">Log In</h1>
                <Link>
                    <button className="btn btn-outline w-full  mt-2">
                        <FaGoogle></FaGoogle>
                        Google
                    </button>
                </Link>
                <Link>
                    <button className="btn btn-outline w-full mt-2">
                        <FaGithub></FaGithub>
                        Github
                    </button>
                </Link>

            </div>

            <h1 className="text-2xl mt-4 font-medium">Find Us On</h1>
            <div className="p-4 mt-3 rounded-lg border">
                <button className="btn  btn-outline w-full  mt-2">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button className="btn btn-outline w-full mt-2">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
                <button className="btn btn-outline w-full mt-2">
                    <FaInstagram></FaInstagram>
                    Instagram
                </button>
            </div>

            <div className="p-4 mt-4 bg-[#F3F3F3] space-y-3 rounded-lg border">
                <h1 className="text-2xl mt-4 font-medium">Q - Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            <img src={add1} alt="" />
        </div>
    );
};

export default Rightsidenav;