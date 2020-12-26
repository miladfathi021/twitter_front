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
    },

    update (data) {
        return axios.patch(env.BaseUrl + '/tweets/' + data.id, {
            body: data.body
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('api_token')
            }
        });
    },

    delete (data) {
        return axios.delete(env.BaseUrl + '/tweets/' + data, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('api_token')
            }
        });
    }
}

export default TweetService;