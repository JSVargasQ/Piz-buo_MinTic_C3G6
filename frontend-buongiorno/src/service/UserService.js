import {BASE_URL} from "@/main";

export default class UserService {

    registerUser(data) {

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };

        return fetch(
            BASE_URL + '/userCreate/',
            requestOptions
        )
            .then(res => res.json())
            .then(d => {
                console.log(d);
                return d.data;
            });

    }

}
