import { Dispatch } from "redux";
import getUserFetch from "../../services/get-user-fetch";
import { getUserReducer } from "../userSlice";

export const getUser = async (dispatch: Dispatch<any>) => {
  dispatch(
    getUserReducer({
      isLoading: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await getUserFetch();
  if (isSuccess) {
    dispatch(
      getUserReducer({
        isLoading: false,
        email: data.email,
        nickname: data.nickname,
        first_name: data.first_name,
        last_name: data.last_name,
        date_joined: data.date_joined,
        get_short_name: data.get_short_name,
      })
    );
    
    return true;
  } else {
    dispatch(
      getUserReducer({
        isLoading: false,
        errors,
        networkError,
      })
    );
    return false;
  }
};
