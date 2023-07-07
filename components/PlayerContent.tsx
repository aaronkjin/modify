"use client";

import { Song } from "@/types";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";
import useSound from "use-sound";

import usePlayer from "@/hooks/usePlayer";

import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";
import Slider from "./Slider";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  // Muted when volume is 0, otherwise not muted
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  /* Find the next song to play after the current song */
  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    // Edge case: if there's no next song, play from the beginning of the playlist
    if (!nextSong) {
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong);
  };

  /* Find the previous song to play if reverse track button is pressed */
  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    // Edge case: if there's no previous song, play from the end of the playlist
    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(previousSong);
  };

  const [play, { pause, sound }] = useSound(songUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  });

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        h-full
      "
    >
      <div
        /* Mobile view for playing a song */
        className="
          flex
          w-full
          justify-start
        "
      >
        <div
          className="
            flex
            items-center
            gap-x-4
          "
        >
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div
        className="
          flex
          md:hidden
          col-auto
          w-full
          justify-end
          items-center
        "
      >
        <div
          /* Play/pause button */
          onClick={handlePlay}
          className="
            h-10
            w-10
            flex
            items-center
            justify-center
            rounded-full
            bg-white
            p-1
            cursor-pointer
          "
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div
        /* Desktop view for playing a song */
        className="
          hidden
          h-full
          md:flex
          justify-center
          items-center
          w-full
          max-w-[722px]
          gap-x-6
        "
      >
        <AiFillStepBackward
          /* Reverse track button */
          onClick={onPlayPrevious}
          size={30}
          className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
          "
        />
        <div
          /* Play/pause button */
          onClick={handlePlay}
          className="
            flex
            items-center
            justify-center
            h-10
            w-10
            rounded-full
            bg-white
            p-1
            cursor-pointer
          "
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          /* Skip track button */
          onClick={onPlayNext}
          size={30}
          className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
          "
        />
      </div>

      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            className="cursor-pointer"
            size={34}
          />
          <Slider value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
