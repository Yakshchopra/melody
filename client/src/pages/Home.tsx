import React from 'react';
import logo_small from '../assets/logo_small.png';
import heroIllustration from '../assets/heroIllustration.png';

const Home = () => {
  return (
    <div className='bg-dark h-screen w-screen'>
      <div className='nav flex items-center w-screen justify-between px-16'>
        <img className='h-28' src={logo_small} alt='Logo' />
        <div className='flex items-center'>
          <p className='cursor-pointer text-lg text-white ml-14'>Home</p>
          <p className='cursor-pointer text-lg text-white ml-14'>About</p>
          <p className='text-lg text-white ml-14'>
            <button className='bg-primary px-3 py-2 rounded-lg text-lg transform transition-transform hover:-translate-y-1'>
              Login | Signup
            </button>
          </p>
        </div>
      </div>
      <div className='main flex items-center mt-6'>
        <div className='ml-44 w-1/2'>
          <h1 className='text-8xl gradient-text font-bold'>Melody</h1>
          <p className='mt-1 text-4xl gradient-text font-semibold'>
            Music made awesome
          </p>
          <button className='mt-8 bg-primary px-4 py-2 pt-3 text-white rounded-lg text-2xl transform transition-transform hover:-translate-y-1'>
            Get Started
          </button>
        </div>
        <div className='w-1/2'>
          <img
            className='w-8/12'
            draggable='false'
            src={heroIllustration}
            alt='Melody'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
