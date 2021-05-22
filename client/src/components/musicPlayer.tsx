import React, { useState, useRef, useEffect } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const song = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/offisca-2d74b.appspot.com/o/Believer%20Mp3%20Imagine%20Dragons.mp3?alt=media&token=7daec363-ece9-4bb5-a470-bbb59e219b00",
    image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    name: "First Song",
    author: "First",
  },
  // {
  //   url: "file:///C:/Users/Piyush%20Goel/Downloads/Believer%20Mp3%20Imagine%20Dragons.mp3",
  //   image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  //   name: "Second Song",
  //   author: "First",
  // },
  // {
  //   url: "file:///C:/Users/Piyush%20Goel/Downloads/Believer%20Mp3%20Imagine%20Dragons.mp3",
  //   image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  //   name: "Third Song",
  //   author: "First",
  // },
  // {
  //   url: "file:///C:/Users/Piyush%20Goel/Downloads/Believer%20Mp3%20Imagine%20Dragons.mp3",
  //   image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  //   name: "Last Song",
  //   author: "First",
  // },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef = useRef(new Audio(song[0].url));
  const intervalRef = useRef(0);
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage =
    duration < 100 ? `${(trackProgress / duration) * 100}%` : "0%";

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    });
  };
  //   intervalRef.current = setInterval(() => {
  //     if (audioRef.current.ended) {
  //       toNextTrack();
  //     } else {
  //       setTrackProgress(audioRef.current.currentTime);
  //     }
  //   });
  // };

  // const onScrub = (value) => {
  //   clearInterval(intervalRef.current);
  //   audioRef.current.currentTime = value;
  //   setTrackProgress(audioRef.current.currentTime);
  // };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(song.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < song.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(song[0].url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  return (
    <div className="bg-bglight h-80 w-full rounded-xl mt-5 p-2">
      <div className="image bg-dark h-1/2 w-full rounded-xl overflow-hidden">
        <img
          src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          alt="song_thumbnail"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-2">
        <h1 className="text-white mt-4 text-lg">Lorem Ipsum</h1>
        <p className="text-sm mt-1 text-white">Imagine Dragons</p>
        <div className="playerContainer my-4 px-2">
          <div className="w-full total bg-white rounded-full relative">
            {/* <audio controls id='audio_sample' src= /> */}

            <div className="circle h-3 w-3 rounded-full bg-white absolute top-0 transform -translate-y-1/2 left-0 -translate-x-1/2"></div>
          </div>
          <div className="actions text-white flex text-3xl justify-center gap-6 my-5">
            <MdSkipPrevious className="cursor-pointer" />
            {isPlaying ? (
              <AiFillPauseCircle
                onClick={() => setIsPlaying(false)}
                className="text-primary text-4xl cursor-pointer"
              />
            ) : (
              <AiFillPlayCircle
                onClick={() => setIsPlaying(true)}
                className="text-primary text-4xl cursor-pointer"
              />
            )}

            <MdSkipNext className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
