import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const navigatePost = () => {
    navigate(`/postDetails/${id}`);
  };
  return (
    <div className="p-2 md:py-6 text-center rounded-md bg-blue-950 text-slate-50 flex flex-col ">
      <div className="space-y-3">
        <p className="font-bold">Post ID : {id}</p>
        <h1>
          <span className="font-bold">Title :</span> {title}
        </h1>
        <h3>
          <span className="font-bold">Post about :</span> {body.slice(0, 40)}
          ...
        </h3>
      </div>
      <div className="p-3 mt-auto w-full">
        <Link to={`/postDetails/${id}`}>
          <button className="w-full bg-lime-900 p-2 rounded-lg">
            {' '}
            Post Details
          </button>
        </Link>
        <button
          onClick={navigatePost}
          className="mt-2 w-full bg-lime-900 p-2 rounded-lg"
        >
          Navigate Post
        </button>
      </div>
    </div>
  );
};

export default Post;
