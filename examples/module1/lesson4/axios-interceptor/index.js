import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.headers['request-startTime'] = new Date().getTime();
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  const currentTime = new Date().getTime()      
  const startTime = response.config.headers['request-startTime']    

  response.headers['request-duration'] = currentTime - startTime  

  console.log(response.headers['request-duration']);

  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
