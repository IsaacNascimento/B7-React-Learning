import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const api = {
  getAllPosts: async () => {
    /* AXIOS WAY */
    const res = await await axios.get(`${baseUrl}/posts`);
    return res.data;
    /* NO AXIOS WAY */
    // let response = await fetch(`${baseUrl}/posts`);
    // return await response.json();
  },
  addNewPost: async (title, body, userId) => {
    /* AXIOS WAY */
    const res = await axios.post(`${baseUrl}/posts`, {
      title,
      body,
      userId,
    });
    return res.data;
    /* NO AXIOS WAY */
    // const response = await fetch(`${baseUrl}/posts`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title,
    //     body,
    //     userId,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const json = await response.json();
    // return json;
  },
};
