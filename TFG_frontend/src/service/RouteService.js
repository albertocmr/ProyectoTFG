import axios from "axios";

const ROUTE_BASE_REST_API_URL = "http://localhost:8080/api/routes";

class RouteService{

    getAllRoutes(){
        return axios.get(ROUTE_BASE_REST_API_URL);
    }

    createRoute(route){
        return axios.post(ROUTE_BASE_REST_API_URL, route);
    }

    getRouteById(routeId){
        return axios.get(ROUTE_BASE_REST_API_URL + '/' + routeId);
    }

    updateRoute(routeId, route) {
        return axios.put(ROUTE_BASE_REST_API_URL + '/' + routeId, route)
    }

    deleteRoute(routeId){
        return axios.delete(ROUTE_BASE_REST_API_URL + '/' + routeId);
    }

}

const routeService = new RouteService();
export default routeService;