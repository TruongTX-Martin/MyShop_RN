import { AsyncStorage } from 'react-native';
import Constant from '../utils/Constant';

const getUser = async () => {
  try {
    const arrayCart = await AsyncStorage.getItem(Constant.ASYN_USER);
    if (arrayCart !== null) {
      return JSON.parse(arrayCart);
    }
    return [];
  } catch (error) {
    return [];
  }
};

export default getUser;
