import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UserContext} from '../../store/userContext';
import {Colors} from '../../utils/Colors';

const ItemDescription = ({item, index}) => {
  return (
    <View style={styles.descriptionContainer}>
      {/* <ShowTime time={item[index].timeToDeliver} /> */}
      <View style={styles.itemAndServeContainer}>
        <Text numberOfLines={3} style={styles.itemName}>
          {item.name}
        </Text>
        <Text style={styles.servesText}>2 serves</Text>
      </View>

      <Text style={styles.priceText}>₹{item.price}</Text>
    </View>
  );
};
const SearchItem = ({item}) => {
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
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setShowBottomSheet({
          state: true,
          content: item[0],
        });
      }}>
      <Image
        resizeMode="cover"
        source={item.image}
        style={styles.imageBackground}
      />
      <ItemDescription item={item} index={0} />

      <View
        style={{
          width: '100%',
          flex: 1,

          overflow: 'hidden',
          justifyContent: 'center',
        }}>
        {count < 1 ? (
          <Pressable
            style={styles.addToCartContainer}
            onPress={() => {
              setCartItems(prevState => [...prevState, {...item, count: 1}]);
            }}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </Pressable>
        ) : (
          <View style={styles.itemCountContainer}>
            <Pressable
              style={styles.actionContainer}
              onPress={() => {
                setCartItems(
                  prevState =>
                    prevState
                      .map(i =>
                        i.id === item.id ? {...i, count: i.count - 1} : i,
                      )
                      .filter(i => i.count > 0), // Remove items with count 0
                );
              }}>
              <Ionicons name="remove" color={Colors.pink} size={20} />
            </Pressable>

            <View style={styles.countContainer}>
              <Text style={styles.actionText}>{count}</Text>
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
                  setCartItems(prevState => [
                    ...prevState,
                    {...item, count: 1},
                  ]);
                }
              }}>
              <Ionicons name="add" color={Colors.pink} size={22} />
            </Pressable>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2.2,
    height: responsiveHeight(35),
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: responsiveWidth(5),
    marginBottom: responsiveHeight(1),
    //elevation: 1,
  },
  imageBackground: {
    width: '100%',
    height: responsiveHeight(20),
    position: 'relative',

    borderRadius: 20,
    overflow: 'hidden',
  },

  actions: {
    transform: [{translateY: 1}],
    zIndex: 50,
  },
  itemCountText: {
    fontSize: responsiveHeight(2),
    color: '#fff',
    //fontWeight:'semibold',
    fontFamily: 'Poppins-SemiBold',
    transform: [{translateY: 2}],
  },
  descriptionContainer: {
    flex: 0.7,
    paddingVertical: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: responsiveWidth(1),
  },
  timeContainer: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    width: responsiveWidth(10),
    height: responsiveHeight(1.5),
    alignItems: 'center',
    gap: 5,
    borderRadius: 3,
  },
  timeText: {
    fontSize: responsiveHeight(1),
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  itemAndServeContainer: {
    flexDirection: 'column',
    // gap: 2,
  },
  itemName: {
    fontSize: responsiveHeight(1.5),
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  servesText: {
    fontSize: responsiveHeight(1.5),
    color: '#ccc',
    fontFamily: 'Poppins-Regular',
  },
  priceText: {
    fontSize: responsiveHeight(1.5),
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
  addToCartContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: responsiveWidth(1),
    paddingVertical: responsiveHeight(1),
    borderRadius: 5,
    elevation: 3,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.pink,
  },
  addToCartText: {
    fontSize: responsiveHeight(1.5),
    color: Colors.pink,
    fontFamily: 'Poppins-SemiBold',
  },
  itemCountContainer: {
    width: '100%',
    flexDirection: 'row',
    //backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: Colors.pink,
    borderRadius: 5,
    overflow: 'hidden',
  },
  actionContainer: {
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
    paddingVertical: responsiveHeight(0.8),
    backgroundColor: Colors.lightPink,
  },
  actionText: {
    fontSize: responsiveHeight(1.8),
    color: Colors.pink,
    fontFamily: 'Poppins-SemiBold',
  },
  countContainer: {
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
    paddingVertical: responsiveHeight(0.8),
    backgroundColor: '#fff',
  },
});
