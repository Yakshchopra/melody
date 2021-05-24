import React, { useState } from "react";
import { AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { useStateValue } from "../store/stateProvider.js";

const Recomendation = (props: { name: string; singer: string; link: any }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="flex bg-bglight rounded-xl mt-5  justify-between items-center px-10 py-4">
      <div className="flex items-center">
        <AiFillHeart
          onClick={() => setLike(!like)}
          className={
            like
              ? "text-xl text-purpleselected cursor-pointer"
              : "text-xl text-white cursor-pointer"
          }
        />
        <span className="text-white text-lg ml-5 w-64">{props.name}</span>
      </div>

      <span className="text-white text-sm w-56">{props.singer}</span>

      <AiFillPlayCircle
        // onClick={() => handleSong()}
        className="text-3xl cursor-pointer text-primary"
      />
    </div>
  );
};

export default Recomendation;
