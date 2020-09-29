'use strict';

import axios from "axios";
import env from "../../../env";

const AuthService = {
    login (data) {
        return axios.post(env.BaseUrl + '/login', data)
    }
}


export default AuthService;