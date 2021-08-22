import { useEffect } from "react";
import { getVideoUrl } from "../api/api";
import { find } from "lodash";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../state";

export const useVideoUrl = (): void => {

  const dispatch = useDispatch();
  const { setSrc } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    getVideoUrl()
      .then((res) => {
        setSrc(find(res?.data, {format: 'mp4'})?.url)}
      )
      .catch(err => console.log(err));
  }, [setSrc])

}