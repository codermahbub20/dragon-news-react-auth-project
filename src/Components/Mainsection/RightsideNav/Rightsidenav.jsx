
import { FaGithub, FaGoogle } from "react-icons/fa";
const Rightsidenav = () => {
    return (
        <div className="p-4 rounded-lg border">
            <h1 className="text-2xl font-medium">Log In</h1>
            <button className="btn btn-outline w-full btn-secondary mt-2">
               <FaGoogle></FaGoogle>
                Button
            </button>
            <button className="btn btn-outline w-full mt-2">
               <FaGithub></FaGithub>
                Button
            </button>
        </div>
    );
};

export default Rightsidenav;