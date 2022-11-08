import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer kK6B0Rj-wNMr9ix3eHQCBjeM_kL5iPDqC-6c8o5kqo_5rq-5aoSQWkuH6gwcEUt4v8FeTlZ9V8EYdwtVuDspZHIRSo0kdhNJhpXMiCafe03jZhU2hHhdSV6OMB5pY3Yx',
  },
});
