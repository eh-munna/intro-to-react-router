import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendInfo = () => {
  const friend = useLoaderData();
  const { name, id, phone, username, website, email } = friend;

  return (
    <div>
      <div className="my-12 p-2 md:py-6 text-center rounded-md bg-blue-950 text-slate-50 flex flex-col ">
        <div className="space-y-3">
          <h1>ID : {id}</h1>
          <h3>username : {username}</h3>
          <h2>Name : {name}</h2>
          <p>Phone : {phone}</p>
          <p>Email : {email}</p>
          <p>Website : {website}</p>
        </div>
      </div>
    </div>
  );
};

export default FriendInfo;
