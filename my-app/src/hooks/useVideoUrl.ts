import {useEffect, useState} from "react";
import {getVideoUrl} from "../api/api";
import {find} from "lodash";

export const useVideoUrl = (): string => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    getVideoUrl()
      .then((res) => {
        setUrl(find(res?.data, {format: 'mp4'})?.url)}
      )
      .catch(err => console.log(err));
  }, [])

  return url;
}