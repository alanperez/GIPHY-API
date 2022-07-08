import React from "react"
import "./home.css"
import { SearchBar } from "../components/SearchBar/Search";
import { Card } from "../components/Card/Card";
import { gifTrendingService } from "../services/gifAPI";
import { IGiphy } from "../services/gifTYPE"


export default function Home() {

    const [gifs, setGifs]= React.useState<IGiphy[]>([]);

    React.useEffect(() => {
        gifTrendingService.getTrending().then((data) => setGifs(data));
    },[])

    // console.log(gifs)
    return (
        <div className="home-container">

            {/* featured / trending cards */}
            <div className="card-container__title">
                <h2 className="home-text">🔥Trending Giphys🔥</h2>
            </div>
            <div className="home-trending-card">
                {/* Cards */}
                
                {gifs.map((featured, indx) => {
                    return (
                        <Card key={indx} id={featured.id} images={featured.images} />
                    )
                })}

            </div>
            < SearchBar />
        </div>
    )

}