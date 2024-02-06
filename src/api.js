import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: `https://nc-news-smxe.onrender.com/api`,
  });

  export const getUsers = () => {
    return ncNewsApi.get(`/users`);
  };



  
  