import axios from "axios";

const NATURALPARK_BASE_REST_API_URL = "http://localhost:8080/api/natural_parks";

class NaturalParkService{

    getAllNaturalParks(){
        return axios.get(NATURALPARK_BASE_REST_API_URL);
    }

    createNaturalPark(naturalPark){
        return axios.post(NATURALPARK_BASE_REST_API_URL, naturalPark);
    }

    getNaturalParkById(naturalParkId){
        return axios.get(NATURALPARK_BASE_REST_API_URL + '/' + naturalParkId);
    }

    updateNaturalPark(naturalParkId, naturalPark) {
        return axios.put(NATURALPARK_BASE_REST_API_URL + '/' + naturalParkId, naturalPark)
    }

    deleteNaturalPark(naturalParkId){
        return axios.delete(NATURALPARK_BASE_REST_API_URL + '/' + naturalParkId);
    }

}

const naturalParkService = new NaturalParkService();
export default naturalParkService;