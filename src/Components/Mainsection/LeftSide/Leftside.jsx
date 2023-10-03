import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../assets/1.png"
import image2 from "../../../assets/2.png"
import image3 from "../../../assets/3.png"
import { FaCalendarWeek } from "react-icons/fa";
import moment from 'moment';

const Leftside = () => {


    const [categories, setCategory] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-medium">All Category</h1>
            <div>
                {
                    categories.map(category => <Link className="block text-gray-500 ml-4 mt-3 font-semibold font-Poppins" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
                }
            </div>

            <div className="mt-4">
                <img src={image1} alt="" />
                <h1 className="text-xl font-medium p-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex justify-between">
                    <p className="font-semibold">Sports</p>

                    <div className="flex space-x-2 text-gray-500">
                        <FaCalendarWeek className="mt-1"></FaCalendarWeek>
                        <p>{moment().format("MMMM D YYYY")}</p>
                    </div>
                </div>
            </div>

            <div className="mt-7">
                <img src={image2} alt="" />
                <h1 className="text-xl font-medium p-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex justify-between">
                    <p className="font-semibold">Sports</p>

                    <div className="flex space-x-2 text-gray-500">
                        <FaCalendarWeek className="mt-1"></FaCalendarWeek>
                        <p>{moment().format("MMMM D YYYY")}</p>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <img src={image3} alt="" />
                <h1 className="text-xl font-medium p-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex justify-between">
                    <p className="font-semibold">Sports</p>

                    <div className="flex space-x-2 text-gray-500">
                        <FaCalendarWeek className="mt-1"></FaCalendarWeek>
                        <p>{moment().format("MMMM D YYYY")}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Leftside;