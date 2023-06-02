import { RegisterSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

// export const RegisterUser = async (dispatch, user) => {
//   try {
//     const res = await publicRequest.post("/auth/register", user);
//     dispatch(RegisterSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

export const RegisterUser =
  (user) =>
  async (dispatch) => {
    try {
      const res = await publicRequest.post("/auth/register", user);
    dispatch(RegisterSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  }

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
