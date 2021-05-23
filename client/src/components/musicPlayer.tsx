import React, { useState, useRef, useEffect } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import SpotifyWebApi from "spotify-web-api-js";
//import Q from "q";

const MusicPlayer = () => {
  const [url_song, setUrlSong] = useState("");
  var spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(
    "BQC1wl0AgZcbvGaW2Ivrh7knapIonItYFOZ8jDNDIjn3qkMsYHP2iYpkMye3XO_TW-2ljS2pWnPw9TDd3ZXBeBeY25SIbe2pXBwNTxnCVbDayHuurf_s-Bt4tQrABSh_oVYPRqeTc9AtjwLVuGejdnWztesqjgZHrCW5FRo"
  );
  console.log(spotifyApi);

  spotifyApi.getArtistAlbums(
    "43ZHCT0cAZBISjO8DG9PnE",
    function (err: any, data: any) {
      if (err) console.error(err);
      else console.log("Artist albums", data);
    }
  );

  //spotifyApi.setPromiseImplementation(Q);

  // get Elvis' albums, using Promises through Promise, Q or when
  spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
    function (data) {
      console.log("Artist albums", data);
    },
    function (err) {
      console.error(err);
    }
  );

  spotifyApi.getArtistAlbums(
    "43ZHCT0cAZBISjO8DG9PnE",
    { limit: 10, offset: 20 }
    // function (err, data) {
    //   if (err) console.error(err);
    //   else console.log("Artist albums", data);
    // }
  );
  //spotifyApi.setPromiseImplementation(Q);
  // using Promises through Promise, Q or when - get Elvis' albums in range [20...29]
  spotifyApi
    .getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", { limit: 10, offset: 20 })
    .then(
      function (data) {
        //console.log(data.items[0].id);
        var t = spotifyApi.getAlbumTracks(String(data.items[0].id));
        t.then(function (result) {
          const temp = result.items[0].preview_url;
          console.log(url_song);
        });
        //console.log(t.then.name);
        //console.log(data.items[0].external_urls.spotify);
      },
      function (err) {
        console.error(err);
      }
    );

  const song = [
    {
      url: url_song,
      image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      name: "First Song",
      author: "First",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/offisca-2d74b.appspot.com/o/Believer%20Mp3%20Imagine%20Dragons.mp3?alt=media&token=7daec363-ece9-4bb5-a470-bbb59e219b00",
      image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      name: "2 Song",
      author: "abc",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/offisca-2d74b.appspot.com/o/Believer%20Mp3%20Imagine%20Dragons.mp3?alt=media&token=7daec363-ece9-4bb5-a470-bbb59e219b00",
      image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      name: "3 Song",
      author: "def",
    },
  ];
  console.log(song);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recents, setRecents] = useState(song);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef = useRef(new Audio(song[trackIndex].url));
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

  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

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

    audioRef.current = new Audio(song[trackIndex].url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
    setRecents([...recents, song[trackIndex]]);
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
        <h1 className="text-white mt-4 text-lg">{song[trackIndex].name}</h1>
        <p className="text-sm mt-1 text-white">{song[trackIndex].author}</p>
        <div className="playerContainer mt-0">
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="slider h-1 p-0 w-full"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />

          <div className="actions text-white flex text-3xl justify-center gap-6 my-5">
            <MdSkipPrevious
              className="cursor-pointer"
              onClick={() => toPrevTrack()}
            />
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

            <MdSkipNext
              onClick={() => toNextTrack()}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
