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
};

export const getCommentsById = (articleId) => {
  return ncNewsBaseUrl.get(`/api/articles/${articleId}/comments`).then((response) => {
    return response.data.comments
  })
};

export const patchCommentVote = (article_id) => {
  return ncNewsBaseUrl.patch(`/api/comments/${article_id}`, {inc_votes: 1})
};






  
  