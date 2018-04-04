import { AsyncStorage } from 'react-native';
import Constant from '../utils/Constant';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(Constant.ASYN_TOKEN);
    if (token !== null) {
      return token;
    }
    return '';
  } catch (error) {
    return '';
  }
};

export default getToken;
