import React from "react";
import "./search.css"
import { Card } from "../Card/Card";
import { IGiphy } from "../../services/gifTYPE";
import { gifSearchService } from "../../services/gifAPI";

export const SearchBar = () => {

    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [search, setSearch] =  React.useState<IGiphy[]>([]);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            gifSearchService.getSearch(searchTerm,8).then((data) => setSearch(data))
        } catch (error) {
            console.log('clg error ', error)
        }
    }

    // console.log('clg gif searhc', search)
    // console.log('clg search term ', searchTerm)
    return (
        <div className="searchbar-container">
            <div className="card-container__title">
                <h2 className="home-text">🔎Lookup Giphys🔎</h2>
            </div>
        <form className="searchbar-form" onSubmit={(e) =>
        e.preventDefault()
    }>
            <div className="searchbar-input-box">

            <input type="text" placeholder="Enter Giphys" className="searchbar-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            <div className="">
                <button onClick={handleSubmit} type="submit" className="button searchbar-btn">Search</button>
            </div>
        </form>
        
        <div className="search-results">
        {search && search.map((trend,indx) => {
                return (
                    <Card id={trend.id} images={trend.images}  />
                    )
                })}
        </div>
    </div>
    )
}
