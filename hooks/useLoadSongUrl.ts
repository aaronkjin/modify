import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  // Edge case: no song
  if (!song) {
    return '';
  }

  // Remap to be more readable
  const { data: songData } = supabaseClient
    .storage
    .from('songs')
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLoadSongUrl;