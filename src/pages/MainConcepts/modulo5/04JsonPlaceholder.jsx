import React, { useEffect, useState } from 'react';
import { PostForm } from '../../../components/postForm';
import { api } from '../../../services/api';

const JsonPlaceholder = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ShowJson();
  }, []);

  const ShowJson = async () => {
    setLoading(true);
    const json = await api.getAllPosts();
    setPost(json);
    setLoading(false);
    console.log(json);
  };

  const handleAddPost = async (title, body) => {
    console.log('clicou');
    const json = await api.addNewPost(title, body, 1);
    console.log(json);
    if (json.id) {
      alert('Post added');
    } else {
      alert('Something bad happened');
    }
  };

  return (
    <div>
      {loading && <div>Carregando...</div>}

      <PostForm onPost={handleAddPost} />

      {!loading && post.length > 0 && (
        <>
          <h1>Total de Posts: {post.length}</h1>
          {post.map((item, index) => (
            <div className="my-4" key={index}>
              <h5 className="font-bold">Título: {item.title}</h5>
              <small>Corpo: {item.body}</small>
              <br />
            </div>
          ))}
        </>
      )}
      {!loading && post.length === 0 && (
        <>
          <div>Não há posts para serem exibidos.</div>
        </>
      )}
    </div>
  );
};

export default JsonPlaceholder;
