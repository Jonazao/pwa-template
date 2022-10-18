import React from 'react';
import { useGetPostsQuery } from '../services/auth';

export default function PostExample() {
  const postResponse = useGetPostsQuery();
  return (
    <div>
      <h1>Post React Tool Kit Query</h1>
      {postResponse.isLoading ? (
        <h3> Loading...</h3>
      ) : (
        postResponse.data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })
      )}
    </div>
  );
}
