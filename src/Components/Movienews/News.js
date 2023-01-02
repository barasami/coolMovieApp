import axios from "axios";

const Url='https://movies-news1.p.rapidapi.com/movies_news/recent'

const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'movies-news1.p.rapidapi.com'
    }
};
  


export const getmovieNews=async()=>{
    try {
        const movieNews=await axios.get(Url,options)
        return movieNews
        
    } catch (error) {
        console.log(error);
        
    }
}