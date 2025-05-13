import { AudioPlayer } from "expo-audio";
import { createContext, FC, ReactNode, useContext, useState } from "react";

type AudioPlayerContextType = {
  player: AudioPlayer | undefined;
  setPlayer: React.Dispatch<React.SetStateAction<AudioPlayer | undefined>>;
};

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const AudioPlayerProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [player, setPlayer] = useState<AudioPlayer | undefined>(undefined);

  return (
    <AudioPlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => {
  const audioPlayerContext = useContext(AudioPlayerContext);
  if (!audioPlayerContext) {
    throw new Error(
      "useAudioPlayerContext must be used within an AudioPlayerProvider"
    );
  }
  return audioPlayerContext;
}