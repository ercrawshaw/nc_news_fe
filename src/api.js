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

export const patchCommentVote = (article_id, inc_vote) => {
  return ncNewsBaseUrl.patch(`/api/comments/${article_id}`, {inc_votes: inc_vote})
};


export const patchArticleVote = (article_id, inc_votes) => {
  return ncNewsBaseUrl.patch(`/api/articles/${article_id}`, {inc_votes: inc_votes})
  .then((result) => {
    return result.data.votes;
  })
};


export const postNewComment = (article_id, input) => {
  return ncNewsBaseUrl.post(`/api/articles/${article_id}/comments`, input)
  .then((result) => {
    return result.data.comment
  })
};




  
  