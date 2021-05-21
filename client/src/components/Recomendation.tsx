import React from 'react';
import { AiFillHeart, AiFillPlayCircle } from 'react-icons/ai';

const Recomendation = (props: { name: string; singer: string; link: any }) => {
  return (
    <div className='flex bg-bglight rounded-xl mt-5 text-white justify-between items-center px-10 py-4'>
      <div className='flex items-center'>
        <AiFillHeart className='text-2xl cursor-pointer' />
        <span className='text-white text-xl ml-5'>{props.name}</span>
      </div>

      <span className='text-white text-sm'>{props.singer}</span>
      <a href={props.link}>
        <AiFillPlayCircle className='text-3xl cursor-pointer text-primary' />
      </a>
    </div>
  );
};

export default Recomendation;
