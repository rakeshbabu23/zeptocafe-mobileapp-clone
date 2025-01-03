import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../store/userContext';
import CartItems from './CartItems';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" color="#000" size={24} />
      </Pressable>
      <Text style={styles.headerText}>Your Cart</Text>
    </View>
  );
};

const CartHeader = () => {
  return (
    <View style={styles.cartHeader}>
      <Text style={styles.cartHeaderText}>Items</Text>
    </View>
  );
};
const Cart = () => {
  const {cartItems} = useContext(UserContext);
  return (
    <View style={{position: 'relative'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />]
      <Header />
      <View style={styles.cartItemsContainer}>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CartItems item={item} />}
          ListHeaderComponent={CartHeader}
          contentContainerStyle={{borderRadius: 10}}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    height: responsiveHeight(8),
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveHeight(2),
    elevation: 3,
    //position: 'relative',
  },
  headerText: {
    color: '#000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-SemiBold',
    borderRadius: 10,
  },
  cartHeader: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: responsiveHeight(1),
  },
  cartHeaderText: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    letterSpacing: 0,
    paddingHorizontal: responsiveWidth(3),
  },
  cartItemsContainer: {
    backgroundColor: '#fff',
    margin: responsiveHeight(1),
    elevation: 2,
    borderRadius: 10,
    height: 'auto',
  },
});
