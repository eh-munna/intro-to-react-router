import React from 'react';
import { Link } from 'react-router-dom';

const FriendDetails = ({ friend }) => {
  const { name, username, id } = friend;
  return (
    <div className="p-2 md:py-6 text-center rounded-md bg-blue-950 text-slate-50 flex flex-col ">
      <div className="space-y-3">
        <h1>{name}</h1>
        <h3>username : {username}</h3>
      </div>
      <div className="p-3 mt-auto w-full">
        <button className="bg-lime-900 p-2 rounded-lg">
          <Link to={`/friendsdetails/${id}`}> Details</Link>
        </button>
      </div>
    </div>
  );
};

export default FriendDetails;
