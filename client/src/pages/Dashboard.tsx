import React from 'react';
import Sidenav from '../components/sidenav';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import RightNav from '../components/RightNav';
import Recomendation from '../components/Recomendation';

const Dashboard = () => {
  return (
    <div className='bg-dark h-screen w-screen flex'>
      <Sidenav />
      <div className='main mt-5 w-full'>
        <div className='headline flex justify-between w-full'>
          <div className='search flex bg-bglight py-2 px-5 rounded-full items-center w-72'>
            <AiOutlineSearch className='text-white mr-5' />
            <input
              placeholder='search'
              type='text'
              className='bg-transparent outline-none text-white w-full'
            />
          </div>

          {/* end */}
          <div className='user flex items-center'>
            <h1 className='text-white'>Yaksh Chopra</h1>
            <div className='user-icon'>
              <FaUserCircle className='text-white text-3xl ml-5' />
            </div>
          </div>
        </div>
        <hr className='opacity-20 mt-3'></hr>

        {/* mood selector */}
        <div className='mood px-10'>
          <h1 className='text-2xl text-white my-8'>Mood Selector</h1>
          <div className='boxes flex flex-wrap gap-5 justify-center align-middle'>
            <div className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-1'>
              <span className='text-white text-xl'>Energetic</span>
            </div>
            <div className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-2'>
              <span className='text-white text-xl'>Happy</span>
            </div>
            <div className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-3'>
              <span className='text-white text-xl'>Angry</span>
            </div>
            <div className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-4'>
              <span className='text-white text-xl'>Fear</span>
            </div>
            <div className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-5'>
              <span className='text-white text-xl'>Sad</span>
            </div>
            <div className='box w-60 h-20 cursor-pointer items-center justify-center flex rounded-xl box-6'>
              <span className='text-white text-xl'>Lonely</span>
            </div>
          </div>
        </div>
        {/* mood selesctor end */}
        <div className='list px-10 mt-12'>
          <h1 className='text-2xl text-white my-8'>Recomendations</h1>
          <div className=''>
            <Recomendation
              name='Lorem Ipsum'
              singer='Imagine Dragons'
              link=''
            />
            <Recomendation
              name='Lorem Ipsum'
              singer='Imagine Dragons'
              link=''
            />
          </div>
        </div>
      </div>
      <RightNav />
    </div>
  );
};

export default Dashboard;
