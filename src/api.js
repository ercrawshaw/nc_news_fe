import axios from "axios";

const ncNewsBaseUrl = axios.create({ baseURL: "https://nc-news-smxe.onrender.com"});

export const getArticles = () => {
    return ncNewsBaseUrl.get("/api/articles").then((response) => {
        return response.data.articles
    })
};

export const getArticlesById = (articleId) => {
  return ncNewsBaseUrl.get(`/api/articles/${articleId}`).then((response) => {
    return response.data
})
}





  
  