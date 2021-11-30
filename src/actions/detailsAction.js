import axios from "axios";
import { gameDetailsURL, gameScreenShotsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsURL(id));
  const gameScreenShotData = await axios.get(gameScreenShotsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: gameScreenShotData.data,
    },
  });
};
