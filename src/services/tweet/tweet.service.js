'use strict';

import axios from "axios";
import env from "../../../env";


const TweetService = {
    tweets () {
        return axios.get(env.BaseUrl + '/tweets', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('api_token')
            }
        });
    },

    tweetsNextPage (url) {
        return axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('api_token')
            }
        });
    },

    create (data) {
        return axios.post(env.BaseUrl + '/tweets', {
            body: data
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('api_token')
            }
        })
    }
}

export default TweetService;