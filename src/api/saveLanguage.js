import { AsyncStorage } from 'react-native';
import Constant from '../utils/Constant';

const saveLanguage = async (language) => {
  try {
    await AsyncStorage.setItem(Constant.ASYN_LANGUAGE, language);
  } catch (error) {
    console.log(error);
  }
};

export default saveLanguage;
