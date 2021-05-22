import React, { useState } from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

const song = [
  {
    url: '../assets/songs/testSong.mp3',
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    name: 'First Song',
    author: 'First',
  },
  {
    url: '../assets/songs/testSong.mp3',
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    name: 'Second Song',
    author: 'First',
  },
  {
    url: '../assets/songs/testSong.mp3',
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    name: 'Third Song',
    author: 'First',
  },
  {
    url: '../assets/songs/testSong.mp3',
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    name: 'Last Song',
    author: 'First',
  },
];

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [songs, setSongs] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const player = document.getElementById('audio_sample');

  return (
    <div className='bg-bglight h-80 w-full rounded-xl mt-5 p-2'>
      <div className='image bg-dark h-1/2 w-full rounded-xl overflow-hidden'>
        <img
          src='https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
          alt='song_thumbnail'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='px-2'>
        <h1 className='text-white mt-4 text-lg'>Lorem Ipsum</h1>
        <p className='text-sm mt-1 text-white'>Imagine Dragons</p>
        <div className='playerContainer my-4 px-2'>
          <div className='w-full total bg-white rounded-full relative'>
            {/* <audio controls id='audio_sample' src= /> */}

            <div className='circle h-3 w-3 rounded-full bg-white absolute top-0 transform -translate-y-1/2 left-0 -translate-x-1/2'></div>
          </div>
          <div className='actions text-white flex text-3xl justify-center gap-6 my-5'>
            <MdSkipPrevious className='cursor-pointer' />
            {playing ? (
              <AiFillPauseCircle
                onClick={() => {
                  setPlaying(!playing);
                }}
                className='text-primary text-4xl cursor-pointer'
              />
            ) : (
              <AiFillPlayCircle
                onClick={() => setPlaying(!playing)}
                className='text-primary text-4xl cursor-pointer'
              />
            )}

            <MdSkipNext className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
