import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ItemCount from '../../components/general/ItemCount';
import {UserContext} from '../../store/userContext';
import {Colors} from '../../utils/Colors';

const CartItems = ({item}) => {
  const {cartItems, setCartItems} = useContext(UserContext);
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.itemImageContainer}>
        <Image
          style={styles.itemImage}
          source={item.image}
          resizeMode="contain"></Image>
      </View>
      <View style={styles.itemNameContainer}>
        <Text style={styles.itemName} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
      <View style={styles.itemCountContainer}>
        <Pressable
          style={styles.actionContainer}
          onPress={() => {
            setCartItems(
              prevState =>
                prevState
                  .map(i => (i.id === item.id ? {...i, count: i.count - 1} : i))
                  .filter(i => i.count > 0), // Remove items with count 0
            );
          }}>
          <Text style={styles.actionText}>-</Text>
        </Pressable>
        <View style={styles.countContainer}>
          <Text style={styles.actionText}>{item.count}</Text>
        </View>

        <Pressable
          style={styles.actionContainer}
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
          <Text style={styles.actionText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>₹{item.count * item.price}</Text>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(0.5),
    //backgroundColor: 'red',
    paddingVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveWidth(2),
    height: responsiveHeight(10),
    borderRadius: 10,
    //elevation: 2,
  },
  itemImageContainer: {
    //backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    height: '100%',

    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    borderRadius: 20,
  },
  itemNameContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: '',
    width: '42%',
    //backgroundColor: '#fff',
    paddingLeft: responsiveWidth(2),
    paddingTop: responsiveHeight(1),
  },
  itemName: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  itemCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    width: '25%',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 7,
    overflow: 'hidden',
    borderColor: Colors.pink,
    // backgroundColor: 'blue',
  },
  actionContainer: {
    width: '30%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightPink,
  },
  countContainer: {
    width: '40%',
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  priceContainer: {
    width: '17%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  priceText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
});
