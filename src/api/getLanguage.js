import { AsyncStorage } from 'react-native';
import Constant from '../utils/Constant';

const getLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem(Constant.ASYN_LANGUAGE);
    if (language !== null) {
      return language;
    }
    return '';
  } catch (error) {
    return '';
  }
};

export default getLanguage;
