import axios from "axios";

const URL='https://imdb-top-100-movies.p.rapidapi.com/premiummovies'

const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};
export const getdata=async()=>{
    try {
        const data= await axios.get(URL,options)

        return data
    } catch (error) {
        console.log(error);
        
    }
}