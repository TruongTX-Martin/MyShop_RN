import { AsyncStorage } from 'react-native';
import Constant from '../utils/Constant';

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem(Constant.ASYN_TOKEN, token);
  } catch (error) {
    console.log(error);
  }
};

export default saveToken;
