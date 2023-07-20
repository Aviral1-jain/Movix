import axios from "axios";
const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmM1YWMyMjJhZGVhMmI5ODRjMTE2ZmNiYmMxZDdmOCIsInN1YiI6IjYyZDEzZjI1NjJmY2QzMDA1NTQ2MDA5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6PQQQa66Fp0XPSBeP_4p1lb1uYg9xDHM3JcuKbUld9U";

const headers={
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url,params) => {
    try{
        const {data}= await axios.get(BASE_URL + url, {
            headers,
            params
        })

        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}

