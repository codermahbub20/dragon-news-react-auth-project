import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Marquee from "react-fast-marquee";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex">
                <button className="btn btn-secondary">Latest News</button>
                <Marquee speed={100} pauseOnHover = {true} className="text-2xl">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.......
                </Marquee>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;