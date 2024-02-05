import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { ProfileState, setProfileData, selectCurrentProfile } from 'src/store/slices/profileSlice';

const useProfile = () => {
  const profile: ProfileState = useAppSelector(selectCurrentProfile);

  const dispatch = useAppDispatch();

  const handleSetProfileData = (profileData: any) => {
    dispatch(setProfileData(profileData));
  };

  return { profile, handleSetProfileData };
};

export default useProfile;
