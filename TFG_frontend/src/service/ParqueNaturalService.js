import axios from "axios";

const PARQUENATURAL_BASE_REST_API_URL = "http://localhost:8080/api/v1/parques-naturales";

class ParqueNaturalService{

    getAllParquesNaturales(){
        return axios.get(PARQUENATURAL_BASE_REST_API_URL);
    }

    createParqueNatural(parqueNatural){
        return axios.post(PARQUENATURAL_BASE_REST_API_URL, parqueNatural);
    }

    getParqueNaturalById(parqueNaturalId){
        return axios.get(PARQUENATURAL_BASE_REST_API_URL + '/' + parqueNaturalId);
    }

    updateParqueNatural(parqueNaturalId, parqueNatural) {
        return axios.put(PARQUENATURAL_BASE_REST_API_URL + '/' +parqueNaturalId,parqueNatural)
    }

    deleteParqueNatural(parqueNaturalId){
        return axios.delete(PARQUENATURAL_BASE_REST_API_URL + '/' + parqueNaturalId);

    }

}

const parqueNaturalService = new ParqueNaturalService();
export default parqueNaturalService;