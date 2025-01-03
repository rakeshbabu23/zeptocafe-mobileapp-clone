import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UserContext} from '../../store/userContext';
import {Colors} from '../../utils/Colors';

const ItemCount = ({item, style, emptyTextColor, countStyle}) => {
  const {cartItems, setCartItems} = useContext(UserContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (cartItems.length > 0) {
      const itemCount1 = cartItems.find(cartItem => cartItem?.id === item?.id);
      setCount(itemCount1?.count ? itemCount1.count : 0);
    } else {
      setCount(0);
    }
  }, [cartItems]);
  if (count < 1) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setCartItems(prevState => [...prevState, {...item, count: 1}]);
        }}
        style={[style]}>
        <Text
          style={{
            color: emptyTextColor || Colors.white,
            fontSize: responsiveFontSize(2),
            fontFamily: 'Poppins-SemiBold',
          }}>
          Add
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[countStyle, styles.itemCountContainer]}>
        <TouchableOpacity
          onPress={() => {
            const findItem = cartItems.find(i => i.id === item.id);
            if (findItem) {
              // Increment the count of the existing item
              setCartItems(prevState =>
                prevState.map(i =>
                  i.id === item.id ? {...i, count: i.count + 1} : i,
                ),
              );
            } else {
              // Add the item to the cart if it doesn't exist
              setCartItems(prevState => [...prevState, {...item, count: 1}]);
            }
          }}>
          <Ionicons name="add" color="#fff" size={22} />
        </TouchableOpacity>

        <Text style={styles.itemCountText}>{count}</Text>
        <TouchableOpacity
          style={styles.actions}
          onPress={() => {
            setCartItems(
              prevState =>
                prevState
                  .map(i => (i.id === item.id ? {...i, count: i.count - 1} : i))
                  .filter(i => i.count > 0), // Remove items with count 0
            );
          }}>
          <Ionicons name="remove" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
};

export default ItemCount;

const styles = StyleSheet.create({
  itemCountContainer: {
    width: '50%',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.pink,
    backgroundColor: Colors.pink,
    flexDirection: 'row',
    //elevation: 5,
    paddingHorizontal: responsiveWidth(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  actions: {
    transform: [{translateY: 1}],
  },
  itemCountText: {
    fontSize: responsiveHeight(2),
    color: '#fff',
    //fontWeight:'semibold',
    fontFamily: 'Poppins-SemiBold',
    transform: [{translateY: 2}],
  },
});
