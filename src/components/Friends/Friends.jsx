import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendDetails from '../FriendDetails/FriendDetails';

const Friends = () => {
  const friendsData = useLoaderData();
  return (
    <div>
      <h2 className="my-8 text-center text-blue-600 font-bold text-xl">
        I have {friendsData.length} friends, and they are
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {friendsData.map((friend) => (
          <FriendDetails key={friend.id} friend={friend}></FriendDetails>
        ))}
      </div>
    </div>
  );
};

export default Friends;
