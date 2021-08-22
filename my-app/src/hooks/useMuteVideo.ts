import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../state";

export const useMuteVideo = (): {
  muted: boolean,
  handleMuteState: () => void
} => {
  const state = useSelector((state: State) => state.settings);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (state.volume === 0) {
      setMuted(true);
    } else {
      setMuted(false);
    }
  }, [state.volume])

  const handleMuteState = (): void => {
    setMuted(!muted);
  }

  return { muted, handleMuteState }
}