import {useEffect, useState} from "react";
import {calculateCurrentPercent} from "../utils/calculateCurrentPercent";

export const useBarColor = (current: number, duration: number): number => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(calculateCurrentPercent(current, duration))
  }, [current, duration]);

  return percent;
}