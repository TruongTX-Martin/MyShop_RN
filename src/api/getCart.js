import { AsyncStorage } from 'react-native';
import Constant from '../utils/Constant';

const getCart = async () => {
  try {
    const arrayCart = await AsyncStorage.getItem(Constant.ASYN_CART);
    if (arrayCart !== null) {
      return JSON.parse(arrayCart);
    }
    return [];
  } catch (error) {
    return [];
  }
};

export default getCart;
