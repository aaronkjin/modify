import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    // Edge case: make sure only authenticated users can play music
    if (!user) {
      return authModal.onOpen();
    }

    // Play the song + the other songs in its respective playlist in the future
    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
}

export default useOnPlay;