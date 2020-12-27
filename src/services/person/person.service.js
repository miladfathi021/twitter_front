'use strict';

import axios from "axios";
import env from "../../../env";


const PersonService = {
    get (username) {
        return axios.get(env.BaseUrl + '/' + username.data, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('api_token')
            }
        });
    }
}

export default PersonService;