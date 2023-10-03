import Header from "../Header/Header";
import Mainsection from "../Mainsection/Mainsection";
import Navbar from "../Navbar/Navbar";
import Marquee from "react-fast-marquee";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex bg-base-100 mt-4 shadow-lg">
                <button className="btn btn-secondary">Latest News</button>
                <Marquee speed={100} pauseOnHover = {true} className="text-2xl">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......
                </Marquee>
            </div>
            <Navbar></Navbar>
            <Mainsection></Mainsection>
        </div>
    );
};

export default Home;