import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="my-12 p-2 md:py-6 text-center rounded-md bg-blue-950 text-slate-50 flex flex-col ">
        <div className="space-y-3">
          <h1 className="font-bold text-lg"> {title}</h1>
          <h3>{body}</h3>
          <button
            onClick={goBack}
            className="mt-2 w-full bg-lime-900 p-2 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
