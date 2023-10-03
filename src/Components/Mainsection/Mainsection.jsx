import Leftside from "./LeftSide/Leftside";
import Rightsidenav from "./RightsideNav/Rightsidenav";

const Mainsection = () => {
    return (
        <div>

            <div className="grid  gap-4 mt-4 grid-cols-4">

                <div >
                    <Leftside></Leftside>
                </div>
                <div className="col-span-2 border">
                    main
                </div>
                <div >
                    <Rightsidenav></Rightsidenav>
                </div>

            </div>

        </div>
    );
};

export default Mainsection;