import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  AuthState,
  resetState,
  //   selectCurrentToken,
  setCredentials,
  selectCurrentToken,
  //   selectCurrentRefreshToken,
  selectCurrentRefreshToken,
} from 'src/store/slices/authSlice';

const useAuth = () => {
  const token = useAppSelector(selectCurrentToken);
  const refreshToken = useAppSelector(selectCurrentRefreshToken);

  const dispatch = useAppDispatch();

  const handleAddCredentails = (credentails: AuthState) => {
    dispatch(setCredentials(credentails));
  };

  const handleResetAuth = () => {
    dispatch(resetState());
    localStorage.removeItem('persist:root');
  };
  return { token, refreshToken, handleAddCredentails, handleResetAuth };
};

export default useAuth;
