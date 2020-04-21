import jsnoPlaceHolderApi from "../apis/jsonPlaceHolderApi";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsnoPlaceHolderApi.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsnoPlaceHolderApi.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userids = _.uniq(_.map(getState().posts, "userId"));
  userids.map((id) => dispatch(fetchUser(id)));
};

// memoized function to fetch a uniq user for one single time
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsnoPlaceHolderApi.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
