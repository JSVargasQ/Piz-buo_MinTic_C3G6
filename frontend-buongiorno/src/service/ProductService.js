import {BASE_URL} from "@/main";

export default class ProductService {

    getProducts() {
        return fetch(BASE_URL + '/producto/').then(res => res.json()).then(d => d.data);
    }

}
