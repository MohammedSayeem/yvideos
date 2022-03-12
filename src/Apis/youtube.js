import axios from 'axios';

const KEY = 'AIzaSyDqX2tfJfCu10adE7x7pn0kF2e2MHRy1s0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});