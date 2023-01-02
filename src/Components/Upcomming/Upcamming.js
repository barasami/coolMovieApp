import axios from "axios";

const Url='https://new-movie-trailers-api-daily-update-best-upcoming-movies.p.rapidapi.com/'

const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'new-movie-trailers-api-daily-update-best-upcoming-movies.p.rapidapi.com'
    }
};
  

export const upcommungMovies=async()=>{

    try {
        const allData=await axios.get(Url,options)
        return allData
        
    } catch (error) {
        console.log(error);
        
    }
}