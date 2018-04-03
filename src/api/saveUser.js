import { AsyncStorage } from 'react-native';
import Constant from '../utils/Constant';

const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem(Constant.ASYN_USER, JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export default saveUser;
