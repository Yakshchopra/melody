import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

const RecentlyPlayed = (props: { name: string; link: any }) => {
  return (
    <div className='flex bg-bglight rounded-xl mt-5 text-white justify-between items-center px-5 py-3'>
      <div className='flex items-center'>
        <span className='text-white text-md'>{props.name}</span>
      </div>

      <a href={props.link}>
        <AiFillPlayCircle className='text-3xl cursor-pointer text-primary' />
      </a>
    </div>
  );
};

export default RecentlyPlayed;
