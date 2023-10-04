import { useEffect, useState } from "react";
import News from "./News";

const Main = () => {

    const [news,setNews] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return (
        <div>
           <h1 className="text-2xl font-medium">Dragon News Home</h1>
           {
            news.map(news => <News key={news._id} news={news}></News>)
           }
        </div>
    );
};

export default Main;