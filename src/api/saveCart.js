import { AsyncStorage } from 'react-native';
import Constant from '../utils/Constant';

const saveCart = async (arrayCart) => {
  try {
    console.log('save array cart succcess:' + JSON.stringify(arrayCart));
    await AsyncStorage.setItem(Constant.ASYN_CART, JSON.stringify(arrayCart));
  } catch (error) {
    console.log(error);
  }
};

export default saveCart;
