import axios from "axios";
import { IGiphy } from "./gifTYPE";
export const gifTrendingService = {
    async getTrending(): Promise<IGiphy[]> {
        let apikey = process.env.REACT_APP_API_KEY
        // const res = await giphyAPI.get(`/trending?api_key=${apikey}&limit=6&rating=g`);
        // console.log('clg res trend ', res )
        // return res;
        return axios.get(`https://api.giphy.com/v1/gifs/trending?&limit=4&rating=g`,
        {params: {api_key: apikey}})
        .then((res)=> res.data.data )
    }
}


export const gifSearchService = {
    async getSearch(searchQuery: string, limitQuery:number): Promise<IGiphy[]> {
        
        // https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en
        return axios.get('https://api.giphy.com/v1/gifs/search',
        {params: {
          api_key: 'Kal7Q1hcCswEKweR9Qm3V97mMwrcm2Mz',
          q:searchQuery,
          limit: limitQuery
        }, 
        })
        .then((res)=> res.data.data )
    }
}