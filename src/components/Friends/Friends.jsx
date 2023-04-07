import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
  const friendsData = useLoaderData();
  console.log(friendsData);
  return <div>these are my friends</div>;
};

export default Friends;
